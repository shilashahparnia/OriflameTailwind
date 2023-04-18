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

let darkMode=document.querySelector("button#btn")
darkMode.addEventListener("click", function(){
  document.querySelector("html").classList.toggle("dark")
})