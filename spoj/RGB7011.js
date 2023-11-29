function time(num) {
  let minutes = parseInt(num / 60);
  let seconds = num % 60;
  console.log(minutes, seconds);
}

time(200);
