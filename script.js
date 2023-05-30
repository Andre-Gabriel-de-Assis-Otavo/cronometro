let segundos = 0;
let minutos = 0;
let horas = 0;
let milisegundos = 0;
let cronometro;

function reset() {
  segundos = 0;
  minutos = 0;
  horas = 0;
  milisegundos = 0;

  document.getElementById("horas").innerHTML = "00";
  document.getElementById("minutos").innerHTML = "00";
  document.getElementById("segundos").innerHTML = "00";
  document.getElementById("milisegundos").innerHTML = "000";
}

function init() {
  cronometro = setInterval(() => {
    timer();
  }, 10);
}

function timer() {
  if ((milisegundos += 10) == 1000) {
    milisegundos = 0;
    segundos++;
  }

  if (segundos == 60) {
    segundos = 0;
    minutos++;
  }

  if (minutos == 60) {
    minutos = 0;
    horas++;
  }

  document.getElementById("horas").innerHTML = returData(horas);
  document.getElementById("minutos").innerHTML = returData(minutos);
  document.getElementById("segundos").innerHTML = returData(segundos);
  document.getElementById("milisegundos").innerHTML = returData(milisegundos);
}

function returData(input) {
  return input >= 10 ? input : `0${input}`;
}

function pause() {
  clearInterval(cronometro);
}
