let lg_list =[
    {
        latlng: new kakao.maps.LatLng(37.5279663, 126.9292856),
        lat: 37.5279663,
        lng: 126.9292856,
        content: {
            title: "LG디스플레이 본사",
            score: "3.7",
            count: 7,
            review: 3,
            address_road: "서울 영등포구 여의대로 128",
            address_post: "07336",
            address_geo: "여의도동 20",
            tel: "02-3777-5114"
        },
    },{
        latlng: new kakao.maps.LatLng(37.5627462, 126.8312654),
        lat: 37.5627462,
        lng: 126.8312654,
        content: {
            title: "LG사이언스파크 마곡",
            score: "4.8",
            count: 8,
            review: 5,
            address_road: "서울 강서구 마곡중앙10로 30",
            address_post: "07796",
            address_geo: "마곡동 770-1",
            tel: ""
        },
    },{
        latlng: new kakao.maps.LatLng(37.8133325, 126.7612555),
        lat: 37.8133325,
        lng: 126.7612555,
        content: {
            title: "LG디스플레이 파주공장",
            score: "2.5",
            count: 7,
            review: 0,
            address_road: "경기 파주시 월롱면 엘지로 245",
            address_post: "10845",
            address_geo: "월롱면 덕은리 1271",
            tel: "031-933-0114"
        },
    },{
        latlng: new kakao.maps.LatLng(36.1022627, 128.4038538),
        lat: 36.1022627, 
        lng: 128.4038538,
        content: {
            title: "LG디스플레이 구미공장",
            score: "0.0",
            count: 1,
            review: 0,
            address_road: "경북 구미시 3공단2로 235",
            address_post: "39394",
            address_geo: "진평동 642",
            tel: "054-778-8343"
        },
    }
];

let section_map = $(".place .section_map"),
    $btn_drag = $(".place .section_mapWrap .btn_drag"),
    $btn_map = $(".place .section_list li > a");

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: lg_list[0].latlng,
        draggable: false,
        level: 3,
    };

var map = new kakao.maps.Map(mapContainer, mapOption); 

map.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.BOTTOMRIGHT);

let marker_list = [];
let overlay_list = [];

// 마커 생성, 맵 배치 , 오버레이 생성
for(let i of lg_list){
    let marker = new kakao.maps.Marker({
        position: i.latlng,
    });
    var content = `
        <section class="mapOverlay">
            <div>
                <a href="#" class="__dis_link" alt="${i.content.title}의 상세정보 보기"><h4>${i.content.title}</h4></a><a href="#" class="btn_more mobile_hidden"><i class="fa-solid fa-arrow-right"></i></a>
                <p class="mobile_hidden">
                    <span class="score">${i.content.score}</span>
                    <span class="starWrap">
                    <span class="star starScore">
                        <span class="starframeWrap">
                            <span class="starframe">
                                <i class="fa-solid fa-star"></i>
                            </span>
                        </span>

                        <span class="starframeWrap">
                            <span class="starframe">
                                <i class="fa-solid fa-star"></i>
                            </span>
                        </span>

                        <span class="starframeWrap">
                            <span class="starframe">
                                <i class="fa-solid fa-star"></i>
                            </span>
                        </span>

                        <span class="starframeWrap">
                            <span class="starframe">
                                <i class="fa-solid fa-star"></i>
                            </span>
                        </span>

                        <span class="starframeWrap">
                            <span class="starframe">
                                <i class="fa-solid fa-star"></i>
                            </span>
                        </span>
                    </span>
                    <span class="star starBg">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                </span>
                    <a href="#" class="count __dis_link">(${i.content.count} 건)</a>
                    <span class="verticalBar"></span>
                    <a href="#" class="review __dis_link">리뷰 ${i.content.review}</a>
                </p>

                <address>
                    <p>${i.content.address_road}</p>
                    <p><span>(우) ${i.content.address_post}</span><span>(지번) ${i.content.address_road}</span></p>
                    <p>${i.content.tel}</p>
                    <p class="mobile_hidden"><a href="#" class="__dis_link">상세보기</a><a href="#" class="__dis_link">정보 수정 제안</a><a href="#" class="__dis_link">홈페이지</a></p>
                </address>
                <button class="btn_close">닫기 버튼</button>
            </div>
            <div></div>
            <div class="ui">
                <ul class="mobile_hidden">
                    <li><a href="#"><span class="bookmark"></span></a></li>
                    <li><a href="#"><span class="roadview"></span></a></li>
                    <li><a href="#"><span class="urlcopy"></span></a></li>
                </ul>
                <button class="btn_pathfind">길찾기</button>
            </div>
        </section>`;
    var overlay = new kakao.maps.CustomOverlay({
        position: i.latlng,
        map: map,
        content: content,
    });
    marker.setMap(map);
    marker_list.push(marker);
    overlay_list.push(overlay);
    insertOverlay(0);
    focusCenter(lg_list[0].lat, lg_list[0].lng);
};


marker_list.forEach(function(marker, idx){
    kakao.maps.event.addListener(marker, 'click', function() {
        setMarkerZndex(idx);
        insertOverlay(idx);
    });
});

function focusCenter(lat, lng){
    let pos = new kakao.maps.LatLng(lat+0.001, lng);
    map.setCenter(pos);
}
function setMarkerZndex(idx){
    for(i of marker_list){
        i.setZIndex(0);
    }
    marker_list[idx].setZIndex(1);
}
function insertOverlay(idx){
    closeOverlay();
    overlay_list[idx].setMap(map);
    scoreColor(idx);
    $(".place .mapOverlay .btn_close").click(function(){
        closeOverlay();
    })
}
function closeOverlay(){
    for(d of overlay_list){
        d.setMap(null);
    }
}
//별점
function scoreColor(idx){
    let starFrame = $(".place .mapOverlay .starframe");
    let score = lg_list[idx].content.score,
        array = score.split(".");
    starFrame.css({width: "0"});
    for(let i = 0; i < array[0]; i++){starFrame.eq(i).css({width: "100%"});}
    if(array[1] > 0){starFrame.eq(array[0]).css({width:`${array[1]}0%`});}
}
// 맵 조작
function mapHandler(bool){
    map.setZoomable(bool);
    map.setDraggable(bool);
}
// 지도 이동

$btn_map.click(e=>{
    let selectedIndex = $(e.currentTarget).parent().index();
    focusCenter(lg_list[selectedIndex].lat, lg_list[selectedIndex].lng)
    setMarkerZndex(selectedIndex);
    insertOverlay(selectedIndex);
});

$btn_drag.click((e)=>{
    $(e.currentTarget).toggleClass("disabled");
    section_map.toggleClass("pointerEvent")
    if($(e.currentTarget).hasClass("disabled")){
        $(e.currentTarget).text("드래그 켜기");
        mapHandler(false);
    }else{
        $(e.currentTarget).text("드래그 끄기");
        mapHandler(true);
    }
});