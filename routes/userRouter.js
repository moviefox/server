const router = require('express').Router()
const userController = require('../controllers/userController')

router.post('/gSign', userController.gSign)
router.post('/register', userController.register)
router.get('/movie', userController.getMovie)

module.exports = router