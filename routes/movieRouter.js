const router = require('express').Router()
const movieController = require('../controllers/movieController')

router.post('/', movieController.add)
router.delete('/', movieController.remove)


module.exports = router