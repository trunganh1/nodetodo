var Todos = require("../modules/todoModel");

function getTodos(res){ // Đọc lại data.
  Todos.find(function(err,todos){
    if (err){
      res.status(500).json(err);
    }else{
      res.json(todos);
    }
  });

}
module.exports = function(app){
  //get all Todos
  app.get("/api/todos",function(req,res){
    getTodos(res);
  });
  app.get("/api/todo/:id",function(req,res){
    Todos.findById({_id: req.params.id},function(err,todo){
      if(err){
        throw err;
      }else{
        res.json(todo);
      }
    });
  });
  //create a todo
  app.post("/api/todo",function(req,res){
    var todo = {
      text: req.body.text,
      isDone:req.body.isDone,
    }
    Todos.create(todo,function(err,todo){
      if(err){
        throw err;
      }else{
        getTodos(res);
      }
    });
  });
  //update a // TODO
  app.put("/api/todo",function(req,res){
    if(!req.body._id){
      return res.status(500).send("Id Is required")
    }else{
      Todos.update(
      {
        _id: req.body._id
      },
      {
        text: req.body.text,
        isDone:req.body.isDone,
      },
      function(err,todo){
        if(err){
          return res.status(500).json(err);
        }else{
          getTodos(res);
        }
      }

    )
    }
  });
  //Delete a todo
  app.delete("/api/todo/:id",function(req,res){
    Todos.remove({
      _id: req.params.id
    }, function(err,todo){
      if(err){
        return res.status(500).json(err)
      }else{
        getTodos(res);
      }
    })
  });
}
