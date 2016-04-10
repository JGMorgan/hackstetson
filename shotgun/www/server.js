var express = require("express");
var app = express();

var sgenabled = false;

app.route('/swag')

  .get(function(req,res) {
    res.send(sgenabled);
  })

  .post(function(req, res) {
    console.log('swag');
    sgenabled = true;
    res.redirect('http://localhost:8100/')
  });

app.listen(1337);
console.log('1337 is the dank port!');
