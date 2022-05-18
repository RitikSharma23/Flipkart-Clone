var path=require('path')
var express = require('express');
var app = express();


app.use(express.static(path.join(__dirname,"../login")))

app.get('/', function (req, res) {
   res.send("register.html");
})

app.listen(8000,()=>{
    console.log("listenbong")
})
