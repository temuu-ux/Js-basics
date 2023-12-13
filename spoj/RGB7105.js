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
<<<<<<< HEAD
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
=======
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
>>>>>>> a9a33287d343e2550a8acadf0f5991ba7ee1a17d
}
let answer = num(85, 75, 96, 69);
console.log(answer);
