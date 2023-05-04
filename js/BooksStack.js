class BooksStack extends MoneyStack {

    constructor(x, y,  money, divisor, gender) {
      super(x, y,  money, divisor, gender)
      this.books = [];
    }
  
    display() {
      for (const b of this.books) {
        b.display();
      }
    }
  
    update() {
      if (frameCount % 10 == 0) {
        if (this.books.length < this.num) {
          this.books.push(new Books(this.x, this.y, height - this.books.length * 2 - 30, this.gender));
        }
      }
      for (const b of this.books) {
        b.update();
      }
    }
  }
  