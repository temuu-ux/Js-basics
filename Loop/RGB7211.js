// RGB7211 - Тооны зэргийн хүрд
// a тооны n хүртэлх зэрэгтүүдийг жишээн дээрх хэлбэрээр хэвлэ.

// Input
// a, n натурал тоонууд нэг мөрөнд нэг зайгаар тусгаарлагдан өгөгдөнө. (a,n<10)

// Output
// Зэргийн хүрдийг хэвлэ.

// Example
// Input:
// 3 5

// Output:
// 3^1=3
// 3^2=9
// 3^3=27
// 3^4=81
// 3^5=243
// function num(a, b) {
//   let degree = 1;
//   for (let i = 1; i <= b; i++) {
//     degree = a ** i;
//     console.log(degree);
//   }
// }
// num(3, 5);

function findDegree(a, b) {
  let degree = 1;
  for (let i = 1; i <= b; i++) {
    degree = degree * a;
    console.log(a + "^" + i + "=" + degree);
  }
}
findDegree(3, 5);
