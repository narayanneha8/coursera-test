(function () {
'use strict';

  angular.module('module-2', [])
  .controller('control', MyController)
  .filter('custom', BestFilter)
  .filter('argument', ArgmentCustomFilter);

   MyController.inject=['$scope', 'customFilter'];

   function MyController($scope, customFilter){
      $scope.name = "neha";
      $scope.sayHello = function(){
        var message = "Hello My Best Nayan Grih";
        return message;
      };

      $scope.sayTheBest = function(){
        var message = "Best Best Best Best";
        var message = customFilter(message);
        return message;
      };
    }

    function BestFilter(){
      return function(input){
      var input = input || "";
      input = input.replace("Best", "The Best");
      return input;
    };
    }

    function ArgmentCustomFilter(){
      return function(input, target, replace){
      var input = input || "";
      input = input.replace(target, replace);
      return input;
    };
    }


})();
