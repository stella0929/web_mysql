/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 


var pool = require('../database/database_loader');
var ewhawomansunistation = function(req,res){
	console.log('/ewhawomansunistation 라우팅 함수 호출됨');
	
	
pool.getConnection(function(err,conn){
		if(err){
			if(conn){
				conn.release();
			}
			console.die(err);
			return;
		}
		console.log('데이터베이스 연결 스레드 아이디: '+conn.threadId);
		var tablename = 'toliet';
		var columns = ['stallNumber','safety','updated_at']
		var exec = conn.query("select ?? from ?? where tolietName = ?",[columns, tablename, "이대역 화장실"], function(err, rows){
			conn.release();
			console.log('실행된 SQL: '+exec.sql);
			if(err){
				console.log('SQL 실행시 에러발생');
				console.dir(err);
				
				return;
			}
			if(rows.length>0){
				console.log('화장실 찾음');
				var i;

			for(i=0;i<rows.length;i++){
					console.log(rows[i].stallNumber+rows[i].safety+rows[i].updated_at);
					//res.send((rows[i].stallNumber+rows[i].safety+rows[i].updated_at));
		
				res.render('ewhaStation',{number : rows.length, rows :rows});
			}
			}else{
				console.log('찾지 못함');
			
			}
		});
});}

module.exports.ewhawomansunistation=ewhawomansunistation;