// 1
// let a = 20
// let b = 30
// let c = 50
// if(a>=b && a>=c){
// console.log("a is greater" + a)
// }
// else if(b>=c && b>=a){
//     console.log("b is greater" + b)
// }
// else{
//     console.log("c is greater" + c)
// }

function maxofThree(a, b, c) {
  let max

  if (a >= b && a >= c) {
    max = a
  } else if (b >= c) {
    max = b
  } else {
    max = c
  }

  return max
}
console.log(maxofThree(4, 50, 108))

//2.
const num = -1
if (num < 0) {
  console.log("Negative")
} else if (num == 0) {
  console.log("Zero")
} else {
  console.log("Positive")
}

//3.
let total = 0
let unit = 250

if (unit >= 0 && unit <= 100) {
  total = unit * 5
} else if (unit >= 101 && unit <= 200) {
  total = 100 * 5 + (unit - 100) * 7
} else if (unit >= 201 && unit <= 300) {
  total = 100 * 5 + 100 * 7 + (unit - 200) * 10
} else {
  total = 100 * 5 + 100 * 7 + 100 * 10 + (unit - 300) * 12
}

console.log(total)

// 4.

function FindVovelOrConsonents(input) {
  if (
    input == "a" ||
    input == "e" ||
    input == "i" ||
    input == "o" ||
    input == "u"
  ) {
    console.log("Vovel")
  } else {
    console.log("Consonents")
  }
}
function ForChickingType(input) {
  if (typeof input == "string" && input !== "") {
    // return input.toLowerCase()
    FindVovelOrConsonents(input.toLowerCase())
  } else if (typeof input == "number") [console.log("Number Not Required")]
}
ForChickingType("A")

// 5.
function LeapYear(input) {
  if ((input % 4 == 0 && input % 100 !== 0) || input % 400 == 0) {
    console.log("Leap Year")
  } else {
    console.log("Not a Leap year")
  }
}
LeapYear(2029)

//Home Work

// 1.

function CheckCharcter(input) {
  if (input.charCodeAt() >= 65 && input.charCodeAt() <= 90) {
    console.log("Charcter is Upper Case")
  } else if (input.charCodeAt() >= 97 && input.charCodeAt() <= 122) {
    console.log("Charcter is Lower Case")
  } else if (input.charCodeAt() >= 48 && input.charCodeAt() <= 57) {
    console.log("Charcter is Digit")
  } else if (
    (input.charCodeAt() >= 32 && input.charCodeAt() <= 47 ) ||
    (input.charCodeAt() >= 58 && input.charCodeAt() <= 64) ||
    (input.charCodeAt() >= 91 && input.charCodeAt() <= 96) ||
    (input.charCodeAt() >= 123 && input.charCodeAt() <= 126)
  ) {
    console.log("Charcter is Special Chracter")
  }
}
CheckCharcter(")")


