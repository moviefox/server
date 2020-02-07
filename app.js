require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const router = require('./routes')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const cors = require('cors')
app.use(cors())
app.use('/', router)

app.listen(port, () => console.log(`on port ${port}!`))