class Toolbar_Object {

    constructor(img, name, width, height, x, y) {

        /**
         * Property
         */
        var object = new createjs.Bitmap('res/img/' + img);

        // Image 이름
        object.name = name;
        object.first_down = true;

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
            if(object.first_down) {
                object.scaleX = object.width / object.image.width * 1.2;
                object.scaleY = object.height / object.image.height * 1.2;
            }
        });
        object.on("rollout", function (e) {
            if(object.first_down) {
                object.scaleX = object.width / object.image.width;
                object.scaleY = object.height / object.image.height;
            }
        });

        // Mouse Down
        object.on("mousedown", function(evt) {

            if(object.first_down) {
                // 새로운 Object
                var new_toolbar_object = new Toolbar_Object(img, name, width, height, x, y);

                // 크기 조정
                object.width = OBJECT_SIZE;
                object.height = OBJECT_SIZE;
                object.scaleX = object.width / object.image.width * 1.2;
                object.scaleY = object.height / object.image.height * 1.2;

                // 추가 후 위치 조정
                window.stage.toolbar.addChild(new_toolbar_object);
                window.stage.toolbar.swapChildren(new_toolbar_object, object);

                object.first_down = false;
            } else {

                object.scaleX = object.width / object.image.width * 1.2;
                object.scaleY = object.height / object.image.height * 1.2;
            }

        });

        // drag
        object.on("pressmove", function(evt) {
            evt.target.x = evt.stageX;
            evt.target.y = evt.stageY;
        });

        object.on("pressup", function(evt) {
            object.scaleX = object.width / object.image.width;
            object.scaleY = object.height / object.image.height;
        });

        return object;

    }

    mouseToggle (event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    }
}