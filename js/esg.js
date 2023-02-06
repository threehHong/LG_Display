/* ESG HEADER */ 
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
/* ESG HEADER */ 



/* ESG MAIN */
let rate = $(".water_path");
let targetNum = 82;
let excuted = false;


$(window).scroll(function() {

    let scroll_AMT = $(this).scrollTop();
    console.log("scroll_AMT : ", scroll_AMT);

    /* 스크롤 동작 안해도 콘솔창에 나오게 하는 기능 - 알아보기 */
    $(window).trigger("scorll");


    /* SECTION NATURAL(circle, line, font) */
    if(scroll_AMT > 300){
        $('.svg_effect_circle h2').addClass('active_para');
        $('.line_circle line:nth-child(1)').addClass('active_lf');
        $('.circle_right').addClass('active_cr');
        $('.circle_left').addClass('active_cl');
        $('.line_circle line:nth-child(5)').addClass('active_ls');
        $('.water_path').addClass('active_w');
        $('.water_path_font').addClass('active_wf');
    }  
    

    /* SUB IMG */
    let img_AMT = $('.sub_img').offset().top - 500;

    if(scroll_AMT > img_AMT) {
        $('.sub_img .img').addClass('active_sbimg')
    }


    /* GRAPH TREND */
    let graph_trend_AMT = $('.graph_trend').offset().top - 670;

    console.log("graph_trend_AMT : ",graph_trend_AMT);

    if(scroll_AMT > graph_trend_AMT) {
        $('.graph_trend svg path:nth-child(2)').addClass('active_trend');
        $('.graph_trend svg ellipse, svg path:nth-child(5)').addClass('active_trend');
        $('.graph_trend svg text').addClass('active_trend');
    }


    /* 수자원 관리 */
    let graph_water_AMT = $('.resources_water .graph').offset().top - 600;
    
    console.log("graph_water_AMT : ", graph_water_AMT);

    if(scroll_AMT > graph_water_AMT) {
        $('.resources_water .graph path:nth-child(10)').addClass('active_water_r');
        $('.resources_water .graph text:nth-child(11)').addClass('active_water_r');

        $('.resources_water .graph path:nth-child(12)').addClass('active_water_y');
        $('.resources_water .graph text:nth-child(13)').addClass('active_water_y');
    }


    /* 폐기물 관리 */
    let graph_waste_AMT = $('.resources_waste .graph').offset().top - 600;
    
    console.log("graph_waste_AMT : ", graph_waste_AMT);

    if(scroll_AMT > graph_waste_AMT) {
        $('.resources_waste .graph path:nth-child(9)').addClass('active_waste_r');
        $('.resources_waste .graph text:nth-child(10)').addClass('active_waste_r');

        $('.resources_waste .graph path:nth-child(12)').addClass('active_waste_y');
        $('.resources_waste .graph text:nth-child(13)').addClass('active_waste_y');
    
    }


    /* 환경법규 준수 */
    let graph_follow_AMT = $('.air_pollution_container .graph').offset().top - 450;
    let graph_follow_AMTb = $('.water_pollution_container .graph').offset().top - 450;
    let window_width_resposive = 1580;

    console.log("graph_follow_AMT : ", graph_follow_AMT);
    console.log("graph_follow_AMTb : ", graph_follow_AMTb);

    if(window.innerWidth > window_width_resposive) {
        if(scroll_AMT > graph_follow_AMT) {
            /* .air_pollution_container */
            $('.air_pollution_container .graph path:nth-child(3)').addClass('active_follow_r');
            $('.air_pollution_container .graph text:nth-child(9)').addClass('active_follow_r');
    
            $('.air_pollution_container .graph path:nth-child(1)').addClass('active_follow_y');
            $('.air_pollution_container .graph text:nth-child(11)').addClass('active_follow_y');
    
            $('.air_pollution_container .graph path:nth-child(8)').addClass('active_follow_g');
            $('.air_pollution_container .graph text:nth-child(13)').addClass('active_follow_g');
    
            /* water_pollution_container */
            $('.water_pollution_container .graph path:nth-child(3)').addClass('active_follow_r');
            $('.water_pollution_container .graph text:nth-child(9)').addClass('active_follow_r');
    
            $('.water_pollution_container .graph path:nth-child(1)').addClass('active_follow_y');
            $('.water_pollution_container .graph text:nth-child(11)').addClass('active_follow_y');
    
            $('.water_pollution_container .graph path:nth-child(8)').addClass('active_follow_g');
            $('.water_pollution_container .graph text:nth-child(13)').addClass('active_follow_g');
        } 
    } else if(window.innerWidth <= window_width_resposive) { 
        if(scroll_AMT > graph_follow_AMT) {
            /* .air_pollution_container */
            $('.air_pollution_container .graph path:nth-child(3)').addClass('active_follow_r');
            $('.air_pollution_container .graph text:nth-child(9)').addClass('active_follow_r');
    
            $('.air_pollution_container .graph path:nth-child(1)').addClass('active_follow_y');
            $('.air_pollution_container .graph text:nth-child(11)').addClass('active_follow_y');
    
            $('.air_pollution_container .graph path:nth-child(8)').addClass('active_follow_g');
            $('.air_pollution_container .graph text:nth-child(13)').addClass('active_follow_g');
        } 
        if(scroll_AMT > graph_follow_AMTb)  {
            /* water_pollution_container */
            $('.water_pollution_container .graph path:nth-child(3)').addClass('active_follow_r');
            $('.water_pollution_container .graph text:nth-child(9)').addClass('active_follow_r');
    
            $('.water_pollution_container .graph path:nth-child(1)').addClass('active_follow_y');
            $('.water_pollution_container .graph text:nth-child(11)').addClass('active_follow_y');
    
            $('.water_pollution_container .graph path:nth-child(8)').addClass('active_follow_g');
            $('.water_pollution_container .graph text:nth-child(13)').addClass('active_follow_g');
        }
    }
    
})
/* ESG MAIN */


/* ESG FOOTER */
$(".__dis_link").click((e) => {
    e.preventDefault();
  });
  
  $(".f_partners").click((e) => {
    $(e.currentTarget).toggleClass("active");
  });
/* ESG FOOTER */



