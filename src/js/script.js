"use strict"

$("select").change(function calculate() {

   let siteType = parseFloat($("#siteType").val());
   let designType = parseFloat($("#designType").val());
   let siteAdaptive = parseFloat($("#siteAdaptive").val());

   let siteTypeDate = 0;
   if (siteType == 2000) {
      siteTypeDate = 2;
   } else if (siteType == 3000) {
      siteTypeDate = 3;
   } else if (siteType == 4000) {
      siteTypeDate = 4;
   } else {
      siteTypeDate = 0;
   };

   let designTypeDate = 0;
   if (designType == 2000) {
      designTypeDate = 2;
   } else if (designType == 3000) {
      designTypeDate = 3;
   } else if (designType == 4000) {
      designTypeDate = 4;
   } else {
      designTypeDate = 0;
   }

   let siteAdaptiveDate = 0;
   if (siteAdaptive == 3000) {
      siteAdaptiveDate = 3;
   } else {
      siteAdaptiveDate = 0;
   };

   let totalDate = siteTypeDate + designTypeDate + siteAdaptiveDate;

   $("#total-date").html(totalDate.toFixed());

   let total = siteType + designType + siteAdaptive;

   $("#total").html(total.toFixed());

   /* let discountCost;
   let totalCost = total - discountCost;
   $("#total").html(totalCost.toFixed()); */

   document.getElementById('modal__button').onclick = function () {

      /* let discount = 10;
      discountCost = total / discount; */
      close();
   };

   function close() {
      document.getElementById('modal').style.display = 'none';
   };
});

let titleOptions = {
   threshold: [0.5]
};
let titleObserver = new IntersectionObserver(titleOnEntry, titleOptions);
let titleElements = $('.title-animation');
titleElements.each((i, el) => {
   titleObserver.observe(el);
});

function titleOnEntry(titleEntry) {
   titleEntry.forEach(change => {
      if (change.isIntersecting) {
         change.target.classList.add('title-animation_show');
      }
   });
};

let borderOptions = {
   threshold: [0.5]
};
let borderObserver = new IntersectionObserver(borderOnEntry, borderOptions);
let borderElements = $('.border-animation');
borderElements.each((i, el) => {
   borderObserver.observe(el);
});

function borderOnEntry(borderEntry) {
   borderEntry.forEach(change => {
      if (change.isIntersecting) {
         change.target.classList.add('border-animation_show');
      }
   });
};

let siteOptions = {
   threshold: [0.5]
};
let siteObserver = new IntersectionObserver(siteOnEntry, siteOptions);
let siteElements = $('.site-animation');
siteElements.each((i, el) => {
   siteObserver.observe(el);
});

function siteOnEntry(siteEntry) {
   siteEntry.forEach(change => {
      if (change.isIntersecting) {
         change.target.classList.add('site-animation_show');
      }
   });
};

$(window).scroll(() => {
   let scrollDistance = $(window).scrollTop();

   $('section').each((i, el) => {

      if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
         $('nav a').each((i, el) => {
            if ($(el).hasClass('link-active')) {
               $(el).removeClass('link-active');
            }
         });

         $('nav li:eq(' + i + ')').find('a').addClass('link-active');
      }
   });
});

$('a[href^="#"]').click(function () {
   let valHref = $(this).attr("href");
   $('html, body').animate({
      scrollTop: $(valHref).offset().top - 70 + "px"
   });
});

const swiper = new Swiper('.swiper', {

   direction: 'horizontal',
   loop: true,

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // dynamicBullets: true,
      /*  renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
       }, */
   },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   /* scrollbar: {
      el: '.swiper-scrollbar',
   }, */
});

$('#loader').addClass("hide-loader");

let delay = 20000;
setTimeout("document.getElementById('modal').style.display='block'", delay);