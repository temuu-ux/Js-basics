function time(a, b, c) {
  let hours = a * 3600;
  let minutes = b * 60;
  let seconds = c * 1;
  let x = hours + minutes + seconds;
  console.log(x);
  return x;
}
time(7, 3, 9);
