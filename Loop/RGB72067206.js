// RGB7206 - 100-г n удаа нэм
// 100-гийн тоог тодорхой давталт ашиглан өгөгдсөн тоон удаа нэм.

// Input
// Int төрлийн эерэг тоо өгөгдөнө.

// Output
// Нийлбэр

// Example
// Input:
// 6
// Output:
// 600

function num(x) {
  let sum = 0;
  for (let i = 0; i < x; i++) {
    sum = sum + 100;
  }
  console.log(sum);
}
num(6);
