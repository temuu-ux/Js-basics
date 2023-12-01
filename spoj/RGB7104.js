function num(a, b, c, d) {
  if (a < b && a < c && a < d) {
    console.log(a);
  } else if (b < a && b < c && b < d) {
    console.log(b);
  } else if (c < a && b > c && c < d) {
    console.log(c);
  } else if (d < a && d < c && b > d) {
    console.log(d);
  } else {
    console.log("not answer");
  }
}
num(3, 3, 3, 3);
