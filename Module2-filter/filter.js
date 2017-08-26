var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("numbers array:" ,number);

var filtered = number.filter(doFiltering);

function doFiltering(value){
  return value>5;
}
console.log("above 5 value : ", filtered);

var shoppingList1 = ["milk", "condensed milk", "bread", "sugar", "melon", "almond milk"];

console.log("shopping list : ", shoppingList1);

var content = "milk";
function findMilk(value){
  return value.indexOf(content) != -1;
}

var milkFilter = shoppingList1.filter(findMilk);

console.log("shoppinf list containing milk: ", milkFilter );
