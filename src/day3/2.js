import Day3 from './Day3'

const day3 = new Day3()
day3.transposeInput()

let valid = 0

for (const column of day3.input) {
  for (let i = 0, len = column.length; i < len - 2; i += 3) {
    let [a, b, c] = [column[i], column[i + 1], column[i + 2]].sort((a, b) => a - b)

    if (a + b > c) {
      valid++
    }
  }
}

console.log(`Answer for Day3, Puzzle 2:\n${valid}`)
