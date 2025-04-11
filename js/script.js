// // DOM
// // Navegar no documento html

// const brand = document.querySelector("#brand");

// brand.addEventListener('click', function(event,){
//     // console.log("testando click");
//     // console.log(event.target)
//     event.target.style.color = "blue"
// })

// selecionar os elementos dos slides
const slides = document.querySelectorAll(".banner");
// console.log(slides)
//
const dots = document.querySelectorAll(".dot")

/* Variavel dos menus */

const menuBTN = document.querySelector("#menu")
const closeMENU = document.querySelector("#close-menu")
const menu = document.querySelector("#mobile-navbar")
const about = document.querySelector("#mobile-navbar #sobre")
const time = document.querySelector("#mobile-navbar #time")
const contato = document.querySelector("#mobile-navbar #contato")
const servicos = document.querySelector("#mobile-navbar #servicos")
const inicio = document.querySelector("#mobile-navbar #inicio")

let slideIndex = 0;

function showSlides(){
    for(let i=0; i < slides.length; i++){
        slides[i].classList.remove("active")
        dots[i].classList.remove("active")
    }
    
    slideIndex++; // avançado a variavel
    if (slideIndex > slides.length){
        slideIndex = 1;
    }

    slides[slideIndex -1].classList.add("active")
    dots[slideIndex -1].classList.add("active")

    setTimeout(showSlides, 3000)


}

menuBTN.addEventListener("click", (e)=> {
    menu.classList.add("menu-active")
})

/* Fecha o menu */

closeMENU.addEventListener("click", (e) => {
    menu.classList.remove("menu-active")
})

/* Fecha o menu quando clicado no link */

about.addEventListener("click", (e) => {
    menu.classList.remove("menu-active")
})

time.addEventListener("click", (e) => {
    menu.classList.remove("menu-active")
})

contato.addEventListener("click", (e) => {
    menu.classList.remove("menu-active")
})

servicos.addEventListener("click", (e) => {
    menu.classList.remove("menu-active")
})

inicio.addEventListener("click", (e) => {
    menu.classList.remove("menu-active")
})


//Inicialização
showSlides()