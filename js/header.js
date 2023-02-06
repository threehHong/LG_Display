// header_JA_230130

let gnb = $(".gnb_box"),
    gnbList = $(".gnb_box > li"),
    lnbBG = $(".wrapper"),
    lnb = $(".lnb_box "),
    $btn_lang = $(".header_lang");

gnbList.mouseenter(function (e) {
    e.preventDefault();

    let $this = $(this);
    lnbBG.addClass("active");
    gnb.addClass("open");
    $("header, .wrapper").mouseleave(function () {
        lnbBG.removeClass("active");
        gnb.removeClass("open");
    });

    $this.addClass("clicked");
    $this.siblings().removeClass("clicked");
});

$btn_lang.click(function () {
    $(this).toggleClass("open");
});
// /header_JA_230130
