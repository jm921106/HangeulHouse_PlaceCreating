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
                // object.scaleX = object.width / object.image.width;
                // object.scaleY = object.height / object.image.height;

                // 추가 후 위치 조정
                window.stage.toolbar.addChild(new_toolbar_object);
                window.stage.toolbar.swapChildren(new_toolbar_object, object);

                object.first_down = false;
            } else {

                object.scaleX = object.width / object.image.width;
                object.scaleY = object.height / object.image.height;
            }

        });

        // drag
        object.on("pressmove", function(evt) {
            evt.target.x = evt.stageX;
            evt.target.y = evt.stageY;

            // evt.currentTarget.x = evt.stageX;
            // evt.currentTarget.y = evt.stageY;

            // stage.update();
            // much smoother because it refreshes the screen every pixel movement instead of the FPS set on the Ticker

            // var point_count = window.stage.points.getNumChildren();
            // for (var i=0; i<point_count; i++) {
            //     var point = stage.points.getChildAt(i);
            //
            //     var pt = point.globalToLocal(window.stage.mouseX, window.stage.mouseY);
            //     if (window.stage.mouseInBounds && point.hitTest(pt.x, pt.y)) {
            //         // evt.currentTarget.alpha = 0.2;
            //         point.graphics.clear();
            //         point.graphics.setStrokeStyle(3)
            //             .beginStroke("#0066A4")
            //             .rect(0, 0, window.STANDARD_X, window.STANDARD_Y);
            //     } else {
            //         // evt.currentTarget.alpha = 1;
            //         point.graphics.clear();
            //         point.graphics.setStrokeStyle(2)
            //             .beginStroke("black")
            //             .beginFill("#ffedc2")
            //             .rect(0, 0, window.STANDARD_X, window.STANDARD_Y);
            //     }
            // };

        });

        object.on("pressup", function(evt) {

            var point_count = window.stage.points.getNumChildren();
            for (var i=0; i<point_count; i++) {
                var point = window.stage.points.getChildAt(i);
                if(intersect(evt.currentTarget, point)){
                    object.x = point.x + object.width / 2;
                    object.y = point.y + object.height / 2;
                    object.alpha = 1;
                    object.scaleX = object.width / object.image.width;
                    object.scaleY = object.height / object.image.height;

                    point.graphics.clear();
                    point.graphics.setStrokeStyle(2)
                        .beginStroke("black")
                        .beginFill("#ffedc2")
                        .rect(0, 0, window.STANDARD_X, window.STANDARD_Y);
                };
            }

        });

        return object;

    }

    /**
     *
     */
}