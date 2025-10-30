
const item = [
    {id: 1, name: "iPhone 10", price: 500},
    {id: 2, name: "iPhone 11", price: 600},
    {id: 3, name: "iPhone 12", price: 700},
    {id: 4, name: "iPhone 13", price: 800},
    {id: 5, name: "iPhone 14", price: 900},
    {id: 6, name: "iPhone 15", price: 900},
    {id: 7, name: "iPhone 4s", price: 9100},
    {id: 8, name: "Samsung S23", price: 400}
]

const found = item.find((element) => element.name === "iPhone 15")

console.log(found)

const foundIndex = item.findIndex((element) => element.name === "Samsung S23")

console.log(foundIndex)