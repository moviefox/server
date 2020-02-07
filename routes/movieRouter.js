const router = require('express').Router()
const movieController = require('../controllers/movieController')

router.post('/', movieController.add)
router.delete('/', movieController.remove)
router.get('/popular', movieController.popular)


module.exports = router