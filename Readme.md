https://facebook.github.io/react/docs/getting-started.html -js ui
http://babeljs.io/ -for build js
http://nodeguide.ru/doc/felix/beginner/
http://expressjs.com/en/starter/basic-routing.html -routing
http://wix.github.io/react-templates/

План:
1. Сделать получение данных из postgres в nodejs
2. Сделать backend websocket отправляющий эти данные
3. Сделать сделать frontend работающий с backend
4. Сделать страницу с плеером, которая будет это все получать.
5. Сделать плеер, который будет работать с радиостанциями.
6. Автоматизировать запуск приложения через make.

Для корректного запуска приложения:
export NODE_ENV=config -- указывается имя конфига
node index.js

Для корректной сборки React необходимо установить:
npm install --global babel-cli
npm install babel-preset-react
