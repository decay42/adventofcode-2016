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
      .split('\n')
    this.inputToArray()
  }

  inputToArray () {
    this.input = this.input.map(e => {
      const [, a, b, c] = /\s*(\d+)\s+(\d+)\s+(\d+)/g.exec(e)
      return [+a, +b, +c]
    })
  }

  transposeInput () {
    this.input = this.input[0].map((col, i) => this.input.map(row => row[i]))
  }
}
