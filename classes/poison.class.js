class Poison extends MovableObject {
    width = 60;
    height = 60;
  
    IMAGES_POISON = [
      "./img/Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/1.png",
      "./img/Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/2.png",
      "./img/Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/3.png",
      "./img/Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/4.png",
      "./img/Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/5.png",
      "./img/Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/6.png",
      "./img/Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/7.png",
      "./img/Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/8.png"
    ];
  
    constructor() {
      super().loadImg(
        "./img/Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/1.png"
      );
      this.x = 500 + Math.random() * 2600;
      this.y = 360 + Math.random() * 50;
      this.loadImgs(this.IMAGES_POISON);
      this.animate();
    }
  
    animate() {
      setInterval(() => {
        this.playAnimation(this.IMAGES_POISON);
      }, 1000 / 6);
    }
  }
  