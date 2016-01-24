/*
//Описание клиентской части.
// Переменные
var express = require('express');
var app = express();
//Каталог с HTML шаблонами
app.use(express.static(__dirname + '/view'));

//Каталог статических файлов 
app.use('/static', express.static('public'));


// Логирование
var myLogger = function (req, res, next) {
  //console.log(req);
  next();
};
app.use(myLogger);



//Представление для рутовой страницы
exports.get = function() {
		app.get('/', function (req, res) {
		res.sendFile('index.html');
	});
}

*/

exports.get = function() {
	console.log('Вызов функции из файла библиотеки');
}