class PhoneStack {

    constructor(x, y, num) {
      this.x = x;
      this.y = y;
      this.num = num;
      this.phone = [];
    }
  
    display() {
      for (const p of this.phone) {
        p.display();
      }
    }
  
    update() {
      if (frameCount % 10 == 0) {
        if (this.phone.length < this.num) {
          this.phone.push(new Phone(this.x, this.y, height - this.phone.length * 2));
        }
      }
      for (const p of this.phone) {
        p.update();
      }
    }
  }
