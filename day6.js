
// program 1
//                0    1    2    3
let birthYear = [2001,2002,2003,2004]
let ages = []
//[25,24,23,22]

for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2026 - birthYear[i])
    ages.push(2026 - birthYear[i])
}
console.log(ages)

// program 2

let marks = [77,89,54,66,75,77,98]
let above70 = []

for(let i = 0 ;  i < marks.length; i++){
    // console.log(i)
    // console.log(marks[i])
    if(marks[i] > 70){
        //console.log(marks[i])
        above70.push(marks[i])
    }
}
console.log(above70)

// program 3
let numbers = [11,22,33]
let total = 0

for(let i = 0 ; i < numbers.length ; i++){
    total = total + numbers[i]
    //       0    +    11   ------> 11
    //      11    +    22   ------> 33
    //      33    +    33   ------> 66
}
console.log(total)

// program 4
let cities = ["pune","mumbai","kolkata","nagpur"]

for(let i = 0 ; i < cities.length ; i++){
    //console.log("welcome "+ cities[i])
    console.log(`welcome  ${cities[i]}`)
}




// map(), filter(),reduce(),forEach(),find(),findIndex(),some(),every()
