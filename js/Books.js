
class Books extends Money {
    constructor(x, y, end, gender) {
      super(x, y, end, gender);
    }
  
    display() {
      // imageMode(CENTER);
      if (this.gender == 'mens'){     
        image(bookM, this.x, this.y, 100, 50);
      }
      else{
        image(bookF, this.x, this.y, 100, 50);
      }
    }

  }