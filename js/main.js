var swiper = new Swiper(".myShila", {
  autoplay: {
    delay: 2000,
  },
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