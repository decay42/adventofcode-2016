import fs from 'fs'
import path from 'path'

export default class {
  constructor () {
    this.input = fs
      .readFileSync(
        path.resolve(__dirname, 'input.txt'),
        'utf8'
      )
      .trim()
      .split(/, /)

    this.x = 0
    this.y = 1
    this.xSteps = 0
    this.ySteps = 0
  }

  get position () {
    return {x: this.xSteps, y: this.ySteps}
  }

  get distance () {
    return Math.abs(0 - this.xSteps) + Math.abs(0 - this.ySteps)
  }

  changeDir (direction) {
    if (this.x === 0 && this.y === 1) { // facing N
      this.x = (direction === 'R') ? 1 : -1
      this.y = 0
    } else if (this.x === 1 && this.y === 0) { // facing E
      this.x = 0
      this.y = (direction === 'R') ? -1 : 1
    } else if (this.x === 0 && this.y === -1) { // facing S
      this.x = (direction === 'R') ? -1 : 1
      this.y = 0
    } else { // facing W
      this.x = 0
      this.y = (direction === 'R') ? 1 : -1
    }
  }

  step (steps) {
    this.xSteps += this.x * steps
    this.ySteps += this.y * steps
  }
}
