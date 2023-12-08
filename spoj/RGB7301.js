function numbers(num) {
  let digits = 0;

  if (num >= 1000) {
    digits = (num - (num % 1000)) / 1000;
  } else if (num >= 100) {
    digits = (num - (num % 100)) / 100;
  } else if (num >= 10) {
    digits = (num - (num % 10)) / 10;
  } else {
    digits = "error";
  }

  console.log(digits);
}
numbers(1234);

function numbers(num) {
  let digits = 0;
  let result = 0;
  for (let i = 1000; i <= 10; i++) {
    digits = (num - (num % i)) / i;
    result = digits;
  }
  console.log(result);
}
numbers(1234);
