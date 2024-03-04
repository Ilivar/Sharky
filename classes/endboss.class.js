class Endboss extends MovableObject {

    width = 300;
    height = 300;
  
  
    IMAGES_FLOATING = [
      "../img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/1.png",
      "../img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/2.png",
      "../img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/3.png",
      "../img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/4.png",
      "../img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/5.png",
      "../img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/6.png",
      "../img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/7.png",
      "../img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/8.png",
      "../img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/9.png",
      "../img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/10.png",
      "../img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/11.png",
      "../img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/12.png",
    ];
  
    constructor() {
      super().loadImg(
        "../img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/1.png"
      );
      this.x = 3200;
      this.y = 80;
    //   this.speed = 0.15 + Math.random() * 0.5;
      this.loadImgs(this.IMAGES_FLOATING);
      this.animate();
    }
  
    animate() {
      setInterval(() => {
        this.playAnimation(this.IMAGES_FLOATING);
      }, 1000 / 4);
    // this.moveLeft();
    }

}