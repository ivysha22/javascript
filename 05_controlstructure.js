/* //controlstructures are  used to control the flow of a program
//--sequence,conditional,loop/iteration
if(70>20){
    console.log("conditional statement");
    
}else{
    console.log("false statement");
}
//--sequence is a control structure that allows us to execute a series of statements in a specific order
//grading system usiif elseif
let marks=90
if(marks<40){
    console.log("Grade E");
}else if(marks<60){
    console.log("Grade D");
}else if(marks<80){
    console.log("Grade B");
}else{
    console.log("Grade A")
}
//rewrite this grading system using the switch statements

//loop/iteration while,do while,for loop


//while loop
let num = 20
while(num<50){
    console.log("hello we are at number"+ num);
    num++ //incrementor
}
//write using for loop
for(let num=20; num<50; num=num++){
    console.log("looping" + num);
    
}
//write a function that counts prime numbers between a given range of numbers
//getprime(23,90)----29,31
function getPrime(startVal,lastVal){
    if(lastVal<=lastVal){
        console.log("invalid range");//error checking
        return 0
    }
    for(let number=startVal+1; number<lastVal; number++){
        //console.log("testing number:"  + number);

        let isPrime=true
        for(let divisor=2; divisor<number; divisor++){
            if(number%divisor==0){
                //console.log(number+"is not a prime number")
                isPrime=false
            }
        }
        if(isPrime){
            console.log(number +  " is a prime number");
        }else{
            console.log(number + " is not a prime number");
            //console.log(number+"is a prime number")
        }

    }
}
getPrime(23,90) */
//write a function that determines if a given word or number is a palindrome

//function determines if a word(only) is a palindrome
function Ispalindrome(input){
    let wordOrnumber = input.toString();
    //input.tostring(); changes the number to a string so it can split it
    // if its already a string it goeas to the next line of code
    
    let reversed =wordOrnumber.split("").reverse().join("")
    //str.split("") divides the word into individual characters eg... sharon=s,h,a,r,o,n
    //reverse() takes the word and reverses it eg... s,h,a,r,o,n  to  n,o,r,a,h,s
    //join("") makes the reversed word join together and not have spaces eg... norahs
    if(wordOrnumber===reversed ){
        console.log( input+"is a palindrome")
    }else{
        console.log(input + "is not a palindrome")
    }

}
Ispalindrome("dad")
Ispalindrome("ivy")
Ispalindrome(242)
Ispalindrome(565)

//another way to check the palindrome

function checkIfPalindrome(value){
    let reversedValue=""
    if(typeof value == "string"){
        
    }
}

//write a function that calculates the factorial  of a given number

function factorial(number){//defines the function named number
    let result = 1;//initializes the result to 1
    for (let i = 2; i <= number; i++) { //starts with 2 because multiplying by 1 results to nothing
        result *= i;//result is multiplied by the current value of i
        }
     return result; //returns the final value of result
}
console.log(factorial(5))//call this function and find the factorial of 5




//write a function that finds the greatest common divisor of two numbers
function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);
    }
    console.log(gcd(48,18));
    


