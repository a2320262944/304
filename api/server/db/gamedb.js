const mongoose = require('mongoose')

var gameSchema = mongoose.Schema({
  E3: String,
  name: String,
  creator: String,
  developTool: String,
  description: String,
  price: String,
  DLC: String,
  CD: String
})

var gameModel = { Game: mongoose.model('Game', gameSchema) }

module.exports = gameModel
