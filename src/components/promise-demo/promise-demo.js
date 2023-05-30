
let promise = new Promise(function(resolve) {
    resolve("123")
});

promise.then((res)=>{
    console.log(res)
})

async function callAbs(){

}


callAbs().then((res)=>{
    console.log(res)
});