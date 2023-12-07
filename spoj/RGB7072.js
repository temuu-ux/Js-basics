function num(x) {
  let sum = 0;
  if (x % 2 != 0) {
    sum = ((x + 1) * x) / 2;
  } else {
    ("error");
  }
  console.log(sum);
}
num(9);
