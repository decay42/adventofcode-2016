export default class {
  constructor (btn, left, right, up, down) {
    this.btn = btn.toString()
    this.left = left.toString()
    this.right = right.toString()
    this.up = up.toString()
    this.down = down.toString()
  }

  get l () {
    return this.left
  }

  get r () {
    return this.right
  }

  get u () {
    return this.up
  }

  get d () {
    return this.down
  }
}
