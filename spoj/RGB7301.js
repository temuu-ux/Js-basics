function firstnumber(x) {
  let a = x;
  while (a >= 10) {
    a = (a - (a % 10)) / 10;
  }
  return a;
}
console.log(firstnumber(1034));
