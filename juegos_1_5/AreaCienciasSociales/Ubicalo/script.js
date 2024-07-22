//Initial References
let draggableObjects;
let dropPoints;


let deviceType = "";
let initialX = 0, initialY = 0;
let currentElement = "";
let moveElement = false;

//Detect touch device
const isTouchDevice = () => {
  try {
    //We try to create Touch Event (It would fail for desktops and throw error)
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};


//Random value from Array
const randomValueGenerator = (vector) => {
  return vector.sort(function (a, b) { return (Math.random() - 0.5) });
};


//Drag & Drop Functions
function dragStart(e) {
  if (isTouchDevice()) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
    //Start movement for touch
    moveElement = true;
    currentElement = e.target;
  } else {
    //For non touch devices set data to be transfered
    e.dataTransfer.setData("text", e.target.id);
  }
}

//Events fired on the drop target
function dragOver(e) {
  e.preventDefault();
}


var initialXx = 0;
var initialYy = 0;

function mover_tactil(event) {
  event.preventDefault();
  // Obtener la posición inicial del dedo
  initialXx = event.touches[0].clientX - event.target.parentElement.offsetLeft;
  initialYy = event.touches[0].clientY - event.target.parentElement.offsetTop;
  currentElement = event.target;
}

function mover_tactil2(event) {
  event.preventDefault();
  // Obtener la posición actual del dedo
  var currentX = event.touches[0].clientX - initialXx;
  var currentY = event.touches[0].clientY - initialYy;

  // Actualizar la posición de la div
  event.target.parentElement.style.left = currentX + 'px';
  event.target.parentElement.style.top = currentY + 'px';

  event.target.parentElement.style.border = "none";
  event.target.parentElement.style.backgroundColor = "transparent";

  initialX = event.touches[0].clientX;
  initialY = event.touches[0].clientY;
}

let cont = 0;
let correctas = 0;
const drop = (e) => {
  e.preventDefault();
  //For touch screen
  if (isTouchDevice()) {
    moveElement = false;
    //Select country name div using the custom attribute
    const currentDrop = document.querySelector(
      `div[data-id='${e.target.id}']`
    );

    //Get boundaries of div
    const currentDropBound = currentDrop.getBoundingClientRect();
    
    //if the position of flag falls inside the bounds of the countru name
    if (
      initialX >= currentDropBound.left &&
      initialX <= currentDropBound.right &&
      initialY >= currentDropBound.top &&
      initialY <= currentDropBound.bottom
    ) {
      currentDrop.classList.add("dropped");
      //hide actual image
      currentElement.parentElement.classList.add("hide");
      currentDrop.innerHTML = ``;
      //Insert new img element
      currentDrop.insertAdjacentHTML(
        "afterbegin",
        e.target.outerHTML
      );

      correctas++;
    } else {
      currentDrop.classList.add("error");
      currentElement.parentElement.classList.add("hide");
      currentDrop.insertAdjacentHTML(
        "afterbegin",
        e.target.outerHTML
      );
    }

    setTimeout(() => {
      document.getElementById("imagenes_movil").innerHTML = "";
      limpiar();
      startGame();
    }, 2000)
  } else {
    //Access data
    const draggedElementData = e.dataTransfer.getData("text");
    //Get custom attribute value
    const droppableElementData = e.target.getAttribute("data-id");
    const draggedElement = document.getElementById(draggedElementData);
    let imagen_id = draggedElement.getAttribute('data-id');

    if (droppableElementData === draggedElementData) {
      e.target.innerHTML = "";
      e.target.classList.add("dropped");
      e.target.insertAdjacentHTML(
        "beforeend",
        `<img class='img_drag' style='height: 90pt; width: auto' src="img/${imagen_id}.png">`
      );
      var audio = new Audio('../../sounds/ok.mp3');
      audio.play();
      correctas++;
    } else {
      e.target.innerHTML = "";
      var audio = new Audio('../../sounds/over.mp3');
      audio.play();
      e.target.classList.add("error");
      e.target.insertAdjacentHTML(
        "beforeend",
        `<img class='img_drag' style='height: 90pt; width: auto' src="img/${imagen_id}.png">`
      );
    }

    setTimeout(() => {
      document.getElementById("imagenes").innerHTML = "";
      limpiar();
      startGame();
    }, 2000)
  }

  if (cont == 10) {
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
};

var ubi = ["Norte", "Sur", "Este", "Oeste"];

//Creates number and request
const creator = () => {
  cont++;
  let ubi_random = ubi[Math.floor(Math.random() * (3 - 0 + 1) + 0)];
  let img_random = Math.floor(Math.random() * (48 - 1 + 1) + 1);

  let div = "";

  if (isTouchDevice()) {
    document.getElementById("pregunta_actual_movil").innerHTML = cont;
    document.getElementById("ubi_movil").innerText = ubi_random;
    div = "<div class='miDiv draggable-image text-center' style='position: absolute; top: 32%; display: flex; left: 32%; align-items: center; justify-content: center;' draggable='true'><img class='img_drag' data-id='" + img_random + "' style='height: 85px; width: auto; max-width: 100%' id='" + ubi_random + "' src='img/" + img_random + ".png' alt='prueba.png'></div>";
    document.getElementById("imagenes_movil").innerHTML = "";
    document.getElementById("imagenes_movil").innerHTML = div;
  } else {
    document.getElementById("pregunta_actual").innerHTML = cont;
    document.getElementById("ubi").innerText = ubi_random;
    div = "<div class='col-12  draggable-image text-center' draggable='true'><img class='img_drag' data-id='" + img_random + "' style='height: 115pt; width: auto; max-width: 100%' id='" + ubi_random + "' src='img/" + img_random + ".png' alt='prueba.png'></div>";
    document.getElementById("imagenes").innerHTML = "";
    document.getElementById("imagenes").innerHTML = div;
  }
};

startGame = async () => {
  currentElement = "";
  await creator();

  dropPoints = document.querySelectorAll(".signo");

  if (!isTouchDevice()) {
    draggableObjects = document.querySelectorAll(".draggable-image");
    draggableObjects.forEach((element) => {
      element.addEventListener("dragstart", dragStart);
    });
  } else {
    var miDivs = document.getElementsByClassName('miDiv');

    for (let index = 0; index < miDivs.length; index++) {
      var miDiv = miDivs[index];

      miDiv.addEventListener('touchstart', mover_tactil);
      miDiv.addEventListener('touchmove', mover_tactil2);
      miDiv.addEventListener("touchend", drop);
    }
  }

  dropPoints.forEach((element) => {
    element.addEventListener("dragover", dragOver);
    element.addEventListener("drop", drop);
  });
}



$(document).ready(function () {
  setTimeout(function () {
    correctas = 0;
    cont = 0;
    startGame();
  }, 100);

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
          maquina2("bienvenida", 'Hola, soy Genio. <br> En este juego relacionado con los puntos cardinales, Norte, Sur, Este y Oeste, deberás ubicar la imagen en el punto cardinal que se te indique y asi ganar. <br> ¡Tu Puedes!', 50, 1);
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
  if(!cerrardo) {
    let audio = new Audio('../../sounds/fondo.mp3');
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

function limpiar() {
  divs = document.getElementsByClassName('signo');
  for (let index = 0; index < divs.length; index++) {
    const element = divs[index];
    element.classList.remove("dropped");
    element.classList.remove("error");
    element.innerHTML = "";
  }
}