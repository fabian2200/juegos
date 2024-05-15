let score = 0;
let cantidad = 0;
let elementoSel;
let elementosMostrados = [];
var imagen;
var conse = 1;
let elementos = [
  {
    nombre: "alarma",
    imagen: "alarma.png",
    metal: "si"
  },
  {
    nombre: "canasto",
    imagen: "canasto.png",
    metal: "no"
  },
  {
    nombre: "candado",
    imagen: "candado.png",
    metal: "si"
  },
  {
    nombre: "cuchillo",
    imagen: "cuchillo.png",
    metal: "si"
  },
  {
    nombre: "matera",
    imagen: "matera.png",
    metal: "no"
  },
  {
    nombre: "mesa",
    imagen: "mesa.png",
    metal: "no"
  },
  {
    nombre: "nevera",
    imagen: "nevera.png",
    metal: "si"
  },
  {
    nombre: "rodillo",
    imagen: "rodillo.png",
    metal: "no"
  },
  {
    nombre: "sofa",
    imagen: "sofa.png",
    metal: "no"
  },
  {
    nombre: "tanque",
    imagen: "tanque.png",
    metal: "si"
  },
  {
    nombre: "zanahoria",
    imagen: "zanahoria.png",
    metal: "no"
  },
];

let countdownInterval;
const gameDuration = 60;
let timer = gameDuration;

function inicioJuego() {
  countdownInterval = setInterval(() => {
    if (timer > 0) {
        timer--;
        updateTimer();
    } else {
        clearInterval(countdownInterval)
        terminarJuego();
    }
}, 1000);
}

function updateTimer() {
  document.getElementById(
      "timer_sec"
  ).innerText = `Tiempo restante: ${timer} s`;
}


function verifResp(elemento){
  const rectElemento = elemento.getBoundingClientRect();
  const destino = document.getElementById('imagenMost');
  const rectDestino = destino.getBoundingClientRect();

  let tipo  = elemento.getAttribute("data-tipo");
  if(tipo == "metal"){
    const offsetX = rectDestino.left - rectElemento.left;
    const offsetY = rectDestino.top - rectElemento.top;
    score++;
    cantidad++;
    destino.src = "img/iman.gif";
    destino.classList.add("escala");
  
    elemento.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  
    setTimeout(() => {
      elemento.style.transform = 'translate(0, 0)';
      destino.appendChild(elemento);
      elemento.style.position = 'static';

      setTimeout(() => {
        destino.src = "img/iman.png";
        destino.classList.remove("escala");
      },800);

    }, 2000);  
  
  }else{
    score--; 
    elemento.classList.add('incorrect-answer');
    setTimeout(() => {
      elemento.classList.remove('incorrect-answer');
    }, 1000);
  }
  //verifica la catidad de elementos de metal
  if(cantidad == 5){
    setTimeout(() => {
    terminarJuego();
  }, 2500);
  }


}

function terminarJuego(){
  clearInterval(countdownInterval)
  $("#principal").fadeToggle(1000);
  $("#final").fadeToggle(1000);
  if (score <= 0) {
      isPaused = false;
      var audio = new Audio("../../sounds/game_over.mp3");
      audio.play();
      document.getElementById("final").style.backgroundImage =
          "url(../../images/derrota.gif)";
      document.getElementById("texto_final").innerText =
          "No has logrado obtener ningún punto";
  } else {
      document.getElementById("final").style.backgroundImage =
          "url(../../images/victoria.gif)";
      var audio = new Audio("../../sounds/victory.mp3");
      audio.play();
      document.getElementById("texto_final").innerText =
          "Has obtenido " + score + " puntos";
  }
}


$(document).ready(function () {
  setTimeout(function () {
    let audio2 = new Audio("sounds/enunciado.mp3");
    audio2.playbackRate = 0.8;
    audio2.play();
  }, 4500);

  setTimeout(() => {
    $("#principal").fadeToggle(1000);
    $("#fondo_blanco").fadeToggle(3000);
    setTimeout(() => {
      const divAnimado = document.querySelector(".overlay");
      divAnimado.style.animationName = "moverDerecha";
      divAnimado.style.animationDirection = "normal";
      divAnimado.style.display = "block";
      setTimeout(() => {
        const divAnimado2 = document.querySelector(".nube");
        divAnimado2.style.animationName = "moverArriba";
        divAnimado2.style.animationDirection = "normal";
        divAnimado2.style.display = "block";
        setTimeout(() => {
          divAnimado.style.backgroundImage = "url(../../images/normal2.gif)";
          maquina2(
            "bienvenida",
            "Hola!, Soy genio, en este juego deberás identificar los elementos que pertenecen a la escuela. Tu puedes!!!",
            100,
            1
          );
        }, 3000);
      }, 2000);
    });
  }, 200);
});

function maquina2(contenedor, texto, intervalo, n) {
  var i = 0,
    // Creamos el timer
    timer = setInterval(function () {
      if (i < texto.length) {
        // Si NO hemos llegado al final del texto..
        // Vamos añadiendo letra por letra y la _ al final.
        $("#" + contenedor).html(texto.substr(0, i++) + "_");
      } else {
        // En caso contrario..
        // Salimos del Timer y quitamos la barra baja (_)
        clearInterval(timer);
        $("#" + contenedor).html(texto);
      
        if (!cerrado) {
          document.querySelector("#btnomitir").style.display = "none";
          setTimeout(() => {
            cerrar_anuncio();
          }, 3000);
        }
        // Auto invocamos la rutina n veces (0 para infinito)
        if (--n != 0) {
          setTimeout(function () {
            maquina2(contenedor, texto, intervalo, n);
          }, 3600);
        }
      }
    }, intervalo);
}

let cerrado = false;
function cerrar_anuncio() {
  let audio2 = new Audio("../../sounds/fondo.mp3");
  audio2.play();
  audio2.volume = 0.2;
  cerrado = true;
  const divAnimado2 = document.querySelector(".nube");
  divAnimado2.style.animationName = "moverabajo";
  const divAnimado = document.querySelector(".overlay");
  divAnimado.style.backgroundImage = "url(../../images/normal1.gif)";
  $("#fondo_blanco").fadeToggle(3000);
  setTimeout(function () {
    divAnimado.style.animationName = "moverIzquierda";
    divAnimado.style.animationDirection = "normal";
    setTimeout(() => {
      $("#principal").fadeToggle(1000);
      inicioJuego();
    }, 2000);
  }, 2000);
}
