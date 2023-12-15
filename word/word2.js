let sentence = `The Beginning After The End follows the life of the 
late King Grey after his untimely and mysterious death. Reborn as Arthur Leywin,
 he seeks to correct his past mistakes in the vibrant new continent of Dicathen, 
 a world of magic and fantastical creatures. Equipped with the knowledge of a
  powerful king in his mid-thirties, Arthur navigates his new life as the magic-wielding 
  child of two retired adventurers and gains purpose through each of his new 
  experiences—something he lacked in his previous life. When a kind dragon sacrifices her life to protect him,
   Arthur resolves to live a sincere, kind, and courageous life with those he loves. With the help of a lost elf princess .` ;

let str = ""; //
let arr = []; // a[0] = Many  a[1]=programmers
let counts = 0; // 1 2
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] == " ") {
    // tuhain shalgaj bui useg (sentence[i]) hooson zai bol iishee orj irne
    // Ugiig array-d hadgalj bn
    arr[counts] = str;
    // Ug hadgalj bui huwisagchiig hooson bolgoj bn
    str = "";
    // hadgalah index.n dugaariig negeer nemj bn. / daraagiin indext hadgalahad belen bolgono /
    counts++;
  } else {
    // tuhain shalgaj bui useg (sentence[i]) hooson zai bish bol iishee orj irne
    // Ugen deer useg zalgaj bn
    str = str + sentence[i];
  }
}
console.log("arr:", arr);