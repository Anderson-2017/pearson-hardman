//  Selecionando os elementos do meu mobile
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

// Fechar o menu
const about = document.querySelector('#mobile-navbar [href="#about"]');
const header = document.querySelector('#mobile-navbar [href="#header"]');
const expertiseareas = document.querySelector(
  '#mobile-navbar [href="#expertise-areas"]'
);
const team = document.querySelector('#mobile-navbar [href="#team"]');
const contact = document.querySelector('#mobile-navbar [href="#contact"]');

// selecionar os elementos dos slides
const slides = document.querySelectorAll(".banner");
//
const dots = document.querySelectorAll(".dot");
// variavel de controle
let slideIndex = 1;

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  slideIndex++; // avançando a variavel
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  console.log(slideIndex);
  console.log(slides[slideIndex - 1]);
  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 3000);
}

// ativar menu-mobile

[menuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    menu.classList.toggle("menu-active");
  });
});

// menuBtn.addEventListener("click", (e) => {
//   menu.classList.add("menu-active");
// });

// closeMenuBtn.addEventListener("click", (e) => {
//   menu.classList.remove("menu-active");
// });

// fechar o menu
about.addEventListener("click", (e) => {
  menu.classList.remove("menu-active");
});

header.addEventListener("click", (e) => {
  menu.classList.remove("menu-active");
});

expertiseareas.addEventListener("click", (e) => {
  menu.classList.remove("menu-active");
});

team.addEventListener("click", (e) => {
  menu.classList.remove("menu-active");
});

contact.addEventListener("click", (e) => {
  menu.classList.remove("menu-active");
});

//Inicialização
showSlides();

// DOM
// Navegar no documento html
// const brand = document.querySelector("#brand");
// console.log(brand)
// brand.addEventListener('click', function(event){
//     // console.log("testando o click");
//     // console.log(event.target)
//     event.target.style.color ="blue";
// })