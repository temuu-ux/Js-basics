function number() {
  let small = `abcdefghijklmnofqrstuvwypz`;
  let big = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  let sum = 0;
  let counter = [];
  let sentence = `The Beginning After The End follows the life of the 
  late King Grey after his untimely and mysterious death.  .`;
  for (let i = 0; i < sentence.length; i++) {
    if (
      sentence.charAt(i) == small.charAt(i) ||
      sentence.charAt(i) == big.charAt(i)
    ) {
      counter[sum] = i;
      sum = sum + 1;
    }
  }
  console.log(counter);
}
number();
