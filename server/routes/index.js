const Router = require('express')
const router = new Router()
const authourRouter = require('./authorRoutes')
const commentRouter = require('./commentRoutes')
const genreRouter = require('./genreRoutes')
const instrumentRouter = require('./instrumentRoutes')
const sheetsRouter = require('./sheetsRoutes')
const userRouter = require('./userRoutes')

router.use('/user', userRouter)
router.use('/author', authourRouter)
router.use('/sheets', sheetsRouter)
router.use('/instrument', instrumentRouter)
router.use('/genre', genreRouter)
router.use('/comment', commentRouter)

module.exports = router