// RGB7302 - Цифрүүдийн нийлбэр
// Өгөгдсөн тооны цифрүүдийн нийлбэрийг ол.

// Input
// Натурал тоо өгөгдөнө.

// Output
// Цифрүүдийн нийлбэр

// Example
// Input:
// 234

// Output:
// 9
// function digits(x) {
//   let three = 0;
//   let two = 0;
//   let one = 0;
//   let sum = 0;
//   if (x) {
//     three = (x - (x % 100)) / 100;
//     two = ((x % 100) - (x % 10)) / 10;
//     one = (x % 100) % 10;
//     sum = three + two + one;
//   }
//   return sum;
// }
// console.log(digits(257));
// // let x = 234;
// console.log((x - (x % 100)) / 100);
// console.log(((x % 100) - (x % 10)) / 10);
// console.log((x % 100) % 10);
// function digits(x) {
//   let three = 0;
//   let two = 0;
//   let one = 0;
//   let sum = 0;
//   for (let i = 10; i < x; i++) {
//     if (x) {
//       three = (x - (x % 100)) / 100;
//       two = ((x % 100) - (x % 10)) / 10;
//       one = (x % 100) % 10;
//       sum = three + two + one;
//       console.log(three);
//       console.log(two);
//       console.log(one);
//       console.log(sum);
//     }
//     return sum;
//   }
// }
// console.log(digits(25700));

function digits(x) {
  let sum = 0;
  let result = 0;
  while (x > 0) {
    result = x % 10;
    sum = sum + result;
    x = (x - (x % 10)) / 10;
    console.log(result, "result");
    console.log(sum, "sum");
    console.log(x, "x");
  }
  return sum;
}
console.log(digits(234));
