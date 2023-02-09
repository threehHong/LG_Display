/* header JA */

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

/* 메뉴바 스크립트 */
$header = $("header");

$(window).scroll(function () {
  $header.addClass("toggle");
});
$header.mouseover(function () {
  $header.removeClass("toggle");
});

/* - 모바일 메뉴 버튼------------- */
($mobileMenu = $("header .bar")), ($headerIcon = $("header .Header_icon"));

$mobileMenu.click(function () {
  $(this).toggleClass("active");
  $("#header nav").toggleClass("mobileActive");
  $headerIcon.toggleClass("mobileActive");
  $("body").toggleClass("mobileActive");
});

gnbList.click(function () {
  gnbList.removeClass("mobileMenuClick");
  $(this).addClass("mobileMenuClick");
});

/* btn top YJ */
let winHeight = $("body, html").innerHeight();
let nowScrollTop = $(window).scrollTop();
let btnTop = $("#btn_top");
let footerOffset = $("footer").offset().top;
let footerHeight = $("footer").innerHeight();
let scrPercent =
  ((nowScrollTop + $(window).innerHeight()) / (winHeight - footerHeight)) * 100;
let percentage = $("#btn_top .percentage");

function Common_resizeEvent() {
  winHeight = $("body, html").innerHeight();
  nowScrollTop = $(window).scrollTop();
  footerOffset = $("footer").offset().top;
  footerHeight = $("footer").innerHeight();
}

function btnTopPosition() {
  if (nowScrollTop > 200) {
    btnTop.addClass("on");
  } else {
    btnTop.removeClass("on");
  }
  scrPercent =
    ((nowScrollTop + $(window).innerHeight()) / (winHeight - footerHeight)) *
    100;
  percentage.css({ height: `${scrPercent * 1.3}%` });
}
$(window).scroll(function () {
  nowScrollTop = $(window).scrollTop();
  btnTopPosition();
});

btnTop.click((e) => {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 300);
  nowScrollTop = $(window).scrollTop();
  btnTopPosition();
});
$(window).resize(function () {
  setTimeout(() => {
    Common_resizeEvent();
    btnTopPosition();
  }, 500);
});

/* footer YJ */
$(".__dis_link").click((e) => {
  e.preventDefault();
});

$(".f_partners").click((e) => {
  $(e.currentTarget).toggleClass("active");
});
