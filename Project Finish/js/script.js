window.addEventListener("DOMContentLoaded", () => {
  // Loader
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.opacity = "0";
    setTimeout(function () {
      loader.style.display = "none";
    }, 1500);
  }, 2000);


  // Tabs

  let tabs = document.querySelectorAll(".tabheader__item");
  let tabContent = ocument.querySelectorAll(".tabcontent");
  let tabHeader = document.querySelectorAll(".tabheader__items");

  function hideTabContent () {
    tabContent.forEach(item => {
      item.style.display = "none"
    });

    tabs.forEach( item => {
      item.classList.remove(".tabheader__item_active");
    });
  };

  function showTabContent (i = 0) {
    tabContent[i].style.display = "block"
    tabs[i].classList.add("..tabheader__item_active");

  };



  tabHeader.addEventListener("click", (event) => {
    if ( event.target && event.target.classList.contains("tabheader__item ")){
      tabs.forEach((item, i) => {
        if (event.target == item ){
          hideTabContent ();
          showTabContent(i);
        }
      });
    }

  });


});
