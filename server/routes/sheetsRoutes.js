const Router = require('express')
const router = new Router()
const sheetsController = require('../controllers/sheetsController')

router.post('/', sheetsController.create)
router.get('/', sheetsController.getAll)
router.get('/:id', sheetsController.getOne)

module.exports = router