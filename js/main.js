// header_JA_230130

let gnb = $(".gnb_box"),
    gnbList = $(".gnb_box > li"),
    lnbBG = $(".wrapper"),
    lnb = $(".lnb_box ");

gnbList.click(function (e) {
    e.preventDefault();

    let $this = $(this);
    lnbBG.toggleClass("active");
    gnb.toggleClass("open");

    $this.addClass("clicked");
    $this.siblings().removeClass("clicked");
    //추가 _ 다른 gnb 클릭 시(혹은 wrapper에 )
});

// /header_JA_230130
