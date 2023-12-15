function number() {
  let sum = 0;

  let sentence = `The Beginning After The End follows the life of the 
    late King Grey after his untimely and mysterious death. Reborn as Arthur Leywin,
     he seeks to correct his past mistakes in the vibrant new continent of Dicathen, 
     a world of magic and fantastical creatures. Equipped with the knowledge of a
      powerful king in his mid-thirties, Arthur navigates his new life as the magic-wielding 
      child of two retired adventurers and gains purpose through each of his new 
      experiences—something he lacked in his previous life. When a kind dragon sacrifices her life to protect him,
       Arthur resolves to live a sincere, kind, and courageous life with those he loves. With the help of a lost elf princess .`;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) == `a` || sentence.charAt(i) == `A`) {
      sum = sum + 1;
    }
  }
  console.log(sum);
}
number();
