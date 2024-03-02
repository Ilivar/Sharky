class World {
  character = new Character();
  enemies = level1.enemies;
  ctx;
  canvas;
  keyboard;
  camerra_x = 0;
  backgroundObjects = level1.backgroundObjects;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw;
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camerra_x, 0);

    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.enemies);
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
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.height, mo.width);
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
