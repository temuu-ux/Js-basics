function num(a, b, c, d) {
  let floor = 0;
  let entrance = 0;
  let door = 0;
  if (d <= a * b * c && b <= 3 && a <= 5) {
    floor = parseInt((d - 1) / c / a) + 1;
    entrance = x = d % (a * b);
    entrance = (d - x) / (a * b) + 1;
    door = ((d - 1) % c) + 1;
  } else if (d > a * b * c && b < 3 && a > 5) {
    console.log("error");
  }
  console.log("floor", floor, "entrance", entrance, "door", door);
}
num(5, 3, 4, 32);
