// Carousel Options — Dawn
$(document).ready(function(){
});

// Carousel Options — Free
$(document).ready(function(){

  $('.duck').slick({
  dots:false,
  centerMode: true,
  infinite: true,
  speed: 300,
  fade: true,
  cssEase: 'linear',
  autoplay: false,
  prevArrow: false,
  nextArrow: false,
  });
  
  $('.wolf').slick({
  dots:false,
  centerMode: true,
  infinite: true,
  speed: 300,
  fade: true,
  cssEase: 'linear',
  autoplay: false,
  prevArrow: false,
  nextArrow: false,
  });
});

// Carousel Options — Jimmy
$(document).ready(function(){
  $('.sheep').slick({
  dots:false,
  centerMode: true,
  infinite: true,
  speed: 300,
  fade: true,
  cssEase: 'linear',
  autoplay: false,
  prevArrow: false,
  nextArrow: false,
  });
});

// Carousel Options — Pada
$(document).ready(function(){
  $('.goose').slick({
  dots:false,
  centerMode: true,
  infinite: true,
  speed: 300,
  fade: true,
  cssEase: 'linear',
  autoplay: false,
  prevArrow: false,
  nextArrow: false,
  });
});

// Carousel Options — Apple
$(document).ready(function(){
  $('.cow').slick({
  dots:false,
  centerMode: true,
  infinite: true,
  speed: 300,
  fade: true,
  cssEase: 'linear',
  autoplay: false,
  prevArrow: false,
  nextArrow: false,
  });
});

// Carousel Options — Kiosk
$(document).ready(function(){
  $('.turtle').slick({
  dots:false,
  centerMode: true,
  infinite: true,
  speed: 300,
  fade: true,
  cssEase: 'linear',
  autoplay: false,
  prevArrow: false,
  nextArrow: false,
  });
});




// Opening About
function openAbout() {
      document.getElementById("about").style.display = "block";
    }

// Closing About
function closeAbout() {
      document.getElementById("about").style.display = "none";
    }


// OLD JS

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
