class StatusBar extends DrawableObject {
  IMAGES_LIFE = [
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/Purple/Life/life (6).png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/Purple/Life/life (5).png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/Purple/Life/life (4).png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/Purple/Life/life (3).png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/Purple/Life/life (2).png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/Purple/Life/life.png",
  ];

  IMAGES_COIN = [
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/Purple/Coin/coin (6).png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/Purple/Coin/coin (5).png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/Purple/Coin/coin (4).png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/Purple/Coin/coin (3).png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/Purple/Coin/coin (2).png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/Purple/Coin/coin.png",
  ];

  IMAGES_POISON = [
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/Purple/Poison/poison (6).png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/Purple/Poison/poison (5).png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/Purple/Poison/poison (4).png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/Purple/Poison/poison (3).png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/Purple/Poison/poison (2).png",
    "./img/Alternative Grafiken - Sharkie/4. Marcadores/Purple/Poison/poison.png",
  ];

  currentImages;

  constructor(x, y, imageType, percentage) {
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

  /**
   * Sets the percentage of completion and updates the entity's image accordingly.
   * @param {number} percentage - The percentage of completion.
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let imagePath = this.currentImages[this.imageIndex(percentage)];
    this.img = this.imageCache[imagePath];
  }

  /**
   * Determines the index of the image to be displayed based on the given percentage.
   * @param {number} percentage - The percentage of completion.
   */
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
