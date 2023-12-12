function Calculadora(){
this.display = document.querySelector('.display');

this.inicia = () => {
  this.coletaCliques(); 
  this.coletaEnter();
};

this.coletaEnter = () => {
 document.addEventListener('keyup', e=>{
    if (e.keyCode ===13) {
    this.realizaConta();
    }
  });
}



 this.coletaCliques = () =>{
  document.addEventListener('click', event =>{
  const el = event.target;
  if(el.classList.contains('btn-num')) this.addNumNoDisplay(el);
  if(el.classList.contains('btn-clear')) this.clear();
  if(el.classList.contains('btn-del')) this.del();
  if(el.classList.contains('btn-eq')) this.realizaConta();
  });
 };

 this.realizaConta = () => {
  try {
     const conta = eval(this.display.value);

     if(!conta){
      alert('Conta inválida');
      return;
     }
   this.display.value = conta;
  } catch(e) {
    alert('Conta inválida');
    return;
  }
 };
this.addNumNoDisplay = el =>{ 
   this.display.value += el.innerText;
   this.display.focus();
};
this.clear = () => this.display.value = '';
this.del = () => this.display.value = this.display.value.slice(0,-1);

}


const calculadora = new Calculadora();
calculadora.inicia(); // tudo começa no método