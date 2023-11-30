function time(x) {
  let hour = parseInt(x / 3612);
  let minute = x % x;
  let second = x % 60;
  console.log(hour, minute, second);
}
time(3612);
