import Day6 from './Day6'

const day6 = new Day6()

let message1 = ''
let message2 = ''

for (const row of day6.input) {
  let occ = {}

  for (const char of row) {
    occ[char] = (occ[char] || 0) + 1
  }

  const sorted = Object.keys(occ).sort((a, b) => occ[b] - occ[a])
  message1 += sorted[0]
  message2 += sorted[sorted.length - 1]
}

console.log(`Part 1: ${message1}, Part 2: ${message2}`)
