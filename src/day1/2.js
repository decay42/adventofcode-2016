import Day1 from './Day1'

const day1 = new Day1()
let visited = new Set()

for (let instruction of day1.input) {
  let done = false
  const [, direction, steps] = /([LR])(\d+)/.exec(instruction)

  day1.changeDir(direction)

  for (let i = 0; i < +steps; i++) {
    day1.step(1)

    if (visited.has(`${day1.position.x},${day1.position.y}`)) {
      done = true
      break
    } else {
      visited.add(`${day1.position.x},${day1.position.y}`)
    }
  }

  if (done) {
    break
  }
}

console.log(`Distance from (0, 0) to (${day1.position.x}, ${day1.position.y}) = ${day1.distance}`)
