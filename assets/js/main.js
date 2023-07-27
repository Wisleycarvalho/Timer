function criaHoraDosSegundos(segundos){
  const data = new Date(segundos*1000);
  return data.toLocaleTimeString('pt-br', {
    hours12: false, 
    timeZone: 'UTC'
  });
}

console.log(criaHoraDosSegundos(10))


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0

function iniciarelogio(){
  const timer = setInterval(function(){
    segundos++;
    relogio.innerHTML = segundos
  }, 1000)
}

iniciar.addEventListener('click', function(){
  iniciarelogio()
})

pausar.addEventListener('click', function(){
  relogio.innerHTML = 'cliquei no inciar';
})

zerar.addEventListener('click', function(){
  relogio.innerHTML = 'cliquei no inciar';
})