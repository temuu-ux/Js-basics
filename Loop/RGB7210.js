// RGB7210 - Тооны хүрд
// Өгөгдсөн тооны хүрдийг дараах хэлбэрээр гарга.

// Input
// n натурал тоо өгөгдөнө. n<=10.

// Output
// n тооны хүрд нэг нэг мөрөнд хэвлэ.

// Example
// Input:
// 3

// Output:
// 3*1=3
// 3*2=6
// 3*3=9
// 3*4=12
// 3*5=15
// 3*6=18
// 3*7=21
// 3*8=24
// 3*9=27
// 3*10=30
function num(x) {
  let multiple = 1;
  for (let i = 0; i < 10; i++) {
    multiple = x * i;
    console.log(multiple);
  }
}
num(9);
