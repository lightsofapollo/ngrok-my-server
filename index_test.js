suite('publish server', function() {
  var ngrokify = require('./');
  var request = require('superagent-promise');
  var express = require('express');
  var app = express();
  app.get('/xfoo', function(req, res) {
    res.send('woot');
  });

  var url;
  setup(function() {
    return ngrokify(app).then(function(_url) {
      url = _url;
    });
  });

  test('url is ngrok', function() {
    assert.ok(url.indexOf('ngrok') !== -1);
  });

  test('GET xfoo', function() {
    return request.get(url + '/xfoo').end().then(function(res) {
      assert.equal(res.text, 'woot');
    });
  });
});
