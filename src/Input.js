import fs from 'fs'
import path from 'path'

export default class {
  constructor (day) {
    this.input = fs
      .readFileSync(
        path.resolve(__dirname, `${day}/`, 'input.txt'),
        'utf8'
      )
      .trim()
  }
}
