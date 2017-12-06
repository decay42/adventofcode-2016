import Input from '../Input'

export default class extends Input {
  constructor () {
    super('day6')

    this.input = this.input.split('\n').map(row => row.split(''))
    this.input = this.input[0].map((col, i) => this.input.map(row => row[i])) // transpose
  }
}
