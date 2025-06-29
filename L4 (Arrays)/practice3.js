//Create an array to store companies (microsoft, google, uber, ibm, netflix)
// remove the first company from the array 
// remove uber and add ola in its place
// add amazoon in the end
console.log("the question is based on array method");
let company = ["microsoft", "google", "uber", "ibm", "netflix"];

company.shift();
company[1] = "ola";
company.push("amazon");
console.log(company);
console.log("shift method deleted from start")