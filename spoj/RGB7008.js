function digits(x) {
  let y;
  if (x > 100) {
    y = ((x % 100) - (x % 10)) / 10;
  } else {
    y = "not answer";
  }
  return y;
}
let answer = digits(423);
console.log(answer);
