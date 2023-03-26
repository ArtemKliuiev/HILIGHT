
/*_________________________radio-group____________________________*/
  const radioButtons = document.getElementsByName("radio-group");
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", function () {

      radioButtons.forEach((button) => {
        button.parentElement.classList.remove("active");
      });

      this.parentElement.classList.add("active");
    });
  });
/*_________________________header-menu-background____________________*/
  const header = document.querySelector(".menu");
  const sectionOne = document.querySelector(".header-main__title , .footer, .header__text");
  const sectionOneOptions = {
    rootMargin: "0px 0px 0px 0px"
  };
  const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
      }
    });
  },
  sectionOneOptions);
  sectionOneObserver.observe(sectionOne);

/*_________________________burger____________________*/
  $(document).ready(function() {
    $('.menu__burger') .click(function(event) {
        $('.menu').toggleClass('active');
        $('body').toggleClass('lock-burger');

    });
  });

/*_______________________send-request___________________*/
  $(document).ready(function() {
    $('.menu__link--button ') .click(function(event) {
        $('body').toggleClass('lock-send-request active-send-request');
        $('.menu').removeClass('active');  
        $('body').removeClass('lock-burger');

    });
  });

/*_______________________send-request___________________*/
  $(document).ready(function() {
    $('.send-request__link') .click(function(event) {
      $('body').removeClass('active-send-request');
      $('body').toggleClass(' active-send-request-next');

    });
  });

/*_______________________send-request___________________*/
$(document).ready(function() {
  $('.background-send-request__exit, .send-request-next__link') .click(function(event) {
    $('body').removeClass('lock-send-request');  
    $('body').removeClass('active-send-request');  
    $('body').removeClass('active-send-request-next ');  
  });
});

/*_______________________preloader___________________*/
  document.addEventListener('DOMContentLoaded', function () {
    var loader = document.getElementById('loader');
    var loaderText = document.getElementById('loader-text');
    var percent = 0;
    $('body').addClass('lock-send-request');  
    var interval = setInterval(function () {

      percent++;
      loaderText.textContent = percent + '%';
      if (percent >= 100) {
        clearInterval(interval);
        loader.style.display = 'none';
        $('body').removeClass('lock-send-request');  
      }
    }, 20);
    
  });
      