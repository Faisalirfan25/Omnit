const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("nav .mainMenu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// close menu when you click on a menu item
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}





let slideIndex = 1; // Initialize the slide index to 1
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n)); // Increase or decrease the slide index by n
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

// Automatically start the slideshow
setInterval(function () {
  plusSlides(1); // Call plusSlides with 1 to move to the next slide
}, 5000); // Change slide every 3 seconds




 $(document).ready(function() {
    var $animationElements = $('.scroll-animation');
    var $window = $(window);

    function checkIfInView() {
      var windowHeight = $window.height();
      var windowTopPosition = $window.scrollTop();
      var windowBottomPosition = windowTopPosition + windowHeight;

      $animationElements.each(function() {
        var $element = $(this);
        var elementHeight = $element.outerHeight();
        var elementTopPosition = $element.offset().top;
        var elementBottomPosition = elementTopPosition + elementHeight;

        // Check if the element is in the viewport
        if (
          elementBottomPosition >= windowTopPosition &&
          elementTopPosition <= windowBottomPosition
        ) {
          $element.addClass('in-view');
        } else {
          $element.removeClass('in-view');
        }
      });
    }

    $window.on('scroll resize', checkIfInView);
    $window.trigger('scroll');
  });
