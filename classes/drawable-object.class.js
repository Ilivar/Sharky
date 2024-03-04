class DrawableObject {
  x = 120;
  y = 200;
  img;
  height = 100;
  width = 100;
  imageCache = {};
  currentImage = 0;

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
}
