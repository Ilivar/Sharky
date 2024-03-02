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

  loadImg(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImgs(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  moveRight() {}

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}
