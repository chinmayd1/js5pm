
// map()

let names = ["sarika","sachin","aachal","satish"]
let e1 = names.map(function(el,index,arr){
    return el.toUpperCase()
})
console.log(e1)

// filter()

numbers = [11,22,33,44]
// [22,44]
// [11,33]
// ["odd","even","odd","even"]

let even = numbers.filter(function(el){
    return el % 2 == 0
})
let odd = numbers.filter(function(el){
    return el % 2 != 0
})
console.log(even)
console.log(odd)

let e3 = numbers.map(function(el){
    return el % 2 == 0 ?"even":"odd"
})
console.log(e3)


// reduce()
let numbersC  = [11,22,33]
let total = numbersC.reduce(function(acc,el){
    return el + acc
},0)
console.log(total)

// forEach()

let cities = ["pune","mumbai","banglore","kolkata"]
cities.forEach(function(el){
    console.log("welcome "+ el)
})

// find()
//        0   1  2  3  4  5  6 7
let nE = [11,22,33,44,11,22,33,44]
let grtThan20 = nE.filter(function(el){
    return el > 20
})
console.log(grtThan20)

let firstE = nE.find(function(el){
    return el > 20
})
console.log(firstE)

// findIndex()
let firstIndex = nE.findIndex(function(el){
    return el > 20
})
console.log(firstIndex)

// every()

let color = ["red","blue","orange","green"]
let q2 = color.every(function(el){
    return el.length >= 3
})
console.log(q2)


// some()
let colorB = ["red","blue","orange","green"]
let w2 = colorB.some(function(el){
    return el.length > 7
})
console.log(w2)

