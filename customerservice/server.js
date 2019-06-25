var express = require('express');
var app = express();


//Reusable controllers
var customerController=function (req, res) {
  console.log("CAlling rest api");
  var abc=[
            {ProductName:'Watch',descriptionOfProdect:'Wrist Watch',price:4000},
            
      ];
  res.send(abc);
};

// setting router to map requests  with controllers

app.get('/abc',customerController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})