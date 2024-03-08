class Level {
    enemies;
    backgroundObjects;
    coin;
    level_end_x = 3200;
    bubble;
    poison;

    constructor(enemies, backgroundObjects, coin, poison, bubble) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.coin = coin;
        this.poison = poison;
        this.bubble = bubble;
    }
}