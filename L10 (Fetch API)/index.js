// Fetch API :: The fetch api provides an interface for fetching (sending/receiving) resources
// It uses Requests and Response objects
// the fetch() method is used to fetch a resource (data)
// let promise = fetch (url, [options])
// API =  application programming interface
const URL = "https://dog.ceo/api/breeds/image/random"; 
// iske niche yeh button aur image yeh khudse add kiye hai
const buttonwa = document.querySelector("#btn"); // DOI ka use krke button accesss kiya
const img = document.createElement("img"); //DOI ka use krke Image create kiya
img.src = 'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_541.jpg';
console.log(img);

// yeh niche hamara function hai
const getFacts = async() =>{ //async function
console.log("getting data.."); //normal output statement
//document.body.appendChild(img); //yaha yeh likhne se button pe click krte hi img aajayega data baad me aayega
let response = await fetch(URL); //just async await things, we are storing await in response
console.log(response); //response will be given out in JSON format
//  hame jo response milta hai woh readable format me nhi hai usko smjhne ke liye kuch terms padhna padega
// AJAX is asynchronous JS & XML 
// JSON is Javascript Object Notation 
// json() method : returns a second promise that resolves with the result of parsing the response body text as JSON
// (Input is JSON, Output is JS Object)
// AJAJ api's : Asynchronoous Javascript And JSON, but still we call it AJAX lol 
//we convert the JSON format into a JS readable format for which we use JSON() method, this JSON is also async
// Inshort, JSON() method se ham apna actual readable data extract krte hai 
let data = await response.json(); //response ko json (readable) format me print krwa rhe
console.log(data); //this data is going to be the usable data
document.body.appendChild(img); //yaha yeh likhne se jab tak data nhi aayega image load nhi hoga
};
buttonwa.addEventListener("click", getFacts); //jab click krenge tabhi function run hoga
// the all the works we have done above can be done by promise chains also see index2 file

