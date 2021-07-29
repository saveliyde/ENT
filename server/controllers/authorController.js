const {Author} = require('../models/models')
const ApiError = require('../error/ApiError');

class AuthorController {
    async create(req, res) {
        const {name} = req.body
        const type = await Author.create({name})
        return res.json(type)

    }

    async getAll(req, res) {
        const authors = await Author.findAll()
        return res.json(authors)
    }
}

module.exports = new AuthorController()