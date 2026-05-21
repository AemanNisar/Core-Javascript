// const promise=new Promise((resolve,reject)=>{
//     reject("promise reject")
// })
// promise.then((res)=>{
// console.log(res)
// }).catch((rej)=>{
//     console.log(rej)
// })

// promise chaining
function asyncFunction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 1");
      resolve("success");
    }, 2000);
  });
}

function asyncFunction2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 2");
      resolve("success");
    }, 3000);
  });
}

asyncFunction1().then((res) => {
  asyncFunction2().then((res) => {
    console.log("end");
  });
});


// function api(){
//     setTimeout(() => {
        
//     }, timeout);
//     return new Promise((resolve,reject)=>{
//         resolve("weather data")
//     })
// }