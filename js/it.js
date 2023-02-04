let section2 = $("#section2"),
    section3 = $("#section3");

let screenHeight = $(window).innerHeight(),
    section2_Position = section2.offset().top,
    section2_Height = section2.innerHeight(),
    section3_Position = section3.offset().top;
    

// console.log(screenHeight)
// console.log(section2.offset().top);

$(window).scroll(function(){
    let windowScroll = $(window).scrollTop();
    // console.log(section3_Position - screenHeight /2);
    // console.log("windowscroll", windowScroll);
    
    if(windowScroll > section3_Position - screenHeight /2){
        section2.add(section3).removeClass("focus");
    }else if(windowScroll > section2_Position - screenHeight/2){
        section2.add(section3).addClass("focus");
    }else{
        section2.add(section3).removeClass("focus");
    }


    //  || windowScroll < section2_Position - screenHeight/2 
});