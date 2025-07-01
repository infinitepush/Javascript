console.log("we will learn DOM Attributes here");
console.log("getAttribute(attr) //to get the attribute");
let para = document.querySelector("p");
console.log(para.getAttribute("class")); //we got the attribute
console.log("setAttribute(attr,val) //to set the attribute val");
para.setAttribute("class", "Atombomb");
console.log(para);
console.log("we will discuss now Style attribute now");
console.log("node.style");
console.log("to style this div we will first access this div in DOB in js");
let div = document.querySelector("div");
console.log(div);
console.log(div.style); //we used node.style here

