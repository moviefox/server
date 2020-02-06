if (process.env.NODE_ENV == 'development') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const PORT = process.env.PORT
const routes = require('./routes')

app.use('/', routes)
app.listen(PORT, () => {
  console.log('Server is listening on PORT ' + PORT)
})




