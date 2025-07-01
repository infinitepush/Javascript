//create a new button element. Give it a text "click me" background color of red and text color of white 
// insert the button as first element inside the body tag
 let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
newBtn.querySelector("button");
newBtn.style.backgroundColor = "red"; //node.style
newBtn.style.color= "white";
document.querySelector("body").prepend(newBtn); 

// now something new learning
//create a <p> tag in html give it class and some styling.
// Now create a new class in CSS and try to append this class to the <p> element
// Did you notice how you overwrite the class name when you add a new one?
// Solve this problem using classList
let para = document.querySelector("p"); //we reached the paragraph class first 
para.getAttribute("class");
//para.setAttribute("class", "newCls"); //if we will uncomment this then setAttribute will override the class
//purani class jaise hi hatt jati hai waise hi uski styling bhi hatt jati hai
console.log("So setAttribute completely overwrites the class");
console.log("So thats why we don't use it for appending instead we use classList");
para.classList.add("newCls");    
// look this classList has merged both the classes without actually overriding it as we saw in setattribute method
// so generally when we have to do dynamic styling we do it in form of classes.

