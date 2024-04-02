//Initial References

var colores = [{op1: '#662482', op2: '#39134a'},{op1: '#4494d0', op2: '#3372a1'}, {op1: '#f08218', op2: '#c86b12'}, {op1: '#e83967', op2: '#be3156'}];

function randomValueGenerator (imagenes) {
  return imagenes.sort(function() {return Math.random() - 0.5});
};

var pregunta_actual = 0;

var respuesta_correcta = "";

startGame = async () => {
  if(pregunta_actual < 10){

    document.getElementById("pregunta_actual").innerHTML = pregunta_actual+1;
  
    var opciones = [];
    
    let hora = Math.floor(Math.random() * (12 - 1) + 1);
    let minuto = Math.floor(Math.random() * (60 - 0) + 0);

    if(minuto < 10){
      minuto = "0"+minuto;
    }

    respuesta_correcta = hora+" y "+minuto+" minutos";
    
    opciones.push({
      enunciado: respuesta_correcta,
      hora: hora,
      minuto: minuto
    });

    for (let index = 0; index < 3; index++) {
      let hora2 = Math.floor(Math.random() * (12 - 1) + 1);
      let minuto2 = Math.floor(Math.random() * (60 - 0) + 0);
  
      if(minuto2 < 10){
        minuto2 = "0"+minuto2;
      }
  
      opciones.push({
        enunciado: hora2+" y "+minuto2+" minutos",
        hora: hora2,
        minuto: minuto2
      });
    }

    document.getElementById("hora").innerHTML = "<img style='position: absolute; z-index: 2; width: auto; height: 95%;' src='img/hora/"+opciones[0].hora+".png' alt=''>"
    +"<img style='position: absolute; z-index: -1; width: auto;height: 95%;' src='img/minuto/"+opciones[0].minuto+".png' alt=''>";
   
     
    var opciones = randomValueGenerator(opciones);
    
    colores = randomValueGenerator(colores);
    
    let div = "";
    let op = ["A", "B", "C", "D"]
    
    for (let index = 0; index < opciones.length; index++) {
      const element = opciones[index];
       div += "<div class='col-6 respuesta'>"
        +"<div onclick='respuesta(\""+element.enunciado+"\", this)' class='res' style='background-color: "+colores[index].op1+"; color: white; border: 6px solid #2125295c'>"
        +"<p style='color: white; font-weight: bold; font-size: 26px' >"+op[index]+". "+element.enunciado+"</p>"
        +"</div>"
        +"</div>";
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
  if(tipo == respuesta_correcta){
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
          maquina2("bienvenida",'Hola, soy Genio. <br> En este juego selecciona la hora que representa la imagen del reloj, teniendo en cuenta el indicador de la hora y el indicador de los minutos. <br> ¡Tu Puedes!',50,1);
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