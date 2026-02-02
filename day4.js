
// array 
let x = 10
console.log(x)
console.log(typeof x)

let numbers = [11,22,33,44]
console.log(numbers)
console.log(typeof numbers)
// In javascript , everything is object


// program 2
numbers = [11,22,33,44,55]
console.log(numbers[0])
numbers[0] = 444
console.log(numbers)

// In js everything is object 
//             0         1       2     3       4
let names = ["samay","chinmay","ram","sham","satish"]
console.log(names)
console.log(names[0])
console.log(names.length)

// length -  1 is last index 
console.log(names.length-1)
for(let i = 0 ; i < names.length ; i++){
    //console.log(i)
    console.log(names[i])
}

// program 3
//              0         1       2       3      4
let animals = ["tiger","lion","rabbit","snake","dog"]
for(let i = animals.length-1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(animals[i])
}

// program 4
//                0      1       2           3
let flowers = ["rose","lotus","marrygold","jasmine"]
//console.log(flowers[0])
let i1 = 0
while(i1 < flowers.length){
    //console.log(i1)
    console.log(flowers[i1])
    i1 = i1 + 1
}

let i2 = flowers.length - 1
while(i2 >= 0){
    console.log(flowers[i2])
    i2 = i2 - 1
}


