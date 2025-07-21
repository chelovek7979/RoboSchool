const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween : 100,
  loop: true,

  
  pagination: {
    el: '.swiper-pagination',
    type:"progressbar",
   
  },

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

breakpoints: {
    // when window width is >= 1024px
    1300: {
      slidesPerView: 3
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1
    }
  }
 
});

  document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    burger.addEventListener('click', function () {
      burger.classList.toggle('active');
      menu.classList.toggle('open');
    });
  })