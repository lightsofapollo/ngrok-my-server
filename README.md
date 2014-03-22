# ngrok-my-server

Helper for publishing your http server/express app over ngrok (use this
for tests). This is a good example of an over opinionated library that
is designed to work for the one usecase of testing an http server over
ngrok based on it's ngrok url.

## Usage

```js
var ngrokify = require('ngrok-my-server');
var express = require('express');
var app = express();
// ... do stuff with app


// lanch the app if it's not running already (you can also pass a
// plain http server) and get a ngrok url for it...
ngrokify(app).then(function(url) {
  // yey ngrok url now you can use it with http.get or something to run
  // tests locally.
});
```

## Why?

My primary use case is to use this in combination with my
[testing-github](https://github.com/lightsofapollo/testing-github)
module for testing different types of hooks (for end-to-end types of
tests).

## LICENSE

The MIT License (MIT)

Copyright (c) 2014 James Lal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
