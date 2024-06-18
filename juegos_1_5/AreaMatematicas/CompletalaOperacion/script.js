// Función para generar números aleatorios entre un rango de valores
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Función para generar operaciones aleatorias con varios operadores
let numbers = [];
var result = 0.1;
let operation = null;
let selectedOperators = [];
let pregunta_actual = 1;

function generateOperation() {
  if (pregunta_actual <= 10) {
    // Generar entre 2 y 3 números aleatorios
    let numCount = getRandomNumber(3, 4);
    numbers = [];
    result = -1;
    operation = null;
    selectedOperators = [];

    while (!Number.isInteger(result) || result < 0) {
      numbers = []
      for (let i = 0; i < numCount; i++) {
        numbers.push(getRandomNumber(1, 10));
      }

      // Seleccionar entre 1 y 2 operadores aleatorios
      const operators = ['+', '-', '*'];
      const operatorCount = numCount - 1;
      selectedOperators = [];
      for (let i = 0; i < operatorCount; i++) {
        let operator = operators[Math.floor(Math.random() * operators.length)];
        selectedOperators.push(operator);
      }

      // Combinar los números y operadores en una operación
      result = numbers[0];
      operation = `${result}`;
      for (let i = 0; i < selectedOperators.length; i++) {
        operation += ` ${selectedOperators[i]} ${numbers[i + 1]}`;
      }

      result = eval(operation);

    }

    console.log(`${operation}`);
    console.log(eval(operation));

    // Devolver la operación en formato de cadena


    let div = "<div class='op' style='display: flex; align-items: center;justify-content: center;'>";
    for (let index = 0; index < numbers.length; index++) {
      div += "<h1>" + numbers[index] + "</h1>";
      if (index != numbers.length - 1) {
        div += "<input readonly class='operacion text-center' type='text' onclick='seleccionar_signo(\"operacion_" + index + "\")' id='operacion_" + index + "'>"
      } else {
        div += "<h1> = " + result + "</h1>";
      }
    }
    div += "</div>"

    document.getElementById("operacion").innerHTML = div;
  } else {
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
  }
}

// Ejemplo de uso: generar 10 operaciones aleatorias

$(document).ready(function () {
  generateOperation();
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
            "Hola, soy Genio. <br> En este juego deberás completar la operación matemática con el signo que corresonda ( + , - , x ) y hayar el resultado final. <br> ¡Tu puedes!",
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
    let audio2 = new Audio('../../sounds/fondo.mp3');
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

function seleccionar_signo(elemento) {
  Swal.fire({
    title: 'Selecciona una Operación...',
    icon: 'info',
    html: '<div style="padding-top: 20px"  class="row">' +
      '<div class="col-4"><button onclick="seleccionar_ele(\'' + elemento + '\',\'+\')" class="btnw btn btn-danger btn-lg"> + </button></div>' +
      '<div class="col-4"><button onclick="seleccionar_ele(\'' + elemento + '\',\'-\')" class="btnw btn btn-success btn-lg"> - </button></div>' +
      '<div class="col-4"><button onclick="seleccionar_ele(\'' + elemento + '\',\'*\')" class="btnw btn btn-warning btn-lg"> x </button></div>' +
      '</div>',
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: false,
    allowOutsideClick: false,
    focusConfirm: false,
  });
}

function seleccionar_ele(elemento, signo) {
  Swal.close();
  if (signo == "*") {
    signo = "x";
  }
  document.getElementById(elemento).value = signo;
}

let correctas = 0;
function verificar() {
  let buenas = 0;
  var signos_ingresados = document.getElementsByClassName("operacion");
  for (let index = 0; index < signos_ingresados.length; index++) {
    const element = signos_ingresados[index];
    const element2 = selectedOperators[index];

    let signo1 = element.value;
    if (signo1 == "x") {
      signo1 = "*";
    }

    if (signo1 == element2) {
      element.classList.add("bien");
      buenas++;
    } else {
      element.classList.add("error")
    }
  }

  setTimeout(() => {
    if (buenas == selectedOperators.length) {
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
      document.getElementById("preg_" + pregunta_actual).innerHTML = "<i style='color: green' class='fa-sharp fa-solid fa-face-smile fa-2x'></i>";
    } else {
      Swal.fire({
        position: "center",
        imageUrl: "../../images/incorrecto.gif",
        imageWidth: 250,
        imageHeight: 250,
        title: "Incorrecto!",
        showConfirmButton: false,
        timer: 1000,
      });
      document.getElementById("preg_" + pregunta_actual).innerHTML = "<i style='color: red' class='fa-solid fa-face-sad-tear fa-2x'></i>";
    }

    pregunta_actual++;
    document.getElementById("operacion").innerHTML = "";
    generateOperation();
  }, 700)

}
