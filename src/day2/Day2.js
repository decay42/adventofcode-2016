import fs from 'fs'
import path from 'path'
import Button from './Button'

export default class {
  constructor (part) {
    this.input = fs
      .readFileSync(
        path.resolve(__dirname, 'input.txt'),
        'utf8'
      )
      .trim()
      .split('\n')

    this.part = part
    this.currentButton = '5'

    this.buttons = []

    if (part === 1) {
      this.buttons['1'] = new Button(1, 1, 2, 1, 4)
      this.buttons['2'] = new Button(2, 1, 3, 2, 5)
      this.buttons['3'] = new Button(3, 2, 3, 3, 6)
      this.buttons['4'] = new Button(4, 4, 5, 1, 7)
      this.buttons['5'] = new Button(5, 4, 6, 2, 8)
      this.buttons['6'] = new Button(6, 5, 6, 3, 9)
      this.buttons['7'] = new Button(7, 7, 8, 4, 7)
      this.buttons['8'] = new Button(8, 7, 9, 5, 8)
      this.buttons['9'] = new Button(9, 8, 9, 6, 9)
    } else {
      this.buttons['1'] = new Button(1, 1, 1, 1, 3)
      this.buttons['2'] = new Button(2, 2, 3, 2, 6)
      this.buttons['3'] = new Button(3, 2, 4, 1, 7)
      this.buttons['4'] = new Button(4, 3, 4, 4, 8)
      this.buttons['5'] = new Button(5, 5, 6, 5, 5)
      this.buttons['6'] = new Button(6, 5, 7, 2, 'A')
      this.buttons['7'] = new Button(7, 6, 8, 3, 'B')
      this.buttons['8'] = new Button(8, 7, 9, 4, 'C')
      this.buttons['9'] = new Button(9, 8, 9, 9, 9)
      this.buttons['A'] = new Button('A', 'A', 'B', 6, 'A')
      this.buttons['B'] = new Button('B', 'A', 'C', 7, 'D')
      this.buttons['C'] = new Button('C', 'B', 'C', 8, 'C')
      this.buttons['D'] = new Button('D', 'D', 'D', 'B', 'D')
    }
  }

  get button () {
    return this.currentButton
  }

  go (direction) {
    if (direction === 'U') {
      this.currentButton = this.buttons[this.currentButton].u
    } else if (direction === 'D') {
      this.currentButton = this.buttons[this.currentButton].d
    } else if (direction === 'L') {
      this.currentButton = this.buttons[this.currentButton].l
    } else {
      this.currentButton = this.buttons[this.currentButton].r
    }
  }
}
