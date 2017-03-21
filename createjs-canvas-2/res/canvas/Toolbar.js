class Toolbar extends createjs.Container {

    constructor() {

        super();

        /**
         * Property
         */
        // var Stage = Stage;


        /**
         * Box [Reactagle]
         */

        try {

            this.toolbar = new createjs.Shape();

            this.toolbar.graphics
                .beginFill("orange")
                .drawRect(0, 0, TOOLBAR_WIDTH, TOOLBAR_HEIGHT);
            this.addChild(this.toolbar);

        } catch (e) {
            console.log(e);
        }


        /**
         * Object Add
         */

        this.object_add();

    }

    /**
     * Method
     */
    object_add() {

        // Toolbar_Object [Image]

        // var toolbar_object = new Toolbar_Object('toolbar_img_2.jpg', 'toolbar_object_1', STANDARD_X, STANDARD_Y, 50, 100);
        // this.addChild(toolbar_object);
        // toolbar_object = new Toolbar_Object('toolbar_img_2.jpg', 'toolbar_object_2', STANDARD_X, STANDARD_Y, 50, 250);
        // this.addChild(toolbar_object);
        // toolbar_object = new Toolbar_Object('toolbar_img_2.jpg', 'toolbar_object_3', STANDARD_X, STANDARD_Y, 50, 400);
        // this.addChild(toolbar_object);

        // Toolbar_Rect [Shape]

        var toolbar_rect = new Toolbar_Rect(
            'toolbar_object_1',
            STANDARD_X * 2 / 3,
            STANDARD_Y * 2 / 3,
            STANDARD_X * 1,
            STANDARD_Y * 1,
            30,
            100,
            '1');
        this.addChild(toolbar_rect);
        toolbar_rect = new Toolbar_Rect(
            'toolbar_object_2',
            STANDARD_X * 2 / 3,
            STANDARD_Y * 2 / 3,
            STANDARD_X * 2,
            STANDARD_Y * 2,
            70,
            100,
            '2');
        this.addChild(toolbar_rect);
        toolbar_rect = new Toolbar_Rect(
            'toolbar_object_3',
            STANDARD_X * 2 / 3,
            STANDARD_Y * 2 / 3,
            STANDARD_X * 3,
            STANDARD_Y * 3,
            30,
            200,
            '3');
        this.addChild(toolbar_rect);
        toolbar_rect = new Toolbar_Rect(
            'toolbar_object_4',
            STANDARD_X * 2 / 3,
            STANDARD_Y * 2 / 3,
            STANDARD_X * 4,
            STANDARD_Y * 4,
            70,
            200,
            '4');
        this.addChild(toolbar_rect);
        toolbar_rect = new Toolbar_Rect(
            'toolbar_object_3',
            STANDARD_X * 2 / 3,
            STANDARD_Y * 2 / 3,
            STANDARD_X * 5,
            STANDARD_Y * 5,
            30,
            300,
            '5');
        this.addChild(toolbar_rect);
        toolbar_rect = new Toolbar_Rect(
            'toolbar_object_4',
            STANDARD_X * 2 / 3,
            STANDARD_Y * 2 / 3,
            STANDARD_X * 6,
            STANDARD_Y * 6,
            70,
            300,
            '6');
        this.addChild(toolbar_rect);

    }


}







