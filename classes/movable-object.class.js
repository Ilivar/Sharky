class MovableObject {
  x = 120;
  y = 200;
  img;
  height = 100;
  width = 100;
  imageCache = {};
  currentImage = 0;
  speed = 1;
  otherDirection = false;
  speedY = 0;
  acceleration = 0.01;
  energy = 100;
  lastHit = 0;

  loadImg(path) {
    this.img = new Image();
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawBorder(ctx) {
    if (
      this instanceof Character ||
      this instanceof PufferFish ||
      this instanceof Endboss
    ) {
      ctx.beginPath();
      ctx.lineWidth = "6";
      ctx.strokeStyle = "red";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  loadImgs(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  isColliding(mo) {
    return (
      this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height
    );
  }

  hit() {
    this.energy -= 2;
    if (this.energy <= 0) {
      this.energy = 0;
    }else{
      this.lastHit = new Date().getTime();
    }
  }

  isHurt(){
    let timepassed = new Date().getTime() - this.lastHit;
    return timepassed < 2000;
  }

  isDead() {
    return this.energy == 0;
  }

  moveRight() {}

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
}
