//Initial References
let draggableObjects;
let dropPoints;
const data_habitat = ['Acuático','Terrestre','Aereo'];

let deviceType = "";

function randomValueGenerator (animales) {
  return animales.sort(function() {return Math.random() - 0.5});
};

let habitat = 0;
var animales_habitad = 0;
startGame = async () => {
  if(habitat <= 2){
    
    cambiar_fondo();

    document.getElementById("tipo_habitat").innerHTML = data_habitat[habitat];

    // Define the path of the folder to delete files from
    var folder = ['img/acuaticos/', 'img/terrestre/', 'img/aereos/']


    var animales = [];
    for (let index = 0; index < folder.length; index++) {
      for (let index2 = 1; index2 <= 15; index2++) {
        animales.push({
          ruta: folder[index] + index2+".png",
          tipo: index
        }); 
      }
    }
     
    while(animales_habitad <= 1){
      animales_habitad = 0;
      var array_animales = randomValueGenerator(animales);
      let div = "";
      for (let index = 0; index < 6; index++) {
        const element = array_animales[index];
        if(element.tipo == habitat){
          animales_habitad++;
        }
        div += "<div class='col-4'><div onclick='seleccionar("+element.tipo+",this)' class='imagen'><img class='imagen2'  src='"+element.ruta+"' alt=''></div></div>";
      }
      document.getElementById("animales").innerHTML = "";
      document.getElementById("animales").innerHTML = div;
    }
  }else{
    setTimeout(()=>{
      $('#final').fadeToggle(1000);
      document.getElementById("final").style.backgroundImage = "url(../../images/ciencia/victoria.gif)";
      document.getElementById("final").style.backgroundSize = "45%";
      document.getElementById("texto_final").innerText = "El Juego ha Finalizado"
      var audio = new Audio('../../sounds/victory.mp3');
      document.getElementById("terminado").style.display = "flex";
      audio.play();
    }, 2000)
   
  }
}

function cambiar_fondo(){
  document.body.removeAttribute('class');
  let audio = "";
  switch (habitat) {
    case 0:
      document.body.classList.add("body_acuatico");
      audio  = new Audio('../../sounds/habitat_acuatico.mp3');
	    audio.play(); 
    break;
    case 1:
      document.body.classList.add("body_terrestre");
      audio = new Audio('../../sounds/habitat_terrestre.mp3');
	    audio.play(); 
    break;
    case 2:
      audio = new Audio('../../sounds/habitat_aereo.mp3');
	    audio.play(); 
      document.body.classList.add("body_aereo");
    break;
    default:
      break;
  }
}

let correctos = 0;
let intentos = 0;
function  seleccionar(tipo, elemento){
  intentos++;

  if(tipo == habitat){
    elemento.classList.add("correcto");
    elemento.removeAttribute('onclick');
    correctos++;
    var audio = new Audio('../../sounds/ok.mp3');
    audio.play();
  }else{
    elemento.classList.add("incorrecto");
    var audio = new Audio('../../sounds/over.mp3');
    audio.play(); 
  }

  if(correctos == animales_habitad){
    $('#final').fadeToggle(1000);
    document.getElementById("final").style.backgroundImage = "url(../../images/ciencia/victoria.gif)";
    document.getElementById("final").style.backgroundSize = "45%";
    document.getElementById("texto_final").innerText = "Lo has logrado en "+intentos+" intentos";
    document.getElementById("terminado").style.display = "none";
    var audio = new Audio('../../sounds/victory.mp3');
    audio.play();

    setTimeout(()=>{
      $('#final').fadeToggle(1000);
    }, 4000)
    
    setTimeout(()=>{
      habitat++;
      correctos = 0;
      intentos = 0;
      animales_habitad = 0;
      startGame();
    }, 4000)
  }
}

function pista(){
  let pistas = ['Son los animales que viven en el agua durante toda o la mayor parte de su vida.','Son animales que viven predominantemente o en su totalidad en la tierra.','Son animales que pueden volar o desplazarse por el aire por sus propios medios valiéndose de diferentes adaptaciones corporales.']
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
          maquina2("bienvenida",pistas[habitat],50,1);
          var audio = new Audio('../../sounds/pista_'+habitat+'.mp3');
          audio.play(); 
        }, 3000)
      }, 2000)
    }, 500)
  }, 200)
}

$(document).ready(function() {
	
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
          maquina2("bienvenida",'Hola, soy Genio. <br> En este juego debes seleccionar los animales que hacen parte de cada una de los diferentes tipos de habitat, tales como (Acuaticos, Aereos, Terrestres)',50,1);
        }, 3000)
      }, 2000)
    })
  }, 200)
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

  let audio2 = new Audio("../../sounds/fondo.mp3");
  audio2.play();
  audio2.volume = 0.2;

  document.body.classList.add("body_acuatico");
  var audio  = new Audio('../../sounds/habitat_acuatico.mp3');
  audio.play(); 
  
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