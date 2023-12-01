// hervee ter too 2-t uldeglelgui huvaagdaj baival orn0
// uldegdeltei baival orohgui
function num(a, b, c) {
  let x = 0;
  if (a % 2 == 0) {
    x = x + a;
  } else {
    x = 0;
  }
  if (b % 2 == 0) {
    x = x + b;
  } else {
    x = x;
  }
  if (c % 2 == 0) {
    x = x + c;
  } else {
    x = x;
  }
  return x;
}
let answer = num(2, 4, 5);
console.log(answer);
