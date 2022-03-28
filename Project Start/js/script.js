let loader = document.querySelector(".loader-wrapper");

window.addEventListener("DOMContentLoaded", () => {

  setTimeout( function () {
    loader.style.opacity = "0.3"

    setTimeout( function(){
      loader.style.display = "none";
    },1480)
  }, 1500)

});