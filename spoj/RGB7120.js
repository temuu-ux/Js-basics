function tra(a, b, c) {
  if (a ** 2 + b ** 2 == c ** 2) {
    console.log("YES");
  } else if (a ** 2 + c ** 2 == b ** 2) {
    console.log("YES");
  } else if (b ** 2 + c ** 2 == a ** 2) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
tra(5, 4, 3);
