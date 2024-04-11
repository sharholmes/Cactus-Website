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
    const navMenu = document.getElementById('nav-menu');
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

/*=============== GO TO SHOP ===============*/
const goToShopButton = document.querySelector('.home_buttons .button');

const goToShop = (event) => {
    event.preventDefault();
    const shopSection = document.getElementById('shop');
    shopSection.scrollIntoView({ behavior: 'smooth' }); 
};

goToShopButton.addEventListener('click', goToShop);

