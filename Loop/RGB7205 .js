function num(a) {
  let multiple = 1;
  for (let i = 1; i <= a; i = i + 1) {
    multiple = multiple * i;
  }
  console.log(multiple);
}
num(5);
