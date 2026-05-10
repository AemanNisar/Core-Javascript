//SPREAD OPERATOR expands the values of an array or an object into multiple elements

const array1=[1,2,3]
const array2=[...array1,4,5,6]
console.log(array2);


// but but but here is the problem... if we use it for nested objects, it creates a shallow copy not a deep one which creates bugs later. Here is what i mean
const object1={
    id:"STD1",
    user:{
        name:"Aeman",
    }
}
const object2={...object1};
// the object 2 is a new object if we change attribute of object 1 like
object1.id="STD123456";
console.log("First object:",object1);
console.log("Second Object:",object2);
// The second object still has that id STD1 which is the expected behaviour because  object2 creates a new object as copy  of that object 1 but still keeps reference of nested object . It will affect only if we write as object2=object1.BUT HERE COMES THE SHALLOW COPY PROBLEM
// if i change the attribute of that nested object user both objects will reflect that change
object1.user.name="Amina";
console.log("Object 1:",object1)
console.log("Object 2:",object2)
// so what happens is object 1 and object 2 are created separately but they point to the same nested object in the memory

// object1
//     |-------->same nested object(user)
// object2


// Suggested path (simple)

// If you want fastest backend readiness:

// Hoisting + TDZ
// Execution context + call stack
// Event loop
// Promises / async-await
// this keyword
// prototypes






// Learn:

// global execution context
// function execution context
// creation phase
// execution phase