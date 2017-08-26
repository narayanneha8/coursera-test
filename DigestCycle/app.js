(function () {
'use strict';

  angular.module('module-2', [])
  .controller('control', MyController);

   MyController.inject=['$scope'];

   function MyController($scope){
      $scope.name = "neha";
      $scope.count = 0;

      $scope.counter = function(){
        $scope.count++;
      };

    }

})();
