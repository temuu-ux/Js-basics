// function declaration
function doSomething(input) {
  console.log(input);
  return input * input;
}
// function calling
let result = doSomething(15);

console.log(result);

function printHello() {
  console.log("Hello world");
}

function getSomething(input) {
  console.log("input", input);
}
function returnSomething() {
  return "Hello World";
}

printHello();

getSomething("My text");

returnSomething();

function getMultiInput(num1, num2) {
  console.log("num1 = ", num1);
  console.log("num2 = ", num2);
  let sum = num1 + num2;
  return sum;
}
let myBrother = getMultiInput(20, 30);

console.log("sum", myBrother);

function finMonth(day) {
  if (day <= 31) {
    return "January";
  } else if (day <= 31 + 28) {
    return "February";
  } else if (day <= 31 + 28 + 31) {
    return "March";
  } else if (day <= 31 + 28 + 31 + 30) {
    return "April";
  } else if (day <= 31 + 28 + 31 + 30 + 31) {
    return "May";
  } else if (day <= 31 + 28 + 31 + 30 + 31 + 30) {
    return "June";
  } else if (day <= 31 + 28 + 31 + 30 + 31 + 30 + 31) {
    return "July";
  } else if (day <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30) {
    return "August";
  } else if (day <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30 + 31) {
    return "September";
  } else if (day <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30) {
    return "October";
  } else if (day <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30 + 31) {
    return "November";
  } else if (day <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30) {
    return "December";
  } else {
    return "not month";
  }
}

console.log(finMonth(100));

function grade(midterm1, midterm2, final) {
  let grade = midterm1 * 0.25 + midterm2 * 0.25 + final * 0.5;
  if (grade < 60) {
    return "F";
  } else if (grade < 70) {
    return "D";
  } else if (grade < 80) {
    return "C";
  } else if (grade < 90) {
    return "B";
  } else if (grade < 101) {
    return "A";
  } else {
    return "error";
  }
}

console.log(grade(60, 70, 60));
