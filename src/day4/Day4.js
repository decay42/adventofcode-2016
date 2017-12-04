import fs from 'fs'
import path from 'path'

export default class {
  constructor (part) {
    this.input = fs
      .readFileSync(
        path.resolve(__dirname, 'input.txt'),
        'utf8'
      )
      .trim()
      .replace(/-/g, (part === 1) ? '' : ' ')
      .split('\n')

    this.parseInput()
  }

  parseInput () {
    let tmp = []
    for (const row of this.input) {
      let re

      if (this.part === 1) {
        re = /([a-z]+)(\d+)\[(\w+)\]/
      } else {
        re = /([a-z ]+)\s(\d+)\[([a-z]+)\]/
      }

      const [, name, id, checksum] = re.exec(row)
      tmp.push({name, id, checksum})
    }
    this.input = tmp
  }

  checksum (word) {
    let occ = {}

    for (const letter of word) {
      occ[letter] ? occ[letter] += 1 : occ[letter] = 1
    }

    return Object.keys(occ)
      .sort((a, b) => {
        if (occ[b] === occ[a]) {
          return (b > a) ? -1 : 1
        }
        return occ[b] - occ[a]
      })
      .slice(0, 5)
      .join('')
  }

  shiftLetter (letter, amount) {
    return String.fromCharCode(((letter.charCodeAt() - 97 + amount) % 26) + 97)
  }
}
