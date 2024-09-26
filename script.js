const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

// Detectar click en la hamburguesa para activar el menú
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  // Verificar la posición del scroll al momento de abrir el menú
  if (window.scrollY > 50) {
    navLinks.classList.add('scrolled'); // Si ya hizo scroll, el menú aparece con color sólido
  } else {
    navLinks.classList.remove('scrolled'); // Si está en la parte superior, el menú es transparente
  }
});

// Detectar el scroll y aplicar la clase 'scrolled' tanto a la barra como al menú hamburguesa
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled'); // Cambia la barra de navegación

    // Si el menú está activo mientras se hace scroll, también adapta su color
    if (navLinks.classList.contains('active')) {
      navLinks.classList.add('scrolled'); // Aplica el color de fondo al menú
    }
  } else {
    navbar.classList.remove('scrolled'); // Vuelve la barra a transparente

    // Si el menú está activo, pero el usuario vuelve al tope de la página
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('scrolled'); // Vuelve el menú a transparente si está abierto
    }
  }
});