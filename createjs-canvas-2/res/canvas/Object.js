class Object {

    constructor(img, name, width, height, x, y) {

        /**
         * Property
         */
        var object = new createjs.Bitmap('res/img/' + img);

        // Image 이름
        object.name = name;

        // Image 위치
        object.x = x;
        object.y = y;

        // Image 크기
        object.width = width;
        object.height = height;
        object.scaleX = width / object.image.width;
        object.scaleY = height / object.image.height;

        // Image 중심
        object.regX = object.image.width / 2;
        object.regY = object.image.height / 2;


        /**
         * CreateJS
         */

        // click
        object.on("mousedown", function(evt) {
            console.log(evt)

        });

        // drag
        object.on("pressmove", function(evt) {

            evt.target.x = evt.stageX;
            evt.target.y = evt.stageY;

        });

        // pressup
        object.on("pressup", function(evt) {
            // 위치 기반 지우기

        });

        return object;

    }

    /**
     * Method
     */
    method() {

    }


}







