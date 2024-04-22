window.onload = function () {
  "use strict";
  let btn = document.querySelector(".brand #btn"),
    // searchBtn = document.querySelector(".navbar ul li #search"),
    sidebar = document.querySelector(".sidebar"),
    btnShowNav = document.querySelector(
      ".mobile-navbar .brand>div:first-child"
    );

  // coursNames = document.querySelectorAll(".last-course .item .cours-name");

  // active sidebar
  btn.onclick = function () {
    sidebar.classList.toggle("active");
  };

  // searchBtn.onclick = function () {
  //   sidebar.classList.toggle("active");
  // };

  btnShowNav.onclick = function () {
    this.children["showNav"].classList.toggle("rotate");
    window.innerWidth > 991.99
      ? sidebar.classList.toggle("open-nav")
      : sidebar.classList.toggle("open-nav-mob");
    // sidebar.classList.toggle("open-nav-mob");
  };

  // set open-nav class to sidebar
  window.innerWidth > 991.99
    ? sidebar.classList.add("open-nav")
    : sidebar.classList.remove("open-nav");
  // set rotate class to showNav
  sidebar.classList.contains("open-nav")
    ? btnShowNav.children["showNav"].classList.remove("rotate")
    : btnShowNav.children["showNav"].classList.add("rotate");

  window.addEventListener("resize", function () {
    window.innerWidth > 991.99
      ? sidebar.classList.add("open-nav")
      : sidebar.classList.remove("open-nav");
    // set rotate class to showNav
    sidebar.classList.contains("open-nav")
      ? btnShowNav.children["showNav"].classList.remove("rotate")
      : btnShowNav.children["showNav"].classList.add("rotate");
  }); //end window resize event

  // show tooltips in sidebar
  Object.values(document.querySelectorAll("li.nav-link")).forEach((link) => {
    // add show class from tooltips
    link.addEventListener("mouseover", function () {
      let rect = this.getBoundingClientRect(); // Get All Postion Index for element
      let tooltips = document.querySelector(".tooltips");
      tooltips.innerHTML = link.innerText;
      if (link.hasAttribute("data-value")) {
        tooltips.innerHTML = link.dataset.value;
      }
      tooltips.style.top = `${rect.y - 76}px`;
      tooltips.classList.add("show");
    });

    // remove show class from tooltips
    link.addEventListener("mouseout", function () {
      document.querySelector(".tooltips").classList.remove("show");
    });
  });
}; //end window onlaond event

// jquery nicescroll plugin
$(function () {
  $(".sidebar .navbar ul.nav").niceScroll({
    cursorcolor: "#265db6",
    cursorwidth: 10,
    cursorborder: "none",
    autohidemode: false,
    railalign: "right",
    spacebarenabled: false,
  });

  // $(".cours .filter-box").niceScroll({
  //   cursorcolor: "#265db6",
  //   cursorwidth: 14,
  //   cursorminheight: 100,
  //   cursorborder: "none",
  //   cursorborderradius: 12,
  //   autohidemode: false,
  //   railalign: "right",
  //   spacebarenabled: false,
  // });
});
