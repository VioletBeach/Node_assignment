
var database_cutLine = {kor : [87, 80, 72, 62, 49, 36, 24, 18],
			   		    math_a : [92, 84, 73, 62, 49, 29, 16, 11],
			   		    math_b : [88, 84, 73, 59, 38, 22, 15, 7],
			   		    eng : [90, 80, 70, 60, 50, 40, 30, 20],
			   		    k_history : [40, 35, 30, 25, 20, 15, 10, 5],
			   		    life_and_ethics : [48, 45, 42, 36, 26, 18, 13, 9],
			   		    ehtics_and_ideas : [50, 47, 43, 36, 22, 15, 10, 7],
			   		    k_geography : [50, 48, 45, 38, 26, 19, 12, 9],
			   		    g_geography : [50, 48, 45, 40, 26, 18, 11, 7],
			   		    e_history : [47, 45, 40, 32, 22, 14, 11, 7],
			   		    g_history : [50, 47, 40, 33, 20, 14, 9, 6],
			   		    politic_and_law : [47, 43, 38, 32, 22, 13, 9, 6],
			   		    economy : [47, 42, 35, 27, 20, 14, 10, 7],
			   		    social_culture : [45, 42, 38, 30, 23, 14, 10, 7],
			   		    physics1 : [50, 47, 42, 34, 23, 17, 13, 8],
			   		    physics2 : [50, 47, 42, 33, 21, 17, 10, 4],
			   		    chemistry1 : [47, 43, 39, 33, 25, 17, 12, 8],
			   		    chemistry2 : [45, 39, 34, 23, 14, 11, 8, 5],
			   		    biology1 : [45, 40, 35, 28, 20, 14, 10, 7],
			   		    biology2 : [45, 42, 36, 28, 19, 13, 9, 6],
			   		    earth_science1 : [45, 38, 32, 26, 16, 12, 9, 7],
			   		    earth_science2 : [45, 40, 35, 24, 16, 12, 8, 5]
			   			} // 2021 각 과목별 수능 등급 컷

var http = require('http')  // 웹 서버를 만들기 위해 http 모듈을 사용
var express = require('express') // 미들웨어인 express.js 모듈을 사용 
var app = express(); // express 모듈을 변수에 대입

app.use(express.static('public')) // 정적 파일의 경로를 지정. 클라이언트의 연결 요청이 들어오면 public 폴더에서 index.html을 뿌림

app.get('/:id' , function(request, response){
	var subject_name = request.params.id
	response.send(database_cutLine[subject_name])
}) // get요청시 해당 과목의 등급컷 배열을 넘겨줌

var server = http.createServer(app) // http 기반 웹서버를 express 모듈을 이용해 구축

server.listen(52273, function(){ // 서버를 동작시킴. 포트번호는 52273을 사용
	console.log('서버가 만들어져서 listen중입니다.')
}) 