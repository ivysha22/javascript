/* 1:
**Question:**  
Write a function `mergeArrays(arr1, arr2)` that takes two arrays `arr1` and `arr2` and merges them into a single array, with the elements sorted in ascending order.

**Scenario:**  
You are building a music playlist app. You have two playlists from different sources. Write a function to merge these playlists into one, ensuring that the songs are sorted alphabetically by their titles. */

function mergeArrays(array1,array2){
    let alreadyMerged=[]
    for(let index=0; index<input.length; index++){
        

    }

}

/* 3:  
**Question:**  
Write a function `capitalizeWords(sentence)` that takes a sentence `sentence` and capitalizes
 the first letter of each word in the sentence.

**Scenario:**  
You are developing a blog platform where users can submit articles. Write a function to
 automatically capitalize the titles of submitted articles for consistent formatting and readability. */

function Tocapital(sentence){
    let words=sentence.split(" ");//split the sentence into words eg "hello world" becomes "hello" "world"
    let capitalWord=[];//initiates an empty array to store the caputalized word
    for(let i=0; i<words.length; i++){//loop through each word in the words array
         let InCapital=words[i].charAt(0).toUpperCase()+words[i].slice(1);
         //words[i].charAt(0).toUpperCase() takes the first char in words[i] and changes it to uppercase
         //words [i]means that it is the first word in the array remember [i] is initialized to 0 which is the first index and charAt(0) means the first char in words[i]
         //.slice(1) means that it slices the word from word one
         capitalWord.push(InCapital)//push the InCapital into the capitalWord empty array
    

    }
    return capitalWord.join(" ");
}
console.log(Tocapital("my name is ivy")); //calling the To capital function
console.log(Tocapital("coder ivy"));
/* 2:  
**Question:**  
Write a function `removeDuplicates(nums)` that takes an array of numbers `nums` and removes any duplicate numbers, returning a new array without duplicates.

**Scenario:**  
You are developing a survey application where users can select multiple options. Write a function to remove duplicate selections from the user's responses to ensure accurate data analysis. */


function removeDuplicates(input){
    let finalArray=[]//initializes an empty array place
    for(let index=0; index<input.length; index++){//loops the array and checks the length
        let currentElement=input[index]//creates a variable that will be used to push
        if(!finalArray.includes(currentElement)){//the ! exclamation mark means not so if finalarray is not included
            finalArray.push(currentElement)
        }
    }
    return finalArray
}

console.log(removeDuplicates([1,2,2,3,3,4,5,6,6,7,2,8,9,9,9]))


/* 14:  
**Question:**  
Write a function `longestSubstringWithoutRepeating(str)` that takes a string `str` and returns the length of the longest substring without repeating characters.

**Scenario:**  
You are developing a text editor with syntax highlighting. Write a function to determine the longest substring of code without any syntax errors, ensuring accurate highlighting for better code readability. */




