// Now we will do the callback hell situation with promise chain
 /* function getData(dataId, getNextData){
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
}); */
// the above situation in promises will be ::
function getData(dataId){
    return new Promise((resolve,reject) => {
    setTimeout(()=> {
        console.log("dataId : ", dataId);
        resolve("success");
    },2000);
    });
}
/* let p1 = getData(1);    //isko short me bhi likh sakte hai without P1, P2 aise object create kiye hue bagair
p1.then((res) => {
    console.log(res);
    p2.then((res) => {
        console.log(res);
    })
}); */

/* getData(1).then((res) => { // but this is also not promise chaining
    console.log(res);
    getData(2).then((res) => {
        console.log(res);
    });
}); */  //below is promise chaining

 /* getData(1)
.then((res) => {
    return getData(2);
})
.then((res) => {
    return getData(3);
})
.then((res) => {
    return getData(4);
})
.then((res) => {
    console.log(res);
}) */ ///this is called chain of promises or promise chains, but this is also a bit difficult to grasp.. So ??
// Concept of Async-await :: async function always returns a promise.
// async function myFunc() {..}
// await pauses the execution of its surrounding async function until the promise is settled
// ham kisi bhi normal function ko async function bana skte hai aur async function ek promise return krta hai
async function hello(){ //async function ka kaam hai to return a promise compulsarily 
    console.log("hello");
}
//await pauses all the execution until the asynch promise condition is settled
// example::
function api(){ //ek api ek function hai jo koi promise return kr rha hota hai 
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            console.log("weather data");
            resolve(200);
        }, 2000);
    })
}

async function getWeatherData(){ //ek function getweatherData bana diye jisko async declare kr diye 
//                               kyunki async await ek sath hi rehte hai
    await api();  // uss function ko await declare kr diye matlab pehle yeh settle hoga tabhi baaki kuch hoga
    await api(); // pehle 1st time hoga phir hi 2nd time hoga 
} //jaise pehle username check ho tabhi password ki taraf redirect krenge
//hamara function kuch promise return kar rha hota hai par ham log then ya catch use nhi krte async await use krte hai/
// callback hell wala condition ko async-await se solve krte hai
function getData(dataId){
    return new Promise((resolve,reject) => {
    setTimeout(()=> {
        console.log("dataId : ", dataId);
        resolve("success");
    },2000);
    });
}
 async  function getAllData(){
    await getData(1); //1st
    console.log("getting data 2");
    await getData(2); //2nd
    console.log("getting data 3");
    await getData(3); //3rd
    console.log("getting data 4");
    await getData(4); //4th
    console.log("getting data 5");
 } // So finally this async await is far better in understanding and reading code
 // But in async await we are creating a function to use async and await to avoid this a concept comes into play
 //IIFE:Immediately Invoked Function Expression->IIFE is a function that is called immediately as soon as it defined
// example : (function)() {
//            //..
//            })(); //another example would be
//            (() => {
//            //.. 
//            })(); //another example would be
//            (async () => { //we can use an arrow function too
//            //..
//            })();
// jaise yeh upar wala getting data wala programme ko IIFE ke concept se automatic call lagate hai/
function getData(dataId){
    return new Promise((resolve,reject) => {
    setTimeout(()=> {
        console.log("dataId : ", dataId);
        resolve("success");
    },2000);
    });
}
 (async  function getAllData(){
    await getData(1); //1st
    console.log("getting data 2");
    await getData(2); //2nd
    console.log("getting data 3");
    await getData(3); //3rd
    console.log("getting data 4");
    await getData(4); //4th
    console.log("getting data 5");
 })(); //just pure code ko parenthesis me kar diya aur end me parenthesis lagakar semi-colon lga diya tab automatic run hojaega
 