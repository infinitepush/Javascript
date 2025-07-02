console.log("The change in the state of an object is known as Event");
console.log("Events are fired to notify code of interesting changes that may affect code execution");
console.log("ex are: mouse click (single,double),keyboard events(up,down)");
console.log("form events(submit etc)");
console.log("print event and many more");
console.log("Whatever we have done so far is called inline event handling");
// But this not really a good way of handling events 
console.log("there's a better way of handling events in Js that is::");
//console.log(node.event = () => { //access the node it can be button or div dot event (on click, onover etc)
    // handle here
   //  );
let btn1 = document.querySelector("#btn1");
btn1.onclick = (e) => {
    console.log(e); //this e is event object and it will display event properties
    console.log("hey there");
    console.log(e.type);
    let a = 5;
    a++;
    console.log(a);
};
console.log("If we have done inline and js handling both events then js has more priority");
console.log("Any event can be handled once only, if we do so then it will override the old event");
// Event Object 
console.log("Event object is a special event that has details abou the event.");
console.log("All event handlers have access to the Event Object's properties and methods");
// node.event = (e) => {
    //handle here
    //}  example: e.target, e.type, e.clientX, e.clientY
    // the above newbtn1 event has e as event object 
    // All these events are helpful 



