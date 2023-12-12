// function isPrime(num) {
//   let answer;
//   let division;
//   multiple = 1;
//   for (let i = 2; i < num; i++) {
//     division = num % i;
//     multiple = multiple * division;

//     if (multiple != 0) {
//       answer = "true";
//     } else {
//       answer = "false";
//     }
//   }
//   return answer;
// }

// let number = isPrime(347);
// console.log(number);

function isPrime(num) {
  let prime = true;
  for (let i = 2; i < num; i++) {
    if (num % i > 0) {
      prime;
    } else {
      prime = false;
    }
  }
  return prime;
}
let number = isPrime(4);
console.log(number);
