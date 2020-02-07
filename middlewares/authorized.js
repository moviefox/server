const {MovieUser} = require('../models')

module.exports=
  function (req, res, next) {
    let pk = req.params.id

    MovieUser.findOne({
      where:{
        MovieId:pk
      }
    })
    .then(data =>{
      // console.log(data.UserId, 'disini', req.currentUserId);
      
      if (data.UserId == req.currentUserId){
        next()
      }else{
        res.status(400).json({
          msg: `unauthorized`
        })
      }
    })
    .catch(err =>{
      res.status(400).json({
        msg: `data not found`
      })
    })
  }