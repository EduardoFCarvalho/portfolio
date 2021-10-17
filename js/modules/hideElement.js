export default function initHideElement() {

  const botaoContato = document.getElementById("hide-element");

  if (botaoContato) {
    function hideContato() {
      this.nextElementSibling.classList.toggle('ativo');
    }
  
    botaoContato.addEventListener('click', hideContato);
  }
}
