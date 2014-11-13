document.addEventListener("blendready", function() {
    Blend.ui.layerInit("0", function(dom) {
        var contentLayer = new Blend.ui.Layer({
            "id": "contentLayerId",
            "url": "content.html",
            "active": true,
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

