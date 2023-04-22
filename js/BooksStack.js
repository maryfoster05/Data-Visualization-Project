class BooksStack {

    constructor(x, y, num) {
      this.x = x;
      this.y = y;
      this.num = num;
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
          this.books.push(new Books(this.x, this.y, height - this.books.length * 2));
        }
      }
      for (const b of this.books) {
        b.update();
      }
    }
  }
  