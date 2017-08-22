(function () {
'use strict';

  angular.module('myFirstApp', [])
  .controller('MyFirstController', function ($scope){
    $scope.name = "neha";
    $scope.sayHello = function(){
      return "Hello Coursera";
    }
  });
})();
