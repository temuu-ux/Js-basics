// RGB7170 - Давхрын хэд дэх хаалга
// Нэг орцтой байрны давхрын тоо, давхар дахь хаалганы тоо өгөгдөв. Айлын хаалганы дугаар мэдэгдэж байгаа үед тэрхүү айл хэд дэх давхрын хэд дэх хаалганд амьдардаг вэ? Давталт ашиглахгүй бодно.

// Input
//  Эхний мөрөнд давхрын тоо, давхар дахь хаалганы тоо зайгаар тусгаарлагдан өгөгдөнө.

// Хоёр дахь мөрөнд айлын хаалганы тоо өгөгдөнө.

// Output
// Давхрын тоо, давхар дахь хэд дэх хаалганы тоо зайгаар тусгаарлагдан хэвлэгдэнэ.

// Example
// Input:
// 5 4
// 10

// Output:
// 3 2
function num(a, b, c) {
  let floor = 0;
  let door = 0;
  if (c <= a * b) {
    floor = c / b - ((c / b) % 1);
    door = ((c - 1) % b) + 1;
  }
  if (c > a * b) {
    floor = "error";
    door = "error";
  }
  console.log("floor", floor, "door", door);
}

num(5, 4, 15);

// function num(a, b, c) {
//   floor = parseInt((c - 1) / b + 1);
//   let door = ((c - 1) % b) + 1;
//   console.log("floor", ";" + floor, "door", ";" + door);
// }
// num(5, 4, 25);
// floor ()