//Initial References
let draggableObjects;
let dropPoints;


function randomValueGenerator(imagenes) {
  return imagenes.sort(function () { return Math.random() - 0.5 });
};

var pregunta_actual = 0;

var elemento_seleccionado = null;
var imagenes = [];
var array_imagenes = [];

startGame = async () => {
  if (pregunta_actual < 10) {

    document.getElementById("pregunta_actual").innerHTML = pregunta_actual + 1;

    let div = "";

    const element = array_imagenes[pregunta_actual];
    document.getElementById("pregunta_ingles").innerText = element.oracion;
    elemento_seleccionado = element;

    div = "<img class='imagen2'  src='" + element.imagen + "' alt=''>";

    document.getElementById("imagen_pregunta").innerHTML = "";
    document.getElementById("imagen_pregunta").innerHTML = div;

  } else {
    $('#principal').fadeToggle(500);
    setTimeout(() => {
      $('#final').fadeToggle(1000);
    }, 500)
    if (correctas < 6) {
      document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
    } else {
      document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
    }

    document.getElementById("texto_final").innerText = "Has contestado correctamente " + correctas + " preguntas de 10"

    if (correctas >= 6) {
      var audio = new Audio('../../sounds/victory.mp3');
      audio.play();
    } else {
      var audio = new Audio('../../sounds/game_over.mp3');
      audio.play();
    }
  }
}

let correctas = 0;

function respuesta(tipo, elemento) {
  if (tipo == elemento_seleccionado.tipo) {
    elemento.classList.add("correcto");
    var audio = new Audio('../../sounds/ok.mp3');
    audio.play();
    correctas++;
  } else {
    elemento.classList.add("incorrecto");
    var audio = new Audio('../../sounds/over.mp3');
    audio.play();
  }

  setTimeout(() => {
    pregunta_actual++;
    elemento.classList.remove("correcto");
    elemento.classList.remove("incorrecto");
    startGame();
  }, 2000)

}


$(document).ready(function () {
  var base_preguntas = readText("oraciones.json");
  interprete_bp = JSON.parse(base_preguntas);
  interprete_bp = randomValueGenerator(interprete_bp);

  imagenes = [];
  for (let index = 0; index < interprete_bp.length; index++) {
    frase = interprete_bp[index];
    if (frase.oracion.includes("are")) {
      frase.oracion = frase.oracion.replace("are", "____");
      imagenes.push({
        oracion: frase.oracion,
        imagen: frase.imagen,
        tipo: "Are"
      });
    } else {
      if (frase.oracion.includes("is")) {
        frase.oracion = frase.oracion.replace("is", "____");
        imagenes.push({
          oracion: frase.oracion,
          imagen: frase.imagen,
          tipo: "Is"
        });
      } else {
        if (frase.oracion.includes("am")) {
          frase.oracion = frase.oracion.replace("am", "____");
          imagenes.push({
            oracion: frase.oracion,
            imagen: frase.imagen,
            tipo: "Am"
          });
        }
      }
    }

  }

  array_imagenes = randomValueGenerator(imagenes);

  setTimeout(() => {
    startGame();
  }, 500)

  setTimeout(() => {
    $('#principal').fadeToggle(1000);
    $('#fondo_blanco').fadeToggle(3000);
    setTimeout(() => {
      const divAnimado = document.querySelector('.overlay');
      divAnimado.style.animationName = 'moverDerecha';
      divAnimado.style.animationDirection = 'normal';
      divAnimado.style.display = 'block';
      setTimeout(() => {
        const divAnimado2 = document.querySelector('.nube');
        divAnimado2.style.animationName = 'moverArriba';
        divAnimado2.style.animationDirection = 'normal';
        divAnimado2.style.display = 'block';
        setTimeout(() => {
          divAnimado.style.backgroundImage = "url(../../images/normal2.gif)"
          maquina2("bienvenida", 'Hola, soy Genio. <br> Este juego trata sobre el verbo to be, completa la frase con la palabra que creas correcta, debes responder mas de 6 preguntas correctas para ganar. <br> ¡Tu Puedes!', 50, 1);
        }, 3000)
      }, 2000)
    })
  }, 200)

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
    var audio = new Audio('../../sounds/fondo.mp3');
    audio.play();
    audio.volume = 0.2;
    
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

function readText(ruta_local) {
  var texto = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", ruta_local, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    texto = xmlhttp.responseText;
  }
  return texto;
}



