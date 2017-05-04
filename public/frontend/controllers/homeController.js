
app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController;hurray routing';

  $scope.copy=function(){
    $scope.out=$scope.in;

  };


app.factory("send",function(){
   var x=3;
});
});
