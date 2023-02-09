let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
let points = 0

for (let number of numbers) {

    if (number % 2 === 0 && number != 8) {
        points += 1
    } else if (number % 2 != 0) {
        points += 3
    } else if (number === 8) {
        points += 5
    }

}
console.log(points)