 
//  burger menu
 $(document).ready(function() {
   $('.header').click(function() {
     $('.header__links').toggleClass('active');
     $('body').toggleClass('stop-skroll');
   });
 });
 
