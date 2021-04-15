$(function () {
    //gnb 메뉴
    $("#gnb ul#mainmenu li").mouseover(function () {
        $(this).children("ul").stop().fadeIn(500);
        $("#submenuBG").stop().fadeIn(500);
    });

    $("#gnb ul#mainmenu li").mouseout(function () {
        $(this).children("ul").stop().fadeOut(500);
        $("#submenuBG").stop().fadeOut(500);
    });



    //멤버쉽 인증하기 알림창
    $("#accredit button").click(function(){
       alert ("멤버십 번호를 입력하세요.");

    });


});
