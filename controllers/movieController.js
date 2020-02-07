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
    let tmdb = process.env.TMDB
    let title = req.body.title
    let detail 
    
    axios({
      method: 'get',
      url: `http://www.omdbapi.com/?t=${title}&apikey=${omdb}`
    })
    .then(({ data }) => {
      detail = data
      // console.log(data.imdbID);
      let imdb = data.imdbID
      
      return axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${imdb}?api_key=${tmdb}&language=en-US&append_to_response=videos`
      })
    })
    .then(({data}) =>{
      console.log('masuk detail', data.videos.results[0].key);
      
      detail.trailer =  `https://www.youtube.com/watch?v=${data.videos.results[0].key}`
      res.status(200).json(detail)
      
    })
    .catch(err => {
      // console.log(err);

      res.status(500).json(err)
    })
  }

  static bioskop(req, res, next){
    axios({
      method: 'get',
      url: ` https://rest.farzain.com/api/special/bioskop/bioskop.php`,
      params:{
        id: req.params.loc,
        apikey: process.env.BIOSKOP
      }
    })
      .then(({ data }) => {
        // console.log(data);

        res.status(200).json(data)
      })
      .catch(next)
  }

  static search(req, res, next) {
    // let omdb = process.env.OMDB
    let tmdb = process.env.TMDB
    let title = req.query.title
    let page = req.params.page
    axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/search/movie`,
      params: {
        page,
        api_key: tmdb,
        query: title,
        append_to_response: 'videos'
      }
    })
      .then(({ data }) => {
        // console.log(data);

        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
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