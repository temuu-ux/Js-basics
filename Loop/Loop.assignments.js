// exercise1
function num(x) {
  let regular = 0;
  for (let i = 0; i < x; i = i + 3) {
    regular = x - i;
    console.log(regular);
  }
}
num(10);

function num(x) {
  for (let i = x; i > 0; i = i - 3) {
    console.log(i);
  }
}
num(10);
// exercise2
function num(a, b) {
  if (a > b) {
    for (let i = b; i <= a; i++) {
      console.log(i);
    }
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      console.log(i);
    }
  }
}
num(15, 9);
// exercise3
function num(a, b, c) {
  let count = -1;
  let array = [];

  for (let i = a; i <= b; i = i + c) {
    count = count + 1;
    array[count] = i;
  }
  console.log(array);
}
num(10, 20, 2);
