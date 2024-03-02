class Keyboard {
  LEFT = false;
  RIGHT = false;
  UP = false;
  DOWN = false;
  SPACE = false;

  constructor() {
    this.keys = {};
    window.addEventListener("keydown", (e) => {
      this.keys[e.key] = true;
      if (e.key == "ArrowLeft" || e.key == "a") {
        this.LEFT = true;
      }
      if (e.key == "ArrowRight" || e.key == "d") {
        this.RIGHT = true;
      }
      if (e.key == "ArrowUp" || e.key == "w") {
        this.UP = true;
      }
      if (e.key == "ArrowDown" || e.key == "s") {
        this.DOWN = true;
      }
      if (e.key == " ") {
        this.SPACE = true;
      }
    });

    window.addEventListener("keyup", (e) => {
      this.keys[e.key] = false;
      if (e.key == "ArrowLeft" || e.key == "a") {
        this.LEFT = false;
      }
      if (e.key == "ArrowRight" || e.key == "d") {
        this.RIGHT = false;
      }
      if (e.key == "ArrowUp" || e.key == "w") {
        this.UP = false;
      }
      if (e.key == "ArrowDown" || e.key == "s") {
        this.DOWN = false;
      }
      if (e.key == " ") {
        this.SPACE = false;
      }
    });
  }
}
