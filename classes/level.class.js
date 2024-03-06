class Level {
    enemies;
    backgroundObjects;
    coin;
    level_end_x = 3200;

    constructor(enemies, backgroundObjects, coin, poison) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.coin = coin;
        this.poison = poison;
    }
}