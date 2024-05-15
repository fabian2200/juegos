let intentosIncorrectos = 0;
let cantidad = 0;
let cuerpoSel;
let climasSeleccionados = [];
let climasel;

var tiposDeClimas = [
  { nombre: "soleado", imagen: "soleado.png" },
  { nombre: "lluvioso", imagen: "lluvioso.png" },
  { nombre: "nublado", imagen: "nublado.png" },
  { nombre: "nevado", imagen: "nevado.png" },
  { nombre: "tormenta", imagen: "tormenta.png" },
];

var image = document.getElementById("myImage");
var container = document.querySelector(".container");

var screenWidth = window.innerWidth;
var stopPosition = screenWidth - 500;

function inicioJuego() {
  var currentPosition = parseInt(window.getComputedStyle(image).left);
  if (currentPosition < stopPosition) {
    image.style.left = currentPosition + 10 + "px"; // Incremento de 10 píxeles para una mayor velocidad
    requestAnimationFrame(inicioJuego);
  } else {
    startZoom();
  }
}

function mostrarOpc() {
  cantidad++;
  climasSeleccionados = [];
  while (climasSeleccionados.length < 4) {
    var climaAleatorio =
      tiposDeClimas[Math.floor(Math.random() * tiposDeClimas.length)];
    if (!climasSeleccionados.includes(climaAleatorio)) {
      climasSeleccionados.push(climaAleatorio);
    }
  }

  for (var i = 0; i < climasSeleccionados.length; i++) {
    var climaDiv = document.getElementById("clima" + (i + 1));
    climaDiv.innerText = climasSeleccionados[i].nombre;
    climaDiv.setAttribute("data-clima", climasSeleccionados[i].nombre);
  }

  console.log(climasSeleccionados);
  setTimeout(() => {
    $("#divGeneral").show();
  }, 3800);

  var climaElegido =
    climasSeleccionados[Math.floor(Math.random() * climasSeleccionados.length)];

  climasel = climaElegido.nombre;

  document.body.style.backgroundImage =
    'url("img/' + climaElegido.imagen + '")';
}

function startZoom() {
  var body = document.body;
  var zoomableDiv = document.getElementById("mi-div");

  // Agregar clase de zoom
  zoomableDiv.classList.add("zoomed");

  // Esperar hasta que termine la transición de zoom
  zoomableDiv.addEventListener("transitionend", function () {
    // Cambiar color de fondo del body después del zoom
    body.style.backgroundColor = "#e0e0e0";

    // Reiniciar el zoom después de 1.5 segundos (1500 milisegundos)
    setTimeout(function () {
      body.style.backgroundColor = ""; // Reiniciar color de fondo del body
      zoomableDiv.classList.remove("zoomed");
    }, 1000);

    setTimeout(() => {
      zoomableDiv.remove();
    }, 1800);

    image.remove();
    mostrarOpc();
  });
}

function verfResp(element) {
  let divGen = document.createElement("contenedor");
  divGen.classList.add("bloquea");
  let sel = element.getAttribute("data-clima");
  if (sel == climasel) {
    element.classList.add("correcto");
    intentosIncorrectos++;
  } else {
    element.classList.add("incorrecto");
  }

  setTimeout(function () {
    if (cantidad < 10) {
      mostrarOpc();
      $("#divGeneral").hide();
      element.classList.remove("correcto");
      element.classList.remove("incorrecto");
    } else {
      $("#principal").fadeToggle(1000);
      $("#final").fadeToggle(1000);
      if (intentosIncorrectos < 6) {
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
        "Has obtenido " + intentosIncorrectos + " de 10 puntos posibles";
    }
  }, 2500);
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
            "Hola!, Soy genio, en este juego deberás identificar que clima esta presente en la imagen mostrada. Tu puedes!!!",
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
  audio2.volume = 0.2;
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
