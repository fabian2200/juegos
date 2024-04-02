//Initial References
let draggableObjects;
let dropPoints;


function randomValueGenerator (imagenes) {
  return imagenes.sort(function() {return Math.random() - 0.5});
};

var pregunta_actual = 0;

var elemento_seleccionado = null;
var imagenes = [];
var array_imagenes  = [];

startGame = async () => {
  if(pregunta_actual < 10){

    document.getElementById("pregunta_actual").innerHTML = pregunta_actual+1;
    
    
    let div = "";
    
    const element = array_imagenes[pregunta_actual];
    elemento_seleccionado = element;

    div = "<img class='imagen2'  src='"+element.ruta+"' alt=''>";
    
    document.getElementById("imagen_pregunta").innerHTML = "";
    document.getElementById("imagen_pregunta").innerHTML = div;
    
  }else{

    $('#principal').fadeToggle(1000);
    $('#final').fadeToggle(1000);
    
    if(correctas < 6 ){
      document.getElementById("final").style.backgroundImage = "url(../../images/ciencia/incorrecto.gif)";
    }else{
      document.getElementById("final").style.backgroundImage = "url(../../images/ciencia/victoria.gif)";
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

function  respuesta(tipo, elemento){
  if(tipo == elemento_seleccionado.tipo){
    elemento.classList.add("correcto");
    var audio = new Audio('../../sounds/ok.mp3');
    audio.play();
    correctas++;
  }else{
    elemento.classList.add("incorrecto");
    var audio = new Audio('../../sounds/over.mp3');
    audio.play(); 
  }

  setTimeout(()=>{
    pregunta_actual++;
    elemento.classList.remove("correcto");
    elemento.classList.remove("incorrecto");
    startGame();
  }, 2000)
  
}


function pista(){
  let pistas = ['Color Azul: estado sólido. <br>Color Naranja: estado líquido. <br>Color Morado: estado Gaseoso. <br>']
  document.getElementById("bienvenida").innerText = "";
  document.getElementById("nube").style.display = "none";
  setTimeout(()=>{
    $('#principal').fadeToggle(1000);
    $('#fondo_blanco').fadeToggle(3000);
    setTimeout(()=>{
      const divAnimado = document.querySelector('.overlay');
      divAnimado.style.animationName = 'moverDerecha';
      divAnimado.style.display = 'block';
      setTimeout(()=>{
        const divAnimado2 = document.querySelector('.nube');
        divAnimado2.style.display = 'block';
        divAnimado2.style.animationName = 'moverArriba';
        setTimeout(()=>{
          divAnimado.style.backgroundImage = "url(../../images/ciencia/normal2.gif)"
          maquina2("bienvenida",pistas[0],50,1);
          var audio = new Audio('../../sounds/pista_la_materia.mp3');
          audio.play(); 
        }, 3000)
      }, 2000)
    }, 500)
  }, 200)
}



$( document ).ready(function() {

  var folder = ['img/solido/', 'img/liquido/', 'img/gaseoso/']

  imagenes = [];
  for (let index = 0; index < folder.length; index++) {
    let n = 0;
    if(index == 0 || index == 1){
      n = 15
    }else{
      n = 10;
    }
    for (let index2 = 1; index2 <= n; index2++) {
      imagenes.push({
        ruta: folder[index] + index2+".png",
        tipo: index == 0 ? "solido" : index == 1 ? "liquido" : "gaseoso"
      }); 
    }
  }

  array_imagenes = randomValueGenerator(imagenes);
  
  setTimeout(()=>{
    startGame();

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
            divAnimado.style.backgroundImage = "url(../../images/ciencia/normal2.gif)"
            maquina2("bienvenida",'Hola, soy Genio. <br> En este juego debes seleccionar en que estado fisico se encuentra el objeto de la imagen que se muestra. <br> ¡Buena suerte!',50,1);
          }, 3000)
        }, 2000)
      })
    }, 200)
  }, 500)

});

function maquina2(contenedor,texto,intervalo,n){
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
    if(!cerrardo){
      document.querySelector('#btnomitir').style.display = "none";
      setTimeout(()=>{
        cerrar_anuncio();
      }, 3000)
    }
    // Auto invocamos la rutina n veces (0 para infinito)
    if ( --n!=0 ) {
     setTimeout(function() {
      maquina2(contenedor,texto,intervalo,n);
     },3600);
    }
   }
  },intervalo);
}

let cerrardo = false;
function cerrar_anuncio(){

  var audio = new Audio('../../sounds/fondo.mp3');
  audio.play(); 
  audio.volume = 0.2;

  var audio_2 = new Audio('../../sounds/la_materia.mp3');
  audio_2.play(); 
  
  cerrardo = true;
  const divAnimado2 = document.querySelector('.nube');
  divAnimado2.style.animationName = 'moverabajo';
  const divAnimado = document.querySelector('.overlay');
  divAnimado.style.backgroundImage = "url(../../images/ciencia/normal1.gif)";
  $('#fondo_blanco').fadeToggle(3000);
  setTimeout(function() { 
    divAnimado.style.animationName = 'moverIzquierda';
    divAnimado.style.animationDirection = 'normal';
    setTimeout(()=>{
      $('#principal').fadeToggle(1000);
    }, 2000)
  }, 2000);
}
