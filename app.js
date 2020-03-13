/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 

var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

//에러 헨들러 모듈 사용
var expressErrorHandler = require('express-error-handler');
const hostname ='211.47.75.53';

var config = require('./config');
//암호화 모듈

var route_loader = require('./routes/route_loader');
var fs = require('fs');
var app = express();
console.log('config.server_port ->'+config.server_port);
app.set('port', config.server_port || 3000);
var engine = require('ejs-locals');
app.engine('ejs',engine);
app.set('view engine', 'ejs'); 


app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
//app.use(expressSession({
//	secret: 'my key',
//	resave: true, 
//	saveuninstalized: true
//}));
app.get('/', function(req, res) {
	

	fs.readFile('./public/main.html',function(error,data){	
		if(error){console.dir(error); return;}
		res.writeHead(200, {'Content-Type':'text/html'});
		res.end(data);});
	
});

route_loader.init(app,express.Router());


var errorHandler = expressErrorHandler({
	static: {
		'404': './public/404.html'
	}
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);
//app.get('port')
http.createServer(app).listen(3000,function(){
	console.log('익스프레스로 웹 서버를 실행함: '+app.get('port'));
	
});