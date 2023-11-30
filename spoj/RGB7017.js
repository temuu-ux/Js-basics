function month(x) {
  let year = parseInt(x / 12);
  let month = x % 12;
  console.log(year, month);
}
month(27);
