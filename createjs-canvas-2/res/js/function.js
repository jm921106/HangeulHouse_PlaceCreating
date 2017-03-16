

function intersect(obj1, obj2){

    console.log('intersect call !')

    var stage = window.stage.stage;

    if(obj1.type == obj2.type) {
        var pt = obj2.globalToLocal(stage.mouseX, stage.mouseY);
        if (stage.mouseInBounds && obj2.hitTest(pt.x, pt.y)) {
            return true;
        }
    }
    return false;
}