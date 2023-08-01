function criaHoraDosSegundos(segundos){
  const data = new Date(segundos*1000);
  return data.toLocaleTimeString('pt-br', {
    hours12: false, 
    timeZone: 'UTC'
  });
}


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0
let timer;


function iniciarelogio(){
   timer = setInterval(function(){
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos)
  }, 1000)
}

iniciar.addEventListener('click', function(e){
  clearInterval(timer);
  iniciarelogio();
});

pausar.addEventListener('click', function(e){
  clearInterval(timer)
});

zerar.addEventListener('click', function(e){
  clearInterval(timer)
  relogio.innerHTML ='00:00:00';
  segundos = 0;
});