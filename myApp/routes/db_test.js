var express = require('express');
var mysql = require("mysql");
var router = express.Router();

var dbconfig   = require('../config/database.js');
var connection = mysql.createConnection(dbconfig);

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
// });

  

/*
var mysql_dbc = require('../db_conn')();
var connection = mysql_dbc.init();
mysql_dbc.test_open(connection);
router.get('/mysql/test', function (req, res) {
  var stmt = 'select *from ....';
  connection.query(stmt, function (err, result) {
    .....
  })
});
*/

 
/* GET home page. */
router.get('/', function(req, res, next) {
    connection.connect(function(err) {
        if (err) throw err;
        console.log('mysql is connected successfully.');

        var sql = "select * from station";

        connection.query(sql, function(err, result) {
            if (err) throw err;
            console.log("Result: ", result);
           // res.json(result);
        });
    });

    res.send('respond with a resource', result);
});

module.exports = router;
