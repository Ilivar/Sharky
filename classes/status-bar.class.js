class StatusBar extends DrawableObject {
  IMAGES_LIFE = [
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/100.png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/80.png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/60.png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/40.png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/20.png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/0.png",
  ];

  IMAGES_COIN = [
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/100.png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/80.png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/60.png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/40.png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/20.png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/0.png",
  ];

  IMAGES_POISON = [
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/green/poisoned bubbles/100.png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/green/poisoned bubbles/80.png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/green/poisoned bubbles/60.png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/green/poisoned bubbles/40.png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/green/poisoned bubbles/20.png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/green/poisoned bubbles/0.png",
  ];

  currentImages;

  constructor(x,y, imageType, percentage) {
    super();
    switch (imageType) {
      case 0:
        this.currentImages = this.IMAGES_LIFE;
        break;
      case 1:
        this.currentImages = this.IMAGES_COIN;
        break;
      case 2:
        this.currentImages = this.IMAGES_POISON;
        break;
    }
    this.loadImgs(this.currentImages);

    this.setPercentage(percentage);
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 60;
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let imagePath = this.currentImages[this.imageIndex(percentage)];
    this.img = this.imageCache[imagePath];
  }

  imageIndex(percentage) {
    if (percentage >= 100) {
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
