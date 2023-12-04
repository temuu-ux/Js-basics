let products = [
  {
    name: "fridge",
    price: 3000000,
    category: "elecronic product",
    brand: "LG",
  },
  {
    name: "iphone",
    price: 2000000,
    category: "elecronic product",
    brand: "apple",
  },
  {
    name: "Smart TV",
    price: 300000,
    category: "elecronic product",
    brand: "Panasonic",
  },
  {
    name: "S7",
    price: 1000000,
    category: " product",
    brand: "SAMSUNG",
  },
  {
    name: "door",
    price: 90000,
    category: "product",
    brand: "BSB",
  },
  {
    name: "hair dryer",
    price: 450000,
    category: "elecronic product",
    brand: "Philips",
  },
  {
    name: "water boiler",
    price: 28000,
    category: " product",
    brand: "BSB",
  },
];
// function get(x) {
//   for (let i = 0; i < products.length; i = i + 1) {
//     products[i].price = products[i].price - products[i].price * x;
//     console.log(products[i].name, ";", products[i].price);
//   }
// }
// get(0.3);

// function give() {
//   for (let i = 0; i < products.length; i = i + 1) {
//     if ((products[i].category = "electronic product")) {
//       console.log(products[i].name);
//     }
//   }
// }
// give();
function get() {
  for (let i = 0; i < products.length; i = i + 1) {
    if ((products[i].price.category = "product")) {
      products[i].price = (products[i].price * (1 + 10)) / 100;
      console.log(products[i].price.category);
    }
  }
}
get();
