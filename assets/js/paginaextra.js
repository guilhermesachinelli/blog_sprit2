const days = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");



const  Jhonwick4 =  "22 March 2023"


function contador(){

   const novaData =  new Date(Jhonwick4);
   const dataAtual = new Date();

   const totalSegundos = (novaData - dataAtual) / 1000;

   const diasUsados = Math.floor(totalSegundos / 3600 / 24);
   const horasUsadas = Math.floor(totalSegundos / 3600) % 24;

   const minutosUsados = Math.floor(totalSegundos / 60 ) % 60;

   const segundosUsados = Math.floor(totalSegundos) % 60;


days.innerHTML = diasUsados
horas.innerHTML = formatoTempo(horasUsadas);
minutos.innerHTML = formatoTempo(horasUsadas);
segundos.innerHTML = formatoTempo(segundosUsados);

}

function formatoTempo(time){
    return time < 10 ? `0${time}` : time
}


contador()

setInterval(contador,1000);