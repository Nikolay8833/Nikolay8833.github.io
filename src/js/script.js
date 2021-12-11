"use strict"

$("select").change(function calculate() {

   let siteType = parseFloat($("#siteType").val());
   let designType = parseFloat($("#designType").val());
   let siteAdaptive = parseFloat($("#siteAdaptive").val());

   let total = siteType + designType + siteAdaptive;

   $("#total").html(total.toFixed());

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

let skillsOptions = {
   threshold: [0.5]
};
let skillsObserver = new IntersectionObserver(skillsOnEntry, skillsOptions);
let skillsElements = $('.skills-animation');
skillsElements.each((i, el) => {
   skillsObserver.observe(el);
});

function skillsOnEntry(skillsEntry) {
   skillsEntry.forEach(change => {
      if (change.isIntersecting) {
         change.target.classList.add('skills-animation_show');
      }
   });
};

let swiperOptions = {
   threshold: [0.5]
};
let swiperObserver = new IntersectionObserver(swiperOnEntry, swiperOptions);
let swiperElements = $('.swiper-animation');
swiperElements.each((i, el) => {
   swiperObserver.observe(el);
});

function swiperOnEntry(swiperEntry) {
   swiperEntry.forEach(change => {
      if (change.isIntersecting) {
         change.target.classList.add('swiper-animation_show');
      }
   });
};

let statisticsOptions = {
   threshold: [0.5]
};
let statisticsObserver = new IntersectionObserver(statisticsOnEntry, statisticsOptions);
let statisticsElements = $('.statistics-animation');
statisticsElements.each((i, el) => {
   statisticsObserver.observe(el);
});

function statisticsOnEntry(statisticsEntry) {
   statisticsEntry.forEach(change => {
      if (change.isIntersecting) {
         change.target.classList.add('statistics-animation_show');
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