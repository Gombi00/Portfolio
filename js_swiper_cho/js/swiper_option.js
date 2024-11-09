const swiper = new Swiper("#my_slider", {
  slidesPerView: 1, //모바일이 먼저
  slidesPerGroup: 1, //한번에 슬라이딩될 개수
  spaceBetween: 10, //아이템 사이 간격
  centeredSlides: false, //센터모드
  direction: "horizontal",
  //effect: 'fade',
  speed: 500,
  loopAdditionalSlides: 1,
  loop: true,
  freeMode: false,
  // 슬라이드 넘길 때 위치 고정 여부
  slidesOffsetBefore: 0, // 슬라이드 시작 부분 여백
  slidesOffsetAfter: 0,

  //슬라이드오토
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false
    //restart autoplay when hover is removed
    //false여야 자동재생
  },
  mousewheelControl: false,
  // mousewheel: {
  //   sensitivity: 1,
  //   releaseOnEdges: false
  // },
  parallax: false,
  allowTouchMove: true,
  resistance: false, // 슬라이드 터치에 대한 저항 여부 설정
  allowTouchMove: true, // (false-스와이핑안됨)버튼으로만 슬라이드 조작이 가능
  //next-prev
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  //페이지내이션
  pagination: {
    // 페이저 버튼 사용자 설정
    el: ".swiper-pagination", // 페이저 버튼을 담을 태그 설정
    clickable: true, // 버튼 클릭 여부
    type: "bullets" // 버튼 모양 결정 "bullets", "fraction"
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px보다클때
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 1024px보다클때
    1024: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  } //breakpoints
});
