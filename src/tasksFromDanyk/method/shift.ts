
const queue = ["Dan", "Alex", "Mila"];

const serviced = queue.shift()

console.log(serviced)
console.log(queue)

const add = queue.unshift("Sasha", "Artemas")

console.log(add)
console.log(queue)