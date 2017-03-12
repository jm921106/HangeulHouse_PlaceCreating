class Game {

    constructor() {

        this.canvas = document.getElementById("test");
        this.stage = new createjs.Stage(this.canvas);
        this.stage.enableMouseOver();
        this.stage.mouseEnabled = true;
        this.stage.mouseMoveOutside = true;

        this.restartGame();
        createjs.Ticker.on("tick", this.stage);
    }

    // restart method
    restartGame() {
        this.stage.removeAllChildren();
        this.canvas.width = 1000;
        this.canvas.height = 500;
        this.stage.width = this.canvas.width;
        this.stage.height = this.canvas.height;

        // [ time and speed setting ]
        this.time = parseInt(700 * 1 / this.speed);
        window.time = this.time;
        createjs.Ticker.setFPS(parseInt(30 * this.speed));


        this.world = new World();
        this.stage.addChild(this.world);
    }
}
