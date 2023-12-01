// hervee 11 d huvaagddaggui bol bugdiin nem
function num(a, b, c, d) {
  let x = 0;
  if (a % 11 != 0) x = x + a;
  if (b % 11 != 0) x = x + b;
  if (c % 11 != 0) x = x + c;
  if (d % 11 != 0) x = x + d;
  return x;
}
let an = num(11, 22, 13, 33);
console.log(an);
