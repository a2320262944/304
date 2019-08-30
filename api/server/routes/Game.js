const express = require('express')
const router = express.Router()

const Game = require('../controller/Game')

router.get('/games', Game.Games)
router.post('/addGame', Game.addGame)
router.delete('/delGame/:id', Game.delGame)
router.get('/editGame/:id', Game.editGame)
router.put('/updateGame/:id', Game.updateGame)
router.get('/searchE3/:E3', Game.searchE3)
router.get('/searchName/:name', Game.searchName)
router.get('/searchCreator/:creator', Game.searchCreator)
router.get('/searchTool/:developTool', Game.searchTool)
router.get('/searchDLC/:DLC', Game.searchDLC)

module.exports = router
