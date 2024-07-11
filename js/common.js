$(document).ready(function(){//시작


  var swiper = new Swiper(".main-visual", {
    spaceBetween: 0,
    loop : true ,
    centeredSlides: true,
     autoplay: {
       delay: 3000,
       disableOnInteraction: false,
     },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });

  var swiper = new Swiper(".starinformaition", {
    spaceBetween: 0,
    loop : true ,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });

  AOS.init();
});//끝