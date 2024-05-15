let intentosIncorrectos = 0;
let cantidad = 0;
let elementoSel;
let elementosMostrados = [];
var imagen;
var conse = 1;
let elementos = [
  {
    nombre: "tablero",
    imagen: "tablero.png",
    audio: "tablero.mp3",
    pertenece: "si",
  },
  {
    nombre: "cuaderno",
    imagen: "cuaderno.png",
    audio: "cuaderno.mp3",
    pertenece: "si",
  },
  {
    nombre: "escuadra",
    imagen: "escuadra.png",
    audio: "escuadra.mp3",
    pertenece: "si",
  },
  {
    nombre: "pelota",
    imagen: "pelota.png",
    audio: "pelota.mp3",
    pertenece: "si",
  },
  { nombre: "lápiz", imagen: "lápiz.png", audio: "lápiz.mp3", pertenece: "si" },
  {
    nombre: "borrador",
    imagen: "borrador.png",
    audio: "borrador.mp3",
    pertenece: "si",
  },
  {
    nombre: "tijeras",
    imagen: "tijeras.png",
    audio: "tijeras.mp3",
    pertenece: "si",
  },
  {
    nombre: "pinturas",
    imagen: "pinturas.png",
    audio: "pinturas.mp3",
    pertenece: "si",
  },
  { nombre: "libro", imagen: "libro.png", audio: "libro.mp3", pertenece: "si" },
  { nombre: "silla", imagen: "silla.png", audio: "silla.mp3", pertenece: "si" },
  {
    nombre: "computadora",
    imagen: "computadora.png",
    audio: "computadora.mp3",
    pertenece: "si",
  },
  { nombre: "reloj", imagen: "reloj.png", audio: "reloj.mp3", pertenece: "si" },
  {
    nombre: "maletin",
    imagen: "maletin.png",
    audio: "maletin.mp3",
    pertenece: "si",
  },
  {
    nombre: "mapaMundi",
    imagen: "mapa_mundi.png",
    audio: "planta.mp3",
    pertenece: "si",
  },
  {
    nombre: "manzana",
    imagen: "manzana.png",
    audio: "zapatos.mp3",
    pertenece: "si",
  },
  { nombre: "lupa", imagen: "lupa.png", audio: "peluche.mp3", pertenece: "si" },
  {
    nombre: "cartuchera",
    imagen: "cartuchera.png",
    audio: "escoba.mp3",
    pertenece: "si",
  },
  {
    nombre: "telefono",
    imagen: "telefono.png",
    audio: "telefono.mp3",
    pertenece: "no",
  },
  {
    nombre: "botellaVino",
    imagen: "vino.png",
    audio: "vino.mp3",
    pertenece: "no",
  },
  {
    nombre: "videojuego",
    imagen: "videojuego.png",
    audio: "videojuego.mp3",
    pertenece: "no",
  },
  {
    nombre: "auriculares",
    imagen: "auriculares.png",
    audio: "auriculares.mp3",
    pertenece: "no",
  },
  {
    nombre: "camara",
    imagen: "camara.png",
    audio: "camara.mp3",
    pertenece: "no",
  },
  {
    nombre: "pizza",
    imagen: "pizza.png",
    audio: "pizza.mp3",
    pertenece: "no",
  },
  {
    nombre: "bicicleta",
    imagen: "bicicleta.png",
    audio: "bicicleta.mp3",
    pertenece: "no",
  },
  {
    nombre: "patineta",
    imagen: "patineta.png",
    audio: "patineta.mp3",
    pertenece: "no",
  },
  {
    nombre: "perfume",
    imagen: "perfume.png",
    audio: "perfume.mp3",
    pertenece: "no",
  },
];

function inicioJuego() {
  cantidad++;
  elementoSel = obtenerIndiceAleatorio();
  let divImg = document.getElementById("contenedor");

  imagen = document.createElement("img");
  imagen.style.width = "300px";
  imagen.src = "img/" + elementoSel.imagen;
  imagen.id = "imagenMost" + conse;
  imagen.classList.add("imagenMost");
  imagen.setAttribute("data-nombre", elementoSel.nombre);

  divImg.appendChild(imagen);
  cose++;
}

function verfResp(resp) {
  if (resp == elementoSel.pertenece) {
    intentosIncorrectos++;
    if (elementoSel.pertenece == "no") {
      imagen.classList.add("correct-answer");
      setTimeout(() => {
        desintegrar();
      }, 2000);
    } else {
      moverImg();
    }
  } else {
    imagen.classList.add("incorrect-answer");
    setTimeout(() => {
      desintegrar();
    }, 2000);
  }
  setTimeout(() => {
    if (cantidad < 10) {
      inicioJuego();
    } else {
      $("#principal").fadeToggle(1000);
      $("#final").fadeToggle(1000);
      if (correctas < 6) {
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
        "Has obtenido " + correctas + " puntos de 10 posibles";
    }
  }, 2000);
}

function desintegrar() {
  imagen.remove();
}

function moverImg() {
  var contenedor = document.getElementById("contenedor");

  let dest = imagen.getAttribute("data-nombre");

  var destino = document.getElementById(dest);

  var destinoTop = destino.offsetTop;
  var destinoLeft = destino.offsetLeft;

  // Mover la imagen con transición al hacer clic en el div destino

  // Calcular las diferencias de posición
  var diferenciaTop = destinoTop - contenedor.offsetTop;
  var diferenciaLeft = destinoLeft - contenedor.offsetLeft;

  // Aplicar la nueva posición y activar la transición
  imagen.style.top = diferenciaTop + "px";
  imagen.style.left = diferenciaLeft + "px";

  imagen.style.width = destino.offsetWidth + "px";
  imagen.style.height = destino.offsetHeight + "px";
}

function obtenerIndiceAleatorio() {
  let indice = Math.floor(Math.random() * elementos.length);
  console.log(indice);

  while (elementosMostrados.includes(indice)) {
    indice = Math.floor(Math.random() * elementos.length);
  }
  elementosMostrados.push(indice);

  return elementos[indice];
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
            "Bienvenida",
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
