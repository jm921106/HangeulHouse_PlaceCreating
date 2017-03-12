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

        // var circle = new createjs.Shape();
        // circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
        // circle.x = 300;
        // circle.y = 100;
        // this.stage.addChild(circle);

        // // click
        // circle.addEventListener("click", function(event) {
        //    alert("clicked");
        // });
        // circle.on("click", function(evt) {
        //     alert("type: "+evt.type+" target: "+evt.target+" stageX: "+evt.stageX);
        // });

        // // mouse hover
        // circle.on("mouseover", function(event) {
        //     console.log(event);
        //     event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        // });
        // circle.on("mouseout", function(event) {
        //     event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        // });
        //
        // // drag
        // circle.on("pressmove", function(evt) {
        //     evt.target.x = evt.stageX;
        //     evt.target.y = evt.stageY;
        // });
        // circle.on("pressup", function(evt) { console.log("up"); })

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



        /**
         * Toolbar
         */
        this.toolbar = new Toolbar();
        this.stage.addChild(this.toolbar);

    }

    // toolbar() {
    //
    //     this.toolbar = new createjs.Graphics();
    //     this.toolbar.beginFill("red");
    //     this.toolbar.drawRect(0, 0, 100, 500);
    //     this.addChild(this.toolbar);
    //
    // }


}







