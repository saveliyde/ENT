const uuid = require('uuid')
const path = require('path')
const {Sheets} = require('../models/models')
const ApiError = require('../error/ApiError')

class SheetsController {
    async create(req, res, next) {
        try{
            const {title, authorId, genreId, userId, description} = req.body
            const {link} = req.files
            let fileName = uuid.v4() + ".pdf"
            link.mv(path.resolve(__dirname, '..', 'static', fileName))

            const sheets = await Sheets.create({title, authorId, genreId, description, userId, link: fileName})

            return res.json(sheets)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {authorId, genreId, instrumentId, userId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let sheets;
        let idArray = new Array()
        if (userId){ idArray.push(userId) }
        if (authorId){ idArray.push(authorId) }
        if (genreID){ idArray.push(genreId) }
        if (instrumentId){ idArray.push(instrumentId) }
        sheets = await Sheets.findandCountAll({where:{idArray}, limit, offset})
        /*if (!authorId && !genreId && !instrumentId && !userId) {
            sheets = await Sheets.findAndCountAll({limit, offset})
        }
        if (authorId && !genreId && !instrumentId && !userId) {
            sheets = await Sheets.findAndCountAll({where:{authorId}, limit, offset})
        }
        if (!authorId && genreId && !instrumentId && !userId) {
            sheets = await Sheets.findAndCountAll({where:{genreId}, limit, offset})
        }
        if (authorId && genreId && !instrumentId && !userId){
            sheets = await Sheets.findAndCountAll({where:{genreId, authorId}, limit, offset})
        }
        if (!authorId && !genreId && instrumentId && !userId){
            sheets = await Sheets.findAndCountAll({where:{instrumentId}, limit, offset})
        }`
        if (authorId && !genreId && instrumentId && !userId){
            sheets = await Sheets.findAndCountAll({where:{authorId, instrumentId}, limit, offset})
        }
        if (!authorId && genreId && instrumentId && !userId){
            sheets = await Sheets.findAndCountAll({where:{genreId, instrumentId}, limit, offset})
        }
        if (authorId && genreId && instrumentId && !userId) {
            sheets = await Sheets.findAndCountAll({where:{genreId, authorId, instrumentId}, limit, offset})
        }
        
        if (!authorId && !genreId && !instrumentId && userId) {
            sheets = await Sheets.findAndCountAll({where:{userId}, limit, offset})
        }
        if (authorId && !genreId && !instrumentId && userId) {
            sheets = await Sheets.findAndCountAll({where:{authorId, userId}, limit, offset})
        }
        if (!authorId && genreId && !instrumentId && userId) {
            sheets = await Sheets.findAndCountAll({where:{genreId, userId}, limit, offset})
        }
        if (authorId && genreId && !instrumentId && userId){
            sheets = await Sheets.findAndCountAll({where:{genreId, authorId, userId}, limit, offset})
        }
        if (!authorId && !genreId && instrumentId && userId){
            sheets = await Sheets.findAndCountAll({where:{instrumentId, userId}, limit, offset})
        }
        if (authorId && !genreId && instrumentId && userId){
            sheets = await Sheets.findAndCountAll({where:{authorId, instrumentId, userId}, limit, offset})
        }
        if (!authorId && genreId && instrumentId && userId){
            sheets = await Sheets.findAndCountAll({where:{genreId, instrumentId, userId}, limit, offset})
        }
        if (authorId && genreId && instrumentId && userId) {
            sheets = await Sheets.findAndCountAll({where:{genreId, authorId, instrumentId, userId}, limit, offset})
        }*/

        return res.json(sheets)
    }


    async getOne(req, res) {
        const {id} = req.params
        const sheets = await Sheets.findOne({where: {id}})
        return res.json(sheets)
    }

}

module.exports = new SheetsController()