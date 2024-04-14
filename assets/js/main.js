/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle) {
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose) {
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav_link');

const linkAction = () => {
    navMenu.classList.remove('show-menu');
};

navLinks.forEach(navLink => {
    navLink.addEventListener('click', linkAction);
});

/*=============== SWIPER ===============*/
let swiperHome = new Swiper('.home_swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    // Rest of your code...
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      breakpoints: {
          1024: {
              centeredSlides: 'auto',
              spaceBetween: -64,
          }
      }
});


/*=============== HIDE / SHOW FORM ===============*/
window.onload = function() {
    var visibleImages = ['care-cactus', 'home-cactus', 'new-cactus-1', 'new-cactus-2', 'new-cactus-3', 'shop-cactus-1', 'shop-cactus-2', 'shop-cactus-3', 'shop-cactus-4', 'shop-cactus-5'];
    var form = document.querySelector('form');

    // Function to check if any of the specified images are visible
    function isImageVisible() {
        for (var i = 0; i < visibleImages.length; i++) {
            var image = document.querySelector('img[src="assets/img/' + visibleImages[i] + '.png"]');
            if (image && image.offsetParent !== null) {
                return true; // At least one of the images is visible
            }
        }
        return false; // None of the images are visible
    }
    
    // Initially show/hide the form based on the visibility of images
    if (isImageVisible() && !document.querySelector('img[src="assets/img/contact-cactus.png"]')) {
        form.style.display = 'none';
    } else {
        form.style.display = 'block';
    }
    
    // Monitor for changes in visibility and update the form display accordingly
    document.addEventListener('scroll', function() {
        if (isImageVisible() && !document.querySelector('img[src="assets/img/contact-cactus.png"]')) {
            form.style.display = 'none';
        } else {
            form.style.display = 'block';
        }
    });
};


