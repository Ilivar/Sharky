class Jellyfish extends MovableObject {
  width = 100;
  height =100;

  offset = {
    top: 5,
    left: 0,
    right: 5,
    bottom: 20,
  };

  IMAGES_JELLYFISH = [
    "./img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png",
  ];

  constructor() {
    super().loadImg(
      "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png"
    );
    this.x = 400 + Math.random() * 2000;
    this.y = 200 + Math.random() * 400;
    this.loadImgs(this.IMAGES_JELLYFISH);
    this.animate();
  }
 
  /**
   * This function animates the jellyfish (movement, sound)
   */
  animate() {
   
    setInterval(() => {
      this.playAnimation(this.IMAGES_JELLYFISH);
    }, 1000 / 4);

    let setDirection = 0;

    setInterval(() => {
      if (setDirection == 0) {
        this.y -= 2;
        if (this.y <= 10) {
          setDirection = 1;
        }
      } else {
        this.y+= 2;
        if (this.y > 400) {
          setDirection = 0;
        }
      }
    }, 1000 / 60);
  }
}
