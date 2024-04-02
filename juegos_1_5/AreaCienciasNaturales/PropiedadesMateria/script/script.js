var $conteudoGeral = document.querySelector(".conteudo-geral");
var $conteudoEmArray = [].slice.call(document.querySelectorAll(".componente"));
var $botoesDeFechar = [].slice.call(
  document.querySelectorAll(".componente-botao-fechar")
);

setTimeout(function () {
  $conteudoGeral.classList.remove("js-conteudo-geral");
}, 200);

$conteudoEmArray.forEach(function ($componente) {
  $componente.addEventListener("click", function () {
    if (this.classList.contains("caixa-conteudo-ativo")) return;
    $conteudoGeral.classList.add("caixa--componente-ativo");
    this.classList.add("caixa-conteudo-ativo");
    
  });
});

$botoesDeFechar.forEach(function ($btn) {
  $btn.addEventListener("click", function (e) {
    e.stopPropagation();
    $conteudoGeral.classList.remove("caixa--componente-ativo");
    document
      .querySelector(".componente.caixa-conteudo-ativo")
      .classList.remove("caixa-conteudo-ativo");
  });
});

var elemento_componente;

var elemento_sel = null;
function quitar_padding(elemento){
  elemento_componente = elemento;
  elemento_sel = elemento;
  setTimeout(()=>{
    elemento_sel.classList.add("segunda_fila2");
  }, 1000)
}

function colocar_padding(){
  elemento_sel.classList.remove("segunda_fila2");
  setTimeout(()=>{
    elemento_sel.classList.add("trans");
  }, 1500)

  setTimeout(()=>{
    elemento_sel.classList.remove("trans");
  }, 1600)
}

var elemento_sel2 = null;
function altura(elemento){
  setTimeout(()=>{
    elemento_componente = elemento;
    elemento_sel2 = elemento;
    elemento_sel2.classList.add("altura");
  }, 950)
}

function quitar_altura(){
  elemento_sel2.classList.remove("altura");
}

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

var colores = [{op1: '#662482', op2: '#39134a'},{op1: '#4494d0', op2: '#3372a1'}, {op1: '#f08218', op2: '#c86b12'}, {op1: '#e83967', op2: '#be3156'}];
function escogerPreguntaAleatoria() {
  interprete_bp = randomValueGenerator(interprete_bp);
  let div = "";
  for (let index = 0; index < 10; index++) {
    const element = interprete_bp[index];
    var div_contenedor = document.getElementById("tp_"+(index+1));
    let ruta = "#";
    let stilo = "";
    if(element.imagen != undefined){
      ruta = element.imagen;
    }else{
      stilo = "display: flex; align-items: center; ";
    }

    let tipo_div = 0;
    if(index <= 4){
      tipo_div = 1;
    }

    div = "<div class='row' style='margin-top: 20pt'>"
            +"<div class='col-5 text-center' style='color: #434343; "+stilo+"'>"
              +"<img src='"+ruta+"'>"
              +"<h1>"+element.pregunta+"</h1>"
            +"</div>"
            +"<div class='col-7'>"
              +"<div class='row'>"
                +"<div class='col-6' style='padding: 20px;'>"
                  +"<div class='opcion' onclick='verificar("+element.opciones[0].correcta+", this, "+tipo_div+")' style='border-radius: 20px; background-color: "+colores[0].op1+"; border: 5px solid "+colores[0].op2+"; width: 100%; height: 140pt;'>"
                  +"<h2>"+element.opciones[0].opcion+"</h2>"
                  +"</div>"
                +" </div>"
                +"<div class='col-6' style='padding: 20px;'>"
                  +" <div class='opcion' onclick='verificar("+element.opciones[1].correcta+", this, "+tipo_div+")' style='border-radius: 20px; background-color: "+colores[1].op1+"; border: 5px solid "+colores[1].op2+"; width: 100%; height: 140pt;'>"
                  +"<h2>"+element.opciones[1].opcion+"</h2>"
                  +"</div>"
                +"</div>"
                +"</div>"
                +"<div class='row'>"
                +"<div class='col-6' style='padding: 20px;'>"
                +"<div class='opcion' onclick='verificar("+element.opciones[2].correcta+", this, "+tipo_div+")' style='border-radius: 20px; background-color: "+colores[2].op1+"; border: 5px solid "+colores[2].op2+"; width: 100%; height: 140pt;'>"
                +"<h2>"+element.opciones[2].opcion+"</h2>"
                +"</div>"
                +"</div>"
                +"<div class='col-6' style='padding: 20px;'>"
                +"<div class='opcion' onclick='verificar("+element.opciones[3].correcta+", this, "+tipo_div+")' style='border-radius: 20px; background-color: "+colores[3].op1+"; border: 5px solid "+colores[3].op2+"; width: 100%; height: 140pt;'>"
                +"<h2>"+element.opciones[3].opcion+"</h2>"
                +"</div>"
                +"</div>"
              +"</div>"
            +"</div>"
          +"</div>";

          div_contenedor.innerHTML = "";
          div_contenedor.innerHTML = div;
  }
}

function randomValueGenerator (vector) {
  return vector.sort(function() {return Math.random() - 0.5});
};

let base_preguntas = [];
window.onload = function () {
  base_preguntas = readText("preguntas.json");
  interprete_bp = JSON.parse(base_preguntas);
  escogerPreguntaAleatoria();
};

let respuestas = 0;
let correctas = 0;
function verificar(respuesta, elemento, tipo){
  respuestas++;
  if(respuesta){
    elemento.classList.add("correcto");
    var audio = new Audio('../../sounds/ok.mp3');
    audio.play();
    setTimeout(()=>{
      elemento_componente.classList.add("correcto");
      let img = elemento_componente.firstElementChild.firstElementChild.firstElementChild;
      img.style.opacity = "0.5";
    }, 3500)
    correctas++;
  }else{
    elemento.classList.add("incorrecto");
    var audio = new Audio('../../sounds/over.mp3');
    audio.play();
    setTimeout(()=>{
      elemento_componente.classList.add("incorrecto")
      let img = elemento_componente.firstElementChild.firstElementChild.firstElementChild;
      img.style.opacity = "0.5";
    }, 3500)
  }

  setTimeout(()=>{
    if(tipo == 1){
      quitar_altura();
    }else{
      colocar_padding();
    }

    $conteudoGeral.classList.remove("caixa--componente-ativo");
    document
      .querySelector(".componente.caixa-conteudo-ativo")
      .classList.remove("caixa-conteudo-ativo");
  }, 2000)

  if(respuestas >= 10){
    setTimeout(()=>{
      $('#principal').fadeToggle(500);
        setTimeout(()=>{
          $('#final').fadeToggle(1000);
        }, 500)
      if(correctas < 6 ){
        document.getElementById("final").style.backgroundImage = "url(../../images/ciencia/derrota.gif)";
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
    }, 3000)  
  }
}

$(document).ready(function () {
  $('#fondo_blanco').fadeToggle(3000);
  setTimeout(() => {
    setTimeout(() => {
      $('#principal').fadeToggle(1000);
      setTimeout(() => {
        const divAnimado = document.querySelector('.overlay');
        divAnimado.style.animationName = 'moverDerecha';
        divAnimado.style.animationDirection = 'normal';
        divAnimado.style.display = 'block';
        setTimeout(() => {
          const divAnimado2 = document.querySelector('.nube');
          divAnimado2.style.animationName = 'moverArriba';
          divAnimado2.style.animationDirection = 'normal';
          divAnimado2.style.display = 'block';
          setTimeout(() => {
            divAnimado.style.backgroundImage = "url(../../images/ciencia/normal2.gif)"
            maquina2("bienvenida", 'Hola, soy Genio. <br> Selecciona un cajón y responde la pregunta, relacionada con el tema "Propiedades de la materia", importante aclarar que son preguntas al azar.', 50, 1);
          }, 3000)
        }, 2000)
      })
    }, 200)
  }, 500)
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
    var audio = new Audio('../../sounds/fondo.mp3');
    audio.play();
    audio.volume = 0.2;
    
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
