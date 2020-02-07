const router = require('express').Router()
const userRouter = require('./userRouter')
const movieRouter = require('./movieRouter')

router.use('/user', userRouter)
router.use('/movie', movieRouter)

module.exports = router