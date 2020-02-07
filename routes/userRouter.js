const router = require('express').Router()
const userController = require('../controllers/userController')
const { authorized, authenticated } = require('../middlewares')

router.post('/gSign', userController.gSign)
router.post('/register', userController.register)

router.use(authenticated)
router.get('/movie', userController.getMovie)

module.exports = router