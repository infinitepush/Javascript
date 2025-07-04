// you are creating a website for your college. Create a class User with 2 properties, name nd email. 
// It has also a method call viewData() that allows user to view website data
// create a class Admin which inherits from the user. add a new method call editData to Admin to edit website data 
let data = "some data unedited defined";
class user{
    constructor(name, email){
    this.name = name;
    this.email = email;
    }
    viewData(){
       /* console.log(this.name);
        console.log(this.email); */  
        console.log("data : ", data);
    }
}
class Admin extends user{
    constructor(name, email){
        super(name,email);
    }
    editData(){
        data = "some new data";
    }
}
let U1 = new user("piyush", "piyushparatha12@gmaill.com");
let U2 = new user("subham", "subhamparatha12@gmaill.com");
let A1 = new Admin("tannzy", "tanzybro07@gmail.com"); 

//error handling notes se kr lena bhai 

