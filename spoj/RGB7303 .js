function digits(x) {
  let num = 0;
  catchDigit = 0;
  for (let i = x; i >= 1; ) {
    num = i % 10;
    if (num % 2 == 0) {
      catchDigit = catchDigit + num;
    }
    i = (i - (i % 10)) / 10;
  }
  return catchDigit;
}
console.log(digits(34567));

//  eldnleelcj3pohcr3pirhc3pirchi3prchvjieprcvhehrveruhcv3uorh

function sumOfEvenDigit(num1) {
  let catchDigit = 0;
  let evenSum = 0;
  for (let i = num1; i >= 1; ) {
    catchDigit = i % 10;
    if (catchDigit % 2 == 0) {
      evenSum = evenSum + catchDigit;
    }
    i = (i - (i % 10)) / 10;
  }
  return evenSum;
}

console.log(sumOfEvenDigit(34567));
