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

$btn_lang.find("a").click(function () {
  $btn_lang.toggleClass("open");
  $("#header nav").toggleClass("mobileLang");
});

// footer 윤정
$(".__dis_link").click((e) => {
  e.preventDefault();
});

$(".f_partners").click((e) => {
  $(e.currentTarget).toggleClass("active");
});



/* -------------- */
$mobileMenu = $("header .bar"),
$headerIcon = $("header .Header_icon");

$mobileMenu.click(function(){
  $(this).toggleClass("active");
  $("#header nav").toggleClass("mobileActive");
  $headerIcon.toggleClass("mobileActive");
  $("body").toggleClass("mobileActive");
});

gnbList.click(function(){
  gnbList.removeClass("mobileMenuClick");
  $(this).addClass("mobileMenuClick");
});
