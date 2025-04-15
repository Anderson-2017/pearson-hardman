// Selecionando elementos do menu Mobile
const menuBtn = document.querySelector("#menu");
const closemenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

//fechar o menu, após clicar na opção sobre
const about = document.querySelector('#mobile-navbar [href="#about"]');

// Selecionar os elementos dos slides
const slides = document.querySelectorAll(".banner"); // Retorna um NodeList
const dots = document.querySelectorAll(".dot"); // Retorna um NodeList
// variavel de controle
let slideIndex = 1;

function showSlides() {
  // console.log(slides)
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  slideIndex++; // Incrementa o slideIndex
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Ativar menu mobile
// menuBtn.addEventListener("click", (e) => {
//   menu.classList.add("menu-active");
// });

// closemenuBtn.addEventListener("click", (e) => {
//   menu.classList.remove("menu-active");
// });

[menuBtn, closemenuBtn].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    menu.classList.toggle("menu-active");
  });
});

about.addEventListener("click", (e) => {
  menu.classList.remove("menu-active");
});
// Inicialização do slides
showSlides();
