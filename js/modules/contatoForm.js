export default function initContatoForm() {
  if (document.getElementById('contatoForm')) {
    function mailtoSend() {
      var nome = this.querySelector('input[name=nome]'), nome = nome.value;
    
      var email = this.querySelector('input[name=email]'), email = email.value;
      
      var assunto = this.querySelector('input[name=Subject]'), assunto = assunto.value;
    
      var texto = this.querySelector('textarea[name=msg]'), texto = texto.value;
      
      this.querySelector('input[name=Body]').setAttribute('value', `${texto}`);
    }
    
    document.getElementById('contatoForm').addEventListener('submit', mailtoSend);
  }
  
}


