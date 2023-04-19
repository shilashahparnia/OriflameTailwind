var swiper = new Swiper(".myShila", {
  /*autoplay: {
    delay: 2000,
  },*/
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".myShahpar", {
  slidesPerView: 6,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});

let user = document.querySelector("i.fa-user");
user.addEventListener("mouseover", function () {
  user.setAttribute("class", "fa-solid fa-user fa-2xl");
});
user.addEventListener("mouseleave", function () {
  user.setAttribute("class", "fa-regular fa-user fa-xl");
});

let bars = document.querySelector("i.fa-bars");
bars.addEventListener("mouseover", function () {
  bars.setAttribute("class", "fa-solid fa-bars fa-2xl");
});
bars.addEventListener("mouseleave", function () {
  bars.setAttribute("class", "fa-solid fa-bars fa-xl");
});

let barsDark = document.querySelector("i.fa-bars#dark");
barsDark.addEventListener("mouseover", function () {
  barsDark.setAttribute("class", "fa-solid fa-bars fa-2xl");
});
barsDark.addEventListener("mouseleave", function () {
  barsDark.setAttribute("class", "fa-solid fa-bars fa-xl");
});

let item = document.querySelector("a#drop");
let itemDrop = document.querySelector("div.submenu");
let flag = true;
item.addEventListener("click", function () {
  if (flag === true) {
    itemDrop.style.display = "block";
    flag = false;
  } else {
    itemDrop.style.display = "none";
    flag = true;
  }
});

let item2 = document.querySelector("a#dropSmall");
let itemDrop2 = document.querySelector("div.subMenuSmall");
let flag2 = true;
item2.addEventListener("click", function () {
  if (flag2 === true) {
    itemDrop2.style.display = "block";
    flag2 = false;
  } else {
    itemDrop2.style.display = "none";
    flag2 = true;
  }
});

let item3 = document.querySelector("a#dropLeft");
let itemDrop3 = document.querySelector("div.menuLeft, div.subMenuSmall");
let flag3 = true;
item3.addEventListener("click", function () {
  if (flag3 === true) {
    itemDrop3.style.display = "none";
    flag3 = false;
  } else {
    itemDrop3.style.display = "none";
    flag3 = true;
  }
});

let darkMode = document.querySelector("button#btn");
darkMode.addEventListener("click", function () {
  document.querySelector("html").classList.toggle("dark");
});

let zoomIn = document.querySelector("a#zoom");
zoomIn.addEventListener("mouseover", function () {
  zoomIn.style.height = "350px";
});
let zoomOut = document.querySelector("a#zoom");
zoomOut.addEventListener("mouseleave", function () {
  zoomOut.style.height = "210px";
});

let zoomIn2 = document.querySelector("a#zoom2");
zoomIn2.addEventListener("mouseover", function () {
  zoomIn2.style.height = "350px";
});
let zoomOut2 = document.querySelector("a#zoom2");
zoomOut2.addEventListener("mouseleave", function () {
  zoomOut2.style.height = "210px";
});

let zoomIn3 = document.querySelector("a#zoom3");
zoomIn3.addEventListener("mouseover", function () {
  zoomIn3.style.height = "330px";
});
let zoomOut3 = document.querySelector("a#zoom3");
zoomOut3.addEventListener("mouseleave", function () {
  zoomOut3.style.height = "210px";
});

let zoomIn4 = document.querySelector("a#zoom4");
zoomIn4.addEventListener("mouseover", function () {
  zoomIn4.style.height = "330px";
});
let zoomOut4 = document.querySelector("a#zoom4");
zoomOut4.addEventListener("mouseleave", function () {
  zoomOut4.style.height = "210px";
});

let zoomIn5 = document.querySelector("a#zoom5");
zoomIn5.addEventListener("mouseover", function () {
  zoomIn5.style.height = "330px";
});
let zoomOut5 = document.querySelector("a#zoom5");
zoomOut5.addEventListener("mouseleave", function () {
  zoomOut5.style.height = "210px";
});

let zoomIn6 = document.querySelector("a#zoom6");
zoomIn6.addEventListener("mouseover", function () {
  zoomIn6.style.height = "330px";
});
let zoomOut6 = document.querySelector("a#zoom6");
zoomOut6.addEventListener("mouseleave", function () {
  zoomOut6.style.height = "210px";
});

let zoomIn7 = document.querySelector("a#zoom7");
zoomIn7.addEventListener("mouseover", function () {
  zoomIn7.style.height = "330px";
});
let zoomOut7 = document.querySelector("a#zoom7");
zoomOut7.addEventListener("mouseleave", function () {
  zoomOut7.style.height = "210px";
});

let zoomIn8 = document.querySelector("a#zoom8");
zoomIn8.addEventListener("mouseover", function () {
  zoomIn8.style.height = "330px";
});
let zoomOut8 = document.querySelector("a#zoom8");
zoomOut8.addEventListener("mouseleave", function () {
  zoomOut8.style.height = "210px";
});

let zoomIn9 = document.querySelector("a#zoom9");
zoomIn9.addEventListener("mouseover", function () {
  zoomIn9.style.height = "330px";
});
let zoomOut9 = document.querySelector("a#zoom9");
zoomOut9.addEventListener("mouseleave", function () {
  zoomOut9.style.height = "210px";
});

let zoomIn10 = document.querySelector("a#zoom10");
zoomIn10.addEventListener("mouseover", function () {
  zoomIn10.style.height = "330px";
});
let zoomOut10 = document.querySelector("a#zoom10");
zoomOut10.addEventListener("mouseleave", function () {
  zoomOut10.style.height = "210px";
});