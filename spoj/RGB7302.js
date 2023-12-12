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
function digits(x) {
  let three = 0;
  let two = 0;
  let one = 0;
  let sum = 0;
  if (x) {
    three = (x - (x % 100)) / 100;
    two = ((x % 100) - (x % 10)) / 10;
    one = (x % 100) % 10;
    sum = three + two + one;
  }
  return sum;
}
console.log(digits(257));
// let x = 234;
// console.log((x - (x % 100)) / 100);
// console.log(((x % 100) - (x % 10)) / 10);
// console.log((x % 100) % 10);
