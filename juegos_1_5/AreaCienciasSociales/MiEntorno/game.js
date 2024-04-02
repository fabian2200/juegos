// Array con las preguntas y respuestas
const questions = [
  {
    image: "img/entorno/banos.png",
    options: ["Cocina", "Baños", "Cuartos"],
    sounds: ["cocina.mp3","baños.mp3","cuarto.mp3"],
    answer: 1
  },
  {
    image: "img/entorno/bosque.png",
    options: ["Playas", "Hospitales", "Bosques"],
    sounds: ["playas.mp3","hospitales.mp3","bosques.mp3"],
    answer: 2
  },
  {
    image: "img/entorno/cine.png",
    options: ["Cines", "Estación de Buses", "Parques"],
    sounds: ["cines.mp3","estaciondebuses.mp3","parques.mp3"],
    answer: 0
  },
  {
    image: "img/entorno/cocina.png",
    options: ["Iglesias", "Estación de buses", "Cocina"],
    sounds: ["iglesias.mp3","estaciondebuses.mp3","cocina.mp3"],
    answer: 2
  },
  {
    image: "img/entorno/cuarto.png",
    options: ["Cines", "Estación de buses", "Cuarto"],
    sounds: ["cines.mp3","estaciondebuses.mp3","cuarto.mp3"],
    answer: 2
  },
  {
    image: "img/entorno/hospital.png",
    options: ["Rios", "Cuartos", "Hopitales"],
    sounds: ["rios.mp3","cuartos.mp3","hospitales.mp3"],
    answer: 2
  },
  {
    image: "img/entorno/iglesia.png",
    options: ["Parques", "Iglesias", "Cines"],
    sounds: ["parques.mp3","iglesias.mp3","cines.mp3"],
    answer: 1
  },
  {
    image: "img/entorno/montanas.png",
    options: ["Cines", "Montañas", "Hospitales"],
    sounds: ["cines.mp3","montanas.mp3","hospitales.mp3"],
    answer: 1
  },
  {
    image: "img/entorno/oficinas.png",
    options: ["Supermercados", "Oficinas", "Zoológico"],
    sounds: ["supermercado.mp3","oficinas.mp3","zoologico.mp3"],
    answer: 1
  },
  {
    image: "img/entorno/paradabuses.png",
    options: ["Cines", "Estación de buses", "Parques"],
    sounds: ["cines.mp3","estaciondebuses.mp3","parques.mp3"],
    answer: 1
  },
  {
    image: "img/entorno/parque.png",
    options: ["Cines", "Montañas", "Parques"],
    sounds: ["cines.mp3","montanas.mp3","parques.mp3"],
    answer: 2
  },
  {
    image: "img/entorno/playa.png",
    options: ["Playa", "Supermercados", "Iglesias"],
    sounds: ["playas.mp3","supermercado.mp3","iglesias.mp3"],
    answer: 0
  },
  {
    image: "img/entorno/rios.png",
    options: ["Cines", "Estación de buses", "Rios"],
    sounds: ["cines.mp3","estaciondebuses.mp3","rios.mp3"],
    answer: 2
  },
  {
    image: "img/entorno/supermercado.png",
    options: ["Bosques", "Playas", "Supermercados"],
    sounds: ["bosques.mp3","playas.mp3","supermercado.mp3"],
    answer: 2
  },
  {
    image: "img/entorno/zoologico.png",
    options: ["Zoológico", "Baños", "Parques"],
    sounds: ["zoologico.mp3","baños.mp3","Parques.mp3"],
    answer: 0
  }

];

// Variables globales
let currentQuestion = 0;
let npreg = 0;
let score = 0;
let PreguntasMostradas = [];

// Función para mostrar la pregunta actual
function CargaPregunta() {
  const questionContainer = document.getElementById("imgpreg");
  const pregunta = document.getElementById("pregunta");
  const optionsContainer = document.getElementById("div-opciones");

  // Mostrar la imagen del lugar
  const image = document.createElement("img");
  currentQuestion = obtenerIndiceAleatorio(questions);
 

  image.src = questions[currentQuestion].image;
  image.width = "300";
  questionContainer.appendChild(image);

  // Mostrar las opciones de respuesta
  
  for (let i = 0; i < 3; i++) {
    const option = document.createElement("div");
    option.textContent = questions[currentQuestion].options[i];
    option.setAttribute("data-id", questions[currentQuestion].sounds[i] );
    option.addEventListener("click", selectOption);
    option.addEventListener('mouseover',reprodSonido)
    optionsContainer.appendChild(option);

  }
}

// Función para obtener el indice aleatorio
function obtenerIndiceAleatorio(lista) {
  let indice = Math.floor(Math.random() * lista.length);
  while (PreguntasMostradas.includes(indice)) {
    indice = Math.floor(Math.random() * lista.length);
  }
  PreguntasMostradas.push(indice);
  return indice;

}

//reproducir sonido

function reprodSonido(event) {
  const selectedOption = event.target;
 
  const sound = selectedOption.getAttribute("data-id");

  let audio = new Audio("../../sounds/"+sound);
  audio.play();

}

// Función para seleccionar una opción de respuesta
function selectOption(event) {
  const selectedOption = event.target;
  const options = document.getElementById("div-opciones").children;
  const questionContainer = document.getElementById("imgpreg");


  // Deshabilitar los botones de respuesta
  for (let i = 0; i < options.length; i++) {
    options[i].disabled = true;
  }

  // Comprobar si la respuesta es correcta
  const answer = questions[currentQuestion].answer;
  questionContainer.innerHTML = "";

  
  // Mostrar la imagen del lugar
  const image = document.createElement("img");

  image.width = "300";
  

  if (selectedOption.textContent === questions[currentQuestion].options[answer]) {
    score++;
    $("#imgpreg").removeClass("imgpred");
    $("#imgpreg").addClass("imgpredResp");

    image.src = "../../images/correcto.gif";
  } else {
    $("#imgpreg").removeClass("imgpred");
    $("#imgpreg").addClass("imgpredResp");
    image.src = "../../images/incorrecto.gif";
  }
  questionContainer.appendChild(image);

  setTimeout(siguientePregunta, 3000);

}

// Función para mostrar la siguiente pregunta
function siguientePregunta() {

  $("#imgpreg").removeClass("imgpredResp");
    $("#imgpreg").addClass("imgpred");

  // Limpiar la pregunta anterior
  const questionContainer = document.getElementById("imgpreg");
  const optionsContainer = document.getElementById("div-opciones");
  questionContainer.innerHTML = "";
  optionsContainer.innerHTML = "";

  // Mostrar la siguiente pregunta
  npreg++;
  if (npreg < 10) {
    CargaPregunta();
  } else {
   
    $('#principal').fadeToggle(500);
    setTimeout(()=>{
      $('#final').fadeToggle(1000);
    }, 500)
    if (score < 6) {
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
    "Has contestado correctamente "+score+" preguntas de 10";

  }
}

function CargarAudio() {
  
  var audio = new Audio('../../sounds/Enunciado_MiEntorno.mp3');
  audio.play();
  
}

// Event listeners
//document.getElementById("next").addEventListener("click", nextQuestion);

// Mostrar la primera pregunta

//CargarAudio();

$(document).ready(function () {
  CargaPregunta();

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
                      "Hola, soy Genio. <br> En este juego debes identificar el entorno que aparece en la imagen, seleccionando la respuesta correcta.",
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
  if(!cerrardo){
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