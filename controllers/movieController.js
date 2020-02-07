const { Movie, MovieUser } = require('../models')
const axios = require('axios')

class movieController {

  static add(req, res, next) {
    // console.log(req.body);
    Movie.findOrCreate({
      where: {
        title: req.body.title,
        year: req.body.year,
        plot: req.body.plot,
        poster: req.body.poster
      }
    })
      .then(data => {
        // console.log(data[0].id, 'ini data');
        // // res.status(200).json(data)
        return MovieUser.findOrCreate({
          where: {
            UserId: req.currentUserId,
            MovieId: data[0].id
          }
        })
          .then(data => {
            res.status(200).json(data)
          })
          .catch(err => {
            next(err)
          })
      })
  }

  static detail(req, res) {
    let omdb = process.env.OMDB
    // let tmdb = process.env.TMDB
    let title = req.body.title

    axios({
      method: 'get',
      url: `http://www.omdbapi.com/?t=${title}&apikey=${omdb}`
    })
      .then(({ data }) => {
        // console.log(data);

        res.status(200).json(data)
      })
      .catch(err => {
        // console.log(err);

        res.status(500).json(err)
      })
  }

  static search(req, res) {
    // let omdb = process.env.OMDB
    let tmdb = process.env.TMDB
    let title = req.body.title

    axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/search/movie?api_key=${tmdb}&query=${title}`
    })
      .then(({ data }) => {
        // console.log(data);

        res.status(200).json(data)
      })
      .catch(err => {
        // console.log(err);
        res.status(500).json(err)
      })

  }

  static popular(req, res, next) {
    const page = req.params.page
    axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.TMDB}`,
      params: {
        page
      }
    })
      .then(movies => {
        res.status(200).json(movies.data)
      })
      .catch(err => {
        next(err)
      })
  }

  static remove(req, res, next) {
    MovieUser.destroy({
      where: {
        UserId: req.currentUserId,
        MovieId: req.params.id
      }
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = movieController