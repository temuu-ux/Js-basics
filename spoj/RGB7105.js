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
  let result = 0;
  if (a > 80) {
    result = result + a;
  }
  if (b > 80) {
    result = result + b;
  }
  if (c > 80) {
    result = result + c;
  }
  if (d > 80) {
    result = result + d;
  }

  return result;
}
let answer = num(85, 75, 96, 69);
console.log(answer);
