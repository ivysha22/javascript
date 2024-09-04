/* array methods */
// array methods are used to perform operations on arrays
// they are methods of the array object


//push(element)--Adds one or more elements to the end of an array and returns the new length.
let arr1 = [1, 2, 3];
arr1.push(4);  // arr becomes [1, 2, 3, 4]

//pop()--Removes the last element from an array and returns it.
let arr2 = [1, 2, 3];
arr2.pop();  // arr becomes [1, 2], returns 3

//shift()--Removes the first element from an array and returns it.
let arr3 = [1, 2, 3];
arr3.shift();  // arr becomes [2, 3], returns 1

//splice(start, deleteCount, ...items)--Adds, removes, or replaces elements in an array. Returns the removed elements.
let arr4 = [1, 2, 3, 4];
arr4.splice(1, 2);  // arr becomes [1, 4], returns [2, 3]
arr4.splice(1, 0, 5);  // arr becomes [1, 5, 4], returns []


//reverse()--Reverses the order of the elements in the array.
let arr5 = [1, 2, 3];
arr5.reverse();  // arr becomes [3, 2, 1]

//








