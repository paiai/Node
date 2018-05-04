// mysql 
var express = require('express');
var mysql = require("mysql");
var router = express.Router();

var dbconfig   = require('../config/database.js');
var connection = mysql.createConnection(dbconfig);
connection.connect(function(err) {
    if (err) throw err;
    console.log('mysql is connected successfully.');  
});

router.get('/', function(req,res){
   // res.render('board', {title: "Board", contents: pageContents, pagination: pageNum, searchWord: ''});
    
    connection.query("SELECT * FROM boardcontents;", function(err, result, fields) {
        if (err) throw err;
        //res.json(result);
        res.render('board', {results:result});
    });
});

router.post('/', function(req,res){
});

router.get('/write', function(req,res){

    connection.query("SELECT * FROM boardcontents;", function(err, result, fields) {
        if (err) throw err;
        //res.json(result);
        res.render('write', {results:result});
    });
});

router.post('/write', function(req,res){
    var body = req.body;

    connection.query("INSERT INTO boardcontents (title, contents, writer) VALUES (?, ?, ?)", [body.title, body.contents, body.writer], function(){
        res.redirect("/write");
    });
});

router.get('/view', function(req, res){

    var contentId = req.param('id');

    BoardContents.findOne({_id:contentId}, function(err, rawContent){
        if(err) throw err;
        rawContent.count += 1;
        var reply_pg = Math.ceil(rawContent.comments.length/5);

        rawContent.save(function(err){
            if(err) throw err;

            res.render('boardDetail',{title: "Board", content:rawContent, replyPage: reply_pg});
        });
    })
});


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
// });

 
/* GET home page. */
// router.get('/', function(req, res, next) {

//     var sql = "select * from station";
//     connection.query(sql, function(err, result) {
//         if (err) throw err;
//         console.log("Result: ", result);
//         res.json(result);
//     });
//     //res.send('respond with a resource', result);
// });

module.exports = router;
