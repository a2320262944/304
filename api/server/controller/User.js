const model = require('../db/userdb.js')
const moment = require('moment')
const objectIdToTimestamp = require('objectid-to-timestamp')
const createToken = require('../middleware/createToken.js')
const sha1 = require('sha1')

const Login = (req, res) => {
  let userLogin = new model.User({
    email: req.body.email,
    password: sha1(req.body.password),
    token: createToken(this.email)
  })
  model.User.findOne({ email: userLogin.email }, (err, doc) => {
    if (err) console.log(err)
    if (!doc) {
      console.log('User does not exist.')
      res.json({
        info: false
      })
    } else if (userLogin.password === doc.password) {
      console.log('Login succeeded.')
      var name = req.body.email
      res.json({
        success: true,
        email: doc.email,
        time: moment(objectIdToTimestamp(doc._id))
          .format('YYYY-MM-DD HH:mm:ss'),
        token: createToken(name)
      })
    } else {
      console.log('Incorrect password')
      res.json({
        success: false
      })
    }
  })
}

const Register = (req, res) => {
  let userRegister = new model.User({
    email: req.body.email,
    password: sha1(req.body.password),
    recheck: req.body.recheck,
    token: createToken(this.email)
  })
  userRegister.create_time = moment(objectIdToTimestamp(userRegister._id))
    .format('YYYY-MM-DD HH:mm:ss')
  model.User.findOne({
    email: (userRegister.email)
      .toLowerCase()
  }, (err, doc) => {
    if (err) console.log(err)
    if (doc) {
      res.json({
        success: false
      })
    } else {
      userRegister.save(err => {
        if (err) console.log(err)
        console.log('register success')
        res.json({
          success: true
        })
      })
    }
  })
}

const Users = (req, res) => {
  model.User.find({}, (err, users) => {
    if (err) console.log(err)
    res.send(users)
  })
}

const searchEmail = (req, res) => {
  model.User.find({ email: { $regex: req.params.email } }, (err, user) => {
    if (err) {
      res.json(err)
    }
    res.send(user)
  })
}

module.exports = { Login, Register, Users, searchEmail }
