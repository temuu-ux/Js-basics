function grade(x) {
  if (x > 89) {
    console.log("answer", "A");
  } else if (x > 79) {
    console.log("answer", "B");
  } else if (x > 69) {
    console.log("answer", "C");
  } else if (x > 59) {
    console.log("answer", "D");
  } else {
    console.log("answer", "F");
  }
}
grade(100);
