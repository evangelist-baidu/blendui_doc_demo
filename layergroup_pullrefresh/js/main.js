document.addEventListener("blendready", function () {
    Blend.ui.layerInit("contentA", function (dom) {
        Blend.ui.on("layerPullDown", function (event) {
            setTimeout(function () {
                $("#content", dom).prepend("刷新操作后增加数据");
                Blend.ui.layerStopRefresh();
            }, 2000);
        });
    });
    Blend.ui.layerInit("0", function (dom) {
        var tabs = new Blend.ui.LayerGroup({
            id: "tabs",
            layers: [
                {
                    "id": 'contentA',
                    "url": 'contentA.html',
                    "active": true,
                    "autoload": true,
                    "pullToRefresh": true,
                    "pullBgColor": "ff0000",
                    "pullText": "下拉刷新",
                    "loadingText": "更新中...",
                    "releaseText": "释放更新"
                },{
                    id: 'contentB',
                    "url": 'contentB.html',
                    "autoload": true
                }
            ]
        });
    });
});

