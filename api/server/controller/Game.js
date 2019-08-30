const cmodel = require('../db/gamedb.js')

const Games = (req, res) => {
  cmodel.Game.find({}, (err, games) => {
    if (err) console.log(err)
    res.send(games)
  }).sort({ 'E3': -1 })
}

const addGame = (req, res) => {
  let game = new cmodel.Game(req.body)
  game.save()
    .then(() => {
      res.status(200).json({ 'game': 'game is added successfully' })
    })
    .catch(() => {
      res.status(400).send('unable to save to database')
    })
}

const delGame = (req, res) => {
  cmodel.Game.findOneAndRemove({ _id: req.params.id }, err => {
    if (err) console.log(err)
    res.json({
      success: true
    })
  })
}

const editGame = (req, res) => {
  let id = req.params.id
  cmodel.Game.findById(id, (err, game) => {
    if (err) {
      res.json(err)
    }
    res.json(game)
  })
}

const updateGame = (req, res) => {
  cmodel.Game.findById(req.params.id, (err, game) => {
    if (!game) {
      res.status(err).send('data is not found')
    } else {
      game.E3 = req.body.E3
      game.name = req.body.name
      game.creator = req.body.creator
      game.developTool = req.body.developTool
      game.description = req.body.description
      game.price = req.body.price
      game.DLC = req.body.DLC
      game.CD = req.body.CD
      game.save().then(() => {
        res.json('Update complete')
      })
        .catch(() => {
          res.status(err).send('unable to update the database')
        })
    }
  })
}

const searchE3 = (req, res) => {
  cmodel.Game.find({ E3: { $regex: req.params.E3 } }, (err, game) => {
    if (err) {
      res.json(err)
    }
    res.send(game)
  })
}

const searchName = (req, res) => {
  cmodel.Game.find({ name: { $regex: req.params.name } }, (err, game) => {
    if (err) {
      res.json(err)
    }
    res.send(game)
  })
}

const searchCreator = (req, res) => {
  cmodel.Game.find({ creator: { $regex: req.params.creator } }, (err, game) => {
    if (err) {
      res.json(err)
    }
    res.send(game)
  })
}

const searchTool = (req, res) => {
  cmodel.Game.find({ developTool: { $regex: req.params.developTool } }, (err, game) => {
    if (err) {
      res.json(err)
    }
    res.send(game)
  })
}

const searchDLC = (req, res) => {
  cmodel.Game.find({ DLC: { $regex: req.params.DLC } }, (err, game) => {
    if (err) {
      res.json(err)
    }
    res.send(game)
  })
}

module.exports = { Games, addGame, editGame, updateGame, delGame, searchE3, searchName, searchCreator, searchTool, searchDLC }
