/*var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var config = require("./config");
var mongoose = require("mongoose");
var setupController = require("./api/controllers/setupController");
var todoController = require("./api/controllers/todoController");
var app = express();
var port = process.env.PORT || 3000;

app.use("/assets",express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.set("views","./views");
//db info
//console.log(config.getDbconnectionString());
mongoose.connect(config.getDbconnectionString());
setupController(app);
todoController(app);
app.get("/",function(req,res){
  res.render("index");
});

app.listen(port,function(){
  console.log("Connect done: ",port)
});*/
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var config = require("./config");
var mongoose = require("mongoose");
var setupController = require("./api/controllers/setupController");
var todoController = require("./api/controllers/todoController");
var app = express();
var port = process.env.PORT || 3000;
app.use("/assets",express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views","./views");
mongoose.connect(config.getDbconnectionString());
setupController(app);
todoController(app);
app.get("/",function(req,res){
  res.render("index");
})
app.listen(port, function(){
  console.log("Connect Done: ",port);
});
