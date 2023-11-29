function lastDigits(x) {
  let y;
  if (x > 10) {
    y = x % 10;
  } else if (x > 100) {
    y = (x % 100) % 10;
  } else {
    y = "not answer";
  }
  return y;
}
let answer = lastDigits(423);
console.log(answer);
