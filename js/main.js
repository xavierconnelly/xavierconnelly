// Carousel Options
$(document).ready(function(){
  $('.portal').owlCarousel({
        items:1,
        loop: true,
        autoplay: true,
        nav: true,
        navText: ["next","prev"],
        autoplayHoverPause: false,
        dots: false,
        dotsData: true,
        center: true,
        speed: 10,
    });
});

// Learn More Button - Open
function rabbit() {
      var title = document.querySelector("#learn-more");
      title.style.display = "block";
      var joe = document.querySelector("#work-inner");
      joe.style.width = "calc(50% - 52.5px)";
    }

// Learn More Button - Close
function duck() {
      var title = document.querySelector("#learn-more");
      title.style.display = "none";
      var joe = document.querySelector("#work-inner");
      joe.style.width = "";
    }

// Project Nav - Open
function goose() {
      var something = document.querySelector("#project-container");
      something.style.display = "flex";
      var bingo = document.querySelector("#work-inner");
      bingo.style.display = "none";
     var trevor = document.querySelector("#learn-more");
      trevor.style.display = "none";
       var trevor = document.querySelector(".portal");
      trevor.style.overflow = "hidden";
    }
