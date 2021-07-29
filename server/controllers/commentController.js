const {Comment} = require('../models/models')
const ApiError = require('../error/ApiError');

class CommentController {
    async create(req, res) {
        const {name} = req.body
        const type = await Comment.create({name})
        return res.json(type)

    }

    async getAll(req, res) {
        const comments = await Comment.findAll()
        return res.json(comments)
    }
}


module.exports = new CommentController()