$(document).ready(function () {
  generarDatos();
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
          maquina2("bienvenida", 'Hola, soy Genio. <br> Toma como base el número que esta en la cabeza de la araña para calcular los porcentajes que se te piden y luego arrastra cada número a su lugar correspondiente, responde mas de el 60% de las preguntas correctamente para ganar. <br> ¡Tu Puedes!', 50, 1);
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

let bandera = true;
function generarDatos() {
  let numeroGeneradoDevalores = Math.floor(Math.random() * (100 - 10 + 1) + 10) * 10;
  numeroGeneradoDevalores = numeroGeneradoDevalores % 2 === 0 ? numeroGeneradoDevalores : numeroGeneradoDevalores + 1;

  document.getElementById("numero_generado").innerText = numeroGeneradoDevalores;

  var puntos = document.querySelectorAll(".punto");
  puntos.forEach((punto) => {
    punto.addEventListener("dragover", permitirSoltar);
    punto.addEventListener("drop", soltarNombre);
  });

  let arrayValores = [];
  let arrayMulti = []
  for (let index = 2; index <= 7; index++) {
    let porcen = Math.floor(Math.random() * (20 - 1 + 1) + 1) * 5;
    let valor_r = (numeroGeneradoDevalores * porcen) / 100;

    if (!arrayValores.includes(porcen) && Number.isInteger(valor_r)) {
      arrayValores.push(porcen);
      arrayMulti.push(valor_r);
      document.getElementById("punto" + index).setAttribute("data-id", (numeroGeneradoDevalores * porcen) / 100);
      document.getElementById("punto" + index).innerHTML = porcen + "%";
    } else {
      index--;
    }
  }

  let divs = "";
  let i = 1;
  
  arrayMulti.forEach(element => {
    divs += "<div class='opcion' id='nombre" + i + "' data-id='" + element + "' draggable='true'><h2 style='margin: 0'>" + element + "</h2></div>"
    i++;
  });


  document.getElementById("numeros").innerHTML = "";
  document.getElementById("numeros").innerHTML = divs;
  
  var nombres = document.querySelectorAll(".opcion");

  let top = 0;
  let lef = 50;
  for (let i = 0; i < nombres.length; i++) {
    let imagenContenedor = nombres[i];

    imagenContenedor.addEventListener("dragstart", arrastrar);
    imagenContenedor.addEventListener("dragend", soltar);

    if (isTouchDevice()) {

      imagenContenedor.style.position = "absolute";
      imagenContenedor.style.top = top + "px"
      imagenContenedor.style.left = lef + "px";
      imagenContenedor.style.zIndex = "10001";
      lef += 90;

      imagenContenedor.addEventListener('touchstart', mover_tactil);
      imagenContenedor.addEventListener('touchmove', mover_tactil2);
      imagenContenedor.addEventListener("touchend", drop);
    }

    var puntos = document.querySelectorAll(".punto");
    puntos.forEach((punto) => {
      punto.addEventListener("dragover", permitirSoltar);
      punto.addEventListener("drop", soltarNombre);
    });
  }
}

const isTouchDevice = () => {
  try {
      document.createEvent("TouchEvent");
      deviceType = "touch";
      return true;
  } catch (e) {
      deviceType = "mouse";
      return false;
  }
};

//For touchscreen movement
var initialXx = 0;
var initialYy = 0;

function mover_tactil(event) {
  event.preventDefault();
  // Obtener la posición inicial del dedo
  initialXx = event.touches[0].clientX - event.target.parentElement.offsetLeft;
  initialYy = event.touches[0].clientY - event.target.parentElement.offsetTop;
  currentElement = event.target;
}

var top_o = "0";
var left_o = "0";
var id_sel = "";
function mover_tactil2(event) {
  
  event.preventDefault();
  // Obtener la posición actual del dedo
  var currentX = event.touches[0].clientX - initialXx;
  var currentY = event.touches[0].clientY - initialYy;

  if(top_o == 0 && left_o == 0){
    id_sel = currentElement.parentElement.id;
    var offsets = document.getElementById(currentElement.parentElement.id);
    top_o = offsets.style.top;
    left_o = offsets.style.left;
  }
  
  // Actualizar la posición de la div
  event.target.parentElement.style.left = currentX + 'px';
  event.target.parentElement.style.top = currentY + 'px';
}

const drop = (e) => {
  e.preventDefault();
  const pos = currentElement.getBoundingClientRect();
  const currentDrop = document.elementsFromPoint(pos.left+25, pos.top+25);

  let id1 = currentElement.parentElement.getAttribute("data-id");
  let id2 = currentDrop[2].getAttribute("data-id");

  if(id1  != null && id2 != null){
    if (id1 == id2) {
      //hide actual image
      currentElement.parentElement.classList.add("hide");
      //Insert new img element
      currentDrop[2].style.backgroundColor = "#167713"
      currentDrop[2].style.color = "#fff"
      currentDrop[2].insertAdjacentHTML(
        "afterbegin",
        `<h2 style='margin: 0'>${id1}</h2>`
      );
      correctas++;
      cont++;

      top_o = 0;
      left_o = 0;
      id_sel = "";

    } else {
      currentElement.parentElement.classList.add("hide");
      //Insert new img element
      currentDrop[2].style.backgroundColor = "#FF0000";
      currentDrop[2].style.color = "#fff";
        currentDrop[2].insertAdjacentHTML(
          "afterbegin",
          `<h2 style='margin: 0'>${id1}</h2>`
        );
    
      cont++;

      top_o = 0;
      left_o = 0;
      id_sel = "";
    }
  }else{
    var off = document.getElementById(id_sel);
    off.style.position = "absolute",
    off.style.top = top_o;
    off.style.left = left_o;

    top_o = 0;
    left_o = 0;
    id_sel = "";
  }

  if (cont == 6) {
      $("#principal").fadeToggle(1000);
      $("#final").fadeToggle(1000);
      if (correctas <= 4) {
          var audio = new Audio("../../sounds/game_over.mp3");
          audio.play();
          document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
      } else {
          document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
          var audio = new Audio("../../sounds/victory.mp3");
          audio.play();
      }
      document.getElementById("texto_final").innerText = "Has obetenido " + correctas + " de 6 puntos posibles";
  }
};

let elemento_sel = ""
function arrastrar(evento) {
  evento.dataTransfer.setData("text", evento.target.id);
  evento.target.style.opacity = "0.5";
  elemento_sel = evento.target;
}

function soltar(evento) {
  evento.target.style.opacity = "1";
}

function permitirSoltar(evento) {
  evento.preventDefault();
}

let cont = 0;
let correctas = 0;
function soltarNombre(evento) {
  evento.preventDefault();

  // Obtenemos el ID del nombre que se está soltando
  var idNombre = evento.dataTransfer.getData("text");

  // Obtenemos el ID del punto donde se soltó el nombre
  var idPunto = evento.target.id;
  var Ubicacion = evento.target.getAttribute("data-id");

  // Obtenemos el elemento del nombre
  var nombre = document.getElementById(idNombre);
  const hab_animal = nombre.getAttribute("data-id");

  // Lo movemos al punto donde se soltó
  
  if (evento.target.childElementCount == 0 && evento.target.tagName != "H2") {
    evento.target.innerHTML += nombre.innerHTML;

    // Centramos el nombre dentro del punto
    nombre.style.display = "none";

    // Verificamos si el nombre ha sido soltado en el punto correcto

    if (Ubicacion == hab_animal) {
      correctas++;
      nombre.draggable = false;
      document.getElementById(idPunto).style.backgroundColor = "#167713";
      document.getElementById(idPunto).style.color = "#fff";
    } else {
      nombre.draggable = false;
      document.getElementById(idPunto).style.backgroundColor = "#FF0000";
      document.getElementById(idPunto).style.color = "#fff";
    }

    cont++;
  } else {
    elemento_sel.style.opacity = "1";
  }

  if (cont == 6) {
    $('#principal').fadeToggle(500);
    setTimeout(() => {
      $('#final').fadeToggle(1000);
    }, 500)
    if (correctas < 4) {
      document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
    } else {
      document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
    }

    document.getElementById("texto_final").innerText = "Has contestado correctamente " + correctas + " preguntas de 6"

    if (correctas >= 4) {
      var audio = new Audio('../../sounds/victory.mp3');
      audio.play();
    } else {
      var audio = new Audio('../../sounds/game_over.mp3');
      audio.play();
    }
  }
}