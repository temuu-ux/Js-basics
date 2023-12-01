// function num(a, b, c, d) {
//   if (a > 80 && b > 80 && c > 80 && d > 80) {
//     console.log(a + b + c + d);
//   } else if (a > 80 && b < 80 && c > 80 && d > 80) {
//     console.log(a + c + d);
//   } else if (a > 80 && b > 80 && c < 80 && d > 80) {
//     console.log(a + b + d);
//   } else if (a > 80 && b > 80 && c < 80 && d > 80) {
//     console.log(a + b + d);
//   } else if (a > 80 && b > 80 && c > 80 && d < 80) {
//     console.log(a + b + c);
//   }

// }
// num(85, 75, 96, 69);
function num(a, b, c, d) {
  let x = 0;
  if (a > 80) {
    x = x + a;
  } else {
    x = 0;
  }
  if (b > 80) {
    x = x + b;
  } else {
    x = x;
  }
  if (c > 80) {
    x = x + c;
  } else {
    x = x;
  }
  if (d > 80) {
    x = x + d;
  } else {
    x = x;
  }
  return x;
}
let answer = num(85, 75, 96, 69);
console.log(answer);
