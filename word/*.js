function drawSqr(size) {
  let sqrStr = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      sqrStr += "*";
    }
    sqrStr += "\n";
  }
  console.log(sqrStr);
}
drawSqr(5);

function hollowSqr(size) {
  let sqrStr = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (i == 0 || i == 5 - 1 || j == 0 || j == 5 - 1) {
        sqrStr += "*";
      } else {
        sqrStr += " ";
      }
    }
    sqrStr += "\n";
  }
  console.log(sqrStr);
}
