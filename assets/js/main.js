  /*_________________________swiper____________________*/
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: -30,
    slidesPerView: 1.15 ,
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