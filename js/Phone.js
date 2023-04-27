
class Phone {
    constructor(x, y, end, gender) {
      this.x = x;
      this.y = y;
      this.end = end;
      this.isFalling = true;
      this.gender = gender;
    }
  
    display() {
      imageMode(CENTER);
      if (this.gender = 'mens'){
        image(phoneM, this.x, this.y, 100, 50);
      }
      else{
        image(phoneF, this.x, this.y, 100, 50);
      }
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