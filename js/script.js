import mudarTema from './modules/mudarTema.js';
import hideElement from './modules/hideElement.js';

mudarTema();
hideElement();




// const botaoMudarTema = document.getElementById('mudar-tema');

// function setTheme(themeName) {
//   localStorage.setItem('theme', themeName)
//   document.body.className = themeName;
// }

// function mudarTema() {
//   if (localStorage.getItem('theme') === 'theme-dark') {
//     setTheme('theme-light');
//   } else {
//     setTheme('theme-dark');
//   }
// }

// if (botaoMudarTema !== null) {
//   botaoMudarTema.addEventListener('click', mudarTema);
// }

// const theme = localStorage.getItem('theme');
// if (theme != null) {
//   setTheme(theme)
// } else {
//   setTheme('theme-dark');
// }


// // Esconder elemento contatos
// if (document.getElementById("hide-element") !== null) {
//   const el = document.getElementById("hide-element").nextElementSibling;

//   function hideElement() {
//     el.classList.toggle("ocultar");
//   }
//   hideElement();
// } 