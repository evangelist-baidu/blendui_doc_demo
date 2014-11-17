Blend.lightInit({
    ak: "QdSaUGlNp6c7Zg0zzE9Xcqon", //轻应用apikey，请参考《获取API Key》文档
    module: ["blendui"]//根据需要添加模块到数组中即可
});

document.addEventListener("blendready", function () {
    Blend.ui.layerInit("0", function (dom) {
        var images = [
            {"url": "http://static.wenku.bdimg.com/topic/wapTopics/new_03_02.jpg"},
            {"url": "http://static.wenku.bdimg.com/topic/wapTopics/old_09_02.jpg"},
            {"url": "http://static.wenku.bdimg.com/topic/wapTopics/new_03_02.jpg"},
            {"url": 'http://static.wenku.bdimg.com/topic/wapTopics/jingpinshichang.jpg'}
        ];

        slider = new Blend.ui.Slider({
            "id": "test",
            "bgColor": "#cccccc",
            "images": images,
            "height": 200,
            "top": 0,
            "left": 0,
            hasIndicator: true,
            inactiveColor: "#ebebeb",
            activeColor: "#3c9c76",
            unitSize: 16,
            unitSpace: 10,
            "slide": function (e) {
                //手动翻页时打印当前幻灯片的编号
                $('#slider-pager').html(e.data.index);
            }
        });
    });
});

$('document').ready(function () {

    $('#slider-pager-left').click(function (e) {
        if (slider) {
            slider.prev();
        }
    });
    $('#slider-pager-right').click(function (e) {
        if (slider) {
            slider.next();
        }
    });

    $('#slider-pager-to').click(function (e) {
        if (slider) {
            slider.slideTo(2);
        }
    });
});

