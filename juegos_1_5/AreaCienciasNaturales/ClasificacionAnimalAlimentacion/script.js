let score = 0;
let cantidad = 0;
let cuerpoSel;
let parteMostrada = [];

let animales  = [
  // Carnívoros
  { nombre: "León", imagen: "leon.png", clasificacion: "Carnivoro" },
  { nombre: "Tigre", imagen: "tigre.png", clasificacion: "Carnivoro" },
  { nombre: "Lobo", imagen: "lobo.png", clasificacion: "Carnivoro" },
  { nombre: "Águila", imagen: "aguila.png", clasificacion: "Carnivoro" },
  {
    nombre: "Cocodrilo",
    imagen: "cocodrilo.png",
    clasificacion: "Carnivoro",
  },
  {
    nombre: "Leopardo",
    imagen: "leopardo.png",
    clasificacion: "Carnivoro",
  },
  { nombre: "Águila", imagen: "aguila.png", clasificacion: "Carnivoro" },
  { nombre: "Tiburón", imagen: "tiburon.png", clasificacion: "Carnivoro" },
  { nombre: "Pantera", imagen: "pantera.png", clasificacion: "Carnivoro" },
  { nombre: "Hiena", imagen: "hiena.png", clasificacion: "Carnivoro" },

  // Herbívoros
  {
    nombre: "Elefante",
    imagen: "elefante.png",
    clasificacion: "Herbivoro",
  },
  { nombre: "Jirafa", imagen: "jirafa.png", clasificacion: "Herbivoro" },
  { nombre: "Cebra", imagen: "cebra.png", clasificacion: "Herbivoro" },
  { nombre: "Koala", imagen: "koala.png", clasificacion: "Herbivoro" },
  { nombre: "Tortuga", imagen: "tortuga.png", clasificacion: "Herbivoro" },
  {
    nombre: "Hipopótamo",
    imagen: "hipopotamo.png",
    clasificacion: "Herbivoro",
  },
  { nombre: "Canguro", imagen: "canguro.png", clasificacion: "Herbivoro" },
  { nombre: "Ciervo", imagen: "ciervo.png", clasificacion: "Herbivoro" },
  { nombre: "Gorila", imagen: "gorila.png", clasificacion: "Herbivoro" },
  {
    nombre: "Rinoceronte",
    imagen: "rinoceronte.png",
    clasificacion: "Herbivoro",
  },

  // Omnívoros
  { nombre: "Oso", imagen: "oso.png", clasificacion: "Omnivoro" },
  { nombre: "Cerdo", imagen: "cerdo.png", clasificacion: "Omnivoro" },
  { nombre: "Mapache", imagen: "mapache.png", clasificacion: "Omnivoro" },
  { nombre: "Panda", imagen: "panda.png", clasificacion: "Omnivoro" },
  { nombre: "Mono", imagen: "mono.png", clasificacion: "Omnivoro" },
  { nombre: "Erizo", imagen: "erizo.png", clasificacion: "Omnivoro" },
  { nombre: "Ardilla", imagen: "ardilla.png", clasificacion: "Omnivoro" },
  { nombre: "Perro", imagen: "perro.png", clasificacion: "Omnivoro" },
  { nombre: "Gallina", imagen: "gallina.png", clasificacion: "Omnivoro" },
];

var clasificacion = ["Carnivoro", "Herbivoro", "Omnivoro"];


let clasif;

 // Seleccionar 5 animales aleatorios de cada grupo
 var animalesCarnivoros = seleccionarAleatoriosUnicos(animales.filter(animal => animal.clasificacion === "Carnivoro"), 5);
 var animalesHerbivoros = seleccionarAleatoriosUnicos(animales.filter(animal => animal.clasificacion === "Herbivoro"), 5);
 var animalesOmnivoros = seleccionarAleatoriosUnicos(animales.filter(animal => animal.clasificacion === "Omnivoro"), 5);

 // Combinar los animales seleccionados en un solo array
 var animalesSeleccionados = [...animalesCarnivoros, ...animalesHerbivoros, ...animalesOmnivoros];



function inicioJuego() {
  crearDivs();

  clasif = obtenerIndiceAleatorio();
  
  document.getElementById("tiCate").innerHTML = "Identifica a los animales "+ clasif;

}

function seleccionarAleatoriosUnicos(array, n) {
  const arrayCopy = [...array];
  const resultados = [];
  for (let i = 0; i < n && arrayCopy.length > 0; i++) {
    const index = Math.floor(Math.random() * arrayCopy.length);
    resultados.push(arrayCopy.splice(index, 1)[0]);
  }
  return resultados;
}


function crearDivs() {
  
  var container = document.getElementById("animalContainer");

  animalesSeleccionados.forEach(function(animal) {
    var div = document.createElement("div");
    div.className = "animal-div";
    div.setAttribute("data-clasif" , animal.clasificacion)
    var img = document.createElement("img");
    img.className = "animal-img";
    img.src = "img/"+animal.imagen;
    img.alt = animal.nombre;

    div.addEventListener("click", function() {
      if(animal.clasificacion == clasif){
        score++;
        this.classList.add("desintegrar");
        setTimeout(() => {
          container.removeChild(this);
        },500)

          if(score == 5){
            setTimeout(() => {
              $("#principal").fadeToggle(1000);
              $("#final").fadeToggle(1000);
              document.getElementById("final").style.backgroundImage =
          "url(../../images/victoria.gif)";
      var audio = new Audio("../../sounds/victory.mp3");
      audio.play();
      document.getElementById("texto_final").innerText =
          "Has logrado identificar a todos los animales "+ clasif;
            },700)
          }
        
      }else{
        this.classList.add("incorrecta");
        setTimeout(() => {
          this.classList.remove("incorrecta");
        },800);

        setTimeout(() => {
          $("#principal").fadeToggle(1000);
          $("#final").fadeToggle(1000);
          var audio = new Audio("../../sounds/game_over.mp3");
          audio.play();
          document.getElementById("final").style.backgroundImage =
              "url(../../images/derrota.gif)";
          document.getElementById("texto_final").innerText =
              "No has logrado obtener ningún punto";
        },1000)
      }
    });
    
    div.appendChild(img);
    container.appendChild(div);
  });
}

function obtenerIndiceAleatorio() {
  let indice = Math.floor(Math.random() * clasificacion.length);
  return clasificacion[indice];
}

function updateTimer() {
  document.getElementById(
    "timer_sec"
  ).innerText = `Tiempo restante: ${timer} s`;
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
            "Hola!, Soy genio, en este juego deberás identificar con que parte de tu cuerpo realizas las acciones mostradas. Tu puedes!!!",
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
