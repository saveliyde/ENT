const Router = require('express')
const router = new Router()
const instrumentController = require('../controllers/instrumentController')

router.post('/', instrumentController.create)
router.get('/', instrumentController.getAll)

module.exports = router