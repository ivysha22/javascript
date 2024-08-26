/*
primitive or simple data types
*strings
*numbers
*boolean
*null
*undefined
non-primitive/simple data types
*objects
*arrays 
*functions
*/

//strings--characters enclosed in quotes

const currentColor="brown"
const admin="albert@eldohub.co.ke"
const something='krfnajbfgaioefl'
const date="0503839"

console.log(date);

//numbers--including decimals no quotes
const age=36
const rate=2.455

//boolean--true or false
const darkModeon=true
const isLoggedIn=false

//Null--a placeholder value used in absence of a default value
const average =null

//Undefined--js value assignrd to a defined variable that was not assigned a value
let newUser
let total

//typeof operator can be used to check a variable or value data types
console.log(typeof date);
console.log(darkModeon);
console.log(typeof total);

//Object--a collection of data in format close to a real world object-it has properties,functions,actions and methods
//objects are madeup of comma-separated key-value pairs enclosed in curly brackets{}--object literals
let television={
    brand:"LG",
    sizeInInches:63,
    isColored:true,             //this is the television data
    solid:false,
    price:null,
    owner:"eldohub"

}
console.log(television);//will acces all the television data
//accessing value in an object we use the dot notation
console.log(television.price);

//array--is a zero indexed list of items or data or elements
const students=["albert", "kevin", "vincent", "ivy"]
const staff=[ {name:"awino", age:70}, {name:"ntabo", age:82}, "Cherop",800,["web","data"],true, null,]

//to acces dat/elements
console.log(students[0]);
console.log(staff[0]);//will give us the whole staff data

console.log(staff[1].name);//will give us only the second name

console.log(staff[4][1]);//will give us data

//function--a reusable block of code
function nameOfFunction(){
    //code to execute/run when function iis invoked/called
    console.log("function called!!!");
    console.log("running!!!!");
    
}
function scream(){
    console.log("I AM SCREAMING!!!!!!");
    console.log("aooooiii!!!");
    
}

scream()
scream()
scream()
scream()
//our discount is 30%
function calculatediscount(initial){//initial is an argument for this function
    console.log(0.3*initial);
    
}
calculatediscount(900)//270
calculatediscount(1000)
calculatediscount(636)

function calculatediscount(initial,rate){
    console.log((rate/100)*initial);
}
calculatediscount(900, 15)//270
calculatediscount(1000, 20)
calculatediscount(636, 11)





