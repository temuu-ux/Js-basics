// function num(x) {
//   let sum = 0;
//   let result = 0;
//   for (let i = 0; i <= x; i++) {
//     if (i % 2 != 0) {
//       sum = i;
//       result = result + sum;
//     }
//   }
//   return result;
// }
// console.log(num(9));

// i=1 gej avahgui bol i tegsh toonuudiig avah bolno
// jishee ni 0 ees ehelvel 0,2,4,,6,8gej avna
// function num(x) {
//   let result = 0;
//   for (let i = 1; i <= x; i = i + 2) {
//     result = result + i;
//   }
//   return result;
// }
// console.log(num(9));

function num(x) {
  let result = 0;
  for (let i = 0; i <= x; i++) {
    if (i % 2 != 0) {
      result = result + i;
    }
  }
  return result;
}
console.log(num(9));
