const botaoMudarTema = document.getElementById('mudar-tema');

function setTheme(themeName) {

}

function mudarTema() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
}

botaoMudarTema.addEventListener('click', mudarTema);


// Esconder elemento contatos
if (document.getElementById("hide-element") !== null) {
  const el = document.getElementById("hide-element").nextElementSibling;

  function hideElement() {
    el.classList.toggle("ocultar");
  }
  hideElement();
} 