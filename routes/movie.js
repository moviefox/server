const router = require('express').Router()
const { MovieController } = require('../controllers')

router.get('/popular/:page', MovieController.getPopularMovies)
module.exports = router