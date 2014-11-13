document.addEventListener("blendready", function () {

    Blend.ui.layerInit("0", function (dom) {

        var tabs = new Blend.ui.LayerGroup({
            id: "tabs",
            layers: [
                {
                    "id": 'contentA',
                    "url": 'contentA.html',
                    "active": true,
                    "autoload": true //通过autoload来配置是否自动加载
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

