/*
	Данное приложение предназначено для прослушивание радио через web.
	Данные о станциях будут передаваться по web socket в  виде json
*/
//Описание клиентской части.
// Переменные
var express = require('express');
var app = express();
var client = require('./public/client');
var config = require('config');

//Конфигурация
//Каталог с HTML шаблонами
app.use(express.static(__dirname + '/view'));
//Каталог статических файлов 
app.use('/static', express.static('public'));
//Подключение к БД
var dbConfig = config.get('Radio.dbConfig');
console.log(config.get('Radio.dbConfig.host'));



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