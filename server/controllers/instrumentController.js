const {Instrument} = require('../models/models')
const ApiError = require('../error/ApiError');

class InstrumentController {
    async create(req, res) {
        const {name} = req.body
        const type = await Instrument.create({name})
        return res.json(type)

    }

    async getAll(req, res) {
        const instruments = await Instrument.findAll()
        return res.json(instruments)
    }
}

module.exports = new InstrumentController()