export default function initAccordion() {

const accordionList = document.querySelectorAll(".js-accordion button")
const arrayAccordionList = Array.from(accordionList);

const accordionDescriptions = document.querySelectorAll(".js-accordion dd")

if (accordionList.length) {
  arrayAccordionList.forEach((el, i) => {
    el.addEventListener('click', function activeAccordion() {
      el.classList.toggle('ativo');
      accordionDescriptions[i].classList.toggle('ativo');
      if (el.className === 'ativo') {
        el.innerHTML = '-';
      } else {
        el.innerHTML = '+';
      }
    });
  });
}
}

