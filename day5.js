// methods in javascript
// Evething in javascript is object 
// Objects has properties and methods

// Student - amol
// Properties - age , name , lastName , firstName , Height
// Methods - walk() , talk()

// Gym()
// action -- exercise 
// return - health

// push()
// action - add the element to end of array
// return - new length

// 23 - 24 
//             0         1      2      3
let names = ["chinmay","sham","ram","sachin"]
console.log(names)

// let q1 = names.length
// console.log(q1)
let q3 = names.push("sameer")
console.log(q3)
console.log(names)

// unshift()
// action -  add the element at the start of array 
// return - new length of array

let animals = ['tiger',"lion","rabbit","snake"]
let q4 = animals.unshift("dog")
console.log(q4)
console.log(animals)

// pop()
// action - removes the last element 
// return - returns the same element 

//           0       1         2          3
let cities = ["pune","mumbai","banglore","kolkata"]
console.log(cities)
let q5 = cities.pop()
console.log(q5)
console.log(cities)

// shift()
//               0         1           2         3
let country = ["India","Pakistan","Srilanka","Bangladesh"]
let q6 = country.shift()
console.log(q6)
console.log(country)

// push() , unshift(), pop(), shift()
// length     length   return same element

// includes
// action - search for element 
// return - boolean value 
let flowers = ["lily","jasmine","rose","lotus"]
let q7 = flowers.includes("Rose")
console.log(q7)


// indexOf()
//           0        1      2        3      4       5     6
flowers = ["lily","jasmine","rose","lotus","rose","lily","rose"]
let q8 = flowers.indexOf("rose",3)
console.log(q8)

let q9 = flowers.lastIndexOf('rose')
console.log(q9)

