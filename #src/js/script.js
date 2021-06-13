document.addEventListener("DOMContentLoaded", function () {

   // Custom JS
  const bossSwiper = new Swiper('.boss__slider', {

    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

  });

  const valueSwiper = new Swiper('.values__slider', {

    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

  });

});
