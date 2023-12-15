let products = [
  {
    name: "Smartphone",
    price: 599.99,
    stock: 50,
    category: "Electronics",
    brand: "Samsung",
  },
  {
    name: "Laptop",
    price: 1099.99,
    stock: 30,
    category: "Electronics",
    brand: "Apple",
  },
  {
    name: "Headphones",
    price: 129.99,
    stock: 100,
    category: "Electronics",
    brand: "Sony",
  },
  {
    name: "Running Shoes",
    price: 79.99,
    stock: 80,
    category: "Sports",
    brand: "Nike",
  },
  {
    name: "Coffee Maker",
    price: 49.99,
    stock: 20,
    category: "Home Appliances",
    brand: "Keurig",
  },
  {
    name: "Backpack",
    price: 39.99,
    stock: 60,
    category: "Fashion",
    brand: "Adidas",
  },
  {
    name: "Watch",
    price: 199.99,
    stock: 40,
    category: "Accessories",
    brand: "Casio",
  },
  {
    name: "Gaming Console",
    price: 399.99,
    stock: 25,
    category: "Electronics",
    brand: "Microsoft",
  },
  {
    name: "Sunglasses",
    price: 149.99,
    stock: 70,
    category: "Fashion",
    brand: "Ray-Ban",
  },
  {
    name: "Wireless Speaker",
    price: 89.99,
    stock: 45,
    category: "Electronics",
    brand: "Samsung",
  },
];
// products.sort((prod1, prod2) => {
//   return prod1.price - prod2.price;
// });
// console.log(products);
// // map
// // filter
// // products.sort((prod1, prod2) => return1);
// products.map((prod) => {});
// products.filter();
// let nums = [1, 2, 3, 5, 6, 7, 5, 3];
// nums.map((a) => {
//   console.log(nums);
// });
// products.filter();
// function findBrand(brand) {
//   let brandArr = products.filter((a) => {
//     return a.brand == brand;
//   });
//   console.log(brandArr);
// }
// findBrand("Samsung");

let findBrand = products.filter((a) => {
  return a.brand == "Samsung";
});
console.log("brannd", findBrand);

// filter bol 1 utag avna mon tuhain todotgoj avsan zuileel zovhon gargan
// olon torliin burgerees yag ter buurgeriig gargan
