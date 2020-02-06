const router = require('express').Router()
const movieRoutes = require('./movie')

router.use('/movies', movieRoutes)
module.exports = router