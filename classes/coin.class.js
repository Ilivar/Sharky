class Coin extends MovableObject {
  width = 60;
  height = 60;

  IMAGES_COIN = [
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/1. Coins/1.png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/1. Coins/2.png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/1. Coins/3.png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/1. Coins/4.png",
  ];

  constructor() {
    super().loadImg(
      "./img/Alternative Grafiken - Sharkie/4. Marcadores/1. Coins/1.png"
    );
    this.x = 500 + Math.random() * 2600;
    this.y = 100 + Math.random() * 200;
    this.loadImgs(this.IMAGES_COIN);
    this.animate();
  }

  intervalCount = 0;
  animate() {
    setInterval(() => {
    this.playAnimation(this.IMAGES_COIN);
      
    }, 1000 / 1);
   

    //TODO slide coin up and down
    // setInterval(() => {
    //   if (this.intervalCount <= 1) {
    //     this.y += 10;
    //     this.intervalCount += 1;
    //   } else {
    //     this.y -= 10;
    //     this.intervalCount -= 1;
    //     if (this.intervalCount == 0) {
    //       this.intervalCount = 0;
    //     }
    //   }
    // }, 1000 / 3);
  }

}
