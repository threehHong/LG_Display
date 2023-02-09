/********** OLED EX(SECTION1) **********/
/* $(window).resize(function(){
    let h2_bottom_val = ( ($(window).height() / $(window).width()) * 45 );
    console.log(h2_bottom_val);

    $('.banner h2').css({ 
        bottom: `${h2_bottom_val}%`,
    })
}) */

/* $(window).resize(function(){
    let h2_bottom_val = ( ($(window).height() / $(window).width()) * 45 );
    console.log(h2_bottom_val);

    $('.banner h2').css({ 
        bottom: `${h2_bottom_val}%`,
    })
}) */

let ex_intro = $('.EX_intro'),
    oled = ex_intro.find('h2:nth-child(1)'),
    ex = ex_intro.find('h2:nth-child(2)');
    

let count = 0,
    count_al = 0,
    count_bezel = 0;
$(window).scroll(function(){
    let scroll_AMT = $(window).scrollTop();
    console.log('scroll_ATM :', scroll_AMT);

    /* 꽃 피는 이미지 이벤트 */
    let banner_height = $(".banner_container").innerHeight();

    count = Math.floor(((scroll_AMT) / banner_height) * 24)
    if(count > 24) { count = 24 }
    // $(".banner").css({"background-image":`url(../img/flower/flower${count}.jpg)`,})
    $(".banner img").attr({"src":`img/flower/flower${count}.jpg`})
    /* 꽃 피는 이미지 이벤트 */

    // OLED EX 문구(좌우 등장)
    let oled_value = -5000 + scroll_AMT; 
    let ex_value = 5000 - scroll_AMT;

    if(oled_value < 0) {
        oled.css({
            transform: `translateX(${oled_value}px)`
        })    
        ex.css({
            transform: `translateX(${ex_value}px)`
        })    
    } else if(oled_value  > -500) {  
        oled.addClass('active_intro_stop');
        ex.addClass('active_intro_stop') 
    }

    if(scroll_AMT < 4800 && scroll_AMT > 4700) {
        oled.removeClass('active_intro_stop');
        ex.removeClass('active_intro_stop');
    }
    // console.log('olled_value', oled_value);



    // EX INTRO P태그 fade-in 등장
    if(scroll_AMT > 3200 ) {
        $('.EX_intro p').addClass('active_EX_intro');
        // $('.EX_intro p').fadeIn();
    } else {
        $('.EX_intro p').removeClass('active_EX_intro');
    } 
    


    // EX INTRO에서 activ_EX_stick 클래스 제거
    if(scroll_AMT > 13000) { /* 13200 */
        ex_intro.css({ transform: 'translateY(8000px)' });
        ex_intro.removeClass('active_EX_sticky');
    } else if (scroll_AMT <= 12999 && scroll_AMT >= 12000) {
        ex_intro.css({ transform: 'translateY(0px)' });
        ex_intro.addClass('active_EX_sticky');
    } 
    // console.log(ex_intro.offset().top)



    // 중수소 소자 스크롤 이벤트 
    if(scroll_AMT >= 16200 && scroll_AMT <= 19000) {
        $('.EX_deuterium h2').addClass('active_deuterium_h2');
        $('.EX_deuterium p').addClass('active_deuterium_p')
    } else if(scroll_AMT > 20000) {
        $('.EX_deuterium h2').removeClass('active_deuterium_h2');
        $('.EX_deuterium p').removeClass('active_deuterium_p')
    } else {
        $('.EX_deuterium h2').removeClass('active_deuterium_h2');
        $('.EX_deuterium p').removeClass('active_deuterium_p')
    } 
    


    // 알고리즘 이미지 시퀀스 이벤트
    let algorism_offsetTop = $('.EX_algorism_container').offset().top,
        algorism_innerHieght = $('.EX_algorism_container').innerHeight();
    if(scroll_AMT > 21700) {
        count_al = Math.floor(((scroll_AMT - algorism_offsetTop) / algorism_innerHieght) * 150);
        
        if(count_al > 96) { count_al = 96 } /* 98 */
        console.log(count_al);

        $(".EX_algorism img").attr({"src":`img/algorism/dotted${count_al}.jpg`})
    } 
    // 알고리즘 이미지 스크롤 이벤트
    if(scroll_AMT >= 31000) {
        $('.EX_algorism .img').addClass('active_algorism_opacity');
        $('.EX_algorism img').addClass('active_algorism_opacityS')
    } else {
        $('.EX_algorism .img').removeClass('active_algorism_opacity');
        $('.EX_algorism img').removeClass('active_algorism_opacityS')
    }



    // 베젤 이미지 시퀀스 이벤트
    let bezel_offsetTop = $('.EX_bezel_container').offset().top,
        bezel_innerHieght = $('.EX_bezel_container').innerHeight();
    if(scroll_AMT > 34800) {
        count_bezel = Math.floor(((scroll_AMT - bezel_offsetTop) / bezel_innerHieght) * 10);
        console.log(count_bezel);
        if(count_bezel > 9) { count_bezel = 9 }
       
        $(".EX_bezel img").attr({"src":`img/bezel/bezel${count_bezel}.jpg`})
    }

})

/* SKROLLR */
// var s = skrollr.init({
//     /* 모바일 문제 해결 코드 */
//     mobileCheck: function () {
//         return false;
//     },
// });
/* 모바일 문제 */
/* $(window).resize(function() {
    if($(window).innerWidth() < 480) {
        s.destroy();
    }
}) */

/********** OLED EX(SECTION1) **********/

/********** OLED ACE(SECTION2) **********/
AOS.init();

//a1_sticky
let se02_$window = $(window),
    se02_$ACE = $(".ACE_tt_box"),
    se02_$ACE_clone = se02_$ACE.contents().clone(),
    se02_$ACE_clone_inner = $('<ul class = "ace_clone"></ul>'),
    se02_$ACE_hold = se02_$ACE.offset().top + se02_$ACE.outerHeight();

console.log(se02_$ACE_hold);

se02_$ACE_clone_inner.append(se02_$ACE_clone);
se02_$ACE_clone_inner.appendTo(".ACE_title");

se02_$window.scroll(function () {
    if ($(this).scrollTop() > se02_$ACE_hold) {
        se02_$ACE_clone_inner.addClass("visible");
    } else {
        se02_$ACE_clone_inner.removeClass("visible");
    }
});

//반응형
se02_$window.resize(() => {
    se02_$ACE_hold = se02_$ACE.offset().top + se02_$ACE.outerHeight();
});

//NAV_toggleclass 추가 시 sticky_ace 높이 수정
$("header").mouseover(function () {
    $(".ace_clone.visible").addClass("headerHeight");
});
se02_$window.scroll(function () {
    $(".ace_clone.visible").removeClass("headerHeight");
});

//a1_wheel
let aceA1Position = $(".ACE_A").offset().top,
    wheelNum = 0,
    fileNum;

console.log(aceA1Position);

$(window).scroll(function () {
    let = aceA1Scroll = $(window).scrollTop();
    console.log(aceA1Scroll);
    if (aceA1Scroll >= aceA1Position) {
        fileNum = Math.floor(
            ((aceA1Scroll - aceA1Position) /
                $(".ACE_a1_scrollImg").innerHeight()) *
                45
        );
        if (fileNum > 25) fileNum = 25;
        console.log(fileNum);
        //정수로 만들어주기 위해서_버림

        //"0" + num;대상.substr(-2);

        $(".a1_scroll img").attr(
            "src",
            `./img/OLED_A1/ACE_A${("0" + fileNum).substr(-2)}.jpg`
        );
    } else {
    }
});
/********** OLED ACE(SECTION2) **********/
