//variable naming rules in js and naming conventions
/* 
#variable naming  rules in js

case sensitive--sharon, Sharon and SHARON are different
starting--can start with characters and underscores but not integers
no spaces--variable names cannot contain spaces
camel case--var names are written in camel case example:Myvariable or myVariable 
keywords--keywords like  let, const, var, function, class etc cannot be used as variable names

#naming conventions

camel case--The first word is in lowercase, and each subsequent word starts with an uppercase letter.
            Example: myVariable, myFunction, myObject
pascal case--Each word starts with an uppercase letter.
             Example: FirstName, LastName
snake case--All letters are uppercase, and words are separated by underscores.
            Example:FIRST_NAME,  LAST_NAME
kebab case--All letters are lowercase, with words separated by hyphens.
            Example: first-name, last-name


*/


//diff btn accessing by value and accessing by refence in regard to accessing variable /data



//practice accessing data in arrays and objects---using dot and bracket notation

const matatus = [
    {
      routes: ["Nakuru-Eldoret", "Nakuru-Naivasha"],
      color: "Yellow",
      capacity: 30,
      plateNumber: "KCB 234X"
    },
    {
      routes: ["Nakuru-Nairobi", "Nakuru-Gilgil"],
      color: "Blue",
      capacity: 40,
      plateNumber: "KAA 123Y"
    },
    {
      routes: ["Nakuru-Limuru", "Nakuru-Njoro", "Nakuru-Subukia"],
      color: "Green",
      capacity: 45,
      plateNumber: "KAB 123X"
    },
    {
      routes: ["Nakuru-Kiambu", "Nakuru-Maai Mahiu"],
      color: "Red",
      capacity: 35,
      plateNumber: "KAC 123Y"
    },
    {
      routes: ["Nakuru-Salgaa", "Nakuru-Rongai"],
      color: "Orange",
      capacity: 25,
      plateNumber: "KAD 123X"
    },
    {
      routes: ["Nakuru-Nyeri", "Nakuru-Nyandarua"],
      color: "Purple",
      capacity: 38,
      plateNumber: "KAE 123Y"
    },
    {
      routes: ["Nakuru-Kericho", "Nakuru-Bomet"],
      color: "Pink",
      capacity: 42,
      plateNumber: "KAF 123X"
    },
    {
      routes: ["Nakuru-Narok", "Nakuru-Naivasha"],
      color: "Brown",
      capacity: 30,
      plateNumber: "KAG 123Y"
    },
    {
      routes: ["Nakuru-Turkana", "Nakuru-Marsabit"],
      color: "White",
      capacity: 50,
      plateNumber: "KAH 123X"
    },
    {
      routes: ["Nakuru-Kisumu", "Nakuru-Siaya"],
      color: "Black",
      capacity: 45,
      plateNumber: "KAI 123Y"
    }
  ];

  /*
1. Access the second route of the third matatu.
2. Get the color of the last matatu. 
2. Iterate over the array and print the plate number and color of each matatu e.g. KAI 123
3. Find the matatu with the highest capacity.
4. Check if the fifth matatu has the route "Nakuru-Eldoret".
5. Add a new route "Nakuru-Mombasa" to the seventh matatu.
6. Write a function to sort the matatus by their capacity in ascending order.
7. Create a new matatu object with routes ["Nakuru-Kakamega", "Nakuru-Bungoma"], color "Gray", capacity 38, and plate number "KAJ 123Y". Add it to the array.
8. Write a funciton to calculate the average capacity of all matatus.
9. Write a function to check if any two matatus have the same plate number, returns the plate if found an null if none
10. Create a new array containing only the routes of the matatus with a capacity greater than 40.


  */
 /* 1. */console.log(matatus[2].routes[1]);
 /* 2 */console.log(matatus[9].color);
 /* 3 */