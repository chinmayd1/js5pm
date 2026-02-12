
// concat 

let arr1 = [11,22,33]
let arr2 = [44,55,66]
let arr3 = arr1.concat(arr2)
console.log(arr3)

// at()
//              0        1      2        3        4       5
let names = ["chinmay","ram","chinmay","sham","sachin","chinmay"]
let e2 = names.at(0)
console.log(e2)

// indexOf()
let e3 = names.indexOf("chinmay")
console.log(e3)

let e4 = names.indexOf("Chinmay")
console.log(e4)

let e5 = names.lastIndexOf("chinmay")
console.log(e5)

let e6 = names.indexOf("chinmay",1)
console.log(e6)

// splice()
//               0          1         2           3
let country = ["india","srilanka","pakistan","bangladesh"]
// console.log(country)
// country.pop()
// country.unshift()

//country.splice(fromIndex,numberOfElement)
// country.splice(2,1)
// console.log(country)

country.splice(2,1,"cuba")
console.log(country)

// sort()
country = ["india","srilanka","pakistan","bangladesh"]
country.sort()
console.log(country)

// reverse()
country = ["india","srilanka","pakistan","bangladesh"]
country.reverse()

// join()

let info = ["chinmaydeshpande","gmail.com"]
let s1 = info.join("@")
console.log(s1)

let info2 = ["chinmay","deshpande","7709192441"]
let s2 = info2.join('-')
console.log(s2)

// slice()
//             0         1        2          3         4
let cities = ['pune',"mumbai","bangalore","kolkata","chennai"]
//              -5     -4          -3        -2         -1
//cities.slice(starIndex,endIndex(not include))

console.log(cities.slice(2))
console.log(cities.slice(1,4))
console.log(cities.slice(1,-1))
console.log(cities.slice(-5,4))
console.log(cities.slice(-5,-2))
console.log(cities.slice(-1,-5))
console.log(cities.slice(4,1))


// fill()

// search and do 
// loop 8:30pm
// sat , sun



