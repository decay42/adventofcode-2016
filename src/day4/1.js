import Day4 from './Day4'

const day4 = new Day4(1)

let realIdSum = 0

for (const row of day4.input) {
  const nameChecksum = day4.checksum(row.name)
  if (nameChecksum === row.checksum) {
    realIdSum += +row.id
  }
}

console.log(realIdSum)
