class World {
  character = new Character();
  level = level1;
  ctx;
  canvas;
  keyboard;
  camerra_x = 0;
  statusBarLife = new StatusBar(40,10, 0);
  statusBarPoison = new StatusBar(40,90, 2);
  statusBarCoin = new StatusBar(40,50, 1);

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
          this.character.hit();
          this.statusBarLife.setPercentage(this.character.energy);
          console.log('Autsch', this.character.energy);
        }
      });
    }, 200);
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
    mo.drawBorder(this.ctx);
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
