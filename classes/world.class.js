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
  game_music = new Audio("./audio/game_music.mp3");

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw;
    this.setWorld();
    this.checkCollisions();
  }

  /**
   * Sets the current world for the character and enemies, and starts playing the game music.
   */
  setWorld() {
    this.character.world = this;
    this.level.enemies[this.level.enemies.length - 1].world = this;
    this.game_music.play();
    this.game_music.loop = true;
    this.game_music.volume = 0.5;
  }

  /**
   * Checks for collisions between the character and enemies / coins / poison and performs actions accordingly.
   */
  checkCollisions() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          this.colisionPlayerAndEnemy(enemy);
        }
      });

      this.level.coin.forEach((coin) => {
        if (this.character.isColliding(coin)) {
          this.colisionPlayerAndCoin(coin);
        }
      });

      this.level.poison.forEach((poison) => {
        if (this.character.isColliding(poison)) {
          this.colisionPlayerAndPoison(poison);
        }
      });

      this.level.bubble.forEach((bubble) => {
        this.level.enemies.forEach((enemy) => {
          this.colisionBubbleAndEnemy(bubble, enemy);
        });
      });
      if (!mute) {
        this.game_music.volume = 0.5;
      } else {
        this.game_music.volume = 0;
      }
    }, 1000 / 60);
  }

  /**
   * Checks colission between bubbles and enemies
   * @param {object} bubble
   * @param {object} enemy
   */
  colisionBubbleAndEnemy(bubble, enemy) {
    if (bubble.isColliding(enemy) && enemy instanceof PufferFish) {
      enemy.energy = 0;
      this.level.bubble.splice(this.level.bubble.indexOf(bubble), 1);
    }
    if (bubble.isColliding(enemy) && this.character.empowered) {
      enemy.hit_counter++;
      this.level.bubble.splice(this.level.bubble.indexOf(bubble), 1);
    }
  }

  /**
   * Checks colission between the character and poison bottles
   * @param {object} poison
   */
  colisionPlayerAndPoison(poison) {
    this.character.poison += 20;
    this.statusBarPoison.setPercentage(this.character.poison);
    this.level.poison.splice(this.level.poison.indexOf(poison), 1);
    if (!this.poison_sound.paused) {
      this.poison_sound.pause();
      this.poison_sound.currentTime = 0;
    }
    this.poison_sound.play();

    if (!mute) {
      this.poison_sound.volume = 0.5;
    } else {
      this.poison_sound.volume = 0;
    }
  }

  /**
   * Checks colission between the character and coins
   * @param {object} coin
   */
  colisionPlayerAndCoin(coin) {
    this.character.coin += 10;
    this.statusBarCoin.setPercentage(this.character.coin);
    this.level.coin.splice(this.level.coin.indexOf(coin), 1);
    if (!this.coin_sound.paused) {
      this.coin_sound.pause();
      this.coin_sound.currentTime = 0;
    }
    this.coin_sound.play();
    if (!mute) {
      this.coin_sound.volume = 0.5;
    } else {
      this.coin_sound.volume = 0;
    }
  }

  /**
   * Checks colission between the character and enemies
   * @param {object} enemy
   */
  colisionPlayerAndEnemy(enemy) {
    if (this.keyboard.SPACE && enemy instanceof PufferFish) {
      enemy.energy = 0;
    } else {
      this.character.hit();
      this.statusBarLife.setPercentage(this.character.energy);

      if (!this.normal_hit_sound.paused) {
        this.normal_hit_sound.pause();
        this.normal_hit_sound.currentTime = 0;
      }
      this.normal_hit_sound.play();
      if (!mute) {
        this.normal_hit_sound.volume = 1;
      } else {
        this.normal_hit_sound.volume = 0;
      }
    }
  }

  /**
   * Clears the canvas, translates the context for camera movement, and draws various game objects.
   */
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

    /**
     * Requests the browser to call the draw function for the next animation frame.
     */
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  /**
   * Adds multiple objects to the map for rendering.
   * @param {Object[]} objects - An array of objects to be added to the map.
   */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  /**
   * Adds an object to the map for rendering and flips its image if required.
   * @param {Object} mo - The object to be added to the map.
   */
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

  /**
   * Flips the image of the object horizontally.
   * @param {Object} mo - The object whose image is to be flipped.
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }
  /**
   * Flips the image back.
   * @param {Object} mo - The object whose image is to be flipped.
   */
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
