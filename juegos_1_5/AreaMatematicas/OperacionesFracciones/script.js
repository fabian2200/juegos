$(document).ready(function () {
  canvas = document.getElementById("miCanvas");
  generarFuncion();
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
          maquina2("bienvenida", 'Hola, soy Genio. <br> En este juego realiza la operacion de fracciones y luego ingresa el resultado que crees correcto, responde correctamente a mas de 6 operaciones con fracciones para ganar. <br> ¡Tu Puedes!', 50, 1);
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


let pregunta_actual = 1;
let num = 0;
let den = 0;
function generarFuncion() {
  if (pregunta_actual <= 10) {
    // Generar dos fracciones aleatorias
    var num1 = Math.floor(Math.random() * 10) + 1;
    var den1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    var den2 = Math.floor(Math.random() * 10) + 1;

    document.getElementById("num1").value = num1;
    document.getElementById("num2").value = den1;
    document.getElementById("num3").value = num2;
    document.getElementById("num4").value = den2;

    var ope = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    switch (ope) {
      case 1:
        // Sumar las dos fracciones
        num = num1 * den2 + num2 * den1;
        den = den1 * den2;
        document.getElementById("signo").innerText = "+";
        break;
      case 2:
        // Restar las dos fracciones
        num = num1 * den2 - num2 * den1;
        den = den1 * den2;
        document.getElementById("signo").innerText = "-";
        break;
      case 3:
        // Multiplicar las dos fracciones
        num = num1 * num2;
        den = den1 * den2;
        document.getElementById("signo").innerText = "x";
        break;
      default:
        break;
    }
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
function verificar() {
  var num_res = parseInt(document.getElementById("res1").value);
  var den_res = parseInt(document.getElementById("res2").value);

  if (num_res == num && den_res == den) {
    Swal.fire({
      position: "center",
      imageUrl: "../../images/correcto.gif",
      imageWidth: 250,
      imageHeight: 250,
      title: "Correcto!",
      showConfirmButton: false,
      timer: 1800,
    });
    correctas++;
    document.getElementById("preg_" + pregunta_actual).innerHTML = "<i style='color: green' class='fa-sharp fa-solid fa-face-smile fa-2x'></i>";
  } else {
    Swal.fire({
      position: "center",
      imageUrl: "../../images/incorrecto.gif",
      imageWidth: 250,
      imageHeight: 250,
      title: "Incorrecto!",
      showConfirmButton: false,
      timer: 1800,
    });
    document.getElementById("preg_" + pregunta_actual).innerHTML = "<i style='color: red' class='fa-solid fa-face-sad-tear fa-2x'></i>";
  }

  setTimeout(() => {
    document.getElementById("res1").value = "";
    document.getElementById("res2").value = "";

    pregunta_actual++;
    generarFuncion();
  }, 1500)

}
