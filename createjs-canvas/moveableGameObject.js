class MoveableGameObject extends GameObject {
    constructor(graphic) {
        super(graphic);

        // game에 있는 tick과 다른 점은?
        // createjs.Ticker.on("tick", this.stage);
        this.on("tick", this.tick);
    }

    tick() {

    }

}
