class Character extends MovableObject {
  width = 200;
  height = 200;
  world;
  speed = 5;
  idleCounter = 0;
  isAnimating = false; // TODO später zur Sicherstellung dass Animation abgeschlossen ist!

  swimming_sound = new Audio("../audio/swim.mp3");
  snoring_sound = new Audio("../audio/snore.mp3");

  IMAGES_SWIMMING = [
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/1.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/2.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/3.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/4.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/5.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/6.png",
  ];

  IMAGES_IDLE = [
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/1.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/2.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/3.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/4.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/5.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/6.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/7.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/8.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/9.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/10.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/11.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/12.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/13.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/14.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/15.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/16.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/17.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/18.png",
  ];

  IMAGES_LONG_IDLE = [
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i1.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i2.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i3.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i4.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i5.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i6.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i7.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i8.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i9.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i10.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i12.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i13.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i14.png",
  ];

  IMAGES_HURT_POISON = [
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/4.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/5.png",
  ];

  IMAGES_HURT_SHOCK = [
   "../img/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/2.Electric shock/o1.png",
   "../img/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/2.Electric shock/o2.png"
  ];

  IMAGES_DEAD_POISON = [
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/1.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/2.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/3.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/4.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/5.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/6.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/7.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/8.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/9.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/10.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/11.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];

  IMAGES_DEAD_SHOCK = [
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/2.Electro_shock/1.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/2.Electro_shock/2.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/2.Electro_shock/3.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/2.Electro_shock/4.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/2.Electro_shock/5.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/2.Electro_shock/6.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/2.Electro_shock/7.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/2.Electro_shock/8.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/2.Electro_shock/9.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/2.Electro_shock/10.png",
  ];

  IMAGES_ATK_BUBBLE = [
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png",
  ];

  IMAGES_ATK_SLAP = [
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/1.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/4.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/5.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/6.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/7.png",
    "../img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/8.png"
  ];

  constructor() {
    super().loadImg(
      "../img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/1.png"
    );
    this.loadImgs(this.IMAGES_SWIMMING);
    // this. applyGravity(); add gravity
    this.loadImgs(this.IMAGES_DEAD_POISON);
    this.loadImgs(this.IMAGES_DEAD_SHOCK);
    this.loadImgs(this.IMAGES_HURT_POISON);
    this.loadImgs(this.IMAGES_HURT_SHOCK);
    this.animate();
  }

  applyGravity() {
    setInterval(() => {
      if (this.y < 260) {
        this.speedY -= this.acceleration;
        this.y -= this.speedY;
      }
      this.resetGravity();
    }, 1000 / 60);
  }

  resetGravity() {
    if (keyboard.UP) {
      this.speedY = 0;
      this.acceleration = 0.01;
    }
  }

  moveRight() {
    if (this.world.keyboard.Right === true) {
      this.x += 100;
      console.log("Right");
    }
  }

  animate() {
    setStopableInterval(() => {
      if (
        this.world.character.world.keyboard.RIGHT &&
        this.world.level.level_end_x > this.x
      ) {
        this.x += this.speed;
        this.otherDirection = false;
        this.swimming_sound.play();
        this.swimming_sound.volume = 0.04;
      }

      if (this.world.character.world.keyboard.LEFT && this.x > 100) {
        this.x -= this.speed;
        this.otherDirection = true;
        this.swimming_sound.play();
        this.swimming_sound.volume = 0.04;
      }

      if (this.world.character.world.keyboard.UP) {
        this.y -= this.speed;
      }

      if (this.world.character.world.keyboard.DOWN) {
        this.y += this.speed;
      }
      this.world.camerra_x = -this.x + 100;
    }, 1000 / 60);

    setStopableInterval(() => {
      if (this.world.character.world.keyboard.RIGHT) {
        this.playAnimation(this.IMAGES_SWIMMING);
      }
      if (this.world.character.world.keyboard.LEFT) {
        this.playAnimation(this.IMAGES_SWIMMING);
      }
      if (this.world.character.world.keyboard.UP) {
        this.playAnimation(this.IMAGES_SWIMMING);
      }
      if (this.world.character.world.keyboard.DOWN) {
        this.playAnimation(this.IMAGES_SWIMMING);
      }
    }, 1000 / 10);

    setStopableInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD_POISON);
        stopGame();
      }
      else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT_POISON);
      }
      else if (
        !this.world.character.world.keyboard.RIGHT &&
        !this.world.character.world.keyboard.LEFT
      ) {
        this.loadImgs(this.IMAGES_IDLE);
        this.playAnimation(this.IMAGES_IDLE);
        this.idleCounter++;
        if (this.idleCounter > 30) {
          this.loadImgs(this.IMAGES_LONG_IDLE);
          this.playAnimation(this.IMAGES_LONG_IDLE);
          // this.snoring_sound.play();
          this.snoring_sound.volume = 0.1;
        }
      }
      else if (
        this.world.character.world.keyboard.UP ||
        this.world.character.world.keyboard.DOWN ||
        this.world.character.world.keyboard.RIGHT ||
        this.world.character.world.keyboard.LEFT
      ) {
        this.idleCounter = 0;
        //TODO this.snoring_sound.pause();
      }
    }, 1000 / 3);
  
  }
}
