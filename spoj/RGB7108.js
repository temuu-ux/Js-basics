function num(a, b, c) {
  let x = 1;
  if (a % 2 != 0) {
    x = x * a;
  } else {
    x = x;
  }
  if (b % 2 != 0) {
    x = x * b;
  } else {
    x = x;
  }
  if (c % 2 != 0) {
    x = x * c;
  } else {
    x = x;
  }
  return x;
}
let answer = num(5, 2, 3);
console.log(answer);
