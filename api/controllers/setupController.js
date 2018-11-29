var Todos = require("../modules/todoModel");
module.exports = function(app){
  app.get("/api/setupTodos",function(req,res){
    //setup seed data
    var seedTodos = [
    {
      text: "Học Nodejs",
      isDone: false
    },
    {
      text: "Học Angular.js",
      isDone: false
    },
    {
      text: "Viết một ứng dụng hoàn chỉnh",
      isDone: false
    },
  ];
    Todos.create(seedTodos,function(err,results){
      res.send(results);
    });
  });
}
