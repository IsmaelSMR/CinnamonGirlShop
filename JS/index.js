const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});


window.sr = ScrollReveal();
  sr.reveal('.navbar', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  })
  
  sr.reveal('.container-banner', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
  })

  sr.reveal('.container-products', {
    duration: 3000,
    origin: 'right',
    distance: '-100px'
  })

  sr.reveal('.container-contact', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
  })

  sr.reveal('.container-aboutme', {
    duration: 3000,
    origin: 'right',
    distance: '-100px'
  })

  sr.reveal('.footer', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
  })
  
  ;
