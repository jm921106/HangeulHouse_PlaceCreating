class Toolbar_Object {

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
         * CreateJS Event
         */

        // Mouse Toogle
        object.on("rollover", function (e) {
            object.scaleX = object.width / object.image.width * 1.2;
            object.scaleY = object.height / object.image.height * 1.2;
        });
        object.on("rollout", function (e) {
            object.scaleX = object.width / object.image.width;
            object.scaleY = object.height / object.image.height;
        });

        // Mouse Down
        object.on("mousedown", function(evt) {
            console.log("mouse dwon");
            try {
                var contents = new Object(img, name, width, height, x, y);
                window.stage.toolbar.addChild(contents);
            } catch (e) {
                console.log(e);
            }
        });

        return object;

    }

    mouseToggle (event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    }





}