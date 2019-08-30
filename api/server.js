const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const routeUser = require('./server/routes/User.js')
const routeGame = require('./server/routes/Game.js')
const compression = require('compression')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(compression({ threshold: 0 }))
app.use('/api', routeUser)
app.use('/api', routeGame)

app.use(function (req, res, next) {
  var err = new Error('This page not found')
  err.status = 404
  next(err)
})

app.listen(process.env.PORT || 3000)
