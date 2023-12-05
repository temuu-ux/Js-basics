// RGB7209 - a тооны n зэрэг
// Өгөгдсөн тооны n зэргийг ол.

// Input
// Нэг мөрөнд Int төрлийн эерэг 2  тоо зайгаар тусгаарлагдан өгөгдөнө.

// Output
// an

// Example
// Input:
// 3 4

// Output:
// 81
function num(a, b) {
  let degree = 1;
  for (let i = 0; i < b; i++) {
    degree = degree * a;
  }
  console.log(degree);
}
num(3, 4);
