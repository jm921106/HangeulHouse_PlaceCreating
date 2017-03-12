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
        var toolbar_object = new Toolbar_Object('toolbar_img_1.jpg', 'toolbar_object_1', TOOLBAR_OBJECT_SIZE, TOOLBAR_OBJECT_SIZE, 50, 50);
        this.addChild(toolbar_object);

        toolbar_object = new Toolbar_Object('toolbar_img_2.jpg', 'toolbar_object_2', TOOLBAR_OBJECT_SIZE, TOOLBAR_OBJECT_SIZE, 50, 150);
        this.addChild(toolbar_object);

        toolbar_object = new Toolbar_Object('toolbar_img_2.jpg', 'toolbar_object_3', TOOLBAR_OBJECT_SIZE, TOOLBAR_OBJECT_SIZE, 50, 250);
        this.addChild(toolbar_object);
    }


}







