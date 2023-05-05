
class Money {
    constructor(x, y, end, gender) {
      this.x = x;
      this.y = y;
      
      this.end = end;
      this.isFalling = true;
      this.gender = gender;
    }
  
    display() {
      if (this.gender == 'mens'){
        image(billM, this.x, this.y, 100, 50);
      }
      else{
        image(billF, this.x, this.y, 100, 50);
      }
    }
  
    update() {
      if (this.isFalling) {
        this.y++;
        if (this.y > this.end) {
          this.y = this.end;
          this.isFalling = false;
        }
      }
    }
  }