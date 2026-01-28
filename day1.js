let x = 10
console.log(x)
x = 1000
console.log(x)

const h = 1000
console.log(h)
//h = 1000

// Arithmetic operators

let g = 8
let k = 4 

console.log(g+k)
console.log(g-k)
console.log(g*k)
console.log(g/k)
console.log(g%k)


let j = 9
let l = 6


console.log(j+l)
console.log(j-l)
console.log(j*l)
console.log(j/l)
console.log(j%l)


function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(12,4)
Calculator(10,5)
Calculator(10,4)


// function without parameter and without return type
function addA(){
    console.log(9+9)
}
addA()
addA()
addA()


// function with parameter and without return type
function addB(x,y){
    console.log(x+y)
}
addB(23,4)
addB(23,1)
addB(23,5)

// function with parameter and with return type
function addC(x,y){
    return x + y
}
let r1 = addC(12,4)
console.log(r1)
console.log(r1 - r1)
console.log(r1 + r1)
console.log(r1 / r1)
console.log(r1 % r1)


let a11 = 10
console.log(typeof(a11))
// 10 , -10 , -10.5 , 10.5 , 0.34 , -0.123

let a12 = true
console.log(typeof(a12))
// true  false

let a13 = "chinmay"
console.log(typeof(a13))
// "A" , "a", "1","a21434","#@!#df","234324","32###"

// comparison operation 
// entity > entitiy ---> boolean --> true or false


// < , > , <= , >=
// == , != ----> value
// === , !== ----> value and type 


console.log(3 === 3)
console.log(3 === '3')
console.log(3 !== '3')
console.log(3 !== 3)
console.log(3 != 3)
console.log(3 != '3')
console.log(3 == '3')
console.log(3 == 3)
console.log(3 > 1)
console.log(3 < 1)
console.log(3 >= 1)
console.log(3 <= 1)
console.log(3 >= 3)
console.log(3 <= 3)

// logical operator

// && 
//  true    &&     true   ---> true
//  false   &&     true   ---> false
//  true    &&     false  ---> false
//  false   &&     false  ---> false

console.log(2 == 2 && 3 == 3)
console.log(2 != 2 && 3 == 3)
console.log(2 == 2 && 3 != 3)
console.log(2 != 2 && 3 != 3)

// or 

// || 
//  true    ||     true   ---> true
//  false   ||     true   ---> true
//  true    ||     false  ---> true
//  false   ||     false  ---> false

console.log(2 == 2 || 3 == 3)
console.log(2 != 2 || 3 == 3)
console.log(2 == 2 || 3 != 3)
console.log(2 != 2 || 3 != 3)

// not
// ! true --> false
// ! false --> true
console.log(!(2 == 2))
console.log(!(2 != 2))

// conditional statement 

// one input and multiple outcomes

// if(condition){
//     // statement
// }

// program 1

let numT = 5

if(numT > 0 && numT <= 5){
    console.log("10 % disocunt")
}
if(numT > 5 && numT <= 10){
    console.log("20 % disocunt")
}
if(numT > 10){
    console.log("30 % disocunt")
}


if(numT > 0 && numT <= 5){
    console.log("10 % disocunt")
}
else if(numT > 5 && numT <= 10){
    console.log("20 % disocunt")
}
else if(numT > 10){
    console.log("30 % disocunt")
}
else {
    console.log("incorrect ")
}

let marks = 92

if(marks > 90){
    console.log("Grade A")
}
if(marks >= 75){
    console.log("Grade B")
}
if(marks >= 65){
    console.log("Grade C")
}

if(marks > 90){
    console.log("Grade A")
}
else if(marks >= 75){
    console.log("Grade B")
}
else if(marks >= 65){
    console.log("Grade C")
}
else {
    console.log('please try again')
}


let h1 = 100
let h2 = 50

if(h1 > h2){
    console.log("h1 is greater")
}
else {
    console.log("h2 is greater")
}
// condition ? statement : statement 2
h1 > h2 ? console.log("h1 is greater"):console.log("h2 is greater")


let q11 = 100
let q22 = 50
let q33 = 20

if(q11 > q22 && q11 > q33){
    console.log("q11 is greater")
}
else if(q22 > q11 && q22 > q33){
    console.log("q22 is greater")
}
else {
    console.log("q33 is greater")
}

// switch case 

let city = "pune"

switch(city){
    case "pune":
        console.log("MH")
    case "jaipur":
        console.log("RJ")
    default:
        console.log("please input correct city name")
}

switch(city){
    case "pune":
        console.log("MH")
        break
    case "jaipur":
        console.log("RJ")
        break
    default:
        console.log("please input correct city name")
}



switch(city){
    case "pune":
    case "nagpur":
        console.log("MH")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    default:
        console.log("please input correct city name")
}

q11 = 100
q22 = 50
q33 = 20
biggest = true

switch(biggest){
    case q11 > q22 && q11 > q33:
        console.log("q11 is gretaer")
        break
    case q22 > q11 && q22 > q33:
        console.log("q22 is greater")
        break
    default:
        console.log("q33 is greater")
}