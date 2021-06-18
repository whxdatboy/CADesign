document.addEventListener("DOMContentLoaded", function () {

  const bodyWrap = document.querySelector('.body__wrapper');

  //social links
  const linkSocial = document.querySelector('.menu__item-social'),
    linksSocialContainer = document.querySelector('.menu__sub-item');

  linkSocial.addEventListener('click', function () {
    if (!linksSocialContainer.classList.contains('social-links-active')) {
      linksSocialContainer.style.display = "flex";
    } else {
      linksSocialContainer.style.display = "none";
    }

    linksSocialContainer.classList.toggle('social-links-active');
  })

  // burger menu
  const btnMenu = document.querySelector('.menu__icon'),
    menuLinks = document.querySelectorAll('.menu__link'),
    menu = document.querySelector('.menu__body');

  btnMenu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    btnMenu.classList.toggle('open-menu');

    if (menu.classList.contains('is-active')) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  })

  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      menu.classList.remove('is-active');
      btnMenu.classList.remove('open-menu');
    })
  })

  // sliders
  let init = false;

  function swiperMode() {
    let mobile = window.matchMedia('(min-width: 250px) and (max-width: 767px)'),
      tablet = window.matchMedia('(min-width: 768px) and (max-width: 1439px)'),
      desktop = window.matchMedia('(min-width: 1440px)');

    if (mobile.matches && tablet.matches) {
      if (!init) {
        init = true;
        const plusSlider = new Swiper('.plus__slider', {

          loop: true,
          loopFillGroupWithBlank: true,

          pagination: {
            el: '.swiper-pagination',
          },

          breakpoints: {
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2
            },

          }
        })
      } else if (desktop.matches) {
        plusSlider.destroy();
        init = false;
      }
    }
  }

  swiperMode();

  const bossSwiper = new Swiper('.boss__slider', {

    direction: 'horizontal',
    loop: true,
    init: true,



    breakpoints: {
      320: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
      768: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        1440: {
          spaceBetween: 60,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      }
    }

  });

  const valueSwiper = new Swiper('.values__slider', {

    loop: true,

    breakpoints: {
      320: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1440: {
        loop: false,
        slidesPerView: 3,
        spaceBetween: 32,
        enabled: false,
      }
    }



  });

  const historySwiper = new Swiper('.history__slider', {
    spaceBetween: 40,
    pagination: {
      el: '.swiper-pagination',
    },

  })

  // video play
  const btnPlay = document.querySelector('.video__play-btn'),
    videoPopup = document.querySelector('.video__popup'),
    videoBox = document.querySelector('.bideo__yt');
  btnPlay.addEventListener('click', function () {
    videoPopup.classList.add("video-open");
  });

  videoPopup.addEventListener('click', function(e) {
    let target = e.target;

    if(target != videoBox && videoPopup.classList.contains("video-open")) {
      videoPopup.classList.remove("video-open");
    }
  })


  //open all vacancies

  const btnVacancy = document.querySelector('.vacancy__btn'),
    vacansyWrapper = document.querySelector('.vacancy__wrapper');
  btnVacancy.addEventListener('click', function () {
    vacansyWrapper.classList.add('vacancy-open');
    btnVacancy.classList.add('is-hidden');
  })

  //popup vacancies

  const vacancy = document.querySelectorAll('.vacancy__item'),
    vacancyCloseBtn = document.querySelector('.popup__close-btn'),
    popupVacancy = document.querySelector('.vacancy__popup');

  vacancy.forEach(vac => {
    vac.addEventListener('click', function () {
      popupVacancy.classList.add('popup__open');
      bodyWrap.style.overflow = "hidden";
      popupVacancy.style.overflow = "scroll";
    })
  })

  vacancyCloseBtn.addEventListener('click', function () {
    popupVacancy.classList.remove('popup__open');
    bodyWrap.style.overflow = "auto";
  })

  // customs select-option

  const select = document.querySelector('.vacancies__select-trigger'),
    options = document.querySelector('.vacancies__select-options'),
    option = document.querySelectorAll('.vacancies__select-option'),
    selectActive = document.querySelectorAll('.select-active');

  select.addEventListener('click', function () {
    options.classList.toggle('select-open');
  })

  option.forEach((opt, i) => {
    opt.addEventListener('click', function () {
      let text = this.innerText,
        select = this.closest('.vacancies__select-wrapper'),
        currentText = select.querySelector('.select-active');

      currentText.innerText = text;
      options.classList.remove('select-open');
    })
  })

  //pluses block

  const plusBlock = document.querySelectorAll('.plus__slide'),
    plusContainer = document.querySelector('.plus__wrapper');

  plusContainer.addEventListener('click', function (e) {
    const target = e.target;
    plusBlock.forEach(block => {
      block.classList.remove('plus-active');
    })
    target.classList.add('plus-active');
  })

  //services block

  const servicesItem = document.querySelectorAll('.boss__services-item'),
    servicesContainer = document.querySelector('.boss__services');

  servicesContainer.addEventListener('click', function (e) {
    const target = e.target;
    servicesItem.forEach(block => {
      block.classList.remove('service-active');
    })
    target.classList.add('service-active');
  })

  //custom radio button

  const radioBtn = document.querySelector('.vacancies__radio-button');
  radioBtn.addEventListener('click', function () {
    radioBtn.classList.toggle('radio-active');
  })

});

window.addEventListener('resize', function () {
  swiperMode();
});
