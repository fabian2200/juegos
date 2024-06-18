var canvas = "";
var contexto = "";
var x = 0;
var radio = 0;
var y = 0;

$(document).ready(function () {
  canvas = document.getElementById("miCanvas");
  contexto = canvas.getContext("2d");

  y = 140;
  radio = 100;
  x = 160;

  contexto.fillStyle = "#ff751e";
  contexto.strokeStyle = "#000";
  contexto.lineWidth = 1;

  contexto.beginPath();
  contexto.arc(x, y, radio, 0, radians(360));
  contexto.fill();
  contexto.closePath();

  generaPartes();

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
          divAnimado.style.backgroundImage =
            "url(../../images/normal2.gif)";
          maquina2(
            "bienvenida",
            "Hola, soy Genio. <br> En este juego deberás indicar que fracción representa la parte coloreada que se te muestra en la imagen de la izquierda. <br> ¡Tu puedes!",
            50,
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
                document.querySelector('#btnomitir').style.display = "none";
                  setTimeout(() => {
                      cerrar_anuncio();
                  }, 3000)
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
  if (!cerrardo) {
    let audio2 = new Audio("../../sounds/fondo.mp3");
    audio2.play();
    audio2.volume = 0.2;
    
    cerrardo = true;
    const divAnimado2 = document.querySelector('.nube');
    divAnimado2.style.animationName = 'moverabajo';
    const divAnimado = document.querySelector('.overlay');
    divAnimado.style.backgroundImage = "url(../../images/normal1.gif)";
    $('#fondo_blanco').fadeToggle(3000);
    setTimeout(function () {
        divAnimado.style.animationName = 'moverIzquierda';
        divAnimado.style.animationDirection = 'normal';
        setTimeout(() => {
            $('#principal').fadeToggle(1000);
        }, 2000)
    }, 2000);
  }
}

function radians(grados) {
  return (grados * Math.PI) / 180;
}

function rand_range(min, max) {
  return Math.floor(Math.random() * max + min);
}

var numerador = 0;
var denominador = 0;
var pregunta = 0;

function generaPartes(tipo_juego) {
  if (tipo_juego == "nuevo") {
    location.reload();
  } else {
    pregunta += 1;
  }

  if (pregunta == 11) {
    $("#principal").fadeToggle(1000);
    setTimeout(() => {
      $("#final").fadeToggle(1000);
    }, 1000);

    if (correctas < 6) {
      document.getElementById("final").style.backgroundImage =
        "url(../../images/derrota.gif)";
    } else {
      document.getElementById("final").style.backgroundImage =
        "url(../../images/victoria.gif)";
    }

    document.getElementById("texto_final").innerText =
      "Has contestado correctamente " + correctas + " preguntas de 10";

    if (correctas >= 6) {
      var audio = new Audio("../../sounds/victory.mp3");
      audio.play();
    } else {
      var audio = new Audio("../../sounds/game_over.mp3");
      audio.play();
    }

    preg = 1;
    correctas = 0;

    for (let index = 1; index < 11; index++) {
      document.getElementById("preg_" + index).innerHTML = "";
    }
  }

  numerador = 0;
  denominador = 0;

  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";

  numerador = Math.floor(Math.random() * 19) + 1;

  while (numerador > denominador) {
    denominador = Math.floor(Math.random() * 19) + 1;
  }

  for (i = 0; i < denominador; i++) {
    if (i < numerador) {
      contexto.fillStyle = "rgb(255,117,28)";
    } else {
      contexto.fillStyle = "rgb(255,255,255)";
    }
    contexto.beginPath();
    contexto.moveTo(x, y);
    var fraccion = 360 / denominador;
    var grados = fraccion * i;
    contexto.arc(x, y, radio, radians(grados), radians(grados + fraccion));
    contexto.fill();
    contexto.stroke();
    contexto.closePath();
  }
}

function cambiar() {
  generaPartes();
}

let correctas = 0;
function verificar() {
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;

  if (num1 != "" && num2 != "") {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (num1 == numerador && num2 == denominador) {
      document.getElementById("preg_" + pregunta).innerHTML =
        "<i style='color: green' class='fa-sharp fa-solid fa-face-smile fa-3x'></i>";

      Swal.fire({
        position: "center",
        imageUrl: "../../images/correcto.gif",
        imageWidth: 250,
        imageHeight: 250,
        title: "Correcto!",
        showConfirmButton: false,
        timer: 1000,
      });

      correctas++;

      setTimeout(() => {
        
        generaPartes();
      }, 1000);
    } else {
      document.getElementById("preg_" + pregunta).innerHTML =
        "<i style='color: red' class='fa-solid fa-face-sad-tear fa-3x'></i>";
      Swal.fire({
        position: "center",
        imageUrl: "../../images/incorrecto.gif",
        imageWidth: 250,
        imageHeight: 250,
        title: "Incorrecto!",
        showConfirmButton: false,
        timer: 1000,
      });
      setTimeout(() => {
        generaPartes();
      }, 1000);
    }
  }
}
