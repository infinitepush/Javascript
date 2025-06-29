//price of 5 items = [250, 645, 300, 900, 50]
// all items have 10% off on them, change the array to store final price after applying offer
let price = [250, 645, 300, 900, 50];
total = 0;
for(i=0; i<price.length; i++){
    discount = price[i]/10;
    price[i]= price[i] - discount;
    console.log("final price after 10% discount on each item: "+price[i]);  
}
console.log("yaha for of loop use nahi kar skte kyunki for of direct value de dega index nhi return krta")
console.log("notes me dekh lena kuch array methods discussed hai just nothing more");
