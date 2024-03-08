class Bubble extends MovableObject {
    width = 40;
    height = 40;
  

  
    constructor() {
      super().loadImg(
        "./img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/Bubble.png"
      );
      this.x = world.character.x + world.character.width;
      this.y = world.character.y + world.character.height / 2;
   
      this.animate();
    }
  

    animate() {
      setInterval(() => {
      
        this.x += 10;

      }, 1000 / 20);
      
    }
  
  }
  