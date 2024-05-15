let score = 0;
let cantidad = 0;
let climaSel;
let climaMostrado = [];
let audioEnu;

var climas = [
  {
    tipo: "sol",
    audio: "sounds/audio_sol.mp3",
    imagen: "personajeMujerSol.png",
  },
  {
    tipo: "lluvia",
    audio: "sounds/audio_lluvia.mp3",
    imagen: "personajeHombreLluvia.png",
  },
  {
    tipo: "nieve",
    audio: "sounds/audio_nieve.mp3",
    imagen: "personajeHombreNieve.png",
  },
  {
    tipo: "niebla",
    audio: "audio_niebla.mp3",
    imagen: "personajeMujerNiebla.png",
  },
  {
    tipo: "solnube",
    audio: "sounds/audio_solnube.mp3",
    imagen: "personajeMujerSolNube.png",
  },
  {
    tipo: "tormenta",
    audio: "sounds/audio_tormenta.mp3",
    imagen: "personajeHombreTormenta.png",
  },
  {
    tipo: "viento",
    audio: "sounds/audio_viento.mp3",
    imagen: "personajeHombreViento.png",
  },
];

const playBtn = document.getElementById("play-btn");
playBtn.addEventListener("click", function () {
  playBtn.disabled = true;
  playSound(climaSel.audio);
});

function inicioJuego() {
  cantidad++;
  climaSel = obtenerIndiceAleatorio();
  playBtn.disabled = false;
  playBtn.classList.add("botonPlay");
  playSound(climaSel.audio);

  let divClima = document.getElementById("cajonPersonaje");
  divClima.style.backgroundImage = "url('img/" + climaSel.imagen + "')";
}

function verifResp(element) {
  let clima = climaSel.tipo;
  let select = element.getAttribute("data-clima");

  if (clima == select) {
    score++;
    element.classList.add("correcto");
  } else {
    element.classList.add("incorrecto");
  }

  setTimeout(() => {
    if (cantidad < 7) {
      element.classList.remove("correcto");
      element.classList.remove("incorrecto");
      inicioJuego();

    } else {
      $("#principal").fadeToggle(1000);
      $("#final").fadeToggle(1000);
      if (score < 4) {
        var audio = new Audio("../../sounds/game_over.mp3");
        audio.play();
        document.getElementById("final").style.backgroundImage =
          "url(../../images/derrota.gif)";
      } else {
        document.getElementById("final").style.backgroundImage =
          "url(../../images/victoria.gif)";
        var audio = new Audio("../../sounds/victory.mp3");
        audio.play();
      }

      document.getElementById("texto_final").innerText =
        "Has obtenido " + score + " puntos de 7 posibles";
    }
  }, 2000);
}

function playSound(climaAudio) {
  const audio = new Audio(climaAudio);
  audio.play();
}

function obtenerIndiceAleatorio() {
  let indice = Math.floor(Math.random() * climas.length);
  while (climaMostrado.includes(indice)) {
    indice = Math.floor(Math.random() * climas.length);
  }
  climaMostrado.push(indice);

  return climas[indice];
}

$(document).ready(function () {
  setTimeout(function () {
    audioEnu = new Audio("sounds/enunciado.mp3");
    audioEnu.playbackRate = 0.8;
    audioEnu.play();
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
            "Hola!, Soy genio, en este juego deberás escuchar al personaje mostrado, según lo indicado selecciona el tiempo que presenta. Tu puedes!!!",
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
        if (!cerrardo) {
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

let cerrardo = false;
function cerrar_anuncio() {
  let audio2 = new Audio("../../sounds/fondo.mp3");
  audio2.play();
  audio2.volume = 0.1;
  audioEnu.pause();
  cerrardo = true;
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
