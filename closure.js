function counter(){
    let count =0;
    // console.log(count);
     return function (){
        count+=1;
        console.log(count);
    }
}
counter()()//builds a function...that inner return function is build here...just consider that the inner function definition is here not the function call
// counter()()
//  counter()();
counter()();
counter()()
counter()();
//  c=counter();
//  c();
//  c();