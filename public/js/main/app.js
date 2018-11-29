var app = angular.module("app.todos",["xeditable"]);
app.controller("todoController",['$scope','svTodos',function($scope,svTodos){
  $scope.appName = "Node Todos !!!";
  $scope.formData = {};
  $scope.loading = true;
  $scope.todos = [
    /*{ // không fix cứng nữa. Mà cho là mảng rỗng để gọi từ bên svTodos
    text: "Khởi tại dự án, Includes thử viện bootstap, Angulajs ...",
    isDone: true
  },
  {
    text: "Cài đặt Angulajs, controller, Khởi tạo data ban đầu",
    isDone: true
  },
  {
    text: "Tạo services gọi api, binding data,action...",
    isDone: false
  },
  {
    text: "Hoàn thành ứng dụng, đưa lên heroku",
    isDone:false
  }*/
];
  //load data form api
  svTodos.get().success(function(data){
    $scope.todos = data;
    $scope.loading = false;
  });

  $scope.createTodo = function(){
    $scope.loading= true;
    var todo = {
      text:$scope.formData.text,
      isDone:false
    }
    /*$scope.todos.push(todo);
    $scope.formData.text = "";*///push khi chưa lên server.
    svTodos.create(todo)
    .success(function(data){
      $scope.todos = data;
      $scope.formData.text = "";
      $scope.loading = false;
    });
  }
  $scope.updateTodo = function(todotodo){
    console.log("Update Todo: ",todotodo);
    $scope.loading= true;
    svTodos.update(todotodo)
    .success(function(data){
      $scope.todos = data;
      $scope.loading = false;
    });
  }
  $scope.deleteTodo = function(todotodo){
    console.log("Delete Todo" ,todotodo);
    $scope.loading = true;
    svTodos.delete(todotodo._id)
    .success(function(data){
      $scope.todos = data;
      $scope.loading = false;
    });
  }
}]);
