let btn_menu = $("header .menu");

btn_menu.click(function(){
    $("header").toggleClass("active");
    $container.removeClass("click");
});

let main = $(".section_main");
let slideIndex = 1;
    // timerSwitch = true;

function slideActive(){
    main.removeClass("active pagerTimer");
    setTimeout(function(){
        main.attr("class", "section_main").addClass(`grid_template_${slideIndex}`);
    }, 500)
    setTimeout(function(){main.addClass("active pagerTimer")}, 1000);
}
function timerActive(){
    main.removeClass("pagerTimer");
    setTimeout(function(){main.addClass("pagerTimer")}, 1000);
}

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed : 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    mousewheel: {
        eventsTarget: "main",
    },
});

swiper.on("slideChangeTransitionStart", function(){
    slideIndex = ((swiper.activeIndex-1)%5)+1;
    slideActive();
    // if(timerSwitch){timerActive();};
});

// $("main").hover(function(){
//     swiper.autoplay.pause();
//     timerSwitch = false;
//     main.removeClass("pagerTimer");
// }, function(){
//     swiper.autoplay.run();
//     timerSwitch = true;
//     main.addClass("pagerTimer");
// });


$("main").mouseover(function(){
    swiper.autoplay.pause();
    timerSwitch = false;
    main.removeClass("pagerTimer");
});
$("main").mouseout(function(){
    swiper.autoplay.run();
    timerSwitch = true;
    main.addClass("pagerTimer");
});