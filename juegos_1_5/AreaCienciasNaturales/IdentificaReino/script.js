//Initial References
let draggableObjects;
let dropPoints;
const data_reino = ['Animal','Vegetal','Fungi','Monera','Protista'];

let deviceType = "";

function randomValueGenerator (integrantes) {
  return integrantes.sort(function() {return Math.random() - 0.5});
};

let reino = 0;
var integrantes_reino = 0;
startGame = async () => {
  if(reino <= 4){
    
    cambiar_fondo();

    document.getElementById("tipo_reino").innerHTML = data_reino[reino];

    // Define the path of the folder to delete files from
    var folder = ['img/Animal/', 'img/Vegetal/', 'img/Fungi/', 'img/Monera/', 'img/Protista/']


    var integrantes = [];
    for (let index = 0; index < folder.length; index++) {
      for (let index2 = 1; index2 <= 15; index2++) {
        integrantes.push({
          ruta: folder[index] + index2+".png",
          tipo: data_reino[index]
        }); 
      }
    }
     
    while(integrantes_reino <= 1){
      integrantes_reino = 0;
      var array_integrantes = randomValueGenerator(integrantes);
      let div = "";
      for (let index = 0; index < 6; index++) {
        const element = array_integrantes[index];
        if(element.tipo == data_reino[reino]){
          integrantes_reino++;
        }
        div += "<div class='col-4'><div onclick='seleccionar(\""+element.tipo+"\",this)' class='imagen'><img class='imagen2'  src='"+element.ruta+"' alt=''></div></div>";
      }
      document.getElementById("integrantes").innerHTML = "";
      document.getElementById("integrantes").innerHTML = div;
    }
  }else{
    setTimeout(()=>{
      $('#final').fadeToggle(1000);
      document.getElementById("final").style.backgroundImage = "url(../../images/ciencia/victoria.gif)";
    
      document.getElementById("texto_final").innerText = "Felicidades, Lo has logrado.";
      document.getElementById("jugarnuevo").style.display = "flex";
  
      var audio = new Audio('../../sounds/victory.mp3');
      audio.play();
    }, 1000)
  }
}

function cambiar_fondo(){
  document.body.removeAttribute('class');
  let audio = "";
  switch (reino) {
    case 0:
      audio  = new Audio('../../sounds/reino_animal.mp3');
	    audio.play(); 
      document.body.classList.add("body_animal");
    break;
    case 1:
      audio = new Audio('../../sounds/reino_vegetal.mp3');
	    audio.play(); 
      document.body.classList.add("body_vegetal");

    break;
    case 2:
      audio = new Audio('../../sounds/reino_fungi.mp3');
	    audio.play(); 
      document.body.classList.add("body_fungi");
    break;
    case 3:
      audio = new Audio('../../sounds/reino_monera.mp3');
      audio.play(); 
      document.body.classList.add("body_monera");
    break;
    case 4:
      audio = new Audio('../../sounds/reino_protista.mp3');
	    audio.play(); 
      document.body.classList.add("body_protista");
    break;
    default:
    break;
  }
}

startGame();

let correctos = 0;
let intentos = 0;
function  seleccionar(tipo, elemento){
  intentos++;

  if(tipo == data_reino[reino]){
    elemento.classList.add("correcto");
    correctos++;
    var audio = new Audio('../../sounds/ok.mp3');
    audio.play();
  }else{
    elemento.classList.add("incorrecto");
    var audio = new Audio('../../sounds/over.mp3');
    audio.play(); 
  }

  if(correctos == integrantes_reino){
    $('#principal').fadeToggle(500);
    setTimeout(()=>{
      $('#final').fadeToggle(1000);
    }, 500)
    
    document.getElementById("final").style.backgroundImage = "url(../../images/ciencia/victoria.gif)";
    
    document.getElementById("texto_final").innerText = "Felicidades, lo has logrado en "+intentos+" intentos.";
    document.getElementById("jugarnuevo").style.display = "none";

    var audio = new Audio('../../sounds/victory.mp3');
    audio.play();

    setTimeout(()=>{
      reino++;
      correctos = 0;
      intentos = 0;
      integrantes_reino = 0;
      startGame();
      $('#principal').fadeToggle(500);
      $('#final').fadeToggle(1000);
    }, 4000)
  }
}

mostrado = 0;
function pista(){
  let pistas = ['Es un conjunto de seres vivos que comparten características relevantes que los distingue de otros.','Está formado por todas las plantas que habitan nuestro planeta.','Reino de los hongos, que contempla a las levaduras, los mohos y todas las especies de setas.','Seres unicelulares formados por células procariotas, llamadas así por que no tienen núcleo.','Organismos eucariotas unicelulares y algas pluricelulares.']
 
  if(mostrado == 0){
    document.getElementById("contenedor").classList.remove("col-12");
    document.getElementById("contenedor").classList.add("col-9");
    
    setTimeout(()=>{
      $('#container_pista').fadeIn(600);
      document.getElementById("container_pista").style.display = "flex";
      mostrado = 1;
    }, 700);

    setTimeout(()=>{
      maquina("pista_p",pistas[reino],50,1);
      var audio = new Audio('../../sounds/pista_reino_'+data_reino[reino].toLocaleLowerCase()+'.mp3');
      audio.play(); 
    }, 700);

  }else{
  
    //document.getElementById("container_pista").style.display = "block";
    $('#container_pista').fadeToggle(600)
    mostrado = 0;
    
    setTimeout(()=>{
      $("#pista_p").html('');
      document.getElementById("contenedor").classList.remove("col-9");
      document.getElementById("contenedor").classList.add("col-12");
    }, 700);
  }
}

function maquina(contenedor,texto,intervalo,n){
  var i=0,
   timer = setInterval(function() {
   if ( i<texto.length ) {
    $("#"+contenedor).html(texto.substr(0,i++) + "_");
   } else {
    clearInterval(timer);
    $("#"+contenedor).html(texto);
    if ( --n!=0 ) {
     setTimeout(function() {
      maquina(contenedor,texto,intervalo,n);
     },3600);
    }
   }
  },intervalo);
 };


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
          divAnimado.style.backgroundImage = "url(../../images/ciencia/normal2.gif)"
          maquina2("bienvenida",'Hola, soy Genio. <br> En este juego debes seleccionar las imagenes que hacen parte de cada uno de los reinos que se te dicen en el enunciado.',50,1);
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
  if(!cerrardo){
    let audio2 = new Audio('../../sounds/fondo.mp3');
    audio2.play(); 
    audio2.volume = 0.2;

    audio  = new Audio('../../sounds/reino_animal.mp3');
    audio.play(); 

    cerrardo = true;
    const divAnimado2 = document.querySelector('.nube');
    divAnimado2.style.animationName = 'moverabajo';
    const divAnimado = document.querySelector('.overlay');
    divAnimado.style.backgroundImage = "url(../../images/ciencia/normal1.gif)";
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
