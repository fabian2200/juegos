//Initial References
let draggableObjects;
let dropPoints;


function randomValueGenerator (vector) {
  return vector.sort(function() {return Math.random() - 0.5});
};

var pregunta_actual = 0;

var respuesta_correcta = "";

var colores = [{op1: '#662482', op2: '#39134a'},{op1: '#4494d0', op2: '#3372a1'}, {op1: '#f08218', op2: '#c86b12'}, {op1: '#e83967', op2: '#be3156'}];

var preguntas = [
  {opcion: 'aereo', ruta: "cielo.png"}, 
  {opcion: 'aereo', ruta: "cielo_2.png"}, 
  {opcion: 'aereo', ruta: "cielo_3.png"},
  {opcion: 'terrestre', ruta: "calle.png"}, 
  {opcion: 'terrestre', ruta: "calle_2.png"}, 
  {opcion: 'terrestre', ruta: "calle_3.png"}, 
  {opcion: 'acuatico', ruta: "lago.png"}, 
  {opcion: 'acuatico', ruta: "puerto.png"}, 
  {opcion: 'acuatico', ruta: "rio.png"},
  {opcion: 'ferrocarril', ruta: "via.png"}, 
  {opcion: 'ferrocarril', ruta: "via_2.png"}, 
  {opcion: 'ferrocarril', ruta: "via_3.png"},
];

var medios = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

startGame = async () => {
  
  medios = randomValueGenerator(medios);
  var numero = Math.floor((Math.random() * (15 - 0 + 1)) + 0);

  if(pregunta_actual < 10){

    document.getElementById("pregunta_actual").innerHTML = pregunta_actual+1;
    
    respuesta_correcta = preguntas[pregunta_actual];
    document.getElementById("pregunta").setAttribute("src", "img/"+respuesta_correcta.ruta);

    var opciones = [];

    opciones.push({
      ruta: "img/acuatico/"+medios[numero]+".png",
      tipo: "acuatico"
    });
    opciones.push({
      ruta: "img/terrestre/"+medios[numero]+".png",
      tipo: "terrestre"
    });
    opciones.push({
      ruta: "img/aereo/"+medios[numero]+".png",
      tipo: "aereo"
    });
    opciones.push({
      ruta: "img/ferrocarril/"+medios[numero]+".png",
      tipo: "ferrocarril"
    });
    
    opciones = randomValueGenerator(opciones);
    colores = randomValueGenerator(colores);
    
    let div = "";
    
    for (let index = 0; index < opciones.length; index++) {
      const element = opciones[index];
       div += "<div class='col-6 respuesta'><div onclick='respuesta(\""+element.tipo+"\", this)' class='res' style='background-color: "+colores[index].op1+"; color: white; border: 6px solid "+colores[index].op2+"'><img class='imagen2'  src='"+element.ruta+"' alt=''></div></div>";
    }
  
    document.getElementById("respuestas").innerHTML = "";
    document.getElementById("respuestas").innerHTML = div;
    
  }else{
    $('#principal').fadeToggle(500);
    setTimeout(()=>{
      $('#final').fadeToggle(1000);
    }, 500)
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

  preguntas = randomValueGenerator(preguntas);
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
          maquina2("bienvenida",'Hola, soy Genio. <br> En este juego sobre los medios de transporte, debes seleccionar el medio de trasporte adecuado para cada imagen que se muestre a la izquierda',50,1);
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

    let audio2 = new Audio('../../sounds/enunciado_transporte.mp3');
    audio2.play(); 
    audio2.volume = 0.5;

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