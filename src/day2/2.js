import Day2 from './Day2'

const day2 = new Day2(2)

let code = ''

for (const row of day2.input) {
  for (const instruction of row) {
    day2.go(instruction)
  }
  code += day2.button
}

console.log(code)
