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
    var homeCactusImage = document.querySelector('img[src="home-cactus.png"]');
    var form = document.querySelector('form');
    
    // Initially show the form
    form.style.display = 'block';
    
    // If home-cactus.png image is present, hide the form
    if (homeCactusImage) {
        form.style.display = 'none';
    }
};
