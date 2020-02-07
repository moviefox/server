const router = require('express').Router()
const { MovieController } = require('../controllers')

router.get('/popular/:page', MovieController.getPopularMovies)
router.get('/search/:page', MovieController.searchMovie)
module.exports = router