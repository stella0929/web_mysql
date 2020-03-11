/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
module.exports = {
	server_port:3000,
	route_info: [
		{file:'./user', path:'/process/login',method:'login',type:'post'},	{file:'./user', path:'/process/adduser',method:'adduser',type:'post'},{file:'./toliet', path:'/process/ewhawomansunistation',method:'ewhawomansunistation',type:'get'}
	]
};