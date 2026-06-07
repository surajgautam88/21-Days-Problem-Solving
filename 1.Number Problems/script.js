//Ques1:- Print Numbers from 1 to N;
let n = 20;
for(let i = 1; i<=20; i++){
    console.log(i);

}
console.log("")

//Ques2:- Print Numbers from N to 1 without changing the loop condition of above
let num = 20
for(let i=num; i>=1; i--){
    console.log(i);

}

//Ques3:- print All Even Numbers from 1 to N

let b = 100
for(let i = 1; i<=b; i++){
    if(i%2 == 0){
        console.log(`${i} is Even`)

    }
}

//Ques4:- sum of first N Natural Numbers
// natural num = 1 to n
// input 5 then = 5+4+3+2+1
// it's brute force solution
//  solution A
console.time()
let input = 1000n
let sum1 = 0n
for(let i=1n; i<=input; i++){
    sum1 +=i
}
console.log(sum1)
console.timeEnd()

//solution B(Optimise Approach)

console.time()
let n1 = 1000000000
let sum2 = n1*(n1+1)/2

console.log(sum2)
console.timeEnd()

//Ques5:- Product (factorial) of N
// n = 5, op = 5*4*3*2*1 = 120

let n2 = 5
let facto = 1
for(let i=1; i<=n2; i++){
    facto *= i
}
console.log(facto);

//Ques6:- Sum of all even numbers up to n
//  ***brute force solution***

console.time()
let n3 = 10n
let sum3 = 0n
for(let i=0n; i<=n3; i++){
    if(i%2n == 0){
        sum3 = sum3 + i
    }
}
console.log(sum3);
console.timeEnd()

// *** Optimise Solution***(task)
console.time()
let n4 = 10
let sum4 = n4*(n4+2)/4
console.log(sum4);
console.timeEnd()

//Ques7:- Print Square of Numbers from 1 to N

console.time()
let n5 = 5
for(let i=1; i<=n5; i++){
    console.log(i*i);
    // console.log(Math.pow(i, 2));

}
console.timeEnd()

//HomeWork
// 1. Print all numbers divisible by 3 and 5 up to n
// input = 30, op = 15, 30

// brute force soltion
let n6 = 30
let divisibleNo = []
for(let i=1; i<=n6; i++){
    if(i%3 == 0 && i%5 == 0){
        divisibleNo.push(i)
    }
}
console.log(divisibleNo);

//2. Find the sum of all odd numbers up to N
// input = 10 then, 25(1+3+5+7+9)
// brute force solution

let n7 = 10
let sum5 = 0
for(let i=1; i<=n7; i++){
    if(i%2 !== 0){
        sum5 += i
    }
}
console.log(sum5);

//3. print the cubes of numbers from 1 to N
// input = 5, op = 1 8 27 64 125

console.time()
let n8 = 5
for(let i=1; i<=n8; i++){
    // console.log(Math.pow(i, 3))
    console.log(i*i*i);

}
console.timeEnd()

//4. Print only the numbers that are both even and perfect square
// input = 1 to 20, then  op = 4 16

let n9 = 20
let root = 0
for (let i = 1; i <= n9; i++) {
  if (i % 2 == 0) {
    root = i * i
    if (Math.sqrt(root) == i) {
      if (root <= n9) {
        console.log(root)
      }
    }
  }
}
