class Point {

    constructor(width, height, x, y, type) {

        /**
         * Define
         */
        this.point = new createjs.Shape();
        this.point.graphics
            .setStrokeStyle(2)
            .beginStroke("black")
            .beginFill("#ffedc2")
            .rect(0, 0, width, height);

        /**
         * Preference
         */
        this.point.PosX = x;
        this.point.PosY = y;
        this.point.width = width;
        this.point.height = height;
        this.point.x = (x * STANDARD_X) + window.TOOLBAR_WIDTH;
        this.point.y = (y * STANDARD_Y);
        this.point.type = type;

        /**
         * Clone [접근용 테스트]
         */
        this.point.hitArea = this.point.clone(true);


        return this.point

    }

    /**
     * Method
     */




}