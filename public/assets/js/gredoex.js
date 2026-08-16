(function ($) {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  $(".gredoex .main_menu_list a[href^='#']").on("click", function () {
    var $menu = $("#main_menu_dropdown");
    if ($menu.hasClass("show")) {
      $menu.collapse("hide");
      $(".mobile_menu_btn > i").removeClass("fa-solid fa-xmark").addClass("far fa-bars");
    }
  });

  if (reduceMotion) {
    $(".wow").removeClass("wow fadeInUp fadeInRight fadeInLeft");
    if (window.Swiper) {
      document.querySelectorAll(".swiper").forEach(function (el) {
        if (el.swiper && el.swiper.autoplay) {
          el.swiper.autoplay.stop();
        }
      });
    }
  }

  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".gredoex .main_menu_list a[href^='#']");

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.getAttribute("id");
          navLinks.forEach(function (link) {
            var active = link.getAttribute("href") === "#" + id;
            link.parentElement.classList.toggle("active", active);
            if (active) {
              link.setAttribute("aria-current", "page");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
    );
    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})(jQuery);
