import Day4 from './Day4'

const day4 = new Day4(2)

let rooms = []

for (const row of day4.input) {
  let decrypted = ''

  for (const part of row.name.split(' ')) {
    for (const letter of part) {
      decrypted += day4.shiftLetter(letter, +row.id)
    }
    decrypted += ' '
  }
  rooms.push({name: decrypted.trim(), id: row.id})
}

console.log(rooms.filter(r => r.name.includes('northpole')))
