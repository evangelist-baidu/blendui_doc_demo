Blend.lightInit({
    ak: "QdSaUGlNp6c7Zg0zzE9Xcqon", //轻应用apikey，请参考《获取API Key》文档
    module: ["blendui"]//根据需要添加模块到数组中即可
});

document.addEventListener("blendready", function () {

    Blend.ui.layerInit("0", function (dom) {
        $('#btn-preload', dom).click(function () {
            var layer1 = new Blend.ui.Layer({
                "id": "layerId1",
                "url": "layer.html",
                "active": false,   //禁止预加载
                "duration":200

            });
            layer1.in();  //当禁止预加载时，需通过in()方法显示
        });
        $('#btn-unpreload', dom).click(function () {
            var layer2 = new Blend.ui.Layer({
                "id": "layerId2",
                "url": "layer.html",
                "active": true,  //允许预加载
                "duration":200
            });
        });

    });

    Blend.ui.layerInit("layerId1", function (dom) {
        $('#btn-back', dom).click(function () {
            Blend.ui.get('layerId1').out();
        });
    });

    Blend.ui.layerInit("layerId2", function (dom) {
        $('#btn-back', dom).click(function () {
            Blend.ui.get('layerId2').out();
        });
    });

});

