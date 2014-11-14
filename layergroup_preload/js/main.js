Blend.lightInit({
    ak: "QdSaUGlNp6c7Zg0zzE9Xcqon", //轻应用apikey，请参考《获取API Key》文档
    module: ["blendui"]//根据需要添加模块到数组中即可
});

document.addEventListener("blendready", function () {

    Blend.ui.layerInit("0", function (dom) {

        var tabs = new Blend.ui.LayerGroup({
            id: "tabs",
            layers: [
                {
                    "id": 'contentA',
                    "url": 'contentA.html',
                    "active": true
                },
                {
                    id: 'contentB',
                    "url": 'contentB.html',
                    "autoload": true //通过autoload来配置是否自动加载
                }
            ],
            top:40
        });

    });
});

