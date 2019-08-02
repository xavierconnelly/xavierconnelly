// Opening About
function openAbout() {
      document.getElementById("about").style.display = "block";
    }

// Closing About
function closeAbout() {
      document.getElementById("about").style.display = "none";
    }


$(document).ready(function(){
// Carousel Options — Dawn
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
  
  // Carousel Options — Free
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

// Carousel Options — Jimmy
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

// Carousel Options — Pada
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

// Carousel Options — Apple
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

// Carousel Options — Kiosk
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


function learnDawn() {
  document.getElementById("extraDawn").style.display = "block";
};

function learnFree() {
  document.getElementById("extraFree").style.display = "block";
};

function learnJimmy() {
  document.getElementById("extraJimmy").style.display = "block";
};

function learnPada() {
  document.getElementById("extraPada").style.display = "block";
};

function learnApple() {
  document.getElementById("extraApple").style.display = "block";
};

function learnKiosk() {
  document.getElementById("extraKiosk").style.display = "block";
};

