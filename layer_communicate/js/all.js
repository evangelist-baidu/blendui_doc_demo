document.addEventListener("blendready", function () {
    var main = Blend.ui;

    Blend.ui.layerInit("0", function (dom) {
        var subLayers = [{id:'subLayerId',url:'item.html','active':true}];

        var tabs = new main.LayerGroup({
            layers: subLayers,
            left: 0,
            top: 200
        });

        $('#notifyBtn',dom).click(function(e){
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