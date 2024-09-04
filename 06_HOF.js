// Higher Order Functions -- Functions that take other functions as arguments and/or return a function

// The function passed into another function as an argument is refered to as a callback function


function testOne(j){
    console.log(j);
    
    console.log("Running test one function");
}

function testTwo(name,  cbFunc ){
    // long processss ... atfter 
    console.log("running test two function");   
    console.log(name.toUpperCase());
    // done with long process
     cbFunc(name) // hello
}


testTwo("albert", function doSomething(){ console.log("Hello World")} )

testTwo("joseph", testOne)

// map, reduce, forEach, sort, --- hof
let myColors = ["red","green","blue", "brown"]

myColors.forEach( function paintingScreen(color,index){
    console.log("Painting Screen With Color "+ color + " which at index number "+ index);    
} )

myColors.forEach(testOne)

// map array function/method - run a provided callback function on each element of the given array, and return a new array with new elements 


function convertToUpperCase(currentColor){
    return "+254 "+currentColor
}

let resultingMap = myColors.map(convertToUpperCase)

console.log(resultingMap);

function amazing(){
    return {
        name: "albert",
        age: 50
    }
}


console.log( amazing().name  );//will return albert 

//HOF--is all about taking functions as arguments or parameters

//example...

let numbers=[1,2,3,4,5]
let doubled=numbers.map(function squared(x){
    return x*x
})
console.log(doubled);

//this code is supposed to give me a new array with squared numbers
//output--[ 1, 4, 9, 16, 25 ]



function word(Fname,Lname,add){
    let fullnames=Fname+" "+Lname
    console.log("hello" + " "+ "Mr/Mrs" + " "+fullnames);
    console.log("welcome to our website");
    add()
    
}
word("sharon","ivy",function questions(){console.log("how are you today?");})

//Write a function that takes an array of numbers and a function. It should return a new array where the function has been applied to every element of the original array.
 

let array=[1,2,3,4,5]
function arraynum(array, add){
    let addedElements=array.map(add)
    return addedElements
}


function add(x){
    return x+x
    
}
let result=arraynum(array,add)
console.log(result)

/* Write a function that takes an array of numbers and a function as arguments. The function should return a new array where the function has been applied to only the even numbers from the original array, leaving the odd numbers unchanged.

For example, if the transformation function doubles the input number, and the input array is [1, 2, 3, 4, 5], the output should be [1, 4, 3, 8, 5]. */


//filter method--method creates a new array filled with elements that pass a test provided by a function.

let array1=[1,2,3,4,5,6,7,8,9,10]
function isEven(num,even){
    let even=num%2===0
   let evenNumbers=array1.map().filter()
    return even
   


}
console.log(array1);













