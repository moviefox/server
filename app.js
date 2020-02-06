if (process.env.NODE_ENV == 'development') {
  require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const routes = require('./routes')

app.use('/', routes)
app.listen(PORT, () => {
  console.log('Server is listening on PORT ' + PORT)
})




