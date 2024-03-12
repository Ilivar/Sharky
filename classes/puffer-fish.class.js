class PufferFish extends MovableObject {
  width = 80;
  height = 60;
  energy = 10;

  offset = {
    top: 5,
    left: 0,
    right: 5,
    bottom: 20,
  };

  IMAGES_SWIMMING = [
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
  ];

  IMAGES_TRANSITION = [
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png",
  ];

  IMAGES_TRANSITION_REVERSE = [
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png",
  ];

  IMAGES_BUBBLE = [
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png",
  ];

  IMAGES_DEAD = [
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.1.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.2.png",
    "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.3.png",
  ];

  constructor() {
    super().loadImg(
      "./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png"
    );
    this.y = 100 + Math.random() * 200;
    this.x = 400 + Math.random() * 3200;
    this.speed = 0.15 + Math.random() * 2;
    this.loadImgs(this.IMAGES_SWIMMING);
    this.loadImgs(this.IMAGES_TRANSITION);
    this.loadImgs(this.IMAGES_BUBBLE);
    this.loadImgs(this.IMAGES_DEAD);
    this.animate();
  }

  animate() {
    let animationIndex = 0;

    const animations = [
      { images: this.IMAGES_SWIMMING, duration: 3000 },
      { images: this.IMAGES_TRANSITION, duration: 400 },
      { images: this.IMAGES_BUBBLE, duration: 3000 },
    ];

    const playNextAnimation = () => {
      const currentAnimation = animations[animationIndex];
      const interval = setInterval(() => {
        this.playAnimation(currentAnimation.images);
      }, 1000 / 6);
      setTimeout(() => {
        clearInterval(interval);
        animationIndex = (animationIndex + 1) % animations.length;
        if (this.energy > 0) {
          playNextAnimation();
        } else {
          setInterval(() => {
            this.playAnimation(this.IMAGES_DEAD);
          }, 1000 / 4);

          setInterval(() => {
            this.y -= 10;
            this.x += 10;
          }, 10);
        }
      }, currentAnimation.duration);
    };

    const moveAndPlay = () => {
      this.moveLeft();
      playNextAnimation();
    };

    moveAndPlay();
  }
}
