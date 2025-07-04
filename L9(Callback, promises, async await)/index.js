// async await >> promise chains >> callback hell (better priority order)
// we will first learn Callback hell ::
// Synchronnous vs Asynchronous in JS -->

// Synchronous means code runs in a particular sequence of instructions given in the program. Each instruction 
// waits for the previous instruction to complete its execution
// Asynchronous code execution allows to execute the next instructions immediately and doesn't block the flow.

// Due to synchronous programming, sometimes imp instruction get blocked due to some previous instructions,
// which can cause a delay in the website, that's the reason asynchronous is better

function hello() {
    console.log("hello");
}
setTimeout(hello, 2000) //timeout in milisecons //kitne der baad isko run karna hai in simple
setTimeout(() =>{
    console.log("hello");
}, 4000)

//below is an example of asynchronous programming ::
console.log("one");
console.log("two");
// first these two one and two will be printed then the first hello (2secs) then second hello (4secs)
// Callback is a function passed as an argument to another function
function sum(a, b){
    console.log(a+b);
}
function calculator(a,b, sum){
    sum(a,b);
}
calculator(1,2, sum); //aisa func jo kisi dusre func me as an argument pass hota hai usko kehte hai call-back
//callbacks synchronous and setTimeout function me as asynchronous bhi kam krte hai
// Callback Hell :: Nested callbacks stacked below one after another forming a pyramid structure (Pyramid of doom)
// This style of programming becomes difficult to understand and manage.

function getData(dataId, getNextData){
    setTimeout(()=> {
        console.log("dataId : ", dataId);
        if(getNextData){ //if get next data exist krta hai tabhi iss function ko call karo
            getNextData();  
        }
    },2000);
}
getData(1, ()=> {
    console.log("getting data 2..");
    getData(2, ()=> {
        console.log("getting data 3..");
        getData(3, () => {
            console.log("getting data 4..")
        }),
        getData(4);
    });  
});
//the above thing is called Nested callback or callback hell
// Now to solve the problem of callback Hell in js, Promises comes into the action
