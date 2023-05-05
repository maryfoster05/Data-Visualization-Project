
class Phone extends Money {
    constructor(x, y, end, gender) {
      super(x, y, end, gender);
    }
  
    display() {
      if (this.gender == 'mens'){
        image(phoneM, this.x, this.y, 100, 50);
      }
      else{
        image(phoneF, this.x, this.y, 100, 50);
      }
    }
  }