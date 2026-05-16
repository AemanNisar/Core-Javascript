function getData(data, callbackNextData) {
  setTimeout(() => {
    console.log("Data:",data);
callbackNextData();
  }, 3000);
}

getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            console.log('end')
        })
    })
})
// this can be confusing in production cuz there are many functions and callback hells can cause confusion while maintenance and code will be unreadable