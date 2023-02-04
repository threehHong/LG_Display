let section2 = $("#section2"),
    section3 = $("#section3"),
    figSunlight = $("#section1 .sec_sunlight .notice"),
    figBlack = $("#section1 .sec_black .notice"),
    figBlackFrame = figBlack.find("div");

// let screenHeight = $(window).innerHeight(),
//     section2_Position = section2.offset().top,
//     section2_Height = section2.innerHeight(),
//     section3_Position = section3.offset().top,
//     figSunlight_Position = figSunlight.offset().top;
    
let screenHeight,
    section2_Position,
    section2_Height,
    section3_Position,
    figSunlight_Position;
    


function resizeEvent(){
    console.log("resize event");
    screenHeight = $(window).innerHeight(),
    section2_Position = section2.offset().top,
    section2_Height = section2.innerHeight(),
    section3_Position = section3.offset().top,
    figSunlight_Position = figSunlight.offset().top;
}

$(window).resize(function(){
    resizeEvent();
});



$(window).scroll(function(){
    let windowScroll = $(window).scrollTop();

    if(windowScroll > figSunlight_Position - screenHeight / 2){
        figSunlight.addClass("focus");
    }else{
        figSunlight.removeClass("focus");
    }
    
    if(windowScroll > section3_Position + screenHeight /2){
        section2.add(section3).removeClass("focus");
    }else if(windowScroll > section2_Position - screenHeight/2){
        section2.add(section3).addClass("focus");
    }else{
        section2.add(section3).removeClass("focus");
    }


    //  || windowScroll < section2_Position - screenHeight/2 
});

figBlack.mousemove(function(){
    let figPosX = figBlack.offset().left,
        figWidth = figBlack.innerWidth(),
        cursorX = event.pageX - figPosX;
        // console.log("figPosX", figPosX)
        // console.log("figWidth", figWidth);
        console.log(cursorX / figWidth * 100);
        figBlackFrame.css({width: cursorX / figWidth * 100 + "%"});
})

$(window).trigger("resize");
console.log(figSunlight_Position);
// sunlight event

