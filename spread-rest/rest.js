// REST OPERATOR: use to collect multiple values into a single array
// used in function parameters, on the left side of the assignment
const [element1,...array2]=[1,2,3,4,5]
console.log(element1,array2)

 function sum(...anyArray){//rest operator
    let sum=0;
for (let i = 0; i < anyArray.length; i++) {
  sum += anyArray[i];
}
console.log(sum)
}
sum(...array2)//spreading the element of array2