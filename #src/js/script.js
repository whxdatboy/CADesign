document.addEventListener("DOMContentLoaded", function () {

  // burger menu
  const btnMenu = document.querySelector('.menu__icon'),
        menu = document.querySelector('.menu__body');
  btnMenu.addEventListener('click', function() {
    menu.classList.add('is-active');
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
  btnPlay.addEventListener('click', function() {
    video.play();
  });


  //open all vacancies

  const btnVacancy = document.querySelector('.vacancy__btn'),
        vacansyWrapper = document.querySelector('.vacancy__wrapper');
  btnVacancy.addEventListener('click', function () {
    vacansyWrapper.classList.add('vacancy-open');
    btnVacancy.classList.add('is-hidden');
  })

  // customs select-option

  const select = document.querySelector('.vacancies__select-trigger'),
        options = document.querySelector('.vacancies__select-options'),
        option = document.querySelectorAll('.vacancies__select-option'),
        selectActive = document.querySelectorAll('.select-active');

  select.addEventListener('click', function() {
    options.classList.toggle('select-open');
  })

  option.forEach((opt, i) => {
    opt.addEventListener('click', function() {
      let text = this.innerText,
          select = this.closest('.vacancies__select-wrapper'),
          currentText = select.querySelector('.select-active');

      currentText.innerText = text;
      options.classList.remove('select-open');
    })
  })

});
