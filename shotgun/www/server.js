var express = require("express");
var app = express();
app.post('/',function(request,response){
  console.log(request.body)
});

app.listen(6000,function(){
  console.log("Started on PORT 6000");
})
