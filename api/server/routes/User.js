const express = require('express')
const router = express.Router()

const User = require('../controller/User')

router.post('/', User.Login)
router.post('/register', User.Register)
router.get('/users', User.Users)
router.get('/searchEmail/:email', User.searchEmail)

module.exports = router
