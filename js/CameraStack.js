class CameraStack {

    constructor(x, y, num) {
      this.x = x;
      this.y = y;
      this.num = num;
      this.camera = [];
    }
  
    display() {
      for (const c of this.camera) {
        c.display();
      }
    }
  
    update() {
      if (frameCount % 10 == 0) {
        if (this.camera.length < this.num) {
          this.camera.push(new Camera(this.x, this.y, height - this.camera.length * 2));
        }
      }
      for (const c of this.camera) {
        c.update();
      }
    }
  }
