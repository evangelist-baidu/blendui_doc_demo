Blend.lightInit({
    ak: "QdSaUGlNp6c7Zg0zzE9Xcqon", //轻应用apikey，请参考《获取API Key》文档
    module: ["blendui"]//根据需要添加模块到数组中即可
});

document.addEventListener("blendready", function() {
    Blend.ui.layerInit("0", function(dom) {
        var contentLayer = new Blend.ui.Layer({
            "id": "contentLayerId",
            "url": "content.html",
            "active": true,
            'duration': 200,
            "pullToRefresh": true,
            "pullText": "下拉可以刷新⊙０⊙",
            "loadingText": "更新中，请等待...",
            "releaseText": "释放更新⊙０⊙"
        });
    });

    Blend.ui.layerInit("contentLayerId",function(dom){
        Blend.ui.on("layerPullDown",function(event){
            setTimeout(function(){
                $("#content", dom).prepend("刷新获得数据");
                Blend.ui.layerStopRefresh();
            },1000);
        });
    });
});

