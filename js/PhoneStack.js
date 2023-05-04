class PhoneStack extends MoneyStack {

  constructor(x, y, money, divisor, gender) {
      super(x, y, money, divisor, gender);
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
          this.phone.push(new Phone(this.x, this.y, height - this.phone.length * 2 - 30, this.gender));
        }
      }
      for (const p of this.phone) {
        p.update();
      }
    }
  }
