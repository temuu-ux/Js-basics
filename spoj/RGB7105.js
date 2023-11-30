function num(a, b, c, d) {
  if (a > 80 && b > 80 && c > 80 && d > 80) {
    console.log(a + b + c + d);
  } else if (a > 80 && b < 80 && c > 80 && d > 80) {
    console.log(a + c + d);
  } else if (a > 80 && b > 80 && c < 80 && d > 80) {
    console.log(a + b + d);
  } else if (a > 80 && b > 80 && c < 80 && d > 80) {
    console.log(a + b + d);
  } else if (a > 80 && b > 80 && c > 80 && d < 80) {
    console.log(a + b + c);
  }
}
num(85, 75, 96, 69);
