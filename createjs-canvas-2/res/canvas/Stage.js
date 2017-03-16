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
        this.canvas.width = window.CANVAS_WIDTH;
        this.canvas.height = window.CANVAS_HEIGHT;
        window.STANDARD_X = (window.CANVAS_WIDTH - window.TOOLBAR_WIDTH) / W_COUNT;
        window.STANDARD_Y = window.CANVAS_HEIGHT / H_COUNT;

        /**
         * Grid
         */
        this.grid(window.W_COUNT, window.H_COUNT);

        /**
         * Point
         *
         * [1] 화면용
         * [2] 접근용
         */

        this.points = this.stage.addChild(new createjs.Container());

        // x2 point

        for(var i=0; i<window.W_COUNT-1; i++) {
            for(var j=0; j<window.H_COUNT-1; j++) {
                this.point = new Point(STANDARD_X * 2, STANDARD_Y * 2, i, j, '2');

                // 접근을 위한 point 집합
                this.points.addChild(this.point);
            }
        }

        // x1 point

        // for(var i=0; i<window.W_COUNT; i++) {
        //     for(var j=0; j<window.H_COUNT; j++) {
        //         this.point = new Point(STANDARD_X, STANDARD_Y, i, j, '1');
        //
        //         // 접근을 위한 point 집합
        //         this.points.addChild(this.point);
        //     }
        // }



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







