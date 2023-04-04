  /*_________________________swiperAbout____________________*/
  const swiperAbout = new Swiper('.swiper-about', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: -1120,
    loop: true,
    slidesPerView: 2,
    preloadImages: true,
    watchSlidesProgress: true,
    autoplay: {
      deley: 300,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },
    speed: 300,
    
 
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
   pagination: {
    el: '.swiper-pagination',
     type: 'progressbar'

  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      spaceBetween: -1425,
    },
    910: {
      spaceBetween: -1120,
    }
},
    
    on: {
    init: function () {
       var currentSlide = '01' ;
      document.querySelector('.current-slide').innerHTML = currentSlide;
    },
      slideChange: function(){
        var currentSlide = '0' + (this.realIndex + 1);
        document.querySelector('.current-slide').innerHTML = currentSlide;
    },
      beforeInit: function(){
      let numOfSlides = '0' + (this.wrapperEl.querySelectorAll(".swiper-slide").length);
      document.querySelector('.total-slides').innerHTML = numOfSlides;
      }
    },
  });
