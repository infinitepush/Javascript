    const URL = "https://dog.ceo/api/breeds/image/random"; 
    const buttonwa = document.querySelector("#btn"); 
    const img = document.createElement("img");
    img.src = 'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_541.jpg';
    
/* const getFacts = async() =>{ 
console.log("getting data.."); 
let response = await fetch(URL); 
console.log(response);
let data = await response.json(); 
console.log(data); 
buttonwa.addEventListener("click", getFacts);
} */
 //the above async await function in promise chain way::
 function getFacts() {
    console.log("getting data...") 
    fetch(URL)
    .then((response)=> {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.body.appendChild(img); //image will display after the data is fetched
        console.log(img);
    })
 }
 buttonwa.addEventListener("click", getFacts);
 // Request & Response :: 
 // HTTP Verbs : read docs ex- get, head, post, put, delete, connect, patch
 // Response status code: HTTPS response status codes generally tells us the status of the api key accessed 
 // ex= 100-199 = informal response, 200-299 = succesful response, 300-399 = redirection response
 // 400-499 = client error response, 500-599 = server error response

 // do read docs for advanced javascript and now we will proceed with building core projects of js.