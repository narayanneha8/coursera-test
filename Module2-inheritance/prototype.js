var parent ={
  value: "parent",
  obj: {
    objValue: "parentObjectValue"
  },
  walk: function (){
    console.log("walking");
  }
};

var child = Object.create(parent);
console.log("Child - child.value: ", child.value);
console.log("child - child.obj.objValue: ", child.obj.objValue);
console.log("parent- parent.value", parent.value);
console.log("parent - parent.obj.objValue", parent.obj.objValue);
console.log("parent: ", parent);
console.log("child: ", child);

child.value = "child";
child.obj.objValue = "childObjValue"
console.log("Child - child.value: ", child.value);
console.log("child - child.obj.objValue: ", child.obj.objValue);
console.log("parent- parent.value", parent.value);
console.log("parent - parent.obj.objValue", parent.obj.objValue);

console.log("parent: ", parent);
console.log("child: ", child);

console.log("child.obj == parent.obj", child.obj == parent.obj);


// Function Constructor

function Dog(name){
  this.name = name;
  console.log("this is : ", this);
}

var myDog = new Dog("max");
console.log("myDog is : ", myDog);

//Not being used as a function constructor
Dog("max");
