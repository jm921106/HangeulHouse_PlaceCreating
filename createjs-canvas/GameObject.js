class GameObject extends createjs.Container {
    
    constructor(graphic) {
        //noinspection JSAnnotator
        super();

        if (graphic !== undefined) {
            this.graphic = graphic;
            this.addChild(this.graphic);

            var b = this.graphic.nominalBounds;
            this.setBounds(b.x, b.y, b.width, b.height);
        }

    }
}
