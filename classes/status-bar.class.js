class StatusBar extends DrawableObject {
  IMAGES_LIFE = [
    "../img/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/100.png",
    "../img/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/80.png",
    "../img/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/60.png",
    "../img/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/40.png",
    "../img/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/20.png",
    "../img/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/0.png",
  ];

  IMAGES_COIN = [
    "../img/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/100_ copia 4.png",
    "../img/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/80_ copia 4.png",
    "../img/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/60_ copia 4.png",
    "../img/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/40_ copia 4.png",
    "../img/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/20_ copia 2.png",
    "../img/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/0_ copia 4.png",
  ];

  IMAGES_POISON = [
    "../img/Alternative Grafiken - Sharkie/4. Marcadores/green/poisoned bubbles/100_ copia 3.png",
    "../img/Alternative Grafiken - Sharkie/4. Marcadores/green/poisoned bubbles/80_ copia 2.png",
    "../img/Alternative Grafiken - Sharkie/4. Marcadores/green/poisoned bubbles/60_ copia 2.png",
    "../img/Alternative Grafiken - Sharkie/4. Marcadores/green/poisoned bubbles/40_ copia 2.png",
    "../img/Alternative Grafiken - Sharkie/4. Marcadores/green/poisoned bubbles/20_ copia 3.png",
    "../img/Alternative Grafiken - Sharkie/4. Marcadores/green/poisoned bubbles/0_ copia 2.png",
  ];
  constructor() {
    super();
    this.loadImgs(this.IMAGES_LIFE);
    this.setPercentage(100);
    this.x = 40;
    this.y = 10;
    this.width = 200;
    this.height = 60;
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let imagePath = this.IMAGES_LIFE[this.imageIndex(percentage)];
    this.img = this.imageCache[imagePath];
  }

  imageIndex(percentage) {
    if (percentage == 100) {
      return 0;
    } else if (percentage >= 80) {
        return 1;
    } else if (percentage >= 60) {
        return 2;
    } else if (percentage >= 40) {
        return 3;
    } else if (percentage >= 20) {
        return 4;
    } else if (percentage >= 0) {
        return 5;
    }
  }
}
