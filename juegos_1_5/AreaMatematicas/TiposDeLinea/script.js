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


let cont = 0;
let correctas = 0;
const drop = (e) => {
  e.preventDefault();
  //For touch screen
  if (isTouchDevice()) {
    moveElement = false;
    const pos = currentElement.getBoundingClientRect();
    const currentDrop = document.elementsFromPoint(pos.left, pos.top);
    
    if(currentDrop[1].getAttribute("data-id") == "recta" || currentDrop[1].getAttribute("data-id") == "curva"){
      if (currentElement.getAttribute("data-id") == currentDrop[1].getAttribute("data-id")) {
        currentElement.classList.add("hide");
        currentDrop[1].innerHTML = ``;
        //Insert new img element
        currentDrop[1].insertAdjacentHTML(
          "afterbegin",
          `<img class='img_drag' style='height: 100pt; width: 118pt; position: absolute; top: 48px;' src="bb.png">`
        ); 
        cont++;
        correctas++;
      } else {
        currentElement.classList.add("hide");
        currentDrop[1].innerHTML = ``;
        currentDrop[1].insertAdjacentHTML(
          "afterbegin",
          `<img class='img_drag' style='height: 100pt; width: 118pt; position: absolute; top: 48px;' src="bm.png">`
        ); 
        cont++;
      }
      setTimeout(()=>{
        currentDrop[1].innerHTML = ``;
      }, 1000)

    }else{
      var off = document.getElementById(id_sel).parentElement;
      off.style.position = "absolute",
      off.style.top = top_o;
      off.style.left = left_o;
    }
  } else {
    //Access data
    const draggedElementData = e.dataTransfer.getData("text");
    //Get custom attribute value
    const droppableElementData = e.target.getAttribute("data-id");
    const draggedElement = document.getElementById(draggedElementData);
    let imagen_id = draggedElement.getAttribute('data-id');
    if (e.target.innerHTML == "" && e.target.tagName != "IMG") {
      cont++;
      if (droppableElementData === imagen_id) {
        draggedElement.classList.add("hide");
        e.target.innerHTML = "";
        e.target.insertAdjacentHTML(
          "afterbegin",
          `<img class='img_drag' style='height: 94pt; width: 106pt; position: absolute; top: 46px;' src="bb.png">`
        );
        var audio = new Audio('../../sounds/ok.mp3');
        audio.play();
        correctas++;
      } else {
        e.target.innerHTML = "";
        draggedElement.classList.add("hide");
        var audio = new Audio('../../sounds/over.mp3');
        audio.play();
        e.target.insertAdjacentHTML(
          "afterbegin",
          `<img class='img_drag' style='height: 94pt; width: 106pt; position: absolute; top: 46px;' src="bm.png">`
        );
      }

      setTimeout(()=>{
        e.target.innerHTML = "";
      }, 1000)
    }
  }



  if (cont == 12) {

    setTimeout(() => {
      limpiar();
    }, 1700)

    $('#principal').fadeToggle(500);
    setTimeout(() => {
      $('#final').fadeToggle(1000);
    }, 500)
    if (correctas < 6) {
      document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
    } else {
      document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
    }

    document.getElementById("texto_final").innerText = "Has contestado correctamente " + correctas + " preguntas de 12"

    if (correctas >= 6) {
      var audio = new Audio('../../sounds/victory.mp3');
      audio.play();
    } else {
      var audio = new Audio('../../sounds/game_over.mp3');
      audio.play();
    }
  }
};

//Creates number and request
const creator = () => {

  correctas = 0;
  cont = 0;

  let recta_random = randomValueGenerator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 18, 19, 20]);
  let curva_random = randomValueGenerator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);

  let array_divs = [];
  if(isTouchDevice()){

    for (let index = 0; index < 6; index++) {
      array_divs.push("<div class='draggable-image miDiv'  draggable='true'><img class='img_drag' data-id='recta' style='height: 70pt; width: 100pt; border: 1px solid grey; border-radius: 10px;' id='gaseoso_" + recta_random[index] + "' src='img/rectas/" + recta_random[index] + ".png' alt='prueba.png'></div>")
    }
  
    for (let index = 0; index < 6; index++) {
      array_divs.push("<div class='draggable-image miDiv'  draggable='true'><img class='img_drag' data-id='curva' style='height: 70pt; width: 100pt; border: 1px solid grey; border-radius: 10px;' id='liquido_" + curva_random[index] + "' src='img/curvas/" + curva_random[index] + ".png' alt='prueba.png'></div>")
    }

  }else{
    for (let index = 0; index < 6; index++) {
      array_divs.push("<div class='col-3 draggable-image text-center' draggable='true'><img class='img_drag' data-id='recta' style='height: 70pt; width: 100%; border: 1px solid grey; border-radius: 10px;' id='gaseoso_" + recta_random[index] + "' src='img/rectas/" + recta_random[index] + ".png' alt='prueba.png'></div>")
    }
  
    for (let index = 0; index < 6; index++) {
      array_divs.push("<div class='col-3 draggable-image text-center' draggable='true'><img class='img_drag' data-id='curva' style='height: 70pt; width: 100%; border: 1px solid grey; border-radius: 10px;' id='liquido_" + curva_random[index] + "' src='img/curvas/" + curva_random[index] + ".png' alt='prueba.png'></div>")
    }
  }
  
  array_divs = randomValueGenerator(array_divs);
  div = "";
  for (let index = 0; index < array_divs.length; index++) {
    const element = array_divs[index];
    div += element;
  }

  if(isTouchDevice()){
    document.getElementById("imagenes_movil").innerHTML = "";
    document.getElementById("imagenes_movil").innerHTML = div;

    var imagenes = document.getElementsByClassName("miDiv");

    let top = 80;
    let left = 155;
    let aux = 0;
    for (let index = 1; index <= imagenes.length; index++) {
      const element = imagenes[index-1];

      element.style.top = top + "px";
      element.style.left = left + "px";


      if(aux < 3){
        left += 170;
        aux++;
      }else{
        left = 155;
        top += 140;
        aux = 0;
      }
    }

  }else{
    document.getElementById("imagenes").innerHTML = "";
    document.getElementById("imagenes").innerHTML = div;
  }
  
};

startGame = async () => {
  currentElement = "";
  await creator();

  dropPoints = document.querySelectorAll(".signo");

  if(!isTouchDevice()){
    draggableObjects = document.querySelectorAll(".draggable-image");
    draggableObjects.forEach((element) => {
        element.addEventListener("dragstart", dragStart);
    });
  }else{
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

var initialXx = 0;
var initialYy = 0;

var top_o = 0;
var left_o = 0;
var id_sel = "";
function mover_tactil (event) {
  event.preventDefault();
  // Obtener la posición inicial del dedo
  initialXx = event.touches[0].clientX - event.target.parentElement.offsetLeft;
  initialYy = event.touches[0].clientY - event.target.parentElement.offsetTop;
  

  if(id_sel != event.target.id){
    currentElement = event.target;
    id_sel = currentElement.id;
    var offsets = document.getElementById(id_sel).parentElement;
    top_o = offsets.style.top;
    left_o = offsets.style.left;
  }

}

function mover_tactil2 (event) {
  event.preventDefault();
  // Obtener la posición actual del dedo
  var currentX = event.touches[0].clientX - initialXx;
  var currentY = event.touches[0].clientY - initialYy;

  // Actualizar la posición de la div
  event.target.parentElement.style.left = currentX + 'px';
  event.target.parentElement.style.top = currentY + 'px';

}

$(document).ready(function () {
  setTimeout(function () {
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
          maquina2("bienvenida", 'Hola, soy Genio. <br> En este juego deberás arrastrar cada tipo de linea al cajon que le corresponde.<br> <br> ¡Tu Puedes!', 50, 1);
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