var ngrok = require('ngrok');
var Promise = require('promise');
var URL = require('url');
var http = require('http');

var ngrokConnect = Promise.denodeify(ngrok.connect);
var ngrokDisconnect = Promise.denodeify(ngrok.disconnect);

/**
@param {Object} server any object with a .listen and .address methods...
@return Promise<String> url for the ngrok server.
*/
function ngrokify(server) {
  if (typeof server === 'function') server = http.createServer(server);

  var ngroked = Object.create(server);
  var ngrokURL;

  server.once('close', function() {
    // close the ngrok connection on server close
    ngrokURL && ngrokDisconnect(ngrokURL);
  });

  var addr = server.address();
  if (!addr) server.listen(0);
  addr = server.address();

  return ngrokConnect(addr.port).then(function(url) {
    return ngrokURL = url;
  });
}

module.exports = ngrokify;
