// When the user clicks on <span> (x), close the modal
function rabbit() {
      var title = document.querySelector("#learn-more");
      title.style.display = "block";
      var joe = document.querySelector("#work-inner");
      joe.style.width = "calc(50% - 52.5px)";
    }


// When the user clicks on <span> (x), close the modal
function duck() {
      var title = document.querySelector("#learn-more");
      title.style.display = "none";
      var joe = document.querySelector("#work-inner");
      joe.style.width = "";
    }

// When the user clicks on <span> (x), close the modal
function goose() {
      var something = document.querySelector("#project-container");
      something.style.display = "flex";
      var bingo = document.querySelector("#work-inner");
      bingo.style.display = "none";
     var trevor = document.querySelector("#learn-more");
      trevor.style.display = "none";
       var trevor = document.querySelector(".work");
      trevor.style.overflow = "hidden";
    }
