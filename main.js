var http = require("http");
var fs = require("fs");

var app = http.createServer(function (request, response) {
    var url = request.url;

    if (url == "/") {
        url = "/index.html";
    } // 먼저 요청된 URL이 '/'인 경우, 기본적으로 index.html 파일을 응답

    if (request.url == "/favicon.ico") {
        response.writeHead(404);
        response.end();
    } // 요청된 URL이 '/favicon.ico'인 경우, 404 상태코드로 응답

    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
    // fs.readFileSync() 함수를 사용하여 동기적으로 파일을 읽고,
    // response.end() 함수를 사용하여 응답을 전송.
});

app.listen(3001); // 서버를 3001포트에서 listening
