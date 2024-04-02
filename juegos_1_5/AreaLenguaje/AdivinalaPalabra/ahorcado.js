// ### VARIABLES ###

// Array de palabras
let palabras_narracion = [
    [
      "narración",
      "Es la manera de contar una secuencia o una serie de acciones o hechos, reales o imaginarios, que les suceden a unos personajes."
    ],
    [
      "elementos",
      "Cualquier tipo de narración debe estar formada por estos."
    ],
    [
      "narrador",
      "Es la persona quien escribe y cuenta la historia."
    ],
    [
      "personajes",
      "Pueden representar a personas, animales o cosas."
    ],
    [
      "protagonista",
      "Tipo de personaje principal cuya función integra la organización de los acontecimientos."
    ],
    [
      "antagonista",
      "Tipo de personaje principal que se encarga de oponerse a las acciones del protagonista."
    ],
    [
      "acciones",
      "Es todo aquello que se cuenta en una historia narrativa."
    ],
    [
      "espacio",
      "Es el lugar donde se desarrollan los eventos de una historia."
    ],
    [
      "tiempo",
      "Puede referirse tanto a la época o momento en que se sitúa la narración como a la cantidad de tiempo que toma el relato."
    ],
    [
      "trama",
      "Es un orden cronológico de todas las anécdotas que componen la historia."
    ],
    [
      "suspense",
      "Forma en la que se cuenta una historia para generar tensión o intriga en el lector."
    ],
    [
      "comedia",
      "Género de narración que tiene como objetivo hacer reír al lector."
    ],
    [
      "drama",
      "Género de narración que tiene como objetivo conmover al lector."
    ],
    [
      "acción",
      "Género de narración que se enfoca en las situaciones de riesgo, aventura y emoción."
    ],
    [
      "fábula",
      "Tipo de narración que tiene como objetivo dar una lección moral al lector."
    ],
    [
      "mito",
      "Tipo de narración que tiene como objetivo explicar el origen del mundo y de las cosas."
    ],
    [
      "leyenda",
      "Tipo de narración que mezcla elementos reales y fantásticos para explicar sucesos extraordinarios."
    ],
    [
      "realismo",
      "Estilo de narración que busca representar la realidad de manera objetiva y detallada."
    ],
    [
      "fantasía",
      "Estilo de narración que se enfoca en los elementos imaginarios, sobrenaturales o de ficción."
    ],
    [
      "Ficción",
      "Narración con tecnología avanzada y futuro"
    ],
    [
      "Ensayo",
      "Escrito que explica o analiza un tema en particular"
    ],
    [
      "Diálogo",
      "Conversación entre dos o más personajes"
    ],
    [
      "inicio",
      "Se muestra al personaje principal en su vida cotidiana antes de que ocurra el evento que cambia todo."
    ],
    [
      "nudo",
      "El protagonista tiene que decidir si arriesga todo para salvar a su amada o la deja en manos del villano"
    ],
    [
      "desenlace",
      "Es el final de una historia, donde se resuelve el conflicto y se cierran todas las tramas"
    ]
]

let palabras_verbo = [
  [
    "CANTAR",
    "Hacer música con la voz."
  ],
  [
    "BAILAR",
    "Mover el cuerpo al ritmo de la música."
  ],
  [
    "CORRER",
    "Moverse rápidamente con los pies."
  ],
  [
    "ESCRIBIR",
    "Plasmar ideas en papel con lápiz o bolígrafo."
  ],
  [
    "LEER",
    "Interpretar el significado de palabras escritas."
  ],
  [
    "NADAR",
    "Moverse en el agua usando brazos y piernas."
  ],
  [
    "JUGAR",
    "Divertirse con una actividad lúdica."
  ],
  [
    "ESTUDIAR",
    "Aprender sobre un tema para mejorar el conocimiento."
  ],
  [
    "APRENDER",
    "Obtener conocimiento o habilidad sobre algo nuevo."
  ],
  [
    "COMER",
    "Ingerir alimentos por la boca."
  ],
  [
    "PINTAR",
    "Crear imágenes con colores y un pincel."
  ],
  [
    "DIBUJAR",
    "Representar gráficamente un objeto, persona o cosa."
  ],
  [
    "COCINAR",
    "Preparar alimentos para ser consumidos."
  ],
  [
    "CUIDAR",
    "Atender y proteger a alguien o algo."
  ],
  [
    "AYUDAR",
    "Colaborar o asistir a alguien en una tarea o problema."
  ],
  [
    "CANTAR",
    "Hacer música con la voz."
  ],
  [
    "BAILAR",
    "Mover el cuerpo al ritmo de la música."
  ],
  [
    "IMAGINAR",
    "Crear imágenes mentales de algo que no está presente."
  ],
  [
    "CONSTRUIR",
    "Crear algo a partir de sus partes."
  ],
  [
    "DISFRUTAR",
    "Sentir placer o felicidad haciendo algo."
  ]
]

let palabras_medios = [
  [
    "RADIO",
    "Transmite música, noticias y programas a través de ondas sonoras."
  ],
  [
    "TELEVISIÓN",
    "Muestra imágenes y sonidos a través de ondas electromagnéticas."
  ],
  [
    "INTERNET",
    "Permite acceder a información y comunicarse a través de la red."
  ],
  [
    "TELÉFONO",
    "Permite hablar con alguien a distancia a través de señales eléctricas."
  ],
  [
    "CORREO",
    "Sistema de envío y recepción de mensajes escritos y paquetes."
  ],
  [
    "PERIÓDICO",
    "Publicación impresa que contiene noticias y artículos de opinión."
  ],
  [
    "REVISTA",
    "Publicación impresa que contiene artículos sobre temas específicos."
  ],
  [
    "CARTA",
    "Mensaje escrito y enviado a través del correo."
  ],
  [
    "MENSAJE",
    "Información enviada de una persona a otra a través de un medio de comunicación."
  ],
  [
    "COMUNICAR",
    "Transmitir información o ideas a alguien."
  ],
  [
    "MICRÓFONO",
    "Dispositivo que convierte el sonido en señales eléctricas."
  ],
  [
    "CÁMARA",
    "Dispositivo que capta imágenes y las almacena o transmite."
  ],
  [
    "ALTAVOZ",
    "Dispositivo que convierte señales eléctricas en sonido audible."
  ],
  [
    "BOTÓN",
    "Dispositivo que se presiona para hacer una acción, como colgar un teléfono."
  ],
  [
    "SONIDO",
    "Vibración que se propaga a través del aire y puede ser percibida por el oído."
  ],
  [
    "IMAGEN",
    "Representación visual de algo."
  ],
  [
    "VIDEOLLAMADA",
    "Conversación a través de video y audio en tiempo real."
  ],
  [
    "REDES SOCIALES",
    "Plataformas en línea para compartir información y conectarse con otras personas."
  ],
  [
    "BLOG",
    "Sitio web o plataforma en línea donde se publican artículos o contenido."
  ],
  [
    "PODCAST",
    "Programa de radio o audio en línea que se puede descargar y escuchar en cualquier momento."
  ]
]

var palabras = [];
// Palabra a averiguar
var palabra = "";
// Nº aleatorio
var rand;
// Palabra oculta
var oculta = [];
// Elemento html de la palabra
var hueco = document.getElementById("palabra");
// Contador de intentos
var cont = 6;
// Botones de letras
var buttons = document.getElementsByClassName('letra');
// Boton de reset
var btnInicio = document.getElementById("reset");

const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U', 'Ü': 'U'};

var numero_palabra = 1;

// ### FUNCIONES ###

// Escoger palabra al azar
function generaPalabra() {
  rand = parseInt((Math.random() * 19).toFixed(0));

  palabra = palabras[rand][0].toUpperCase();
  palabra = palabra.split('').map( letra => acentos[letra] || letra).join('').toString();
  console.log(palabra);
}

// Funcion para pintar los guiones de la palabra
function pintarGuiones(num) {
  oculta = [];
  hueco.innerText = ""
  for (var i = 0; i < num; i++) {
    oculta[i] = "_";
  }
  hueco.innerText = oculta.join("");
}

//Generar abecedario
function generaABC (a,z) {
  document.getElementById("abcdario").innerHTML = "";
  var i = a.charCodeAt(0), j = z.charCodeAt(0);
  var letra = "";
  for( ; i<=j; i++) {
    letra = String.fromCharCode(i).toUpperCase();
    document.getElementById("abcdario").innerHTML += "<button value='" + letra + "' onclick='intento(\"" + letra + "\")' class='letra' id='"+letra+"'>" + letra + "</button>";
    if(i==110) {
      document.getElementById("abcdario").innerHTML += "<button value='Ñ' onclick='intento(\"Ñ\")' class='letra' id='"+letra+"'>Ñ</button>";
    }
  }
}

// Chequear intento
function intento(letra) {
  document.getElementById(letra).disabled = true;
  if(palabra.indexOf(letra) != -1) {
    for(var i=0; i<palabra.length; i++) {
      if(palabra[i]==letra) oculta[i] = letra;
    }
    hueco.innerHTML = oculta.join("");
    document.getElementById("acierto").innerHTML = "Bien!";
    document.getElementById("acierto").className += "acierto verde";
  }else{
    cont--;
    document.getElementById("intentos").innerHTML = cont;
    document.getElementById("acierto").innerHTML = "Fallo!";
    document.getElementById("acierto").className += "acierto rojo";

    for (let index = 0; index < 7; index++) {
      document.getElementById("image"+index).style.display = "none";
    }

    for (let index = 0; index < 7; index++) {
      if(index == cont){
        document.getElementById("image"+index).style.display = "block";
      }
    }
  }
  compruebaFin();
  setTimeout(function () { 
    document.getElementById("acierto").className = ""; 
  }, 800);
}

// Obtener pista
function pista() {
  document.getElementById("pista_palabra").innerHTML = "<strong style='color: red'>Pista: </strong>"+palabras[rand][1]+"";
}

// Compruba si ha finalizado
function compruebaFin() {
  if( oculta.indexOf("_") == -1 ) {
    mensaje_final(1);
    document.getElementById("palabra").className += " encuadre";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    document.getElementById("reset").innerHTML = "Empezar";
    btnInicio.onclick = function() { location.reload() };
  }else if( cont == 0 ) {
    mensaje_final(0);
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    document.getElementById("reset").innerHTML = "Empezar";
    btnInicio.onclick = function () { location.reload() };
  }
}

let palabras_adivinadas = 0;
function mensaje_final(tipo){
  if(tipo == 1){
    Swal.fire({
      position: "center",
      imageUrl: "../../images/correcto.gif",
      imageWidth: 250,
      imageHeight: 250,
      title: "Correcto!",
      text:'Has adivinado la palabra',
      showConfirmButton: false,
      timer: 2500,
    });
    palabras_adivinadas++;
    setTimeout(()=>{
      document.getElementById("palabra").classList.remove("encuadre");
      inicio();
    }, 1500)
  }else{
    Swal.fire({
      position: "center",
      imageUrl: "../../images/incorrecto.gif",
      imageWidth: 250,
      imageHeight: 250,
      title: "Incorrecto!",
      text:'¡Sigue intentando!',
      showConfirmButton: false,
      timer: 2500,
    });

    setTimeout(()=>{
      document.getElementById("palabra").classList.remove("encuadre");
      inicio();
    }, 2500)
  }
}

// Restablecer juego
function inicio() {
  if(numero_palabra <= 10){
    generaPalabra();
    pintarGuiones(palabra.length);
    generaABC("a","z");
    cont = 6;
    document.getElementById("intentos").innerHTML=cont;

    for (let index = 0; index < 7; index++) {
      if(index == 6){
        document.getElementById("image"+index).style.display = "block";
      }else{
        document.getElementById("image"+index).style.display = "none";
      }
    }
    pista();
    document.getElementById("numero").innerText = "Palabra "+numero_palabra+" de 10"
    numero_palabra++;
  }else{
      $('#principal').fadeToggle(500);
      setTimeout(()=>{
        $('#final').fadeToggle(1000);
      }, 500)
      if(palabras_adivinadas < 6 ){
        document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
      }else{
        document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
      }

      document.getElementById("texto_final").innerText = "Has adivinado "+palabras_adivinadas+" palabras de 10"

      if(palabras_adivinadas >= 6){
        var audio = new Audio('../../sounds/victory.mp3');
        audio.play();
      }else{
        var audio = new Audio('../../sounds/game_over.mp3');
        audio.play();
      }
  }
}

// Iniciar
$(document).ready(function() {
	setTimeout(()=>{
    $('#principal').fadeToggle(1000);
    $('#fondo_blanco').fadeToggle(3000);
    setTimeout(()=>{
      const divAnimado = document.querySelector('.overlay');
      divAnimado.style.animationName = 'moverDerecha';
      divAnimado.style.animationDirection = 'normal';
      divAnimado.style.display = 'block';
      setTimeout(()=>{
        const divAnimado2 = document.querySelector('.nube');
        divAnimado2.style.animationName = 'moverArriba';
        divAnimado2.style.animationDirection = 'normal';
        divAnimado2.style.display = 'block';
        setTimeout(()=>{
          divAnimado.style.backgroundImage = "url(../../images/normal2.gif)"
          maquina2("bienvenida",'Hola, soy Genio. <br> A continuación selecciona una categoria y adivina la palabra siguiendo la pista, recuerda que tendras 6 intentos para intentar adivinarla. <br> ¡Tu Puedes!',50,1);
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
            elegir();
        }, 2000)
    }, 2000);
  }
}

function elegir(){
  
    Swal.fire({
    title: 'Selecciona una Categoria...',
    icon: 'info',
    html: '<div style="padding-top: 20px"  class="row">'+
      '<div class="col-4"><div><img onclick="seleccionar(this, 1)" class="imagen_Vocal" src="img/narracion.png" alt=""></div></div>'+
      '<div class="col-4"><div><img onclick="seleccionar(this, 2)" class="imagen_Vocal" src="img/verbos.png" alt=""></div></div>'+
      '<div class="col-4"><div><img onclick="seleccionar(this, 3)" class="imagen_Vocal" src="img/medios.png" alt=""></div></div>'+
		'</div>',
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: false,
    allowOutsideClick: false,
    focusConfirm: false,
    });
}


function seleccionar(elemento, tipo) {
	elemento.classList.add("seleccionado");
	
  switch (tipo) {
    case 1:
      palabras = palabras_narracion;
    break;
    case 2:
      palabras = palabras_verbo;
    break;
    case 3:
      palabras = palabras_medios;
    break;
    default:
      break;
  }

  palabras = palabras.sort(function() {return Math.random() - 0.5});

  setTimeout(()=>{
    swal.close();
    inicio();
  }, 1000)
}