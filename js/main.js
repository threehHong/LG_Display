// header_JA_230130 

let gnb = $('.gnb_box > li'),
lnbBG = $('.wrapper'),
lnb = $('#header .lnb_box');

    $('.gnb_box').mouseenter(function(){
        $('header').addClass('h_color'); //addremove로 수정
    });
    gnb.click(function(){
        $(this).parent('ul').toggleClass('clicked');
        lnbBG.toggleClass('active');
        lnb.addClass('active');
    });


// /header_JA_230130 