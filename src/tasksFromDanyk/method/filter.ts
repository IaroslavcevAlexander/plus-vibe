
const products = [
  { name: "iPhone 15", price: 1300 },
  { name: "Samsung S23", price: 900 },
  { name: "Xiaomi 14", price: 700 },
 ]

const oneThousand = products.filter((product) => product.price > 1000 )

console.log(oneThousand)