console.log("till now we learnt how to access and change of elements using DOM in js");
console.log("we will learn now how to insert & delete elements using DOM Manipulatioon");
console.log("to add a new element we must first create it");
console.log("let element = document.createElement(div)");
let newBtn = document.createElement("button");
console.log(newBtn);
newBtn.innerText = "click me";
console.log("Now to show it on the screen we need to insert this button to our node of tree like DOM manipulation ");
//there are 4 main methods to insert such elements using DOM manipulation
console.log("node.append(element)"); //adds at end of node (inside)
console.log("node.prepend(element)"); //adds at start of node (inside)
console.log("node.before(element)"); //adds before the node (outside)
console.log("node.after(element)"); //adds after the node (outside)
console.log("Now suppose we need to a add button after the div tag at the end then")
//first we will access the div
let div = document.querySelector("div"); //access the div
div.append(newBtn);
//agar same mujhe para ke baad add karna hota toh mai likhta
// p.append(newBtn); like that.. our node will decide where to add or delete
// so without touching our html codes we actually performed operations in structure using js logic
console.log("same way for removing we have--> node.remove()");
//remove karne ke liye bhi pehle usko query selector se select krna padega
let para = document.querySelector("p");
para.remove(); //this will remove the para