document.addEventListener("blendready", function () {

    Blend.ui.layerInit("0", function (dom) {
        $('#btn-preload', dom).click(function () {
            var layer = new Blend.ui.Layer({
                "id": "layerId",
                "url": "layer.html",
                "active": false   //禁止预加载

            });
            layer.in();  //当禁止预加载时，需通过in()方法显示
        });
        $('#btn-unpreload', dom).click(function () {
            var layer = new Blend.ui.Layer({
                "id": "layerId",
                "url": "layer.html",
                "active": true  //允许预加载

            });
        });

    });

    Blend.ui.layerInit("layerId", function (dom) {
        $('#btn-back', dom).click(function () {
            Blend.ui.get('layerId').out();
        });
    });

});

