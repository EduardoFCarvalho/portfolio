export default function initHideElement() {

  const botaoElemento = document.getElementById("hide-element");

  if (botaoElemento !== null) {
    function hideEl() {
      botaoElemento.nextElementSibling.classList.toggle("ocultar");
    }
  
    botaoElemento.addEventListener('click', hideEl);
    hideEl();
  }
  

}
