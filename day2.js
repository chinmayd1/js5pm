
// for loop and while loop 
// for(intialization,conditionCheck;increment/decrement){
//     // statements
// }


// print 1 to 3

for(let i = 1 ; i <= 3 ; i++){ // 2 // 3 // 4
    console.log(i) // 1 // 2 // 3
}

// 1 <= 3  -----> true
// 2 <= 3  -----> true
// 3 <= 3  -----> true
// 4 <= 3  -----> false

// program 2
// print hello 2 times
for(let i = 1 ; i <= 3 ; i++){ // 2 // 3 // 4
    console.log("hello") // "hello" // "hello" // "hello"
}

// program 3
// print 1 to 5
for(let i = 1 ; i <= 5 ; i++){//2 // 3 // 4 // 5 // 6
    console.log(i) //1 // 2 // 3 // 4 // 5
}

// program 4
// print 5 to 1
for(let i = 5 ; i >= 1;i--){ // 4 // 3 // 2 //1 // 0
    console.log(i) // 5 // 4 // 3 // 2 // 1
}

// program 5
// print 3 to 1
for(let i = 3 ; i >= 1 ; i--){
    console.log(i)
}

// program 6
// print table of 2 
for(let i = 1 ; i <= 10 ; i++){
    console.log(i*2)
}
// print table of 2 in reverse 
for(let i = 10 ; i >= 1 ; i--){
    console.log(i*2)
}

for(let i = 2 ; i <= 20 ; i = i + 2){ // 4 // 6 ---- 22
    console.log(i) // 2 // 4 ------------- 20
}
// table of 5 in reverse 
for(let i = 50 ; i >= 5 ;i = i-5){
    console.log(i)
}
for(let i = 30 ; i >= 3 ; i = i-3){
    console.log(i)
}

// program 3
// break statement 

for(let i = 1 ; i <= 5 ; i++){ // 2 // 3
    console.log(i) // 1 //2 //3
    if(i == 3){
        break
    }
}

for(let i = 1 ; i <= 5 ; i++){   //2 // 3
    if(i == 3){
        break
    }
    console.log(i)  // 1  // 2
}

for(let i = 5 ; i >= 1 ; i--){
    if(i == 3){
        break
    }
    console.log(i)
}

for(let i = 5 ; i >= 1 ; i--){
    console.log(i)
    if(i == 3){
        break
    }
   
}

// program 4

for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 // 4 // 5 // 6
    if(i == 3){
        continue
    }
    console.log(i) //1 // 2 // 4 // 5
    console.log("hello") //"hello" //"hello" // "hello" // "hello"
}

for(let i = 5 ; i >= 2 ; i--){
    if(i == 3){
        continue
    }
    console.log(i)
}