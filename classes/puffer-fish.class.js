class PufferFish extends MovableObject {
  width = 80;
  height = 60;

  offset = {
    top: 5,
    left: 0,
    right: 5,
    bottom: 20,
  };

  IMAGES_SWIMMING = [
    "../img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
    "../img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
    "../img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
  ];

  constructor() {
    super().loadImg(
      "../img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png"
    );
    this.x = 200 + Math.random() * 500;
    this.speed = 0.15 + Math.random() * 0.5;
    this.loadImgs(this.IMAGES_SWIMMING);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_SWIMMING);
    }, 1000 / 4);
    this.moveLeft();

    let setDirection = 0;

    setInterval(() => {
      if (setDirection == 0) {
        // this.width += 0.2;
        this.height += 0.2;
        if (this.height >= 80) {
          setDirection = 1;
        }
      } else {
        // this.width -= 0.2;
        this.height -= 0.2;
        if (this.height <= 60) {
          setDirection = 0;
        }
      }
    }, 1000 / 60);
  }
}
