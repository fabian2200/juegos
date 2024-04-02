//Initial References
let draggableObjects;
let dropPoints;


function randomValueGenerator (vector) {
  return vector.sort(function() {return Math.random() - 0.5});
};

var pregunta_actual = 0;

var elemento_seleccionado = null;
var preguntas = [];
var array_preguntas  = [];

startGame = async () => {
  if(pregunta_actual < 10){

    document.getElementById("pregunta_actual").innerHTML = pregunta_actual+1;
    
    let div = "";
    
    const element = array_preguntas[pregunta_actual];
    document.getElementById("pregunta_ingles").innerHTML = element.pregunta;
    elemento_seleccionado = element;
  
  }else{
    
    $('#principal').fadeToggle(1000);
    $('#final').fadeToggle(1000);
    
    if(correctas < 6 ){
      document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
    }else{
      document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
    }

    document.getElementById("texto_final").innerText = "Has contestado correctamente "+correctas+" preguntas de 10"

    if(correctas >= 6){
      var audio = new Audio('../../sounds/victory.mp3');
      audio.play();
    }else{
      var audio = new Audio('../../sounds/game_over.mp3');
      audio.play();
    }
  }
}

let correctas = 0;

function  respuesta(tipo){
  document.getElementById("respuesta_usuario").value = tipo;
  if(tipo == elemento_seleccionado.respuesta){
    document.getElementById("respuesta_usuario").classList.add("correcto");
    var audio = new Audio('../../sounds/ok.mp3');
    audio.play();
    correctas++;
  }else{
    document.getElementById("respuesta_usuario").classList.add("incorrecto");
    var audio = new Audio('../../sounds/over.mp3');
    audio.play(); 
  }

  setTimeout(()=>{
    pregunta_actual++;
    document.getElementById("respuesta_usuario").classList.remove("correcto");
    document.getElementById("respuesta_usuario").classList.remove("incorrecto");
    startGame();
  }, 2000)
  
}


$( document ).ready(function() {
  var base_preguntas = readText("preguntas.json");
  interprete_bp = JSON.parse(base_preguntas);
  interprete_bp = randomValueGenerator(interprete_bp);

  for (let index = 0; index < interprete_bp.length; index++) {
    let frase = interprete_bp[index];
    frase.pregunta = frase.pregunta.replace("___", " <input type='text' id='respuesta_usuario' placeholder='??????' data-id='"+frase.respuesta+"' class='pregunta_opcion'> ");
  }

  array_preguntas = randomValueGenerator(interprete_bp);
  
  setTimeout(()=>{
    startGame();
    setTimeout(()=>{
      $('#principal').fadeToggle(1000);
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
            maquina2("bienvenida",'Hola, soy Genio. <br> Esta prueba de WH-Question verifica su comprensión de las 6 palabras de preguntas WH, que incluyen quién, qué, dónde, cuándo, por qué y cómo. <br> Tienes que decidir cuándo usar cada palabra.',50,1);
          }, 3000)
        }, 2000)
      })
    }, 200)
  }, 500)
});

function readText(ruta_local) {
  var texto = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", ruta_local, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    texto = xmlhttp.responseText;
  }
  return texto;
}

function pista(){
  Swal.fire({
    title: '<strong>WH-Questions</strong>',
    icon: 'info',
    html: '<p id="pista" style="text-align: left"></p>',
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText: 'Ok',
  });

  setTimeout(()=>{
    maquina("pista",'Las "wh-questions" (preguntas con "wh") son un tipo de preguntas en inglés que comienzan con las palabras <ul> <li>"what" (qué) </li><li>"where" (dónde)</li> <li>"when" (cuándo)</li> <li>"why" (por qué)</li><li> "who" (quién)</li> <li>"how" (cómo)</li></ul> Estas preguntas son utilizadas para obtener información específica sobre un tema o situación.',36,1);
    audio.play(); 
  }, 100);

}

function maquina(contenedor,texto,intervalo,n){
  var i=0,
   // Creamos el timer
   timer = setInterval(function() {
   if ( i<texto.length ) {
    // Si NO hemos llegado al final del texto..
    // Vamos añadiendo letra por letra y la _ al final.
    $("#"+contenedor).html(texto.substr(0,i++) + "_");
   } else {
    // En caso contrario..
    // Salimos del Timer y quitamos la barra baja (_)
    clearInterval(timer);
    $("#"+contenedor).html(texto);
    // Auto invocamos la rutina n veces (0 para infinito)
    if ( --n!=0 ) {
     setTimeout(function() {
      maquina(contenedor,texto,intervalo,n);
     },3600);
    }
   }
  },intervalo);
 };

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
    var audio = new Audio('../../sounds/fondo.mp3');
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

