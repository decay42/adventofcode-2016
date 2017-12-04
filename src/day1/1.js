import Day1 from './Day1'

const day1 = new Day1()

for (let instruction of day1.input) {
  const [, direction, steps] = /([LR])(\d+)/.exec(instruction)
  day1.changeDir(direction)
  day1.step(steps)
}

console.log(`Distance from (0, 0) to (${day1.position.x}, ${day1.position.y}) = ${day1.distance}`)
