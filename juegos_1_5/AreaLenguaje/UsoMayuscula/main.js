const moles = document.querySelectorAll(".mole");
const holes = document.querySelectorAll(".hole");

let score = 0;
let inscore = 0;
let timeUp = false;
let lastHole;

function ramdomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function ramdomHole(holes) {
  const randomHans = Math.floor(Math.random() * holes.length);
  const hole = holes[randomHans];
  if (hole === lastHole) {
    console.log("es el mismo hueco "+randomHans);
    return ramdomHole(holes);
  }
  
  lastHole = hole;
  return hole;
}

function peep() {
  const time = ramdomTime(2500, 3000);
  const topo = ramdomHole(holes);
  topo.classList.remove("over");
  topo.classList.remove("bajar");
  topo.classList.remove("ok");
  topo.classList.add("up");
  setTimeout(() => {
    topo.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  let moles_divs = [];
  for (let index = 0; index < moles.length; index++) {
    const element = moles[index];
    moles_divs.push(element);
  }

  moles_divs = randomValueGenerator(moles_divs);

  var fondos = ["mole.png", "molee.png", "moleee.png", "moleeee.png", "moleeee.png", "mole.png"];

  fondos = randomValueGenerator(fondos);

  for (let index = 0; index < 6; index++) {
    const element = moles_divs[index];
    element.style.backgroundImage ="url(img/"+fondos[index]+")"
    element.setAttribute("data-id", interprete_bp[index].correcto);
    element.innerHTML = "<h5 style='margin-top: 29%;'><span class='respuesta'>"+interprete_bp[index].palabra+"</span></h5>"
  }


  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), 900000);
}

function wack(e) {
  if (!e.isTrusted) return;
  let dt = this.getAttribute("data-id");
  if(dt == "true"){
    this.parentElement.classList.add("ok");
    setTimeout(()=>{
      this.parentElement.classList.add("bajar");
    }, 1500)
    score++;
  }else{
    this.parentElement.classList.add("over");
    setTimeout(()=>{
      this.parentElement.classList.add("bajar");
    }, 1500)
    inscore++;
  }

  setTimeout(()=>{
    num_palabra++;
    this.setAttribute("data-id", interprete_bp[num_palabra].correcto);
    this.innerHTML = "<h5 style='margin-top: 29%;'><span class='respuesta'>"+interprete_bp[num_palabra].palabra+"</span></h5>"
  }, 3000)

}


moles.forEach((topo) => topo.addEventListener("click", wack));

var interprete_bp = [];
var num_palabra = 5;

$(document).ready(function() {
 
  var base_preguntas = readText("palabras.json");
  interprete_bp = JSON.parse(base_preguntas);

  for (let index = 0; index < 20; index++) {
    interprete_bp = randomValueGenerator(interprete_bp);
  }
  
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
          maquina2("bienvenida",'Hola, soy Genio. <br> En este juego selecciona las palabras que estén bien escritas según el uso general de mayúsculas y minúsculas. <br> ¡Tu Puedes!',50,1);
        }, 3000)
      }, 2000)
    })
  }, 200)
});

function maquina2(contenedor, texto, intervalo, n) {
  var i = 0,
      timer = setInterval(function () {
          if (i < texto.length) {
              $("#" + contenedor).html(texto.substr(0, i++) + "_");
          } else {
              clearInterval(timer);
              $("#" + contenedor).html(texto);
              if (!cerrardo) {
                document.querySelector('#btnomitir').style.display = "none";
                  setTimeout(() => {
                      cerrar_anuncio();
                  }, 3000)
              }
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
            startGame();
            reloj();
        }, 2000)
    }, 2000);
  }
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

const randomValueGenerator = (vector) => {
  return vector.sort(function (a, b) {
      return Math.random() - 0.5;
  });
};

function reloj(){
  var timeleft = 180;
  var downloadTimer = setInterval(function(){
    var minutes = Math.floor(timeleft / 60);
    var seconds = timeleft - minutes * 60;
    if(seconds < 10) {
      seconds = "0" + seconds;
    }
    document.getElementById("timer").innerHTML = minutes + ":" + seconds;
    timeleft -= 1;
    if(timeleft <= 0){

      clearInterval(downloadTimer);
      document.getElementById("timer").innerHTML = "0:00";
      setTimeout(function(){
          $('#principal').fadeToggle(500);
          setTimeout(() => {
              $('#final').fadeToggle(1000);
          }, 500)

          if(score/(score+inscore) < 0.5 ){
            document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
            var audio = new Audio('../../sounds/game_over.mp3');
            audio.play();
          }else{
            document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
            var audio = new Audio('../../sounds/victory.mp3');
            audio.play();
          } 
          
          document.getElementById("texto_final").innerText = "Has seleccionado correctamente "+score+" palabras de "+(score+inscore)+" seleccionadas";
      }, 1000);
    }
  }, 1000);
}
