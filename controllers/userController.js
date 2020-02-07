const { User, Movie } = require('../models')
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

class userController {

  static gSign(req, res, next) {
    let payload
    client.verifyIdToken({
      idToken: req.headers.token,
      audience: process.env.CLIENT_ID
    })
      .then(ticket => {
        payload = ticket.getPayload();
        return User.findOne({
          where: {
            email: payload.email
          }
        })
      })
      .then(userData => {
        if (!userData) {
          return User.create({
            username: payload.name,
            email: payload.email,
            password: process.env.PWD
          })
        }
        else {
          return userData
        }
      })
      .then(user => {
        const token = jwt.sign({ id: user.id, email: user.email, username: user.username }, process.env.SECRET)
        const name = payload.name;
        const pic = payload.picture
        res.status(200).json({ token, name, pic })
      })

      .catch(err => {
        next(err)
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
    let user_id = req.currentUserId
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