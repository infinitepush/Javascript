console.log("till now we have seen two ways of managing events");
console.log("first it was inline event handling js event handling");
console.log("The drawback of js event handling is we can handle only one event by taking one function at a time");
console.log("The better way is the EVENT Listeneres");
console.log("event listeners are like functions that always listen to events");
console.log("they listen to events and whenever it comes they perform");
console.log("And for one event we can create multiple event listeners");
// ways to create event listeners: node.addEventListener(event,callback)
//                                 node.removeEventListener(event,callback)
//callback is working here as event handler
console.log("now we will do the previous event handlers through event listener");
btn1 = document.querySelector("#btn1");
btn1.addEventListener("click",(evt) => {
//    console.log(evt); //we printed the evt as event object
    console.log("button 1 was clicked -handler1")
});
//like this way we created our first event listener now we will do the 2nd one too
btn1 = document.querySelector("#btn1");
btn1.addEventListener("click",() => {
    console.log("button 2 was clicked - handler2")
});
//Now both the event listener will get trigerred
console.log("By this we can perform multiple works using event listeners so we will use them only");
const handler3  = () => {
    console.log("button 3 was clicked - handler3")
}
btn1.addEventListener("click",() => {
});
btn1.addEventListener("click",() => {
    console.log("button 4 was clicked - handler4")
});
//now we want to remove 3rd event listener suppose then
// we always store that removing event handler function in a variable so to remove it from memory
btn1.removeEventListener("click",handler3);
//just remember the call back function must be same here it was handler3
