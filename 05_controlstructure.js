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
    let reversedWord =str.split("").reverse().join("")
    let reversedNum = num.toString().split("").reverse().join("");
    //str.split("") divides the word into individual characters eg... sharon=s,h,a,r,o,n
    //reverse() takes the word and reverses it eg... s,h,a,r,o,n  to  n,o,r,a,h,s
    //join("") makes the reversed word join together and not have spaces eg... norahs
    if(input===reversedWord || input===reversedNum){
        console.log(input + "input is a palindrome")
    }else{
        console.log(input + "input is not a palindrome")
    }

}
Ispalindrome("dad")
Ispalindrome("ivy")

//write a function that calculates the factorial  of a given number
//write a function that counts the number of vowels in a given string
//write a function that finds the greatest common divisor of two numbers

