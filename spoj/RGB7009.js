function twoDigits(x) {
  a = x % 10;
  b = (x - a) / 10;
  c = a * b;
  return c;
}
let answer = twoDigits(32);

console.log("answer", answer);
