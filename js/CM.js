/* ---------- Commercial ------------- */

let animateTarget = $('[class*="animate__"]');
animateTarget.css({ visibility: "hidden" });

$(window).scroll(() => {
  animateTarget.each(function () {
    let $this = $(this);
    let timing = $this.attr("data-time");
    let effect = $this.attr("data-effect");
    if ($this.offset().top - timing < $(window).scrollTop()) {
      $this.css({ visibility: "visible" });
      $this.addClass(effect);
    }
  });
});

//wheel event
$("article").mousewheel(function (event, delta) {
  console.log(delta);
  if (delta > 0) {
    //delta> 0 :휠을 위로
    var scrollY = $(this).prev().offset().top;

    $("html,body")
      .stop()
      .animate({ scrollTop: scrollY }, 1000, "easeInOutQuart");
    console.log(scrollY);
  } else if (delta < 0) {
    //delt< 0보다 : 휠을 아래로
    var scrollY = $(this).next().offset().top;
    $("html,body")
      .stop()
      .animate({ scrollTop: scrollY }, 1000, "easeInOutQuart");
    console.log(scrollY);
  }
});
