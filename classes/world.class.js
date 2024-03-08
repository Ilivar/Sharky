class World {
  character = new Character();
  level = level1;
  ctx;
  canvas;
  keyboard;
  camerra_x = 0;
  statusBarLife = new StatusBar(40, 10, 0, 100);
  statusBarPoison = new StatusBar(40, 90, 2, 0);
  statusBarCoin = new StatusBar(40, 50, 1, 0);

  coin_sound = new Audio("./audio/coin.mp3");
  poison_sound = new Audio("./audio/poison.mp3");
  normal_hit_sound = new Audio("./audio/normal_hit2.mp3");

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw;
    this.setWorld();
    this.checkCollisions();
  }

  setWorld() {
    this.character.world = this;
  }

  checkCollisions() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          if (this.keyboard.SPACE) {
            enemy.energy = 0;
          } else {
            this.character.hit();
            this.statusBarLife.setPercentage(this.character.energy);
            console.log("Autsch", this.character.energy);
            if (!this.normal_hit_sound.paused) {
              this.normal_hit_sound.pause();
              this.normal_hit_sound.currentTime = 0;
            }
            this.normal_hit_sound.play();
            this.normal_hit_sound.volume = 0.5;
          }
        }
  
      });
      this.level.coin.forEach((coin) => {
        if (this.character.isColliding(coin)) {
          this.character.coin += 10;
          this.statusBarCoin.setPercentage(this.character.coin);
          this.level.coin.splice(this.level.coin.indexOf(coin), 1);
          if (!this.coin_sound.paused) {
            this.coin_sound.pause();
            this.coin_sound.currentTime = 0;
          }
          this.coin_sound.play();
          this.coin_sound.volume = 0.5;
        }
      });
      this.level.poison.forEach((poison) => {
        if (this.character.isColliding(poison)) {
          this.character.poison += 20;
          this.statusBarPoison.setPercentage(this.character.poison);
          this.level.poison.splice(this.level.poison.indexOf(poison), 1);
          if (!this.poison_sound.paused) {
            this.poison_sound.pause();
            this.poison_sound.currentTime = 0;
          }
          this.poison_sound.play();
          this.poison_sound.volume = 0.5;
        }
      });
      //foreach machen und gut is
      // for (i = this.level.bubble.length - 1; i >= 0; i--) {
      //   if (this.world.isColliding(this.level.bubble[i])) {
      //     this.character.energy += 10;
      //     this.statusBarLife.setPercentage(this.character.energy);
      //     this.level.bubble.splice(this.level.bubble.indexOf(i), 1);
      //   }
      // }
    }, 1000 / 60);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camerra_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.ctx.translate(-this.camerra_x, 0);
    // space for fixed objects
    this.addToMap(this.statusBarPoison);
    this.addToMap(this.statusBarCoin);
    this.addToMap(this.statusBarLife);
    this.ctx.translate(this.camerra_x, 0);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.coin);
    this.addObjectsToMap(this.level.poison);
    this.addObjectsToMap(this.level.bubble);
    this.addToMap(this.character);
    this.ctx.translate(-this.camerra_x, 0);
    let self = this;

    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }

    mo.draw(this.ctx);
    // mo.drawBorder(this.ctx);
    // mo.drawCollisonFrame(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
