// let-> declare a varaible
// = -> assign a value
// assignment -> suulgaj ogoh
// "trapane" -> value
// "" -> questation mark
// ; -> (semi colon)  end of the line
// let firstname = "trapane";
// let myAge = 18;

//console.log -> ur dung hevleh command
// console.log(firstname);
// console.log(myAge);

// let num1 = 50;
// let num2 = 20;

// // let sum = num1 + num2;
// let product = num1 * num2;
// let division = num1 / num2;
// let subtraction = num1 - num2;

// console.log(num1 + num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 - num2);

// // y= x*x + 2*x + 1;
// // let x = 5;
// // do something here
// let answer = x * x + 2 * x + 1;
// console.log(answer);

// // declare a varaible called "number1" and "number2" and assign a value
// // let number1 = 30;
// let number2 = 5;
// //and print out sum of the two varaibles
// let sum = number1 + number2;
// console.log(sum);

// // = >right hand operator
// // + - * / -> left hand operator
// let number = 25;
// number = number - number + 20;

// console.log(number);
// // shine yum
// let x = 15;
// let y = 20;
// if (x > y) {
//   console.log("x is bigger");
// } else {
//   console.log("y is bigger");
// }

// // let myAge = 18;
// if (myAge > 21) {
//   console.log("orno");
// } else {
//   console.log("orohgui");
// }

// let myBirthYear = 2005;
// console.log(2023 - myBirthYear);

// let myAge = 18;
// if (myAge >= 18) {
//   console.log("allowed", myAge);
// } else {
//   console.log("not allowed", myAge);
// }
// let myAge = 18;
// console.log("temuulen", myAge);

//data types
// let number1 = 15;
// let myString = "15"; //string type "text"
// let myBool = false; // boolean type (can contain only false and true)
// console.log("number1=", number1);
// console.log("myString", muString);

// hervee tentsuu bol
// let myNum = 20;
// if (myNum == 20) {
//   console.log("mu Num is 20");
// }git

// let day = 1;
// if (day == 1) {
//   console.log("monday");
// } else if (day == 2) {
//   console.log("Tuesday");
// } else if (day == 3) {
//   console.log("wednesday");
// } else if (day == 4) {
//   console.log("thursday");
// } else if (day == 5) {
//   console.log("friday");
// } else if (day == 6) {
//   console.log("saturday");
// } else if (day == 7) {
//   console.log("sunday");
// } else {
//   console.log("Not week");
// }
// let day = 264;
// if (day <= 31) {
//   console.log("January");
// } else if (day <= 31 + 28) {
//   console.log("February");
// } else if (day <= 31 + 28 + 31) {
//   console.log("March");
// } else if (day <= 31 + 28 + 31 + 30) {
//   console.log("April");
// } else if (day <= 31 + 28 + 31 + 30 + 31) {
//   console.log("May");
// } else if (day <= 31 + 28 + 31 + 30 + 31 + 30) {
//   console.log("June");
// } else if (day <= 31 + 28 + 31 + 30 + 31 + 30 + 31) {
//   console.log("July");
// } else if (day <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31) {
//   console.log("August");
// } else if (day <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30) {
//   console.log("September");
// } else if (day <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31) {
//   console.log("October");
// } else if (day <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30) {
//   console.log("November");
// } else if (day <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) {
//   console.log("December");
// } else {
//   ("not month");
// }

// let midterm1 = 90;
// let midterm2 = 60;
// let final = 70;
// let grade = (midterm1 + midterm2 + final) / 3;
// if ((midterm1 + midterm2 + final) / 3 < 60) {
//   console.log("F", grade);
// } else if ((midterm1 + midterm2 + final) / 3 < 70) {
//   console.log("D", grade);
// } else if ((midterm1 + midterm2 + final) / 3 < 80) {
//   console.log("C", grade);
// } else if ((midterm1 + midterm2 + final) / 3 < 90) {
//   console.log("B", grade);
// } else if ((midterm1 + midterm2 + final) / 3 < 101) {
//   console.log("A", grade);
// } else {
//   console.log("not grade");
// }
let midterm1 = 90;
let midterm2 = 60;
let final = 70;
let grade = midterm1 * 0.25 + midterm2 * 0.25 + final * 0.5;
if (midterm1 * 0.25 + midterm2 * 0.25 + final * 0.5 < 60) {
  console.log("F", grade);
} else if (midterm1 * 0.25 + midterm2 * 0.25 + final * 0.5 < 70) {
  console.log("D", grade);
} else if (midterm1 * 0.25 + midterm2 * 0.25 + final * 0.5 < 80) {
  console.log("C", grade);
} else if (midterm1 * 0.25 + midterm2 * 0.25 + final * 0.5 < 90) {
  console.log("B", grade);
} else if (midterm1 * 0.25 + midterm2 * 0.25 + final * 0.5 < 101) {
  console.log("A", grade);
} else {
  console.log("not grade");
}
