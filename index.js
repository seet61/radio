/*
	Данное приложение предназначено для прослушивание радио через web.
	Данные о станциях будут передаваться по web socket в  виде json
*/
//Модули
var express = require('express');
var client  = require('./public/client');
var config  = require('config');

//Модули приложения
var db      = require('db');

// Переменные
var app = express();

//Конфигурация
//Каталог с HTML шаблонами
app.use(express.static(__dirname + '/view'));
//Каталог статических файлов
app.use('/static', express.static('public'));
//Подключение к БД
//var dbConfig = config.get('Radio.dbConfig');
console.log(config.get('Radio.dbConfig.host'), config.get('Radio.dbConfig.port'));


db.host = config.get('Radio.dbConfig.host');
db.port = config.get('Radio.dbConfig.port');
db.say();


// Логирование
var myLogger = function (req, res, next) {
  //console.log(req);
  next();
};

app.use(myLogger);

//Представление для рутовой страницы
app.get('/', function (req, res) {
	res.sendFile('index.html');

});

//Сам запуск сервисов
//Задание конфигурации сервера
//app.listen(3000, function () {
//	console.log('Приложение запущено на localhost:3000');
//})

//Задание конфигурации сервера
/*app.listen(4000, function () {
	console.log('Пример приложения запущен на localhost:4000');
})*/
