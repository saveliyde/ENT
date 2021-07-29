const ApiError = require("../error/ApiError")
const { User } = require("../models/models")
const bcrypt = require('bcrypt')

const generateJwt = (id, login, email) => {
    return jwt.sign(
        {id, login, email},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {login, password, email} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate1 = await User.findOne({where: {email}})
        if (candidate1) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const candidate2 = await User.findOne({where: {login}})
        if (candidate2) {
            return next(ApiError.badRequest('Пользователь с таким login уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({login, email, password: hashPassword})
        const token = generateJwt(user.id, user.login, user.email)
        return res.json({token})
    }

    async login(req, res) {
        const {login, password} = req.body
        const user = await User.findOne({where: {login}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.login, user.email)
        return res.json({token})
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.login, req.user.email)
        return res.json({token})
    }
}


module.exports = new UserController()