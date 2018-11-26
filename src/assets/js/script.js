 (function($) {
     "use strict";  //Start of use strict

     $(window).on("load", function() {
         bigSlider();
         bigPageLoader();
         bigHomePagePopup();
         full_height();
         bigCarousel();
         bigStickyHeader();
         bigAccordion();
         bigToggle();
         bigProgresbar();
         bigLocalScroll();
         bigLightbox();
         bigTextRotator();
         fullscreen_nav();
         megamenu();
     });

     var pageSection = $("div, section");
     pageSection.each(function(indx) {

         if ($(this).attr("data-bg")) {
             $(this).css("background-image", "url(" + $(this).data("bg") + ")");
         }
     });
    
  //Speaker carousel
 if($('.speaker-carousel').length){
     $('.speaker-carousel').owlCarousel({
         loop: true,
         margin: 30,
         dots: false,
         nav: true,
         autoplayHoverPause: true,
         autoplay: true,
         autoplayTimeout: 4000,
         smartSpeed: 700,
         navText: [
           '<i class="fas fa-long-arrow-alt-left"></i>',
           '<i class="fas fa-long-arrow-alt-right"></i>'
         ],
         responsive: {
             0: {
                 items: 1,
                 center: false
             },
             480:{
                 items:1,
                 center: false
             },
             600: {
                 items: 2,
                 center: false
             },
             768: {
                 items: 2
             },
             992: {
                 items: 3
             },
             1200: {
                 items: 3
             }
         }
     })
 }

 })(jQuery);

 function bigAccordion() {
     (function($) {
         "use strict";
         var allPanels = $(".accordion > dd").hide();
         allPanels.first().slideDown("easeOutExpo");
         $(".accordion > dt > a").first().addClass("active");

         $(".accordion > dt > a").on("click", function() {

             var current = $(this).parent().next("dd");
             $(".accordion > dt > a").removeClass("active");
             $(this).addClass("active");
             allPanels.not(current).slideUp("easeInExpo");
             $(this).parent().next().slideDown("easeOutExpo");

             return false;

         });
     })(jQuery);
 }

 // Toggle

 function bigToggle() {
     (function($) {
         "use strict";

         var allToggles = $(".toggle > dd").hide();

         $(".toggle > dt > a").on("click", function() {

             if ($(this).hasClass("active")) {

                 $(this).parent().next().slideUp("easeOutExpo");
                 $(this).removeClass("active");

             } else {
                 var current = $(this).parent().next("dd");
                 $(this).addClass("active");
                 $(this).parent().next().slideDown("easeOutExpo");
             }

             return false;
         });

         $('.navbar-nav').slicknav();

     })(jQuery);
 }

 function bigProgresbar() {
     (function($) {
         "use strict";

         // Progress bars
         var progressBar = $(".progress-bar");
         progressBar.each(function(indx) {
             $(this).css("width", $(this).attr("aria-valuenow") + "%");
         });

         $('.list-group-item').on('click', function(e) {
             var previous = $(this).closest(".list-group").children(".active");
             previous.removeClass('active'); // previous list-item
             $(e.target).addClass('active');  //activated list-item
         });

     })(jQuery);
 }

 function bigLocalScroll() {
     (function($) {
         "use strict";

         $(".local-scroll").localScroll({
             target: "body",
             duration: 1500,
             offset: 0,
             easing: "easeInOutExpo"
         });

     })(jQuery);
 }

 function bigLightbox() {
     (function($) {
         "use strict";

         $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
             disableOn: 700,
             type: 'iframe',
             mainClass: 'mfp-fade',
             removalDelay: 160,
             preloader: false,

             fixedContentPos: false
         });

     })(jQuery);
 }

 function bigTextRotator() {
     (function($) {
         "use strict";
         $(".text-rotating-flip").Morphext({
             animation: "flipInY",
             speed: 1500
         });
         $(".text-rotating-fade").Morphext({
             animation: "fadeInDown",
             speed: 2500
         });
         $(".text-rotating-bounce").Morphext({
             animation: "bounceInDown",
             speed: 3000
         });
         $(".text-rotating-rotate").Morphext({
             animation: "rotateInDownLeft",
             speed: 4000
         });
         $(".text-rotating-zoom").Morphext({
             animation: "zoomInDown",
             speed: 3500
         });

     })(jQuery);
 }

 //Owl Carousel

 function bigCarousel() {
     (function($) {
         "use strict";
         $(".owl-carousel").owlCarousel({

             loop: true,
             margin: 10,
             nav: true,
             responsiveClass: true,
             dots: true,
             responsive: {
                 0: {
                     items: 1,
                     nav: true
                 },
                 700: {
                     items: 1,
                     nav: false
                 },
                 1170: {
                     items: 1,
                     nav: true,
                     loop: true
                 }
             }

         });
         $('.brands').owlCarousel({
             loop: true,
             margin: 10,
             nav: true,
             responsive: {
                 0: {
                     items: 2
                 },
                 700: {
                     items: 4
                 },
                 1170: {
                     items: 6
                 }
             }
         })

       //   Works Item Lightbox  
         $(".portfolio-img").magnificPopup({
             gallery: {
                 enabled: true
             }
         });
         $(".award-img").magnificPopup({
             gallery: {
                 enabled: true
             }
         });

     })(jQuery);
 }

 //Home Page Slider

 function bigSlider() {
     (function($) {
         "use strict";
         $('.flexslider').flexslider({
             animation: "fade",
             controlNav: false
         });
     })(jQuery);
 }

 //Page Loader

 function bigPageLoader() {
     (function($) {
         "use strict";
         $(".page-loader").fadeOut("slow");
     })(jQuery);
 }

 //Sticky Header

 function bigStickyHeader() {
     (function($) {
         "use strict";
         $(".header").sticky({
             topSpacing: 0
         });
     })(jQuery);
 }

 //Home Page Popup

 function bigHomePagePopup() {
     (function($) {
         "use strict";
         $('#onload').modal('show');

     })(jQuery);
 }

 // Full Height

 function full_height() {
     (function($) {
         $(".full-height").height($(window).height());

         $(window).scroll(function() {

             if ($(window).scrollTop() > 100) {
                 $(".header-transparent").removeClass("transparent");
                 $(".header-transparent").addClass("header-bg");
             } else {
                 $(".header-transparent").addClass("transparent");
                 $(".header-transparent").removeClass("header-bg");
             }

         });
     })(jQuery);
 }
 // Full Height

 function fullscreen_nav() {
     (function($) {
         $(".fullscreen-btn a").on('click', function() {
             $(".fullscreen-overlay").fadeToggle(200);
             $(this).toggleClass('btn-open').toggleClass('btn-close');
             $(".fullscreen-overlay").width($(window).width());
         });
         $('.fullscreen-overlay').on('click', function() {
             $(".fullscreen-overlay").fadeToggle(200);
             $(".fullscreen-btn a").toggleClass('btn-open').toggleClass('btn-close');
             $(".fullscreen-overlay").width($(window).width());
             open = false;
         });
     })(jQuery);
 }

 function megamenu() {
     $(".dropdown").hover(
         function() {
             $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
             $(this).toggleClass('open');
         },
         function() {
             $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
             $(this).toggleClass('open');
         }
     );
 }

 $('.countchiffre').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


  var floatPanel = new McFloatPanel();
/* Float Panel v2016.10.28. Copyright www.menucool.com */
function McFloatPanel(){var i=[],s=[],h="className",t="getElementsByClassName",d="length",l="display",C="transition",m="style",B="height",c="scrollTop",k="offsetHeight",a="fixed",e=document,b=document.documentElement,j=function(a,c,b){if(a.addEventListener)a.addEventListener(c,b,false);else a.attachEvent&&a.attachEvent("on"+c,b)},o=function(c,d){if(typeof getComputedStyle!="undefined")var b=getComputedStyle(c,null);else b=c.currentStyle;return b?b[d]:a},L=function(){var a=e.body;return Math.max(a.scrollHeight,a[k],b.clientHeight,b.scrollHeight,b[k])},O=function(a,c){var b=a[d];while(b--)if(a[b]===c)return true;return false},g=function(b,a){return O(b[h].split(" "),a)},q=function(a,b){if(!g(a,b))if(!a[h])a[h]=b;else a[h]+=" "+b},p=function(a,f){if(a[h]&&g(a,f)){for(var e="",c=a[h].split(" "),b=0,i=c[d];b<i;b++)if(c[b]!==f)e+=c[b]+" ";a[h]=e.replace(/^\s+|\s+$/g,"")}},n=function(){return window.pageYOffset||b[c]},z=function(a){return a.getBoundingClientRect().top},F=function(b){var c=n();if(c>b.oS&&!g(b,a))q(b,a);else g(b,a)&&c<b.oS&&p(b,a)},x=function(){for(var a=0;a<s[d];a++)J(s[a])},J=function(a){if(a.oS){a.fT&&clearTimeout(a.fT);a.fT=setTimeout(function(){if(a.aF)F(a);else y(a)},50)}else y(a)},w=function(d,c,b){p(d,a);c[l]="none";b.position=b.top=""},y=function(c){var j=z(c),f=c[k],e=c[m],d=c.pH[m],h=n();if(j<c.oT&&h>c.oS&&!g(c,a)&&(window.innerHeight||b.clientHeight)>f){c.tP=h+j-c.oT;var p=L();if(f>p-c.tP-f)var i=f;else i=0;d[l]="block";d[C]="none";d[B]=f+1+"px";c.pH[k];d[C]="height .3s";d[B]=i+"px";q(c,a);e.position=a;e.top=c.oT+"px";if(o(c,"position")!=a)d[l]="none"}else if(g(c,a)&&(h<c.tP||h<c.oS)){var s=o(c,"animation");if(c.oS&&c.classList&&s.indexOf("slide-down")!=-1){var r=o(c,"animationDuration");c.classList.remove(a);e.animationDirection="reverse";e.animationDuration="300ms";void c[k];c.classList.add(a);setTimeout(function(){w(c,d,e);e.animationDirection="normal";e.animationDuration=r},300)}else w(c,d,e)}},I=function(){var f=[],c,b;if(e[t]){f=e[t]("float-panel");i=e[t]("slideanim")}else{var k=e.getElementsByTagName("*");c=k[d];while(c--)g(k[c],"float-panel")&&f.push(k[c])}c=f[d];for(var h=0;h<c;h++){b=s[h]=f[h];b.oT=parseInt(b.getAttribute("data-top")||0);b.oS=parseInt(b.getAttribute("data-scroll")||0);if(b.oS>20&&o(b,"position")==a)b.aF=1;b.pH=e.createElement("div");b.pH[m].width=b.offsetWidth+"px";b.pH[m][l]="none";b.parentNode.insertBefore(b.pH,b.nextSibling)}if(s[d]){setTimeout(x,160);j(window,"scroll",x)}},f,D=200,E=0,r,u,H=function(){return window.innerWidth||b.clientWidth||e.body.clientWidth};function K(){if(!r)r=setInterval(function(){var a=e.body;if(a[c]<3)a[c]=0;else a[c]=a[c]/1.3;if(b[c]<3)b[c]=0;else b[c]=b[c]/1.3;if(!n()){clearInterval(r);r=null}},14)}function A(){clearTimeout(u);if(n()>D&&H()>E){u=setTimeout(function(){p(f,"mcOut")},60);f[m][l]="block"}else{q(f,"mcOut");u=setTimeout(function(){f[m][l]="none"},500)}}var N=function(){f=e.getElementById("backtop");if(f){var a=f.getAttribute("data-v-w");if(a){a=a.replace(/\s/g,"").split(",");D=parseInt(a[0]);if(a[d]>1)E=parseInt(a[1])}j(f,"click",K);j(window,"scroll",A);A()}},v=function(){for(var c=n(),e=c+window.innerHeight,g=i[d],b,f,a=0;a<g;a++){b=c+z(i[a]),f=b+i[a][k];if(b<e)q(i[a],"slide");else p(i[a],"slide")}},G=function(){if(i[d]){j(window,"scroll",v);v()}},M=function(){I();N();G()};j(window,"load",M);j(document,"touchstart",function(){})}
