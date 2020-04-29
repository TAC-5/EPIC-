// 所有界面点击返回顶部就回到顶部
$('.right-goTop').on('click',function () {
    $(document).scrollTop(0)
}) 
// 帮助页面点击X按钮后该行话消失
$(".clear").click(function () {
    $('.out').animate({height:0,opacity:0},1200)
})
// 帮助页面鼠标移入图片图片高亮放大
$('.big').on('mouseenter',function () {
    for(var i = 0; i < $('.big').length; i++) {
        $('big').eq(i).addClass("op")
        $(this).addClass('in')
    }
})

$('.big').on('mouseleave',function () {
    for(var i = 0; i < $('.big').length; i++) {
        $('big').eq(i).removeClass("op")
        $(this).removeClass('in')
    }
})