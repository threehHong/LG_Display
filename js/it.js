let section1 = $("#section1"),
  section2 = $("#section2"),
  section3 = $("#section3"),
  figLive = section1.find(".sec_live .monitorWrap"),
  figSunlight = section1.find(".sec_sunlight .notice"),
  figBlack = section1.find(".sec_black .notice"),
  figBlackFrame = figBlack.find("div"),
  section2Title = section2.find(".sectionTitle"),
  figBezel = section2.find(".sec_bezeless"),
  bezelImg = figBezel.find(".notice img"),
  figSize = section2.find(".sec_size"),
  figSketch = section3.find(".sec_sketch .notice"),
  figGaming = section3.find(".sec_gaming .notice"),
  gamingImg = figGaming.find(".gamingAfter");

let windowScroll = 0,
  sizeCount = 0,
  sketchSwitch = true;

let screenWidth,
  screenHeight,
  section2Pos,
  section2Height,
  section3Pos,
  figLivePos,
  figSunlightPos,
  figBezelPos,
  figBezelHeight,
  figSizePos,
  figSketchPos,
  figSketchWidth,
  figSketchHeight,
  figGamingPos,
  figGamingHeight;

function resizeEvent() {
  (screenWidth = $(window).innerWidth()),
    (screenHeight = $(window).innerHeight()),
    (section2Pos = section2.offset().top),
    (section2Height = section2.innerHeight()),
    (section3Pos = section3.offset().top),
    (figLivePos = figLive.offset().top),
    (figSunlightPos = figSunlight.offset().top),
    (figBezelPos = figBezel.offset().top),
    (figBezelHeight = figBezel.innerHeight()),
    (figSizePos = figSize.offset().top),
    (figSketchPos = figSketch.offset()),
    (figSketchWidth = figSketch.innerWidth()),
    (figSketchHeight = figSketch.innerHeight()),
    (figGamingPos = figGaming.offset().top),
    (figGamingHeight = figGaming.innerHeight());
}

function event_Live() {
  windowScroll > figLivePos - screenHeight / 2
    ? figLive.addClass("focus")
    : figLive.removeClass("focus");
}
function event_Zoom() {
  let imgOrg = $("#section1 .sec_zoom .img_origin"),
    imgScreen = $("#section1 .sec_zoom .screen"),
    lens = imgOrg.find(".lens");

  imgOrg.mousemove(function () {
    let figPosX = imgOrg.offset().left,
      figPosY = imgOrg.offset().top,
      figWidth = imgOrg.innerWidth(),
      figHeight = imgOrg.innerHeight(),
      cursorX = event.pageX - figPosX,
      cursorY = event.pageY - figPosY;

    lens.css({ left: cursorX + "px", top: cursorY + "px" });
    let backPosX = (cursorX / figWidth) * 100,
      backPosY = (cursorY / figHeight) * 100;
    imgScreen.css({
      "background-position-x": `${backPosX}%`,
      "background-position-y": `${backPosY}%`,
    });
  });
}
function event_Black() {
  figBlack.mousemove(function () {
    let figPosX = figBlack.offset().left,
      figWidth = figBlack.innerWidth(),
      cursorX = event.pageX - figPosX;
    let widthPercent = (cursorX / figWidth) * 100;
    if (widthPercent > 99) widthPercent = 99;
    figBlackFrame.css({ width: widthPercent + "%" });
  });
}

function event_Sunlight() {
  windowScroll > figSunlightPos - screenHeight / 2
    ? figSunlight.addClass("focus")
    : figSunlight.removeClass("focus");
}

function event_BgColor() {
  if (windowScroll > section3Pos + screenHeight / 2) {
    section2.add(section3).removeClass("focus");
  } else if (windowScroll > section2Pos - screenHeight / 2) {
    section2.add(section3).addClass("focus");
  } else {
    section2.add(section3).removeClass("focus");
  }
}

function event_Size() {
  let s = skrollr.init({
    constants: {
      foo: function () {
        return figSizePos;
      },
    },
    mobileCheck: function () {
      return false;
    },
  });
  if ($(window).innerWidth <= 480) s.destroy();
}

function event_Bezel() {
  if (windowScroll > figBezelPos) {
    let bezelNum = Math.floor(((windowScroll - figBezelPos) / 1200) * 100);
    if (bezelNum > 59) bezelNum = 59;
    let srcNum = ("0" + bezelNum).substr(-2);
    bezelImg.attr({
      src: `img/bezelessimg/OVERVIEW_DESIGN_PC_FHD_000${srcNum.substr(-2)}.jpg`,
    });
  }
}

function event_Sketch() {
  if (screenWidth <= 480) {
    figSketch.find(".grid").html(`<div class="penTouch"></div>`);
    sketchSwitch = true;
  } else if (sketchSwitch) {
    sketchSwitch = false;
    let sketchDiv = `<div class="penTouch"></div>`.repeat(600);
    figSketch.find(".grid").html(sketchDiv);
  }
  let penTouch = figSketch.find(".penTouch");
  penTouch.each(function (idx, item) {
    penTouch.eq(idx).css({
      "background-size": `${figSketchWidth}px ${figSketchHeight}px`,
      "background-position-x": `-${
        penTouch.eq(idx).offset().left - figSketchPos.left
      }px`,
      "background-position-y": `-${
        penTouch.eq(idx).offset().top - figSketchPos.top
      }px`,
    });
  });
  penTouch.mouseover(function () {
    $(this).addClass("drawing");
  });
}

function event_Sketch_mobileOnly() {
  windowScroll > figSketchPos.top - screenHeight / 2
    ? figSketch.find(".grid").addClass("mobileSketch")
    : figSketch.find(".grid").removeClass("mobileSketch");
}

function event_Gaming() {
  if (windowScroll > figGamingPos) {
    let gamingImgHeight =
      ((windowScroll - figGamingPos) / figGamingHeight) * 100;
    if (gamingImgHeight > 100) gamingImgHeight = 100;
    gamingImg.css({ bottom: 100 - gamingImgHeight + "%" });
  }
}

function event_folderable() {
  if (
    windowScroll >
    $(".sec_folderable .notice img").offset().top - screenHeight / 2
  ) {
    $(".sec_folderable .notice img").addClass("active");
  } else {
    $(".sec_folderable .notice img").removeClass("active");
  }
}

$(window).resize(function () {
  resizeEvent();
  event_Size();
  event_Sketch();
});

$(window).trigger("resize");

event_Zoom();
event_Black();
event_Sketch();

$(window).scroll(function () {
  windowScroll = $(window).scrollTop();
  event_Live();
  event_Sunlight();
  event_BgColor();
  event_Bezel();
  event_Gaming();
  event_Sketch_mobileOnly();
  event_folderable();
});

function imgPreLoading() {
  for (let i = 0; i < 60; i++) {
    let img = new Image();
    img.src = `./img/bezelessimg/OVERVIEW_DESIGN_PC_FHD_000${("0" + i).substr(
      -2
    )}.jpg`;
  }
  img = new Image();
  img.src = `./img/it_img_gamingafter.jpg`;
}
imgPreLoading();
