const { User, Movie } = require('../models')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

class userController {

  static gSign(req, res) {
    let payload
    client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID
    })
      .then(ticket => {
        payload = ticket.getPayload();
        console.log(payload, 'isi payload');
        return User.findOne({
          where: {
            email: payload.email
          }
        })
      })
      .then(userData => {

        if (!userData) {
          return User.create({
            name: payload.given_name,
            email: payload.email,
            password: process.env.PWD
          })
        }
        else {
          return userData
        }
      })
      .then(user => {
        const token = jwt.sign({ id: user.id }, process.env.SECRET)
        const name = payload.given_name;
        const pic = payload.picture
        res.status(200).json({ token, name, pic })
      })

      .catch(err => {
        res.status(500).json(err)

      })
  }

  static register(req, res) {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static getMovie(req, res) {
    let user_id = req.body.user
    User.findAll({
      include: [Movie],
      where: {
        id: user_id
      }
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

 
}

module.exports = userController