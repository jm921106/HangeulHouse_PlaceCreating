var tabSize = 200,
    gridArea = [], // 바둑판 그리드.
    gridZone, // gridWrapper
    tabZone = [], // 객체 리스트 부분.
    eachWidth = 0, // 개별 그리드 넓이
    eachHeight = 0, // 개별 그리드 높이
    hitObs, // Hero가 닿아있는 그리드 존.
    covers = [];


class World extends createjs.Container {
    constructor() {
        super();

        // console.log(this);

        // [CreateJS Graphic SET]
        this.shape = new createjs.Shape();
        this.addChild(this.shape);
        this.makeGrid(window.gridSize);
        this.addBoxes();
        // [TICK SET]

        this.addImage(tabZone[0], "bigpic1", 850, 100, 1, 1, 50, "toolbar_img_1.jpg");
        this.addImage(tabZone[0], "bigpic2", 850, 200, 1, 1, 50, "toolbar_img_2.jpg");
        this.addImage(tabZone[0], "bigpic3", 850, 300, 1, 1, 50, "toolbar_img_3.jpg");

        this.addImage(tabZone[1], "bigpic4", 850, 100, 1, 1, 50, "toolbar_img_1.jpg");
        this.addImage(tabZone[1], "bigpic5", 850, 200, 1, 1, 50, "toolbar_img_2.jpg");
        // this.on("tick", this.tick_exist_goal);

        covers.forEach(function(v, i) {
            if (v.wrapper.name == 'container1') {
                v.visible = true;
            } else {
                v.visible = false;
            }
        })
    }
    addBoxes() {
        var container1 = new createjs.Container();
        container1.x = 0, container1.y = 0;

        var container2 = new createjs.Container();
        container2.x = 0, container2.y = 0;

        //Tab 1번
        var line = new createjs.Shape();
        line.graphics
            .beginFill('Red')
            .setStrokeStyle(3)
            .beginStroke('#ff00ff')
            .moveTo(1000 - tabSize, 0)
            .lineTo(1000 - tabSize / 2, 0)
            .lineTo(1000 - tabSize / 2, 50)
            .lineTo(1000 - tabSize, 50)
            .lineTo(1000 - tabSize, 0)
            .endStroke();

        var square = new createjs.Shape()
        square.graphics.beginFill("Red").drawRect(0, 0, tabSize, 500);
        //HIT AREA
        square.x = 1000 - tabSize;
        square.y = 50;
        square.setBounds(square.x, square.y, tabSize, 500);
        var c = square.clone(true);
        container1.hitArea = c;

        //Tab 2번
        var line2 = new createjs.Shape();
        line2.graphics
            .beginFill('Green')
            .setStrokeStyle(3)
            .beginStroke('#00ff00')
            .moveTo(1000 - tabSize / 2, 0)
            .lineTo(1000, 0)
            .lineTo(1000, 50)
            .lineTo(1000 - tabSize / 2, 50)
            .lineTo(1000 - tabSize / 2, 0)
            .endStroke();

        var square2 = new createjs.Shape();
        square2.graphics.beginFill("Green").drawRect(0, 0, tabSize, 500).endFill();
        //HIT AREA
        square2.x = 1000 - tabSize;
        square2.y = 50;
        square2.setBounds(square2.x, square2.y, tabSize, 500);
        var d = square2.clone(true);
        container2.hitArea = d;

        line.addEventListener('click', function(evt) {
            window.game.world.container1.visible = true;
            window.game.world.container2.visible = false;

            covers.forEach(function(v, i) {
                if (v.wrapper.name == 'container1') {
                    v.visible = true;
                } else {
                    v.visible = false;
                }
            })
        });

        line2.addEventListener('click', function(evt) {
            window.game.world.container1.visible = false;
            window.game.world.container2.visible = true;

            covers.forEach(function(v, i) {
                if (v.wrapper.name == 'container2') {
                    v.visible = true;
                } else {
                    v.visible = false;
                }
            })
        });

        line.name = 'line';
        line2.name = 'line2';
        square.name = 'square';
        square2.name = 'square2';
        container1.name = 'container1';
        container2.name = 'container2';

        this['line'] = line;
        this['line2'] = line2;
        this['square'] = square;
        this['square2'] = square2;
        this['line'] = line;
        this['line2'] = line2;
        this['container1'] = container1;
        this['container2'] = container2;

        this.addChildAt(container2, container1, line, line2, this.children.length - 1);

        container1.addChild(square);
        container2.addChild(square2);

        tabZone.push(container1, container2);
        this.container2.visible = false;
    }

    makeGrid(value) {
        if (gridZone) {
            gridZone.removeAllChildren();
        } else {
            var container = new createjs.Container();
            container.x = 0, container.y = 0;
            this.addChild(container)
            gridZone = container;
        }
        gridArea = [];
        var key = value ? parseInt(value) : 1, // Grid Size
            width = 800, // canvas Width
            height = 500, // canvas Height
            padding = 1, // 개별 그리드 간격
            total = 0, // 총 개수
            cols = 0; // 열 개수

        switch (key) {
            case 1: // 7 x 5
                total = 35,
                    cols = 7,
                    eachWidth = (width - 6) / 7,
                    eachHeight = (height - 5) / 5;
                break;
            case 2: // 10 x 8
                total = 80,
                    cols = 10,
                    eachWidth = (width - 9) / 10,
                    eachHeight = (height - 7) / 8;
                break;
            case 3: // 12 x 10
                total = 120,
                    cols = 12,
                    eachWidth = (width - 11) / 12,
                    eachHeight = (height - 9) / 10;
                break;
        }
        // console.log("열 갯수 : " + cols + " 넓이 : " + eachWidth + " 높이 : " + eachHeight + " 총 갯수 : " + total);
        for (var i = 0; i < total; i++) {
            var s = new createjs.Shape();
            s.overColor = "#aaa"; // Hover 색상
            s.outColor = "#000"; // Out 색상
            s.graphics.beginFill(s.outColor).drawRect(0, 0, eachWidth, eachHeight).endFill();
            s.x = (eachWidth + padding) * (i % cols);
            s.y = (eachHeight + padding) * (i / cols | 0);
            s.setBounds(s.x, s.y, eachWidth, eachHeight);
            var c = s.clone(true);
            s.hitArea = c;
            gridZone.addChild(s);
            gridArea.push(s);
        }
    }

    handleMouseOver(target) {
        target.graphics.clear().beginFill(target.overColor).drawRect(0, 0, eachWidth, eachHeight).endFill();
    }

    handleMouseOut(target) {
        target.graphics.clear().beginFill(target.outColor).drawRect(0, 0, eachWidth, eachHeight).endFill();
    }

    // [OBJECT ADD 메소드]
    addHero(name, x, y, size, key) {
        var object = new Sprite();
        // 이름
        object.name = name;

        // 좌표
        object.locationX = x, object.locationY = y;

        // 위치
        object.x = x, object.y = y;
        object.size = size;

        this[name] = object; // 나중에 사용하기 위함 [(EX) this.sprite로 접근]
        var _this = this;

        if (key) {
            // 동적으로 추가할 수 있는 오브젝트
            object.addEventListener('pressmove', function(evt) {
                evt.currentTarget.set({
                    x: evt.stageX,
                    y: evt.stageY
                });

                gridArea.forEach(function(v, i) {
                    var t = v.hitArea;
                    var pt = object.localToLocal(0, 0, t);
                    if (t.hitTest(pt.x, pt.y)) {
                        hitObs = v;
                        _this.handleMouseOver(v);
                    } else {
                        _this.handleMouseOut(v);
                    }
                })
            });

            object.addEventListener('pressup', function(evt) {
                evt.currentTarget.set({
                    x: evt.stageX,
                    y: evt.stageY
                });
                tabZone.forEach(function(v, i) {
                    var t = v.hitArea;
                    var pt = object.localToLocal(0, 0, t);
                    if (t.hitTest(pt.x, pt.y)) {
                        _this.removeChild(object);
                    } else {
                        object.x = hitObs.x + eachWidth / 2
                        object.y = hitObs.y + eachHeight / 2
                    }
                })
            });
        } else {
            // Static으로 제공할 오브젝트
        }

        object.scaleX = 1.5;
        object.scaleY = 1.5;

        this.addChild(object); // 화면에 보여주기 위함
    }

    // [OBJECT ADD 메소드]
    addObject(className, name, x, y, size) {
        var object = eval("new " + className + "();");
        // 이름
        object.name = name;

        // 좌표
        object.locationX = x, object.locationY = y;

        // 위치
        object.x = x, object.y = y;
        object.size = size;

        this[name] = object; // 나중에 사용하기 위함 [(EX) this.sprite로 접근]

        object.addEventListener('pressmove', function(evt) {
            evt.currentTarget.set({
                x: evt.stageX,
                y: evt.stageY
            });
            // window.game.stage.update();
        });

        // object.addEventListener('pressmove', function(evt){
        //   evt.currentTarget.set({
        //     x : evt.stageX,
        //     y : evt.stageY
        //   });
        //     window.game.stage.update();
        // });

        object.scaleX = 1.5;
        object.scaleY = 1.5;

        this.addChild(object); // 화면에 보여주기 위함
    }

    // [TEXT ADD 메소드]
    addText(className, name, x, y, value, bold, px, color, align, target) {
        var object = eval("new " + className + "(bold, px, color, align);"); // class 제작
        object.name = name; // object.name
        object.text = value; // object.text (value)
        object.target = target; // object.target

        var location = window.getLocation(x, y);
        object.y = location[1] - window.boxVert / 4; // object.x
        object.x = location[0]; // object.y

        this[name] = object; // [(EX) this.sprite로 접근]
        this.addChild(object); // 화면에 보여주기 위함
        this.textList.push(object); // 검색용 textList
    }

    // [IMAGE ADD 메소드]
    addImage(origin, name, x, y, sx, sy, size, img_src) {
        // object create
        var object = new createjs.Bitmap('res/img/'+img_src);
        // 위치
        object.x = x, object.y = y;

        object.setBounds(object.x, object.y, size, size);
        var c = object.clone(true);
        // object.hitArea = c;

        //스케일
        object.scaleX = sx;
        object.scaleY = sy;
        //사이즈
        object.size = size;
        // 나중에 사용하기 위함 [(EX) this.sprite로 접근]
        object.name = name;
        this[name] = object;

        origin.addChildAt(object, origin.children.length);

        //Cover가 되는 가상 오브젝트
        var coverObj = new createjs.Shape();
        coverObj.graphics.beginFill("rgba(0,0,0,0.5)").drawRect(0, 0, size, size);
        coverObj.x = x, coverObj.y = y;
        coverObj.scaleX = sx + 0.4, coverObj.scaleY = sy + 0.4;

        //Container
        coverObj.wrapper = origin;
        //Origin Object
        coverObj.origin = object;

        coverObj.addEventListener('mousedown', function(evt) {
            var c = coverObj.origin.clone(true);
            var hitArea = new createjs.Shape;
            hitArea.graphics.drawRect(0, 0, c.getBounds.width, c.getBounds.height);
            c.hitArea = hitArea;

            c.addEventListener('mousedown', function(evt){
              // evt.currentTarget.set({
              //   x : evt.stageX,
              //   y : evt.stageY
              // });
              console.log(c)
            })
            window.game.world.addChildAt(c, window.game.world.children.length - 1)
        });

        // coverObj.addEventListener('pressdown', function(evt) {
        //     var t = gridZone;
        //     var pt = coverObj.localToLocal(0, 0, t);
        //     if (t.hitTest(pt.x, pt.y)) {
        //         console.log("나는 부딛혓어!!")
        //     } else {
        //         console.log("노노노노노!!")
        //     }
        // });

        this.addChildAt(coverObj, this.children.length - 1);
        covers.push(coverObj);
    }
}
