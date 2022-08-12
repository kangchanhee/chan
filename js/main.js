//슬라이드
var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: ".next_btn",
        prevEl: ".prev_btn",
    },
    pagination: {
        el: ".swiper-pagination",
        //type: "progressbar",
        type: "fraction",
    }
});


//메뉴나타남
$(".menu_btn").click(function(){
    console.log('클릭했어요!');
    if($(this).hasClass("open")){
        $(".menu_bg").animate({"left":"-100%"},500);
        $(".menu_btn").removeClass("open");
    }else{
        $(".menu_bg").animate({"left":"0"},500);
        $(".menu_btn").addClass("open");  
    }
}); 

//메뉴 호버시 색상변화//
$(".gnb	li").hover(function(){
    $(".gnb	li").addClass("no_active")
    $(this).addClass("active")
}, function(){
    $(".gnb	li").removeClass("no_active")
    $(this).removeClass("active")
});

//원하는 슬라이드로 이동//
$('.gnb li').click(function(){
    swiper.slideTo($(this).index(),2000);
    $(".menu_bg").animate({"left":"-100%"},500);
    $(".menu_btn").removeClass("open");
})