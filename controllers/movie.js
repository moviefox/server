const axios = require('axios')

class MovieController {
  static getPopularMovies(req, res, next) {
    const url = process.env.TMDB_URL
    axios.get(url, {
      params: {
        api_key: process.env.TMDB_API_KEY,
        sort_by: "popularity.desc",
        page: +req.params.page || 1
      }
    })
      .then(movies => {
        movies = movies.data
        res.status(200).json(movies)
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = MovieController