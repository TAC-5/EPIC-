// 所有界面店家返回顶部就回到顶部
$('.right-goTop').on('click',function () {
    $(document).scrollTop(0)
}) 
// 帮助页面点击X按钮后该行话消失
$(".clear").click(function () {
    $('.out').animate({height:0,opacity:0},1200)
})