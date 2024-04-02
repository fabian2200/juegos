function randomValueGenerator (vector) {
  return vector.sort(function() {return Math.random() - 0.5});
};

var pregunta_actual = 0;
var respuesta_correcta = "";
var colores = [{op1: '#662482', op2: '#39134a'},{op1: '#4494d0', op2: '#3372a1'}, {op1: '#f08218', op2: '#c86b12'}, {op1: '#e83967', op2: '#be3156'}];
var categoria = "";
var preguntas = [];

var cuerpo_array = [
  {
    pregunta: "Eyes",
    imagen: "img/part/eyes.png"
  },
  {
    pregunta: "Nose",
    imagen: "img/part/nose.png"
  },
  {
    pregunta: "Mouth",
    imagen: "img/part/mouth.png"
  },
  {
    pregunta: "Ear",
    imagen: "img/part/ear.png"
  },
  {
    pregunta: "Face",
    imagen: "img/part/face.png"
  },
  {
    pregunta: "Hand",
    imagen: "img/part/hand.png"
  },
  {
    pregunta: "Fingers",
    imagen: "img/part/fingers.png"
  },
  {
    pregunta: "Arm",
    imagen: "img/part/arm.png"
  },
  {
    pregunta: "Feets",
    imagen: "img/part/feets.png"
  },
  {
    pregunta: "Leg",
    imagen: "img/part/leg.png"
  },
];
var numero_array = [
  {
    pregunta: "One",
    imagen: "img/numbers/one.png"
  },
  {
    pregunta: "Two",
    imagen: "img/numbers/two.png"
  },
  {
    pregunta: "Three",
    imagen: "img/numbers/three.png"
  },
  {
    pregunta: "Four",
    imagen: "img/numbers/four.png"
  },
  {
    pregunta: "Five",
    imagen: "img/numbers/five.png"
  },
  {
    pregunta: "Six",
    imagen: "img/numbers/six.png"
  },
  {
    pregunta: "Seven",
    imagen: "img/numbers/seven.png"
  },
  {
    pregunta: "Eight",
    imagen: "img/numbers/eight.png"
  },
  {
    pregunta: "Nine",
    imagen: "img/numbers/nine.png"
  },
  {
    pregunta: "Ten",
    imagen: "img/numbers/ten.png"
  },
];
var color_array = [
  {
    pregunta: "White",
    imagen: "img/colors/white.png"
  },
  {
    pregunta: "Black",
    imagen: "img/colors/black.png"
  },
  {
    pregunta: "Gray",
    imagen: "img/colors/gray.png"
  },
  {
    pregunta: "Red",
    imagen: "img/colors/red.png"
  },
  {
    pregunta: "Blue",
    imagen: "img/colors/blue.png"
  },
  {
    pregunta: "Yellow",
    imagen: "img/colors/yellow.png"
  },
  {
    pregunta: "Green",
    imagen: "img/colors/green.png"
  },
  {
    pregunta: "Orange",
    imagen: "img/colors/orange.png"
  },
  {
    pregunta: "Brown",
    imagen: "img/colors/brown.png"
  },
  {
    pregunta: "Pink",
    imagen: "img/colors/pink.png"
  },
  {
    pregunta: "Purple",
    imagen: "img/colors/purple.png"
  },
];

startGame = async () => {
  if(pregunta_actual < preguntas.length){

    timer = 0;
    if(pregunta_actual == 0){
      timer = 5500;
    }

    setTimeout(()=>{
      pista();
    }, timer)

    respuesta_correcta = preguntas[pregunta_actual];
 
    let opciones = [];
    opciones.push(respuesta_correcta);

    for (let index = 0; index < preguntas.length; index++) {
      const element = preguntas[index];
      let encontrado = false;
      for (let index2 = 0; index2 < opciones.length; index2++) {
        const element2 = opciones[index2];
        if(element.pregunta == element2.pregunta){
          encontrado = true;
        }
      }

      if(!encontrado){
        opciones.push(element);
      }
      
      if(opciones.length >= 4){
        break;
      }
    }

    opciones = randomValueGenerator(opciones);

    document.getElementById("pregunta_actual").innerHTML = pregunta_actual+1+" de "+preguntas.length;
    document.getElementById("pregunta").setAttribute("src", respuesta_correcta.imagen);
    
    colores = randomValueGenerator(colores);
    
    let div = "";
    if(tipo_seleccion == 2){
      for (let index = 0; index < opciones.length; index++) {
        const element = opciones[index];
        div += "<div class='col-6 respuesta'><div onclick='respuesta(\""+element.pregunta+"\", this)' class='res' style='background-color: white; color: white; border: 6px solid #d81c5473'><h1 style='color: black'>"+element.pregunta+"</h1></div></div>";
      }
    }else{
      for (let index = 0; index < opciones.length; index++) {
        const element = opciones[index];
        div += "<div class='col-6 respuesta'><div onclick='respuesta(\""+element.pregunta+"\", this)' class='res' style='background-color: "+colores[index].op1+"; color: white; border: 6px solid "+colores[index].op2+"'><h1>"+element.pregunta+"</h1></div></div>";
      }
    }
   
  
    document.getElementById("respuestas").innerHTML = "";
    document.getElementById("respuestas").innerHTML = div;

    var offsetHeight = document.getElementById('respuestas').offsetHeight - 44;
    document.getElementById("pregunta").style.height = offsetHeight+"px";
    
  }else{
    $('#container').fadeToggle(500);
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
  if(tipo == respuesta_correcta.pregunta){
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
    var audio = new Audio('sounds/'+respuesta_correcta.pregunta.toLowerCase()+'.mp3');
    audio.play(); 
  }, 100);

}

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
          maquina2("bienvenida",'Hola, soy Genio. <br> Selecciona una de las siguientes categorias para jugar, y luego responde las 10 preguntas. <br> ¡Tu puedes!',50,1);
        }, 3000)
      }, 2000)
    })
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
    let audio = new Audio('../../sounds/fondo.mp3');
    audio.play(); 
    audio.volume = 0.2;

    let audio2 = new Audio('../../sounds/enunciado_ingles.mp3');
    audio2.play(); 
    
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
    title: 'Selecciona una Categoria',
    icon: 'info',
    html: '<div style="padding-top: 20px"  class="row">'+
            '<div class="col-4"><div><img onclick="seleccionar(this, 1)" class="imagen_Vocal imagen2" src="img/partes_cuerpo.png" alt=""></div></div>'+
            '<div class="col-4"><div><img onclick="seleccionar(this, 2)"" class="imagen_Vocal imagen2" src="img/colores.png" alt=""></div></div>'+
            '<div class="col-4"><div><img onclick="seleccionar(this, 3)"" class="imagen_Vocal imagen2" src="img/numeros.png" alt=""></div></div>'+
        '</div>',
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: false,
    allowOutsideClick: false,
    focusConfirm: false,
  });
}

var tipo_seleccion = 0;
function seleccionar(elemento, letra) {
  tipo_seleccion = letra;
  let audio = "";
  switch (letra) {
  case 1:
      preguntas = cuerpo_array;
      categoria = "Body Parts"
      audio = new Audio('../../sounds/ingles_cat_1.mp3');
      break;
  case 2:
      preguntas = color_array;
      categoria = "I Know the Colors"
      audio = new Audio('../../sounds/ingles_cat_2.mp3');
      break;
  case 3:
      preguntas = numero_array;
      categoria = "I Learn the Numbers"
      audio = new Audio('../../sounds/ingles_cat_3.mp3');
      break;
  default:
      break;
  }

  preguntas = randomValueGenerator(preguntas);

  elemento.classList.add("seleccionado");
  document.getElementById("categoria").innerText = categoria;


  audio.play(); 

  setTimeout(function() {
    swal.close();
    startGame();
  },2000);
}