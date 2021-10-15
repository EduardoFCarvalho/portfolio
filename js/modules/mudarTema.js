export default function initMudarTema() {

  const botaoMudarTema = document.getElementById('mudar-tema');

  function setTheme(themeName) {
    localStorage.setItem('theme', themeName)
    document.body.className = themeName;
  }

  function mudarTema() {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
    } else {
      setTheme('theme-dark');
    }
  }

  if (botaoMudarTema !== null) {
    botaoMudarTema.addEventListener('click', mudarTema);
  }

  const theme = localStorage.getItem('theme');
  if (theme != null) {
    setTheme(theme)
  } else {
    setTheme('theme-dark');
  }

}