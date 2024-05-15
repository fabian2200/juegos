let animalesMostrados = [];
let palabra = "";
let acento = "";
let correctas = 0;
let inCorrectas = 0;
let TipAnimalSel;
let animalSeleccionado;
let animalIndex;
let audioAnimal;
let audioEnunciado;

const animalesBosque = [
  {
    nombre: "Ardilla",
    imagen: "ardilla.png",
    sonido: "ardilla.mp3",
    clasificacion: "Bosque",
  },
  {
    nombre: "Ciervo",
    imagen: "ciervo.png",
    sonido: "ciervo.mp3",
    clasificacion: "Bosque",
  },
  {
    nombre: "Buho",
    imagen: "buho.png",
    sonido: "buho.mp3",
    clasificacion: "Bosque",
  },
  {
    nombre: "Zorro",
    imagen: "zorro.png",
    sonido: "zorro.mp3",
    clasificacion: "Bosque",
  },
  {
    nombre: "Oso",
    imagen: "oso.png",
    sonido: "oso.mp3",
    clasificacion: "Bosque",
  },
  {
    nombre: "Mapache",
    imagen: "mapache.png",
    sonido: "mapache.mp3",
    clasificacion: "Bosque",
  },
  {
    nombre: "Rana",
    imagen: "rana.png",
    sonido: "rana.mp3",
    clasificacion: "Bosque",
  },
  {
    nombre: "Topo",
    imagen: "topo.png",
    sonido: "topo.mp3",
    clasificacion: "Bosque",
  },
  {
    nombre: "Jabali",
    imagen: "jabali.png",
    sonido: "jabali.mp3",
    clasificacion: "Bosque",
  },
  {
    nombre: "Zorrillo",
    imagen: "zorrillo.png",
    sonido: "zorrillo.mp3",
    clasificacion: "Bosque",
  },
];

const animalesGranja = [
  {
    nombre: "Gallina",
    imagen: "gallina.png",
    sonido: "gallina.mp3",
    clasificacion: "Granja",
  },
  {
    nombre: "Vaca",
    imagen: "vaca.png",
    sonido: "vaca.mp3",
    clasificacion: "Granja",
  },
  {
    nombre: "Cerdo",
    imagen: "cerdo.png",
    sonido: "cerdo.mp3",
    clasificacion: "Granja",
  },
  {
    nombre: "Oveja",
    imagen: "oveja.png",
    sonido: "oveja.mp3",
    clasificacion: "Granja",
  },
  {
    nombre: "Pato",
    imagen: "pato.png",
    sonido: "pato.mp3",
    clasificacion: "Granja",
  },
  {
    nombre: "Gato",
    imagen: "Gato.png",
    sonido: "gato.mp3",
    clasificacion: "Granja",
  },
  {
    nombre: "Perro",
    imagen: "perro.png",
    sonido: "perro.mp3",
    clasificacion: "Granja",
  },
  {
    nombre: "Caballo",
    imagen: "caballo.png",
    sonido: "caballo.mp3",
    clasificacion: "Granja",
  },
  {
    nombre: "Ganso",
    imagen: "ganso.png",
    sonido: "ganso.mp3",
    clasificacion: "Granja",
  },
  {
    nombre: "Burro",
    imagen: "burro.png",
    sonido: "burro.mp3",
    clasificacion: "Granja",
  },
];

const animalesSelva = [
  {
    nombre: "Tigre",
    imagen: "tigre.png",
    sonido: "tigre.mp3",
    clasificacion: "Selva",
  },
  {
    nombre: "Mono",
    imagen: "mono.png",
    sonido: "mono.mp3",
    clasificacion: "Selva",
  },
  {
    nombre: "Loro",
    imagen: "loro.png",
    sonido: "loro.mp3",
    clasificacion: "Selva",
  },
  {
    nombre: "Jaguar",
    imagen: "jaguar.png",
    sonido: "jaguar.mp3",
    clasificacion: "Selva",
  },
  {
    nombre: "Elefante",
    imagen: "elefante.png",
    sonido: "elefante.mp3",
    clasificacion: "Selva",
  },
  {
    nombre: "Serpiente",
    imagen: "serpiente.png",
    sonido: "serpiente.mp3",
    clasificacion: "Selva",
  },
  {
    nombre: "Hipopotamo",
    imagen: "hipopotamo.png",
    sonido: "hipopotamo.mp3",
    clasificacion: "Selva",
  },
  {
    nombre: "Lemur",
    imagen: "lemur.png",
    sonido: "lemur.mp3",
    clasificacion: "Selva",
  },
  {
    nombre: "Gorila",
    imagen: "gorila.png",
    sonido: "gorila.mp3",
    clasificacion: "Selva",
  },
  {
    nombre: "Leon",
    imagen: "Leon.png",
    sonido: "leon.mp3",
    clasificacion: "Selva",
  },
];

function activarPantallaCompleta() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
}

function minimizarPantallaCompleta() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

function cerrarJuego() {
  minimizarPantallaCompleta();
setTimeout(() => {
  history.back();
},200)
}




let clasificacion = ["Selva"];
let clasif;

function obtenerIndiceAleatorio() {
  let indice = Math.floor(Math.random() * clasificacion.length);
  return clasificacion[indice];
}

const playBtn = document.getElementById("play-btn");
playBtn.addEventListener("click", function () {
  playBtn.disabled = true;
  playSound(TipAnimalSel[animalIndex].sonido);
});

function inicioJuego() {
  activarPantallaCompleta();
  clasif = obtenerIndiceAleatorio();

  if (clasif == "Granja") {
    let divGranja = document.getElementById("granja");
    divGranja.style.display = "block";
    TipAnimalSel = animalesGranja;
    document.getElementById("titiJuego").innerHTML =
      "Identifica los sonidos de los animales de la granja.";
  } else if (clasif == "Bosque") {
    let divBosque = document.getElementById("bosque");
    divBosque.style.display = "block";
    TipAnimalSel = animalesBosque;
    document.getElementById("titiJuego").innerHTML =
      "Identifica los sonidos de los animales del bosque";
  } else {
    let divSelva = document.getElementById("selva");
    divSelva.style.display = "block";
    TipAnimalSel = animalesSelva;
    document.getElementById("titiJuego").innerHTML =
      "Identifica los sonidos de los animales de la selva.";
  }

  cargarSonido();
}

function cargarSonido() {

  playBtn.disabled = false;
  if (audioAnimal) {
    audioAnimal.pause();
    audioAnimal.currentTime = 0; // Reiniciar la reproducción al principio
  }
  animalIndex = obtenerIndiceAleatorioAnimales();
  animalSeleccionado = TipAnimalSel[animalIndex].nombre;

  playSound();
}

function playSound() {

  audioAnimal = new Audio("sounds/" + TipAnimalSel[animalIndex].sonido);
  audioAnimal.play();
}

function obtenerIndiceAleatorioAnimales() {
  let indice = Math.floor(Math.random() * TipAnimalSel.length);
  while (animalesMostrados.includes(indice)) {
    indice = Math.floor(Math.random() * TipAnimalSel.length);
  }
  animalesMostrados.push(indice);

  return indice;
}

function verfAnimal(element) {
  let animalSel = element.getAttribute("data-tipo");
console.log(animalSel+ " " + animalSeleccionado) ;
  if (animalSel == animalSeleccionado) {
    element.classList.add("correct-answer");
    correctas++;
  } else {
    element.classList.add("incorrect-answer");
    inCorrectas++;
  }

  setTimeout(() => {
    let pregTotal = correctas + inCorrectas;
    element.classList.remove("correct-answer");
    element.classList.remove("incorrect-answer");
    if (inCorrectas == 3) {
      $("#principal").fadeToggle(1000);
      $("#final").fadeToggle(1000);
      var audio = new Audio("../../sounds/game_over.mp3");
      audio.play();
      document.getElementById("final").style.backgroundImage =
        "url(../../images/derrota.gif)";
      document.getElementById("texto_final").innerText =
        "No has logrado completar el reto. Sigue intentando.";
    } else if (pregTotal == 10) {
      $("#principal").fadeToggle(1000);
      $("#final").fadeToggle(1000);
      document.getElementById("final").style.backgroundImage =
        "url(../../images/victoria.gif)";
      var audio = new Audio("../../sounds/victory.mp3");
      audio.play();
      document.getElementById("texto_final").innerText =
        "Has logrado identificar a todos los animales";
    }else{
        cargarSonido();
    }
  }, 1000);

}

$(document).ready(function () {
  setTimeout(function () {
    audioEnunciado = new Audio("sounds/enunciado.mp3");
    audioEnunciado.playbackRate = 0.8;
    audioEnunciado.play();
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
            "Hola!, Soy genio, En este juego deberás escuchar el sonido del animal, luego debes ubicarlo en la imagen, solo tienes 3 oportunidades para encontralos todos. Tu puedes!!!",
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
    
//   let audio2 = new Audio("../../sounds/fondo.mp3");
//   audio2.play();
//   audio2.volume = 0.1;
  audioEnunciado.pause();
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
