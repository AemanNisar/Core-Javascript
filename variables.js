export var i = 10;

if (true) {
  var i = 9;
}

// console.log(i)
// var isnt block sccoped so result is 9..

// function increaseBy5(){
//     i+=5;
// }
// increaseBy5();
// console.log(i)
// var is function scoped... but since we aint declaring new variable the exisitng variable is modified and result is 14

// function declareNewVarAndIncrement(){
// var i=10;

// }
// console.log(i)
// the result will be still 14 because of the exisitng code . a NEW i is created inside the function, completely separate from the outer i

// LET DECLARATION
export let j = 1;

if (true) {
  j += 2;
  let k = 4;
  var m = 5;
}
// console.log(k)
// ReferenceError: k is not defined
console.log(m);
// 5... var is not block scoped
console.log(j);
// answer will be 3  because we modified the exisitng variable not created new one... block scope always work if we declare a new variable

// CONST DECLARATION
// const age = 10;
// const age = 11;
// age=9--> TypeError assignment to constant not allowed
// Var can be redeclared but let and const can not. They give syntax error
// if (true) {
//   const name = "Aeman";
// }
// console.log(name);
console.log(number)
var number=5;

// const 