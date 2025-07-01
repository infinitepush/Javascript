console.log("Create a H2 heading element with text hello javascript. Append - from apna college students- to this text using js");
//append matlab last me add kar dena
console.log("for bringing a change first we need to access the element");
console.log("after accessing the element we need to look after which property suits well");
let h2 = document.querySelector("h2"); //this is accessing the element
console.dir(h2.innerText);
console.log("we will use innerText property to add text in the end");
h2.innerText = h2.innerText + " from apna college students"; //using property bringing change
let divs = document.querySelectorAll(".box");
console.log(divs);
//divs[0].innerText = "new unique value for all";
//divs[1].innerText = "something something";
//divs[2].innerText = "nothing nothing"; 
console.log("Instead of writing all these lines we can use a for loop");
let index = 0;
for(div of divs){
    div.innerText = `new unique value ${index}`;
    index++;
}

