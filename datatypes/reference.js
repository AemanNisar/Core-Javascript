// Reference datatypes
// Arrays , objects and functions have reference datatypes which means they save reference to the values in object in memory not exact values
// they can me mutated which means that a particular value inside it can be changed without changing the the reference
// if we declare 
const student1 = {
  id: "STU12345",

  user: {
    name: "Aeman",
  },
};
const student2=student1;
student1.id="123"
console.log(student2);
// Why we are able to change value even when we used const keyword?
// Because when we use const keyword.it doesnt allow for a reassignment or binding to a new value but it allow to mutate the array/object/function.. which means that the value inside it can be changed until the reference remains unchanged 