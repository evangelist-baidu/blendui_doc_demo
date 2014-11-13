document.addEventListener("blendready", function () {
    Blend.ui.layerInit("0", function (dom) {
        $('#btn-jump', dom).click(function (e) {
            var contentLayer = new Blend.ui.Layer({
                "id": "contentLayerId",
                "url": "content.html",
                "active": true
            });
        });
    });

    Blend.ui.layerInit("contentLayerId", function (dom) {
        $('#btn-back-out', dom).click(function (e) {
            //触发回退操作，根据id获取对象，调用out方法
            Blend.ui.get('contentLayerId').out();
        });
        $('#btn-back-destroy', dom).click(function (e) {
            //触发回退操作
            Blend.ui.get('contentLayerId').destroy();
        });
        $('#btn-back-layerback', dom).click(function (e) {
            //触发回退操作
            Blend.ui.layerBack();
        });
    });
});

