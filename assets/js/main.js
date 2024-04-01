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


/*=============== ADD TO CART ===============*/
// Get the cart button and the cart menu
var cartButton = document.getElementById('cartButton');
var cartMenu = document.getElementById('cartMenu');

// Toggle the visibility of the cart menu when the cart button is clicked
cartButton.addEventListener('click', function() {
  cartMenu.classList.toggle('show');
});

// Get the cart items element
var cartItems = document.getElementById('cartItems');

// Add an event listener to each shop button
buttons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    var productId = event.target.closest('.shop_card').dataset.productId;
    cart.push(productId);

    // Create a new list item for the product and add it to the cart items
    var listItem = document.createElement('li');
    listItem.textContent = 'Product ' + productId;
    cartItems.appendChild(listItem);
  });
});

