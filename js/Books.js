
class Books {
    constructor(x, y, end) {
      this.x = x;
      this.y = y;
      this.end = end;
      this.isFalling = true;
    }
  
    display() {
      imageMode(CENTER);
      image(bookM, this.x, this.y, 100, 50);
    }
  
    update() {
      if (this.isFalling) {
        this.y++;
        if (this.y > this.end-20) {
          this.y = this.end-20;
          this.isFalling = false;
        }
      }
    }
  }