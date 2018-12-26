class a {
  constructor () {
    this.x = 1
    this.y = 2
  }
  add (x, y) {
    return x + y
  }
  getX () {
    return this.x
  }
  getY () {
    return this.y
  }

}

export default new a()