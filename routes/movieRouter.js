const router = require('express').Router()
const movieController = require('../controllers/movieController')
const { authenticated, authorized } = require('../middlewares')

router.get('/popular/:page', movieController.popular)
router.get('/bioskop/:loc', movieController.bioskop)
router.get('/search/:page', movieController.search)
router.post('/detail', movieController.detail)

router.use(authenticated)
router.post('/', movieController.add)
router.use('/:id', authorized)
router.delete('/:id', movieController.remove)
module.exports = router