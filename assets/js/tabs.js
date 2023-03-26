
  /*_________________________tabs-jq____________________*/
  $(document).ready(function() {
    $('.header-info__link').click(function(e){
      e.preventDefault();

      $('.header-info__link').removeClass('active-link');
      $('.projects').removeClass('active-one');
      $('.projects').removeClass('active-two');
      $('.projects').removeClass('active-three');
      $('.projects').removeClass('active-four');
      $(this).addClass('active-link');
      
    });
    $('.link-one').click(function(e){
      e.preventDefault();
      $('.projects').addClass('active-one');
    });
    $('.link-one').click();

    $('.link-two').click(function(e){
      e.preventDefault();
      $('.projects').addClass('active-two');
    });

    $('.link-three').click(function(e){
      e.preventDefault();
      $('.projects').addClass('active-three');
    });

    $('.link-four').click(function(e){
      e.preventDefault();
      $('.projects').addClass('active-four');
    });
  });



const selectElement = document.querySelector('#mySelect');
selectElement.addEventListener('change', (event) => {
  const selectedValue = event.target.value;
  const optionClasses = ['active-one', 'active-two', 'active-three', 'active-four'];

  // Remove any previously added classes from .projects
  const projectsElement = document.querySelector('.projects');
  projectsElement.classList.remove(...optionClasses);

  // Add class for the selected option to .projects
  projectsElement.classList.add(optionClasses[selectedValue - 1]);
});