document.addEventListener("DOMContentLoaded", function () {

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
  const bossSwiper = new Swiper('.boss__slider', {

    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

  });

  const valueSwiper = new Swiper('.values__slider', {

    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

  });

  const historySwiper = new Swiper('.history__slider', {
    spaceBetween: 40,
    pagination: {
      el: '.swiper-pagination',
    },

  })

  // video play
  const btnPlay = document.querySelector('.video__play-btn'),
    video = document.querySelector('.video__section');
  btnPlay.addEventListener('click', function () {
    video.play();
  });


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
      document.body.style.overflow = "hidden";
    })
  })

  vacancyCloseBtn.addEventListener('click', function () {
    popupVacancy.classList.remove('popup__open');
    document.body.style.overflow = "auto";
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

});
