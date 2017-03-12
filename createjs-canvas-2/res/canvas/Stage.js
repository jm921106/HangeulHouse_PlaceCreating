class Stage {

    constructor(size, map, width, height) {

        /**
         * Property
         */

        this.size = size;
        this.map = map;

        /**
         * CreateJS
         */

        this.canvas = document.getElementById("canvas");
        this.stage = new createjs.Stage(this.canvas);
        this.stage.enableMouseOver(10);

        this.reload();
        createjs.Ticker.on("tick", this.stage);
    }

    /**
     * Method
     */
    reload() {
        /**
         * Stage Width / Height
         */
        this.canvas.width = CANVAS_WIDTH;
        this.canvas.height = CANVAS_HEIGHT;

        /**
         * Grid
         */
        this.grid(5, 5);

        /**
         * Point
         */


        /**
         * Toolbar
         */
        this.toolbar = new Toolbar();
        this.stage.addChild(this.toolbar);

    }

    grid (x, y) {

        this.lines = new createjs.Shape();

        for (var i=1; i<x; i++) {
            this.create_grid(this.lines, 'x', ( (CANVAS_WIDTH - TOOLBAR_WIDTH) / x * i) + TOOLBAR_WIDTH);
        }

        for (var i=1; i<y; i++) {
            this.create_grid(this.lines, 'y', (CANVAS_HEIGHT / y) * i);
        }

    }

    create_grid (lines, type, value) {

        if(type == 'x') {
            lines.graphics
                .setStrokeStyle(1)
                .beginStroke("black")
                .moveTo(value, 0)
                .lineTo(value, CANVAS_HEIGHT)
                .endStroke();
        } else {
            lines.graphics
                .setStrokeStyle(1)
                .beginStroke("black")
                .moveTo(0, value)
                .lineTo(CANVAS_WIDTH, value)
                .endStroke();
        }

        this.stage.addChild(lines);
    }


}







