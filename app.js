// const express = require('express');
// const app = express();
// const mongoose = require("mongoose");


// Setting port
var PORT = process.env.PORT || 8080


// Import Modules
var http = require('http');
var dt = require('./custom_modules/date');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Basic Node Server'+ dt.myDateTime());
}).listen(PORT);

//app.listen(8080);
// app.listen(PORT, () => console.log(`Listening on ${ PORT }`))