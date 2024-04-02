//Initial References
let draggableObjects;
let dropPoints;


function randomValueGenerator (imagenes) {
  return imagenes.sort(function() {return Math.random() - 0.5});
};

var pregunta_actual = 0;

var elemento_seleccionado = null;
var respuesta_correcta = "";

var colores = [{op1: '#662482', op2: '#39134a'},{op1: '#4494d0', op2: '#3372a1'}, {op1: '#f08218', op2: '#c86b12'}, {op1: '#e83967', op2: '#be3156'}];
var familia = [{opcion: 'Mamá', ruta: "mama.png"}, {opcion: 'Papá', ruta: "papa.png"}, {opcion: 'Hermano', ruta: "hermano.png"}, {opcion: 'Hermana', ruta: "hermana.png"}, {opcion: 'Bebé', ruta: "bebe.png"}, {opcion: 'Abuelo', ruta: "abuelo.png"}, {opcion: 'Abuela', ruta: "abuela.png"}];
var familia2 = [{opcion: 'Mamá', ruta: "mama.png"}, {opcion: 'Papá', ruta: "papa.png"}, {opcion: 'Hermano', ruta: "hermano.png"}, {opcion: 'Hermana', ruta: "hermana.png"}, {opcion: 'Bebé', ruta: "bebe.png"}, {opcion: 'Abuelo', ruta: "abuelo.png"}, {opcion: 'Abuela', ruta: "abuela.png"}];

startGame = async () => {
  if(pregunta_actual < 7){

    document.getElementById("pregunta_actual").innerHTML = pregunta_actual+1;
  
    var opciones = [];
    
    respuesta_correcta = familia[pregunta_actual];
    
    document.getElementById("pregunta").innerHTML = respuesta_correcta.opcion;

    opciones.push(respuesta_correcta);

    let familia_desordenada = randomValueGenerator(familia2);

    for (let index = 0; index < familia_desordenada.length; index++) {
      if(familia_desordenada[index].opcion != respuesta_correcta.opcion){
        opciones.push(familia_desordenada[index])
      }

      if(opciones.length == 3){
        break;
      }
    }
     
    var opciones = randomValueGenerator(opciones);
    colores = randomValueGenerator(colores);
    
    let div = "";
    let op = ["A", "B", "C"]
    
    for (let index = 0; index < opciones.length; index++) {
      const element = opciones[index];
       div += "<div class='col-4 respuesta'><div onclick='respuesta(\""+element.opcion+"\", this)' class='res' style='background-color: "+colores[index].op1+"; color: white; border: 6px solid #2125295c'>"+op[index]+". <img class='imagen2'  src='img/"+element.ruta+"' alt=''></div></div>";
    }
  

    document.getElementById("respuestas").innerHTML = "";
    document.getElementById("respuestas").innerHTML = div;
    
  }else{
    $('#principal').fadeToggle(500);
      setTimeout(()=>{
        $('#final').fadeToggle(1000);
      }, 500)
    if(correctas < 4 ){
      document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
    }else{
      document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
    }

    document.getElementById("texto_final").innerText = "Has contestado correctamente "+correctas+" preguntas de 7"

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
  if(tipo == respuesta_correcta.opcion){
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
  setTimeout(()=>{
    var audio = new Audio('../../sounds/'+respuesta_correcta.ruta.split('.')[0]+'.mp3');
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

$(document).ready(function() {
  
  familia = randomValueGenerator(familia);

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
          divAnimado.style.backgroundImage = "url(../../images/normal2.gif)"
          maquina2("bienvenida",'Hola, soy Genio. <br> En este juego debes seleccionar la palabra que se relaciona con el miembro de la familia que representa la palabra mostrada.',50,1);
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
    let audio = new Audio('../../sounds/fondo.mp3');
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