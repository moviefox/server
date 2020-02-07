const router = require('express').Router()
const movieController = require('../controllers/movieController')

router.post('/', movieController.add)
router.delete('/:id', movieController.remove)
router.get('/popular', movieController.popular)
router.get('/search', movieController.search)
router.get('/detail', movieController.detail)



module.exports = router