function calculate(num1, num2, operation) {
  let answer;
  if (operation == "+") {
    answer = num1 + num2;
  } else if (operation == "-") {
    answer = num1 - num2;
  } else if (operation == "*") {
    answer = num1 * num2;
  } else if (operation == "/") {
    answer = num1 / num2;
  } else if (operation == "%") {
    answer = num1 * (num2 / 100);
  } else {
    return "error";
  }
  return answer;
}
let answer = calculate(10, 20, "%");
console.log("answer", answer);
