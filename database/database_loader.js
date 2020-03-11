/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 

var mysql = require('mysql');

//데이타베이스 연결 sql문실행가능
var pool=mysql.createPool({
	connectionLimit:10
	,host:'localhost'
	,user:'root'
	,password:'sm060788'
	,database:'test'
	,debug:false
});


module.exports = pool;