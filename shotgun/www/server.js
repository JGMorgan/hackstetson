var express = require("express");
var app = express();

app.route('/swag')

  // show the form (GET http://localhost:1337/login)
  .get(function(req,res) {
    res.send('If you are seeing this something really bad went really wrong');
  })

  // process the form (POST http://localhost:1337/login)
  .post(function(req, res) {
    console.log('swag');
    res.redirect('http://localhost:8100/')
  });

app.listen(1337);
console.log('1337 is the dank port!');
