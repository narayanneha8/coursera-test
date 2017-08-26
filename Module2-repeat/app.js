(function () {
'use strict';


  angular.module('shopping', [])
  .controller('Controller', shoppingController);


var fruits = ["Milk", "Condensed Milk", "Banana", "Apple", "Kiwi"];
var fruitObj = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];

shoppingController.$inject = ['$scope'];
function shoppingController($scope){
$scope.name = "neha";
$scope.shoppingList1 = fruits;
$scope.shoppingList2 = fruitObj;

$scope.addItem = function(){
  var items = {
    name: $scope.newItemName,
    quantity: $scope.newItemQuantity
  };
  $scope.shoppingList2.push(items);
};
}

})();
