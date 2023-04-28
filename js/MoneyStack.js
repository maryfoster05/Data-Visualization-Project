class MoneyStack {

    constructor(x, y, num, gender) {
      this.x = x;
      this.y = y;
      this.num = num;
      this.gender = gender
      this.money = [];
    }
  
    display() {
      for (const m of this.money) {
        m.display();
      }
    }
  
    update() {
      if (frameCount % 10 == 0) {
        if (this.money.length < this.num) {
          this.money.push(new Money(this.x, this.y, height - this.money.length * 2, this.gender));
        }
      }
      for (const m of this.money) {
        m.update();
      }
    }
  }
  