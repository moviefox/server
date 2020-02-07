const router = require('express').Router()
const movieController = require('../controllers/movieController')

router.post('/', movieController.add)
router.get('/popular/:page', movieController.popular)
router.get('/bioskop/:loc', movieController.bioskop)
router.get('/search/:page', movieController.search)
router.get('/detail', movieController.detail)
router.delete('/:id', movieController.remove)
module.exports = router