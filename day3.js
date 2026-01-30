
// intialization
// while(condition){
    // statement
    // increment / decrement
//}

// print 1 to 3
let i1 = 1
while(i1 <= 3){
    console.log(i1) // 1 // 2 // 3
    i1 = i1 + 1 // 2// 3 // 4
}

// print hello 3 times
let i2 = 1
while(i2 <= 3){
    console.log("hello") // "hello" , "hello" , "hello"
    i2 = i2 + 1 // 2 // 3 // 4
}

// print 1 to 5
let i3 = 1
while(i3 <= 5){
    console.log(i3)
    i3 = i3 + 1
}

// print 5 to 1
let i4 = 5
while(i4 >= 1){
    console.log(i4)
    i4 = i4 - 1
}

// table of 2 
let i5 = 2
while(i5 <= 20){
    console.log(i5)
    i5 = i5 + 2
}

let i6 = 1 
while(i6 <= 10){
    console.log(i6 * 2)
    i6 = i6 + 2
}

let i7 = 20
while(i7 >= 2){
    console.log(i7)
    i7 = i7 -2
}

let i8 = 50
while(i8 >= 5){
    console.log(i8)
    i8 = i8 - 5
}


// break statement with while loop

let i9 = 5

while(i9 >= 1){
    if(i9 == 3){
        break
    }
    console.log(i9) // 5 // 4
    i9 = i9 - 1 // 4 // 3
}

let i10 = 1 

while(i10 <= 5){
    console.log(i10) // 1 // 2 // 3
    if(i10 == 3){
        break
    }
    i10 = i10 + 1 // 2 //3
}


