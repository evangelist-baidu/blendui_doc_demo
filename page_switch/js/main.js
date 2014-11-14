Blend.lightInit({
    ak: "QdSaUGlNp6c7Zg0zzE9Xcqon", //轻应用apikey，请参考《获取API Key》文档
    module: ["blendui"]//根据需要添加模块到数组中即可
});

document.addEventListener("blendready", function () {
    Blend.ui.layerInit("0", function (dom) {
        $('#btn-jump', dom).click(function (e) {
            console.log('点击');
            if(Blend.ui.get('contentLayerId')){
                console.log('存在页面');
                Blend.ui.get('contentLayerId').in();
            }else{
                console.log('新建页面');
                var page = new Blend.ui.Layer({
                    "id": "contentLayerId",
                    "url": "content.html",
                    "duration": 200
                });
                page.in();
            }
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

