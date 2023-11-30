function time(x) {
  let day = parseInt(x / 24);
  let hours = x % 24;

  console.log(day, hours);
  return day, hours;
}
time(97);
