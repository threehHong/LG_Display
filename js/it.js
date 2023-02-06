let section2 = $("#section2"),
  section3 = $("#section3"),
  figLive = $("#section1 .sec_live .monitorWrap"),
  figSunlight = $("#section1 .sec_sunlight .notice"),
  figBlack = $("#section1 .sec_black .notice"),
  figBlackFrame = figBlack.find("div"),
  figBezel = section2.find(".sec_bezeless"),
  bezelImg = figBezel.find(".notice img");

// let screenHeight = $(window).innerHeight(),
//     section2_Position = section2.offset().top,
//     section2_Height = section2.innerHeight(),
//     section3_Position = section3.offset().top,
//     figSunlight_Position = figSunlight.offset().top;

// bezeless event

let screenHeight,
  section2_Position,
  section2_Height,
  section3_Position,
  figLive_Position,
  figSunlight_Position,
  figBezelPos,
  figBezelHeight;

function resizeEvent() {
  console.log("resize event");
  (screenHeight = $(window).innerHeight()),
    (section2_Position = section2.offset().top),
    (section2_Height = section2.innerHeight()),
    (section3_Position = section3.offset().top),
    (figLive_Position = figLive.offset().top),
    (figSunlight_Position = figSunlight.offset().top),
    (figBezelPos = figBezel.offset().top),
    (figBezelHeight = figBezel.innerHeight());
}

$(window).resize(function () {
  resizeEvent();
});

$(window).scroll(function () {
  let windowScroll = $(window).scrollTop();

  if (windowScroll > figLive_Position - screenHeight / 2) {
    figLive.addClass("focus");
  } else {
    figLive.removeClass("focus");
  }

  if (windowScroll > figSunlight_Position - screenHeight / 2) {
    figSunlight.addClass("focus");
  } else {
    figSunlight.removeClass("focus");
  }

  if (windowScroll > section3_Position + screenHeight / 2) {
    section2.add(section3).removeClass("focus");
  } else if (windowScroll > section2_Position - screenHeight / 2) {
    section2.add(section3).addClass("focus");
  } else {
    section2.add(section3).removeClass("focus");
  }

  if (windowScroll > figBezelPos) {
    // console.log("windowScroll : ", windowScroll);
    // console.log("figBezelPos + figBezelHeight", figBezelPos + figBezelHeight);
    let bezelNum = Math.floor(((windowScroll - figBezelPos) / 1200) * 100);
    if (bezelNum > 59) {
      bezelNum = 59;
    }
    let srcNum = ("0" + bezelNum).substr(-2);
    // console.log(srcNum);
    bezelImg.attr({
      src: `img/bezelessimg/OVERVIEW_DESIGN_PC_FHD_000${srcNum.substr(-2)}.jpg`,
    });
    // console.log("bezelNum : ", bezelNum);
    // console.log(bezelNum);
  }

  //bezel event
});

figBlack.mousemove(function () {
  let figPosX = figBlack.offset().left,
    figWidth = figBlack.innerWidth(),
    cursorX = event.pageX - figPosX;
  // console.log("figPosX", figPosX)
  // console.log("figWidth", figWidth);
  console.log((cursorX / figWidth) * 100);
  let widthPercent = (cursorX / figWidth) * 100;
  if (widthPercent > 99) {
    widthPercent = 99;
  }
  figBlackFrame.css({ width: widthPercent + "%" });
});

$(window).trigger("resize");

// zoom event

let imgOrg = $("#section1 .sec_zoom .img_origin"),
  imgScreen = $("#section1 .sec_zoom .screen"),
  lens = imgOrg.find(".lens");

imgOrg.mousemove(function () {
  let figPosX = imgOrg.offset().left,
    figPosY = imgOrg.offset().top,
    figWidth = imgOrg.innerWidth(),
    figHeight = imgOrg.innerHeight(),
    lensWidth = lens.innerWidth(),
    lensHeight = lens.innerHeight(),
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
