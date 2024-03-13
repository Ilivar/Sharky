class MovableObject extends DrawableObject {
  speed = 1;
  otherDirection = false;
  speedY = 0;
  acceleration = 0.01;
  energy = 100;
  lastHit = 0;

  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  /**
   * This function checks if the object is colliding with another object
   * @param {*} mo - the moveable object
   */
  isColliding(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }

  /**
   * This function changes the life of the object
   */
  hit() {
    this.energy -= 2;
    if (this.energy <= 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Checks if the entity is currently hurt based on the time passed since the last hit.
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    return timepassed < 2000;
  }

  /**
   * Checks if the entity is dead based on its energy level.
   */
  isDead() {
    return this.energy == 0;
  }

  /**
   * Moves the entity towards the player's position at a constant rate.
   */
  moveToPlayer() {
    setInterval(() => {
      const dx = this.world.character.x - this.x;
      const dy = this.world.character.y - this.y;

      const stepX = dx / 1000;
      const stepY = dy / 1000;

      this.x += stepX;
      this.y += stepY;
    }, 1000 / 60);
  }

  /**
   * Moves the entity to the left continuously at a constant speed.
   */
  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }

  /**
   * Plays an animation by cycling through a sequence of images.
   * @param {string[]} images - An array of image paths representing the animation frames.
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
}
