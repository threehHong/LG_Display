/* -- common js  --- */
let $disLink = $(".__dis_link");

$disLink.click(function (e) {
  e.preventDefault();
});

let $gnbMenu = $(".gnb_box > li");

$gnbMenu.click(function () {
  $gnbMenu.removeClass("click");
  $(this).addClass("click");
});

let $btn_lang = $(".header_lang .icon_lang"),
  $lang_list = $(".header_lang .lang_list");
$container = $("header .container");

$btn_lang.click(function () {
  $container.toggleClass("click");
});

/* -- portfolio popup --- */

let modal = $(".notice_portfolio"),
  modalBtnClose = modal.find("button"),
  modalInput = modal.find("input");

function setCookie(name, value, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
}
function checkCookie(name) {
  let cookieArr = document.cookie.split(";");
  let reject = false;

  for (let cookie of cookieArr) {
    if (cookie.search(name) > -1) {
      reject = true;
      break;
    }
  }
  if (!reject) {
    modal.removeClass("__hidden");
  }
}
checkCookie("portfolio_LGDisplay");

modalBtnClose.click(function () {
  console.log("modal clik");
  modal.addClass("__hidden");
  if (modalInput.is(":checked")) {
    console.log("button click");
    setCookie(
      "portfolio_LGDisplay",
      "본 사이트는 구직용 포트폴리오 사이트입니다.",
      1
    );
  } else {
    setCookie(
      "portfolio_LGDisplay",
      "본 사이트는 구직용 포트폴리오 사이트입니다.",
      -1
    );
  }
});

/* -- index --- */

let btn_menu = $("header .menu");

btn_menu.click(function () {
  $("header").toggleClass("active");
  $container.removeClass("click");
});

let main = $(".section_main");
let slideIndex = 1;

function slideActive() {
  main.removeClass("active pagerTimer");
  setTimeout(function () {
    main.attr("class", "section_main").addClass(`grid_template_${slideIndex}`);
  }, 500);
  setTimeout(function () {
    main.addClass("active pagerTimer");
  }, 1000);
}
function timerActive() {
  main.removeClass("pagerTimer");
  setTimeout(function () {
    main.addClass("pagerTimer");
  }, 1000);
}

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  mousewheel: {
    eventsTarget: "main",
  },
});

swiper.on("slideChangeTransitionStart", function () {
  slideIndex = ((swiper.activeIndex - 1 + 5) % 5) + 1;
  slideActive();
});

$("main").mouseover(function () {
  swiper.autoplay.pause();
  timerSwitch = false;
  main.removeClass("pagerTimer");
});
$("main").mouseout(function () {
  swiper.autoplay.run();
  timerSwitch = true;
  main.addClass("pagerTimer");
});
