function isPrime(num) {
  let answer;
  let division;
  multiple = 1;
  for (let i = 2; i < num; i++) {
    division = num % i;
    multiple = multiple * division;
    if (multiple != 0) {
      answer = true;
    } else {
      answer = false;
    }
  }
  return answer;
}

function findPrime(num1, num2) {
  let array = [];
  let count = 0;

  for (let i = num1; i <= num2; i++) {
    if (isPrime(i) == true) {
      array[count] = i;
      count = count + 1;
    }
  }
  return array;
}
let give = findPrime(1, 100);
console.log(give);
