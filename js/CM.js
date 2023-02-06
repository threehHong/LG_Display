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

/* ---------- Commercial ------------- */

let animateTarget = $('[class*="animate__"]');
animateTarget.css({ visibility: "hidden" });

$(window).scroll(() => {
  animateTarget.each(function () {
    let $this = $(this);
    let timing = $this.attr("data-time");
    let effect = $this.attr("data-effect");
    if ($this.offset().top - timing < $(window).scrollTop()) {
      $this.css({ visibility: "visible" });
      $this.addClass(effect);
    }
  });
});

//wheel event
let mainCM = $(".section1Tk"),
  articlesTK = mainCM.find('[class*="wheel"]'),
  articleInfo = [], //빈배열
  currentIdxTK = 0; //현위치

articlesTK.each(function () {
  let sectionOST = $(this).offset().top;
  articleInfo.push(sectionOST);
  console.log(sectionOST);
});

mainCM.on("mousewheel", function (event) {
  debounce(moveSection(event.deltaY), 300);
});

function debounce(callback, time) {
  let excuted = false; //초기값: 실행되지 않는다
  return () => {
    if (excuted == false) {
      callback();
      excuted = true; //스크롤 이벤트 작동
      setTimeout(() => {
        //스크롤 이벤트 작동후에는 time만큼 작동이 멈춘다.
        excuted = false;
      }, time);
    }
  };
}

function moveSection(dt) {
  let nextNum = 0;
  if (dt == -1 && currentIdxTK < sectionInfo.length - 1) {
    nextNum = currentIdxTK + 1;
  } else if (dt == 1 && currentIdxTK > 0) {
    nextNum = currentIdxTK - 1;
  }
  $("html,body")
    .stop()
    .animate({ scrollTop: sectionInfo[nextNum] }, 500, "easeOutQuart");
  currentIdxTK = nextNum;
}
