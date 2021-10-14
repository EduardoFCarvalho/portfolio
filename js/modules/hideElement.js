export default function hideElement() {

  const botaoElemento = document.getElementById("hide-element");

  if (botaoElemento !== null) {
    function hideEl() {
      botaoElemento.nextElementSibling.classList.toggle("ocultar");
    }
  
    botaoElemento.addEventListener('click', hideEl);
    hideEl();
  }
  

}
