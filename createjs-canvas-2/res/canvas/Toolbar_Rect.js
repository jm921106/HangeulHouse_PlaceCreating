class Toolbar_Rect {

    constructor(name, width, height, o_width, o_height, x, y, type) {

        /**
         * Property
         */
        var object = new createjs.Shape();
        object.graphics
            .beginFill("green")
            .rect(0, 0, width, height);

        // Image 이름
        object.name = name;
        object.first_down = true;

        // Image 위치
        object.x = x;
        object.y = y;

        // Image 크기 [ toolbar size ]
        object.width = width;
        object.height = height;

        object.scaleX = width / object.width;
        object.scaleY = height / object.height;

        // Image 중심
        object.regX = width / 2;
        object.regY = height / 2;

        // Image Type
        object.type = type;


        /** CreateJS Event **/

        // Mouse Down [누름]
        object.on("mousedown", function(evt) {

            if(object.first_down) {

                // 새로운 Object
                var new_toolbar_object = new Toolbar_Rect(name, width, height, o_width, o_height, x, y);

                // 추가 후 위치 조정
                window.stage.toolbar.addChild(new_toolbar_object);
                window.stage.toolbar.swapChildren(new_toolbar_object, object);

                object.first_down = false;

                // 크기 조정 > toolbar 크기
                object.scaleX = o_width / object.width;
                object.scaleY = o_height / object.height;
                object.width = o_width;
                object.height = o_height;

            } else {

                object.alpha = 1;

                var point_count = window.stage.points.getNumChildren();
                for (var i=0; i<point_count; i++) {
                    var point = window.stage.points.getChildAt(i);
                    if(intersect(evt.currentTarget, point)){
                        point.graphics.clear();
                        point.graphics
                            .setStrokeStyle(2)
                            .beginStroke("black")
                            .beginFill("#ffedc2")
                            .rect(0, 0, o_width, o_height);
                    };
                }
            }

        });

        // drag
        object.on("pressmove", function(evt) {
            evt.target.x = evt.stageX;
            evt.target.y = evt.stageY;

            // Drag 간 이벤트 [ Perfermance 문제 ]

        });

        // mouse up  [ 올림 ]
        object.on("pressup", function(evt) {

            // 크기 수정 > Point크기

            // 중복 방지
            var double_check = false;

            // Points 집합 확인
            var point_count = window.stage.points.getNumChildren();
            for (var i=0; i<point_count; i++) {

                if(!double_check) {
                    var point = window.stage.points.getChildAt(i);
                    if(intersect(evt.currentTarget, point)){
                        object.x = point.x + object.width / 2;
                        object.y = point.y + object.height / 2;
                        object.alpha = 0.1;

                        point.graphics.clear();
                        point.graphics
                            .beginFill("black")
                            .rect(0, 0, window.STANDARD_X, window.STANDARD_Y);

                        double_check = true;
                    };
                }

            }

        });

        return object;

    }

    /**
     * method
     */

    method() {

    }


}