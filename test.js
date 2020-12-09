var express = require('express')
var http = require('http')
var app = express();

app.use(express.static('public'))

var server = http.createServer(app)

server.listen(52273, function(){
	console.log('서버가 만들어져서 listen중입니다.')
}) 