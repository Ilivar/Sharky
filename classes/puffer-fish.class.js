class PufferFish extends MovableObject {
  width = 60;
  height = 60;


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
      let i = this.currentImage % this.IMAGES_SWIMMING.length;
      let path = this.IMAGES_SWIMMING[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 1000 / 4);
    this.moveLeft();
  }

}
