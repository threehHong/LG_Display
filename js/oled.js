AOS.init();

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

//ACE_A1_img
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
