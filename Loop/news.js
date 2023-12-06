let news = [
  {
    title: "Problem",
    deskription: "sofhugvbaowubnao",
    autor: "munhuu",
    pubDate: "2023/12/05",
    category: "Politcs",
  },
  {
    title: "Traffic Jam",
    deskription: "long slkfvns",
    autor: "munhuu",
    pubDate: "2023/11/23",
    category: "politcs",
  },
  {
    title: "Coal",
    deskription: "short kslfnvljsb",
    autor: "munhuu",
    pubDate: "2023/12/01",
    category: "Politcs",
  },
  {
    title: "Winner",
    deskription: "meduim ksufvgubfv",
    autor: "Boldoo",
    pubDate: "2023/12/02",
    category: "Sport",
  },
  {
    title: "Judo champion",
    deskription: "undaa uu tsai uu",
    autor: "Boldoo",
    pubDate: "2023/11/30",
    category: "Sport",
  },
  {
    title: "corono virus",
    deskription: "danger sdkjvjobv",
    autor: "Buynaa",
    pubDate: "2023/02/05",
    category: "World",
  },
  {
    title: "Mars",
    deskription: "long dkjvbkaj",
    autor: "Buynaa",
    pubDate: "2023/02/04",
    category: "World",
  },
  {
    title: "Divorce",
    deskription: "asocboaeubca",
    autor: "Chimgee",
    pubDate: "2023/11/30",
    category: "psychology",
  },
  {
    title: "Fuel",
    deskription: "ajsbnvfobenvpi",
    autor: "munhuu",
    pubDate: "2023/10/05",
    category: "Politcs",
  },
  {
    title: "Soda",
    deskription: "heregtei medee",
    autor: "Chimgee",
    pubDate: "2023/12/05",
    category: "psychology",
  },
];
// function filterByDate() {
//   let lastNews = news[0].pubDate;
//   for (let i = 0; i < news.length; i++) {
//     if (news[i].pubDate < lastNews) {
//       lastNews = news[i].pubDate;
//     }
//   }
//   console.log(lastNews);
// }
// filterByDate();

// function filterAutor() {
//   let people = news[0].autor;
//   for (let i = 0; i < news.length; i++) {
//     if (news[i].autor < people) {
//       people = news[i];
//     }
//   }
//   console.log(people);
// }

// filterAutor();
function findByCategory(cate) {
  for (let i = 0; i < news.length; i = i + 1) {
    if (news[i].category == cate) {
      console.log(news[i]);
    }
  }
}
findByCategory("Politcs");
