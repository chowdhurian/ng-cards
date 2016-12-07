var connect = require('connect');
var serveStatic = require('serve-static');

connect()
  .use(serveStatic(__dirname + '/public'))
  .use(serveStatic(__dirname + '/node_modules'))
  .listen(8080);
