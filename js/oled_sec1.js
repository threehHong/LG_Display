/* BANNER(WHEEL ANIMATION) */
let $container = $('.image-sequence')
    $images = $container.find('.img');

// 프레임 총 개수
frameLength = $images.length,
// 현재 프레임 위치
currentFrame = 0,
// 애니메이션 카운트
counter = 0;
// y애니메이션의 속도
velocity = 0;
// 타이머 이름
timer = null;

let scroll_AMT = $(window).scrollTop();

// flower 이미지 추가 
$images.each(function(idx) {
    $(this).css({
        backgroundImage: `url(../img/flower/flower${idx}.jpg)`,
        display: 'none' 
    })
})
// 첫번째 이미지 보이게
$images.eq(0).css({display: 'inline'});


/* $(window).scroll(function(){
    console.log($(window).scrollTop());
    console.log($('.banner').offset().top);
}) */

// mouse wheel library
let banner = $('.banner');

$container.mousewheel(function(event, delta) { /* delta : 휠의 움직이는 방향 감지 */
    if(delta < 0) {
        // 속도 조절
        velocity += 1.5;
    } else {
        velocity -= 1.5;
    }
    /* console.log(delta);
    console.log(velocity); */

    console.log(timer);
    if(timer == null) {
        startAnimation();
    } else {
    }

    if($(window).scrollTop() >= 1800) {
        banner.removeClass('active_banner_stricky');
        banner.css({
            transform: 'translateY(1700px)'
        });
    } else if ($(window).scrollTop() >= 1600 && $(window).scrollTop() < 1799) {
        banner.addClass('active_banner_stricky');
        banner.css({transform: 'translateY(0px)'});
    }
}); // mouse wheel library

// startAnimation
function startAnimation() {
    if(timer == null) {
        timer = setInterval(animateSequence, 1000/30);
    }
} // startAnimation
    
// animateSequence
function animateSequence() {
    let nextFrame;

    velocity *= 0.6; 
    // velocity 속도가 0에 근접하면
    /* console.log(velocity); */

    if(-0.001 < velocity && velocity < 0.001) {
        stopAnimation();
    } else {
        counter = (counter + velocity) % frameLength;
        // 1 = (0 + 1) % 192
    }
    // console.log(counter);

    nextFrame = Math.floor(counter);
    
    if (nextFrame == 25 ) {
        $images.eq(nextFrame).show();
    } 
    $images.eq(currentFrame).hide();
    $images.eq(nextFrame).show();
    /* currentFrame = nextFrame; */
} // animateSequence

// stopAnimation
function stopAnimation(timer) {
    clearInterval(timer);
    timer = null;
} //stopAnimation


/********** EX INTRO **********/
let ex_intro = $('.EX_intro'),
    oled = ex_intro.find('h1:nth-child(1)'),
    ex = ex_intro.find('h1:nth-child(2)');


$(window).scroll(function(){
    scroll_AMT = $(window).scrollTop();
    /* console.log('scroll_ATM :', scroll_AMT); */

    let oled_position_value = -3200 + scroll_AMT; 
    let ex_position_value = 3200 - scroll_AMT;

    if(oled_position_value < 0) {
        oled.css({
            transform: `translateX(${oled_position_value}px)`
        })    
        ex.css({
            transform: `translateX(${ex_position_value}px)`
        })    
           
        /* oled.animate({  
            transform: `translateX(${oled_position_value}px)`,
            color: 'red'
        }, 200)     */   
    } 
    /* 
    translateX(0px)에서 멈추지 않았을 경우 translateX(0px)으로 되돌리는 애니메이션(안전장치)
    1. else if를 넣지 않으면 -500이하 부터 class가 추가되어 translateX(0px)까지 애니매이션이 먹힌다
    2. else if를 넣을 경우 oled_position_value < 0일 경우에서 오차가 발생하여 멈췄을 때 oled_position_value > -500이상의 범위에 
    위치했을 때 애니메이션이 먹힌다 정확성을 보통 오차가-150~150사이 이니 else if를 사용하여 스크롤을 최대한 사용하는 것이 좋을거 같다 
    */
    else if(oled_position_value  > -500) {  
        oled.addClass('active_intro_stop');
        ex.addClass('active_intro_stop') 
    }

    /* if(scroll_AMT < 3000 && scroll_AMT > 2900) { */
    if(scroll_AMT < 3100 && scroll_AMT > 2500) {
        oled.removeClass('active_intro_stop');
        ex.removeClass('active_intro_stop');
    }
    // console.log('olled_value', oled_position_value);


    // EX INTRO P태그 fade-in 등장
    /* if(scroll_AMT > 3200 ) { */
    if(scroll_AMT > 5200 ) {
        $('.EX_intro p').addClass('active_EX_intro');
        // $('.EX_intro p').fadeIn();
    } else {
        $('.EX_intro p').removeClass('active_EX_intro');
    }
    
    /* 9200, 5100여기서 둘다 같은 값 더해주거나 */
    /* EX INTRO에서 activ_EX_stick 클래스 제거 */
    /* if(scroll_AMT > 10200) { */
    if(scroll_AMT > 6900) {
        ex_intro.css({ transform: 'translateY(3800px)' });
        ex_intro.removeClass('active_EX_sticky');
    } else if (scroll_AMT <= 6899 && scroll_AMT >= 6700) {
        ex_intro.css({ transform: 'translateY(0px)' });
        ex_intro.addClass('active_EX_sticky');
    }
    /* console.log(ex_intro.offset().top) */
    
})

/********** EX INTRO **********/
/* $(window).scroll(function(){ 
    let deuterium = $('.EX_deuterium'),
        deuterium_h = deuterium.find('h2'),
        deuterium_p = deuterium.find('p'),
        deuterium_distance = deuterium.offset().top

        console.log(deuterium_distance);

    if(scroll_AMT > deuterium_distance) {
        deuterium.addClass('active_deuterium_sticky');
        deuterium.addClass('active_deuterium_opacity');
        deuterium_h.css({
            opacity: '1',
            trnasition: 'opacity 2s 1s',
        })
        deuterium_p.css({
            opacity: '1',
            trnasition: 'opacity 2s 2s',
        })
    }
}) */



/* EX ALGORISM(WHEEL ANIMATION) */
let $container_algorism = $('.image-sequence-al'),
    $images_algorism = $container_algorism.find('.img');

// 프레임 총 개수
frameLength_algorism = $images_algorism.length,
// 현재 프레임 위치
currentFrame_algorism = 0,
// 애니메이션 카운트
counter_algorism = 0;
// y애니메이션의 속도
velocity_algorism = 0;
// 타이머 이름
timer_algorism = null;


// algorism 이미지 추가 
$images_algorism.each(function(idx) {
    $(this).css({
        backgroundImage: `url(../img/algorism/dotted${idx}.jpg)`,
        display: 'none' 
    })
})
// 첫번째 이미지 보이게
$images_algorism.eq(0).css({display: 'inline'});


$(window).scroll(function(){
    console.log($(window).scrollTop());
    console.log($('.EX_algorism').offset().top);
})

// mouse wheel library
let ex_algorism = $('.EX_algorism');

$container_algorism.mousewheel(function(event, delta) { /* delta : 휠의 움직이는 방향 감지 */
    if(delta < 0) {
        // 속도 조절
        velocity_algorism += 1.5;
    } else {
        velocity_algorism -= 1.5;
    }
    /* console.log(delta);
    console.log(velocity_algorism); */

    console.log(timer_algorism);
    if(timer_algorism == null) {
        startAnimation_al();
    } else {
    }

    if($(window).scrollTop() >= 15500) {
        ex_algorism.removeClass('active_al_sticky');
        ex_algorism.css({
            /* $('.EX_algorism').offset().top 여기 위치값에서 움직인 값 추가하기 */
            transform: 'translateY(4900px)'
        });
    } /* else if ($(window).scrollTop() >= 1600 && $(window).scrollTop() < 1799) {
        banner.addClass('active_al_sticky');
        banner.css({transform: 'translateY(0px)'});
    } */
    
}); // mouse wheel library

// startAnimation
function startAnimation_al() {
    if(timer_algorism == null) {
        timer_algorism = setInterval(animateSequence_al, 1000/30);
    }
} // startAnimation
    
// animateSequence_al
function animateSequence_al() {
    let nextFrame;

    velocity_algorism *= 0.6; 
    // velocity_algorism 속도가 0에 근접하면
    /* console.log(velocity_algorism); */

    if(-0.001 < velocity_algorism && velocity_algorism < 0.001) {
        stopAnimation_al();
    } else {
        counter_algorism = (counter_algorism + velocity_algorism) % frameLength_algorism;
        // 1 = (0 + 1) % 192
    }
    // console.log(counter_algorism);

    nextFrame = Math.floor(counter_algorism);
    
    if (nextFrame == 25 ) {
        $images_algorism.eq(nextFrame).show();
    } 
    $images_algorism.eq(currentFrame_algorism).hide();
    $images_algorism.eq(nextFrame).show();
    /* currentFrame_algorism = nextFrame; */
} // animateSequence_al

// stopAnimation_al
function stopAnimation_al(timer_algorism) {
    clearInterval(timer_algorism);
    timer_algorism = null;
} //stopAnimation





/* EX BEZEL(WHEEL ANIMATION) */
let $container_bezel = $('.image-sequence-bezel')
    $images_bezel = $container_bezel.find('.img');

// 프레임 총 개수
frameLength_bezel = $images_bezel.length,
// 현재 프레임 위치
currentFrame_bezel = 0,
// 애니메이션 카운트
counter_bezel = 0;
// y애니메이션의 속도
velocity_bezel = 0;
// 타이머 이름
timer_bezel = null;


// bezel 이미지 추가 
$images_bezel.each(function(idx) {
    $(this).css({
        backgroundImage: `url(../img/bezel/bezel${idx}.jpg)`,
        display: 'none' 
    })
})
// 첫번째 이미지 보이게
$images_bezel.eq(0).css({display: 'inline'});


/* $(window).scroll(function(){
    console.log($(window).scrollTop());
    console.log($('.EX_algorism').offset().top);
}) */

// mouse wheel library
let ex_bezel = $('.EX_bezel');

$container_bezel.mousewheel(function(event, delta) { /* delta : 휠의 움직이는 방향 감지 */
    if(delta < 0) {
        // 속도 조절
        velocity_bezel += 1.5;
    } else {
        velocity_bezel -= 1.5;
    }
    /* console.log(delta);
    console.log(velocity_bezel); */

    console.log(timer_bezel);
    if(timer_bezel == null) {
        startAnimation_bezel();
    } else {
    }

    /* if($(window).scrollTop() >= 1800) {
        ex_bezel.removeClass('active_bezel_sticky');
        ex_bezel.css({
            transform: 'translateY(1700px)'
        });
    } else if ($(window).scrollTop() >= 1600 && $(window).scrollTop() < 1799) {
        banner.addClass('active_bezel_sticky');
        banner.css({transform: 'translateY(0px)'});
    } */
    
}); // mouse wheel library

// startAnimation
function startAnimation_bezel() {
    if(timer_bezel == null) {
        timer_bezel = setInterval(animateSequence_bezel, 1000/30);
    }
} // startAnimation
    
// animateSequence_bezel
function animateSequence_bezel() {
    let nextFrame_bezel;

    velocity_bezel *= 0.6; 
    // velocity_bezel 속도가 0에 근접하면
    /* console.log(velocity_bezel); */

    if(-0.001 < velocity_bezel && velocity_bezel < 0.001) {
        stopAnimation_bezel();
    } else {
        counter_bezel = (counter_bezel + velocity_bezel) % frameLength_bezel;
        // 1 = (0 + 1) % 192
    }
    // console.log(counter_bezel);

    nextFrame_bezel = Math.floor(counter_bezel);
    
    if (nextFrame_bezel == 25 ) {
        $images_bezel.eq(nextFrame_bezel).show();
    } 
    $images_bezel.eq(currentFrame_bezel).hide();
    $images_bezel.eq(nextFrame_bezel).show();
    /* currentFrame_bezel = nextFrame_bezel; */
} // animateSequence_bezel

// stopAnimation_bezel
function stopAnimation_bezel(timer_bezel) {
    clearInterval(timer_bezel);
    timer_bezel = null;
} //stopAnimation


/* 애니메이션으로 구현해보기 */
// $('.EX_intro p').fadeIn();
/* oled.mouseover(function(){
    animate({  
        color: 'red'
    }, 200)
}) */


/* 
참고 사이트 
http://www.coleomarketing.com/
*/





