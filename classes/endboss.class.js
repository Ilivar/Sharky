class Endboss extends MovableObject {
  width = 300;
  height = 300;
  world;
  atk_counter = 0;
  win = false;

  atk_intervall_counter = 0;
  whale_sound = new Audio("./audio/boss.mp3");
  bite_sound = new Audio("./audio/bite.mp3");
  win_sound = new Audio("./audio/win.mp3");

  offset = {
    top: 130,
    left: 20,
    right: 30,
    bottom: 50,
  };

  IMAGES_FLOATING = [
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/1.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/2.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/3.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/4.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/5.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/6.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/7.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/8.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/9.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/10.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/11.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/12.png",
  ];

  IMAGES_SPAWN = [
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/1.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/2.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/3.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/4.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/5.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/6.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/7.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/8.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/9.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/10.png",
  ];

  IMAGES_DEAD = [
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
  ];

  IMAGES_ATK = [
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Attack/1.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Attack/2.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Attack/3.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Attack/4.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Attack/5.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Attack/6.png",
  ];

  IMAGES_HURT = [
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Hurt/1.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Hurt/2.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Hurt/3.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Hurt/4.png",
  ];

 winImg = "./img/Alternative Grafiken - Sharkie/6.Botones/Tittles/You win/Mesa de trabajo 1.png";

  constructor() {
    super().loadImg(
      "./img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/1.png"
    );
    this.x = 3200;
    this.y = -800;
    this.loadImgs(this.IMAGES_FLOATING);
    this.loadImgs(this.IMAGES_SPAWN);
    this.loadImgs(this.IMAGES_DEAD);
    this.loadImgs(this.IMAGES_ATK);
    this.loadImgs(this.IMAGES_HURT);
    this.animate();
  }

  animate() {
    let spawnCounter = 0;

    setInterval(() => {
      if (this.energy <= 0) {
        this.playAnimation(this.IMAGES_DEAD);
        this.x = this.x + 50;
        this.y = this.y - 50;
        showEndScreen(this.winImg, "Play Again");
        this.whale_sound.pause();
        this.world.character.energy = 100;
        if (!this.win) {
          this.win_sound.play()
          this.win = true;
        }
      
      } else if (world.character.player_is_close && spawnCounter < 8) {
        this.y = 80;
        this.playAnimation(this.IMAGES_SPAWN);
        this.whale_sound.play();
        this.whale_sound.loop = true;
        this.whale_sound.volume = 0.5;
        this.world.game_music.pause();
        spawnCounter++;
      } else {
        this.playAnimation(this.IMAGES_FLOATING);
        this.atk_intervall_counter++;
        if (this.atk_intervall_counter > 8) {
          this.playAnimation(this.IMAGES_ATK);
        }
        if (spawnCounter > 7) {
          this.moveToPlayer();
        }
      }
    }, 1000 / 4);

  }
  
  
}
