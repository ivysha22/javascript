//write a function that counts the number of vowels in a given string

function countVowels(input){//declares a function named countVowels
    let vowels="aAeEiIoOuU";//initiates all the vowels
    let count=0;//initiates it to 0
    for(let i=0; i < input.length; i++){//checks th length of the string initates it to zero and increases it by one
        if(vowels.includes(input[i])){//checks if the current char input[i] is present in the vowels 
            count++;//increases by one
        }
    }
    return count;//returns count
}
console.log(countVowels("i am a web developer"));

//another way to count the vowels in a given string
const testString="Write a function that counts the number of vowels in a given string"
const vowels=['a','e','i','o','u']

function voweCount(str){
    let numberOfVowels=0
    let charToArray=str.split("")
    charToArray.forEach( function checkIfVowel(letter){
        if(vowels.includes(letter.toLowerCase()) ){
            numberOfVowels++
        }
    })
    console/log("your string has"+ numberOfVowels + "vowels");
}