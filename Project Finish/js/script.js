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
  let tabContent = document.querySelectorAll(".tabcontent");
  let tabHeader = document.querySelector(".tabheader__items");

  function hideTabContent () {
    tabContent.forEach(item => {
      item.style.display = "none"
    });


    tabs.forEach( item => {
      item.classList.remove("tabheader__item_active");
    });
  };

  function showTabContent ( i = 0 ) {
    tabContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active");

  };

  hideTabContent ();
  showTabContent();

  tabHeader.addEventListener("click", (event) => {

    if ( event.target && event.target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {

        if (event.target == item ) {

          hideTabContent ();
          showTabContent(i);

        }
      });
    }

  });


  //Modal

  let modal = document.querySelector(".modal");
  let modalClose = document.querySelector(".modal__close");
  let feedbackBtn = document.querySelectorAll("[data-modal]");


  setTimeout ( function () {
    modal.style.display = "block"
  }, 5000);

  modalClose.addEventListener("click", () => {
    modal.style.display = "none"
  });

  feedbackBtn.forEach((btn) => {
    btn.addEventListener( "click" , ()=> {
      modal.style.display = "block"
    });
  });

  function showMyModalByScroll (){
    if(
      window.pageYOffset + document.documentElement.clientHeight>=
      document.documentElement.scrollHeight

      ){
        modal.style.display = "block";
      }
    }
    window.addEventListener("scroll", showMyModalByScroll );
  });
