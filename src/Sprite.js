function Sprite(x, y, width, height, path) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.path = path;

    this.draw = function (context, xCanvas, yCanvas) {
        this.image.src = this.path;
        context.drawImage(this.image, this.x, this.y, this.width, this.height, xCanvas, yCanvas, this.width, this.height);
    }
}

let background_sprite = new Sprite(0, 0, 3000, 500, "src/sprites/background1.png"), character = [], collider = [], coin = [],
    menu_sprite = new Sprite(0, 0, 700, 500, "src/sprites/main.png"),
    sand = new Sprite(0, 0, 100, 128, "src/sprites/ground.png");

collider[0] = new Sprite(0, 0, 108, 111, "src/sprites/cactus.png");
collider[1] = new Sprite(0, 0, 70, 88, "src/sprites/cactus2.png");
collider[2] = new Sprite(0, 0, 86, 96, "src/sprites/cactus3.png");
collider[3] = new Sprite(0, 0, 95, 120, "src/sprites/go-2.png");
collider[4] = new Sprite(0, 0, 131, 74, "src/sprites/bush.png");
collider[5] = new Sprite(0, 0, 70, 62, "src/sprites/go.png");

// Nhảy
character[0] = new Sprite(0, 0, 60, 88, "src/sprites/Jump-up.png");


character[1] = new Sprite(0, 0, 60, 88, "src/sprites/frame7.gif");
character[3] = new Sprite(0, 0, 60, 88, "src/sprites/frame-5.png");

// thua 
character[2] = new Sprite(0, 0, 60, 88, "src/sprites/Jump-fall.png");

// Coin
coin[0] = new Sprite(0,0,50,50,"src/sprites/coin/c1.png");
coin[1] = new Sprite(0,0,50,50,"src/sprites/coin/c1.png");
// coin[2] = new Sprite(0,0,10,70,"src/sprites/coin/c3.png");
// coin[3] = new Sprite(0,0,10,70,"src/sprites/coin/c4.png");
// coin[4] = new Sprite(0,0,10,70,"src/sprites/coin/c5.png");
// coin[5] = new Sprite(0,0,10,70,"src/sprites/coin/c6.png");
