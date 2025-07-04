// Classes is a programe code template used for creating objects    
// these objects will have some states(variables) and some behaviour(function)inside it
// class Myclass {
// constructor(){..}
// myMethod(){..}
// }
// let myObj = new MyClass(); //this is the syntax for creating an object from a class
class ToyotaCar{
    start(){
        console.log("start");
    }
    stop (){
        console.log("stop");
    }
    color(){
        console.log("black");
    }
    constructor(brand, mileage){ //constructors are for intialisation, we do intilise some properties here and then call them in our objects
        console.log("creating new objects");
        this.brand = brand;
        this.mileage = mileage;
    }
}
let fortuner /* fortuner is object here */ = new ToyotaCar("fortuner", 85); 
console.log(fortuner);
// abb fortuner me start,stop,color ke funtions honge even though hamne usme kabhi define hi nhi kiye
let lexus = new ToyotaCar("lexus", 80);
console.log(lexus);
// inheritance : passing down of properties from parent class to child class
class person{
    eat(){
        console.log("he/she is eating");
    }
    sleep(){
        console.log("he/she is sleeping");
    }
    constructor(nasha){
        this.nasha = nasha;
    }
}
class engineer extends person{
    work(){
        console.log("he/she is working");
    }
    sleep(){
        console.log("Engineers sleep less than normal persons"); //method overriding    
    }
    /*constructor(branch){ // a class may only hve one constructor
        super();
        this.branch = branch;
    }*/
    constructor(nasha){
        super(nasha); //nasha hamne engineer ko to de diya lekin parents class me pass krne ke liye usko super keyword me daalke dena padega
    // parent class ke methods ko use karne ke liye super.(eat) krke use krna padta hai
    }
}
let P1 = new person();
console.log(P1);
let E1 = new engineer("Ganja");
console.log(E1);
// The super keyword is used to call the constructor of its parent class to access the parent class properties nd methods
// super(args) //calls parent class constructor
// super.parentMethod(args)
// basically derived class me constructor ko access krne se pehle super keyword use krke parent class ke constructor ko call krna pdega
