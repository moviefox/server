if (process.env.NODE_ENV == 'development') {
  require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const app = express()
const { errorHandler } = require('./middlewares')
const PORT = process.env.PORT

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const routes = require('./routes')
app.use('/', routes)
app.use(errorHandler)
app.listen(PORT, () => {
  console.log('Server is listening on PORT ' + PORT)
})




