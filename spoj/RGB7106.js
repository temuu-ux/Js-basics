function num(a, b, c, d) {
  let x = 1;

  if (a < 5) {
    x = x * a;
  } else {
    x = x;
  }
  if (b < 5) {
    x = x * b;
  } else {
    x = x;
  }
  if (c < 5) {
    x = x * c;
  } else {
    x = x;
  }
  if (d < 5) {
    x = x * d;
  } else {
    x = x;
  }
  return x;
}
let answer = num(3, 6, 2, 4);
console.log(answer);
