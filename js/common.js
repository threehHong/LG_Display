let $disLink = $(".__dis_link");

$disLink.click(function(e){
    e.preventDefault();
})

let $gnbMenu = $(".gnb_box > li");


$gnbMenu.click(function(){
    console.log($(this));
    $gnbMenu.removeClass("click");
    $(this).addClass("click");
});

let $btn_lang = $(".header_lang .icon_lang"),
    $lang_list = $(".header_lang .lang_list")
    $container = $("header .container");

$btn_lang.click(function(){
    $container.toggleClass("click");
})