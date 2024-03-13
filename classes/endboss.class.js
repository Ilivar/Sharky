class Endboss extends MovableObject {
  width = 300;
  height = 300;
  world;
  atk_counter = 0;
  win = false;
  hit_counter = 1;
  spawnCounter = 0;

  atk_intervall_counter = 0;
  whale_sound = new Audio("./audio/boss.mp3");
  bite_sound = new Audio("./audio/bite.mp3");
  win_sound = new Audio("./audio/win.mp3");
  whale_hurt = new Audio("./audio/whale.mp3");

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

  winImg =
    "./img/Alternative Grafiken - Sharkie/6.Botones/Tittles/You win/Mesa de trabajo 1.png";

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
  /**
   * This function animates the boss (movement, atk, sound)
   */
  animate() {
    setInterval(() => {
      if (this.hit_counter >= 50) {
        this.bossDeath();
      } else if (this.hit_counter % 2 === 0) {
        this.bossHurt();
      } else if (world.character.player_is_close && this.spawnCounter < 8) {
        this.spawnBoss();
      } else {
        this.normalBossMovement();
      }
    }, 1000 / 4);
  }

  /**
   * Death animation and sound
   */
  bossDeath() {
    this.playAnimation(this.IMAGES_DEAD);
    this.x = this.x + 50;
    this.y = this.y - 50;
    showEndScreen(this.winImg, "Play Again");
    this.whale_sound.pause();
    this.world.character.energy = 100;
    if (!this.win) {
      this.win_sound.play();
      if (!mute) {
        this.win_sound.volume = 1;
      } else {
        this.win_sound.volume = 0;
      }
      this.win = true;
    }
  }
  /**
   * Hurt animation and sound
   */
  bossHurt() {
    this.playAnimation(this.IMAGES_HURT);
    this.whale_hurt.play();
    if (!mute) {
      this.whale_hurt.volume = 1;
    } else {
      this.whale_hurt.volume = 0;
    }
  }
  /**
   * Spawn animation and bossfightsound
   */
  spawnBoss() {
    this.y = 80;
    this.playAnimation(this.IMAGES_SPAWN);
    this.whale_sound.play();
    this.whale_sound.loop = true;
    if (!mute) {
      this.whale_sound.volume = 0.5;
    } else {
      this.whale_sound.volume = 0;
    }
    this.world.game_music.pause();
    this.spawnCounter++;
  }
  /**
   * Normal boss movement and attack animation
   */
  normalBossMovement() {
    this.playAnimation(this.IMAGES_FLOATING);
    this.atk_intervall_counter++;
    if (this.atk_intervall_counter > 8) {
      this.playAnimation(this.IMAGES_ATK);
    }
    if (this.spawnCounter > 7) {
      this.moveToPlayer();
    }
  }
}
