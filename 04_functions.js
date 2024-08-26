//a function is a reusable block of code

//functions are defined using the function keywork or using an arrow symbol then use
//the code we call/invoke

function getSquare(){
    console.log("Getting the square");
    console.log("Getting square done");
    
}
getSquare()//calling the function

function getSquare(x){
    let result=x*x
    console.log(result);
}
getSquare(32)//calling the function with an argument
getSquare(3)
getSquare(11)

function getSurfaceAreaCuboid(l,w,h){
    let front=(l*h)*2
    let back=(l*w)*2
    let side=(h*w)*2
    let totalSurface=front + back + side
    console.log( "Surface area is" + totalSurface);
}
getSurfaceAreaCuboid(10,5,7);

//to store/use the outcome of a function call can have a return statement 


//write a func that returns the area of a square given the kengh and the width
function AreaOfSquare(l,w){
    let AreaOfSquare=l*w
    console.log("the area is equal to" + AreaOfSquare+"cm square");
    return AreaOfSquare
}
let result=AreaOfSquare(10,10)

//write a js function that takes the radius of a circle as input/argument and returns its area
function AreaOfCircle(r){
    let AreaOfCircle=r*r*3.142
    console.log("the area is equal to" + AreaOfCircle + "cm square")
    return AreaOfCircle
}
let result2=AreaOfCircle(7)