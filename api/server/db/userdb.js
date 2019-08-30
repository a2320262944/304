const mongoose = require('mongoose')
const config = require('config-lite')

mongoose.connect(config.mongodb, { useNewUrlParser: true })

mongoose.Promise = global.Promise
var db = mongoose.connection
db.on('error', console.error.bind(console, 'Connect error'))
db.once('open', function () {
  console.log('Mongodb started successfully')
})

var userSchema = mongoose.Schema({
  email: String,
  password: String,
  recheck: String,
  token: String,
  create_time: Date
})

var model = { User: mongoose.model('User', userSchema) }

module.exports = model
