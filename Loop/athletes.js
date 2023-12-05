let atlethes = [
  {
    name: "Boldo",
    age: 20,
    scores: [10, 20, 30, 40],
  },
  {
    name: "Alimaa",
    age: 17,
    scores: [30, 10, 50, 20],
  },
  {
    name: "Dorjoo",
    age: 16,
    scores: [15, 40, 22, 31],
  },
  {
    name: "sumbee",
    age: 22,
    scores: [23, 16, 64, 40],
  },
  {
    name: "Sainaa",
    age: 19,
    scores: [80, 29, 10, 70],
  },
  {
    name: "Hash",
    age: 18,
    scores: [64, 90, 54, 23],
  },
  {
    name: "Gerlee",
    age: 21,
    scores: [84, 31, 26, 47],
  },
  {
    name: "Munhuu",
    age: 24,
    scores: [90, 24, 40, 35],
  },
  {
    name: "moogii",
    age: 26,
    scores: [70, 31, 52, 71],
  },
  {
    name: "nomoi",
    age: 23,
    scores: [50, 34, 21, 33],
  },
];

function get() {
  let average = 0;
  for (let i = 0; i < atlethes[0].scores.length; i++) {
    average = average + atlethes[0].scores[i] / atlethes[0].scores.length;
  }
  console.log(atlethes[0].name, ";", average);
}
get();

// function give() {
//   let average = 0;
//   for (let i = 0; i < atlethes[1].scores.length; i++) {
//     average = average + atlethes[1].scores[i] / atlethes[1].scores.length;
//   }
//   console.log(atlethes[1].name, ";", average);
// }
// give();

// function ggive() {
//   let average = 0;
//   for (let i = 0; i < atlethes[1].scores.length; i++) {
//     average = average + atlethes[1].scores[i] / atlethes[1].scores.length;
//   }
//   console.log(atlethes[1].name, ";", average);
// }
// ggive();
// ehniigaa bi hamgiin zaluu gej avsan
// if minii daraachiih iluu zaluu baival
//  ter ni hamgiin zaluu bolno
// ehnii ner maani name gej avsan
// daraachiihmaan hamgiin zaluu baival
// ternii neriig anvaa

// function at() {
//   let young = atlethes[0].age;
//   let name = atlethes[0].name;
//   for (let i = 0; i < 10; i = i + 1) {
//     if (atlethes[i].age < young) {
//       young = atlethes[i].age;
//     }
//     if (atlethes[i].age == young) {
//       atlethes[i].name = name;
//     }
//   }
//   console.log(name, ";", young);
// }
// at();
