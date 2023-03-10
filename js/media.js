/* slide JA*/
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  // loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  // Responsive breakpoints
  breakpoints: {
    390: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
$(".media_sec01_p .media_sec01_txt a").html(
  $(swiper.slides[0]).find("h4").clone()
);
swiper.on("slideChange", function () {
  let content = $(swiper.slides[swiper.activeIndex]).find("h4").clone();

  console.log(content);
  // swiper.slides[swiper.activeIndex.find("h4").clone()].appendTo("a");
  $(".media_sec01_p .media_sec01_txt a").html(content);
  $(".change_num").text(swiper.activeIndex + 1);
});

/* tab YJ */
$(".tab_btn button").click(function (e) {
  e.preventDefault();
  // $(this).parent().find("button").removeClass("active");
  $(this).toggleClass("active");
  $(this).siblings().removeClass("active");

  let targetValue = "";
  let activeBtn = $(".tab_btn button.active");

  if ($(this).attr("data-filter") === "*") {
    targetValue = "*";
    $(".tab_btn button").removeClass("active");
    $(".news_article li").show();
    $(this).addClass("active");
  } else {
    targetValue = $(this).attr("data-filter");
    $(".news_article li").hide();
    $(".news_article li").filter(targetValue).show();
  }
});

/* load more */
let container = $("#gallery"),
  loadMoreBtn = $("#load_more"),
  addItemCount = 6, //표시할 개수
  added = 0, //표시된 개수
  allData = []; //json 파일내 내용을 담을 배열

$.getJSON("./data/content.json", initGallery);

function initGallery(result) {
  allData = result;
  console.log(allData);
  addItems(); //목록 추가
  loadMoreBtn.on("click", addItems);
} //initGallery

function addItems() {
  winHeight = $("body, html").innerHeight();
  nowScrollTop = $(window).scrollTop();
  setTimeout(() => {
    Common_resizeEvent();
    btnTopPosition();
  }, 500);

  let itemHTML = "",
    slicedData = allData.slice(added, added + addItemCount);

  $.each(slicedData, function (i, item) {
    itemHTML += `
          <li class="${item.data_category} g-5 col-xl-4 col-md-6">
            <a href="#">
              <img src="${item.images}" />
              <div class="txt_box">
                <p class="news_txt">
                ${item.title}
                </p>
                <p class="news_date">${item.date}</p>
              </div>
            </a>
          </li>
        `;
  });
  container.append(itemHTML);
  added += addItemCount; // added += slicedData
  if (added < allData.length) {
    loadMoreBtn.show();
  } else {
    loadMoreBtn.hide();
  }
} //addItems
