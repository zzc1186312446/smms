var express = require('express');
var router = express.Router();

// // 引入crypto模块
// var md5 = require("crypto");

// 引入mysql模块
// -var mysql = require("mysql");

// // 链接数据库
// var connection = mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"root",
//   database:"smms"
// });

// // 打开数据库链接
// connection.connect();

// //添加用户的路由
// router.post("/add",function(req,res,next){
//   let {pass,username,region}=req.body;

//   // 对密码进行md5加密
//   pass=md5.createHash("md5").update(pass).digest("hex");
  
// })

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
