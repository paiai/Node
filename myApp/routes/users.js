// sequelize model - users 이용해보기
var express = require('express');
var router = express.Router();

let models = require("../models"); //./models/index.js

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  models.users.findAll({ order: [['id', 'desc']] })
  .then(function(data){
    //res.json(data);
    res.render('users', {results: data});
  })
  .catch(function (err) {
    return next(err);
  });
});

router.get('/join', function (req, res, next) {
  res.render('join', {message: ''});
});

router.post('/signup', function (req, res, next) {
  console.log(req.body.userid);
  console.log(req.body.password);
  if ( (req.body.userid == undefined || req.body.userid == null || req.body.password == undefined || req.body.password == null) === false ) {
    models.users.findOne({ where: {userId:req.body.userid} })
    .then(function(data){
      if( (data == null || data == undefined) === false ) {
        res.json({results:false, message:'already used'})
        //res.json(data);
      }
      models.users.create({
        userId: req.body.userid,
        userPass: req.body.password,
        userName: req.body.username
      })
      .then(function(){
        res.json({results: true, message: '가입완료'})
      })
    })
    .catch(function (err) {
      return next(err);
    });
  }
  res.render('index', { title: 'Express' });
});



router.get('/list', function(req, res, next) {
  //res.send('respond with a resource');

  models.users.findAll({ order: [['id', 'desc']] })
  .then(function(data){
    //res.json(data);
    res.render('users', {results: data});
  })
  .catch(function (err) {
    return next(err);
  });
});



module.exports = router;
