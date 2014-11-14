Blend.lightInit({
    ak:'XkC0UKL8Z0cEP5zqKHuc8lIt', //轻应用apikey，请参考《获取API Key》文档
    module:["blendui"]//根据需要添加模块到数组中即可
});

document.addEventListener("blendready", function () {
    var main = Blend.ui;
    console.log('blendready');
    Blend.ui.layerInit("0", function (dom) {
        var subLayers = [{id:'subLayerId',url:'item.html','active':true}];

        new main.LayerGroup({
            layers: subLayers,
            left: 0,
            top: 200
        });

        $('#notifyBtn',dom).on("click",function(e){
            var msgContent = $('#input_msg').val();
            Blend.ui.fire("sendMsg", "subLayerId",{content:msgContent});
        });
    });

    Blend.ui.layerInit("subLayerId", function (dom) {

        Blend.ui.on("sendMsg", function (e) {
            $('#display_msg').val( e.data.content);
        });

    });
});
