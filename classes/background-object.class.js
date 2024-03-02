class BackgroundObject extends MovableObject {
    width = 480;
    height = 720;

    constructor(imagePath, x) {
        super().loadImg(imagePath);
        this.x = x;
        this.y = 0;
    }
}