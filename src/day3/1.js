import Day3 from './Day3'

const day3 = new Day3()

let valid = 0

for (const row of day3.input) {
  let [a, b, c] = row.sort((a, b) => a - b)
  if (a + b > c) {
    valid++
  }
}

console.log(`Answer for Day3, Puzzle 1:\n${valid}`)
