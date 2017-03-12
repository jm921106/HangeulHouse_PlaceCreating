class Grid extends createjs.Container {

    constructor(type, value) {

        super();

        /**
         * property
         */
        this.type = type;   // x OR y
        this.value = value; // location

        if(type == 'x') {
            this.x = this.value;
            this.y = 0;
            this.gx = this.value;
            this.gy = CANVAS_HEIGHT;
        } else {
            this.x = 0;
            this.y = this.value;
            this.gx = CANVAS_WIDTH;
            this.gy = this.value;
        }

        console.log(this.value);
        console.log(CANVAS_WIDTH);
        console.log(CANVAS_HEIGHT);

        /**
         * createjs line
         */

        this.line = new createjs.Shape();

        this.line.graphics
            .setStrokeStyle(1)
            .beginStroke("black")
            .moveTo(this.x, this.y)
            .lineTo(this.gx, this.gy)
            .endStroke();

        this.addChild(this.line);
    }
}