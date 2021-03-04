/*  const popupAuto = document.querySelector('.popup-auto');
const popupAutoClose = document.querySelector('.close-popup-auto');

// NOTE DISABLE POPUP
const setPopup = setTimeout(() => {
  popupAuto.style.transform = 'scale(1,1)';
}, 5000);

popupAutoClose.addEventListener('click', function () {
  //popupAuto.style.transform = 'scale(0,0)'
  popupAuto.style.visibility = 'invisible';
  popupAuto.style.opacity = '0';
  popupAuto.style.display = 'none';
  clearTimeout(setPopup);
}); */ //NOTE All working close not working

/*******************************************/

const btnAddWhishlist = document.querySelector('.btn-add-all-to-bag');
const gridWhishlist = document.querySelector('.whishlist-container-title-grid');
const logo = document.querySelector('.header__logo');
const bagIconCart = document.querySelector('.bag__icon__cart');
const shopping = document.querySelector('.shopping');
const bagCartClose = document.querySelector('.bag__close__icon');
const popupKlarna = document.querySelector('.popupKlarna');
const popup = document.querySelector('.checkout-page-2-popup');
const iconBarMenu = document.querySelector('.menu-bar-icon');
const navBarIcon = document.querySelector('.nav__bar__icon');
const navBarIconClose = document.querySelector('#icon-close__menu');
const bagMobile = document.querySelector('.icon_bag__icon__small');
const heartMobile = document.querySelector('.icon__heart__whishlist');
const whishlist = document.querySelector('.whishlist');
const whishlistMenu = document.querySelector('.whishlist__form');
const signinAccount = document.querySelector('.signin-account');
const signin = document.querySelector('.sign__In ');
const signinClose = document.querySelector('.icon-close-signin');
const language = document.querySelector('.language');
const currency = document.querySelector('.currency');
const iconCurrencyClose = document.querySelector('.iconCurrency');
const overlayer2 = document.querySelector('.overlayer-2 ');

const bagOpen = bagIconCart.closest('button');
bagOpen.addEventListener('click', function () {
  shopping.classList.remove('active');
});

//NOTE IMPORTANT
const bagOpenMobile = bagMobile.closest('button');

bagOpenMobile.addEventListener('click', function () {
  shopping.classList.remove('active');
});

bagCartClose.addEventListener('click', function () {
  shopping.classList.add('active');
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    shopping.classList.add('active');
  }
});

/* whishlistMenu.addEventListener('click', function () {
  whishlist.classList.remove('active');

}); */
const closeWhisHeart = whishlistMenu.closest('button');
closeWhisHeart.addEventListener('click', function () {
  whishlist.classList.add('activation');
});

signin.addEventListener('click', function () {
  signinAccount.classList.add('signin-account-active');
  overlayer2.style.opacity = 1;
  overlayer2.style.visibility = 'visible';
  overlayer2.style.display = 'inline';
});

signinClose.addEventListener('click', function () {
  signinAccount.classList.remove('signin-account-active');
  overlayer2.style.opacity = 0;
  overlayer2.style.visibility = 'invisible';
  overlayer2.style.display = 'none';
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    signinAccount.classList.remove('signin-account-active');
    overlayer2.style.opacity = 0;
    overlayer2.style.visibility = 'invisible';
    overlayer2.style.display = 'none';
  }
});

currency.addEventListener('click', function () {
  language.classList.remove('active');
});

iconCurrencyClose.addEventListener('click', function () {
  language.classList.add('active');
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    language.classList.add('active');
  }
});

// FOOTER NAV DROPDOWN
const footerUp1 = document.querySelector('.footer-first');
const footerUp2 = document.querySelector('.footer-second');
const footerUp3 = document.querySelector('.footer-third');
const footerUp4 = document.querySelector('.footer-fouth');
const footerUp5 = document.querySelector('.footer-five');
const footerUp6 = document.querySelector('.footer-six');
const footerUp_1 = document.querySelector('#footerUp_1');
const footerUp_2 = document.querySelector('#footerUp_2');
const footerUp_11 = document.querySelector('#footerUp_11');
const footerUp_4 = document.querySelector('#footerUp_4');
const footerUp_5 = document.querySelector('#footerUp_5');
const footerUp_6 = document.querySelector('#footerUp_6');
const footerUp_44 = document.querySelector('#footerUp_44');
footerUp1.addEventListener('click', function (e) {
  e.target.classList.toggle('icon-footer-rotation');
  footerUp_1.classList.toggle('active-link');
  footerUp_11.classList.toggle('active-link');
});

footerUp2.addEventListener('click', function (e) {
  e.target.classList.toggle('icon-footer-rotation');
  footerUp_2.classList.toggle('active-link');
});

footerUp3.addEventListener('click', function (e) {
  e.target.classList.toggle('icon-footer-rotation');
  footerUp_3.classList.toggle('active-link');
});

footerUp4.addEventListener('click', function (e) {
  e.target.classList.toggle('icon-footer-rotation');
  footerUp_4.classList.toggle('active-link');
  footerUp_44.classList.toggle('active-link');
});

footerUp5.addEventListener('click', function (e) {
  e.target.classList.toggle('icon-footer-rotation');
  footerUp_5.classList.toggle('active-link');
});
footerUp6.addEventListener('click', function (e) {
  e.target.classList.toggle('icon-footer-rotation');
  footerUp_6.classList.toggle('active-link');
});

// FOOTER NAV DROPDOWN END ///

const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');
const optionsList = document.querySelectorAll('.option');
const sameSize = document.querySelector('.same-size');
const sizeGuide = document.querySelector('.size-guide');
const btnNotClear = document.querySelector('.btn-not-clear');
const btnReset = document.querySelector('.reset-size-details');

selected.addEventListener('click', function () {
  console.log('heu');
  optionsContainer.classList.toggle('active');
  sizeGuide.innerHTML = '';
  btnNotClear.style.display = 'none';
});

optionsList.forEach(el => {
  el.addEventListener('click', () => {
    selected.innerHTML = el.querySelector('label').innerHTML;
    optionsContainer.classList.remove('active');
    sameSize.innerHTML = '';
    sameSize.innerHTML = selected.innerHTML;
    btnNotClear.style.display = 'inline';
    btnNotClear.style.cursor = 'pointer';
    btnNotClear.style.backgroundColor = 'black';
  });
});

// btnReset.addEventListener('click', function () {
//   selected.innerHTML = '-';
//   sameSize.innerHTML = '';
//   btnReset.innerHTML = 'EDIT DETAILS';
//   btnNotClear.style.display = 'inline';
//   btnNotClear.style.cursor = 'not-allowed';
//   btnNotClear.style.backgroundColor = '#ddd';

// });

/* 
const saleTab1 = document.querySelector('.sale__tab_1');
const saleTab2 = document.querySelector('.sale__tab_2');
const saleTab3 = document.querySelector('.sale__tab_3');
const saleTabBox = document.querySelector('.sale__tab_1_box');
const saleTabBox2 = document.querySelector('.sale__tab_2_box');
const saleTabBox3 = document.querySelector('.sale__tab_3_box');


saleTab1.addEventListener('mouseover', function () {
  saleTabBox.style.transition = 'all 0.1s;';
  console.log('enter');
  // saleTabBox.classList.remove('hidden');
});
saleTab1.addEventListener('mouseleave', function () {
  console.log('leave');
  // saleTabBox.classList.add('hidden');
});

saleTab2.addEventListener('mouseenter', function () {
  saleTabBox2.style.transition = 'all 0.1s;';
  console.log('enter');
  // saleTabBox2.classList.remove('hidden');
});

saleTab2.addEventListener('mouseleave', function () {
  // saleTabBox2.classList.add('hidden');
  console.log('leave');
});

saleTab3.addEventListener('mouseenter', function () {
  saleTabBox3.style.transition = 'all 0.1s;';
  console.log('enter');
  // saleTabBox3.classList.remove('hidden');
});

// saleTab3.addEventListener('mouseleave', function () {
//   saleTabBox3.classList.add('hidden');
// });

 */

const tabsContent = document.querySelectorAll('.hero__tab__hidden');
const navContainer = document.querySelector('.nav__container');
const dropSelect = document.querySelectorAll('.drop-select');

/* navContainer.addEventListener('mouseover', function (e) {
  //const clickedIt = e.target.parentElement;
  const clickedIt = e.target.closest('.nav__btn');
  console.log(clickedIt);
  // Guard Close -> if there is nothing clicked returns immediatly
  if (!clickedIt) return;

  // Remove Active
  tabsContent.forEach(t => t.classList.remove('hidden'))

  document
  .querySelector(`.hero-sale__content--${clickedIt.dataset.tab} `)
  .classList.add('hidden');
});
navContainer.addEventListener('mouseleave', function () {
  
  // Remove Active
  tabsContent.forEach(t => t.classList.add('hidden'))

  document
  .querySelector(`.hero-sale__content--${clickedIt.dataset.tab} `)
  .classList.remove('hidden');
}); */

dropSelect.forEach(el =>
  el.addEventListener('mouseover', function (e) {
    //const clickedIt = e.target.parentElement;
    const clickedIt = e.target.closest('.nav__btn');
    console.log(clickedIt);
    // Guard Close -> if there is nothing clicked returns immediatly
    if (!clickedIt) return;

    // Remove Active
    tabsContent.forEach(t => t.classList.remove('hidden'));

    document
      .querySelector(`.hero-sale__content--${clickedIt.dataset.tab} `)
      .classList.add('hidden');
  })
);

dropSelect.forEach(el =>
  el.addEventListener('mouseleave', function (e) {
    //const clickedIt = e.target.parentElement;
    const clickedIt = e.target.closest('.nav__btn');
    console.log(clickedIt);
    // Guard Close -> if there is nothing clicked returns immediatly
    if (!clickedIt) return;

    // Remove Active
    tabsContent.forEach(t => t.classList.add('hidden'));
    tabsContent.forEach(t => (t.classList.style.display = 'none'));
  })
);

// SEARCH
const searchIcon = document.querySelector('.icon-test_space ');
const search = document.querySelector('.search ');
const searchClose = document.querySelector('.closeX ');

searchIcon.addEventListener('click', function () {
  (search.style.opacity = 1), (search.style.visibility = 'visible');
});

searchClose.addEventListener('click', function () {
  (search.style.opacity = 0), (search.style.visibility = 'invisible');
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    (search.style.opacity = 0), (search.style.visibility = 'invisible');
  }
});

const searchMenu = document.querySelector('.sale__tab_3');
const searchMenuOpen = searchMenu.closest('.nav__item');
searchMenuOpen.addEventListener('click', function () {
  (search.style.opacity = 1), (search.style.visibility = 'visible');
});

const navBarMenu = document.querySelector('.nav__bar__icon');
const navBarMenuClose = navBarMenu.closest('.nav__item');
const menuBarIcon = document.querySelector('.menu-bar-icon');

navBarMenuClose.addEventListener('click', function () {
  menuBarIcon.classList.remove('active');
  menuBarIcon.style.transform = 'scale(1,1)';
});

navBarIconClose.addEventListener('click', function () {
  menuBarIcon.classList.add('active');
  menuBarIcon.style.transform = 'scale(0,1)';
});



// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
