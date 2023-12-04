// hervee  ter too 3-t huvaagdaj baival ter toog ol

function num(a, b, c, d) {
  let x = 0;
  if (a % 3 == 0) x = x + 1;
  if (b % 3 == 0) x = x + 1;
  if (c % 3 == 0) x = x + 1;
  if (d % 3 == 0) x = x + 1;

  return x;
}
let answer = num(0, 12, 2, 9);
console.log(answer);
