const scoreBoard = document.querySelector("#score");
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
  topo.classList.add("up");
  setTimeout(() => {
    topo.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}

function startGame(numeros) {
  let moles_divs = [];
  for (let index = 0; index < moles.length; index++) {
    const element = moles[index];
    moles_divs.push(element);
  }

  moles_divs = randomValueGenerator(moles_divs);

  for (let index = 0; index < 3; index++) {
    const element = moles_divs[index];
    element.setAttribute("data-id", numeros[index].tipo);
    element.innerHTML = "<h5 style='margin-top: 60%;'><span class='"+numeros[index].tipo+" respuesta'>"+numeros[index].numero+"</span></h5>"
  }

  for (let index = 3; index < 6; index++) {
    const element = moles_divs[index];
    element.setAttribute("data-id", numeros[index].tipo);
    element.innerHTML = "<h5 style='margin-top: 60%;'><span class='"+numeros[index].tipo+" respuesta'>"+numeros[index].numero+"</span></h5>"
  }

  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), 900000);
  //muestra topos aleatoriamente durante 15 segundos
}

function wack(e) {
  //para que no cuente un click simulado desde js y solo recoja el del usuario.
  if (!e.isTrusted) return;
  let dt = this.getAttribute("data-id");
  if(dt == "correcta"){
    this.parentElement.classList.add("ok");
    score++;
  }else{
    this.parentElement.classList.add("over");
    setTimeout(()=>{
      this.parentElement.classList.add("bajar");
    }, 1500)
    inscore++;
  }
  scoreBoard.innerText = "Correctas "+score;

  setTimeout(()=>{
    verificar();
  }, 500);
}

function verificar(){
  let num_correctas = document.getElementsByClassName("correcta").length;

  if(score == num_correctas){
    $('#principal').fadeToggle(500);
    setTimeout(()=>{
      $('#final').fadeToggle(1000);
    }, 500)
    document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
    document.getElementById("texto_final").innerText = "Felicitaciones, lo has hecho muy bien"
    var audio = new Audio('../../sounds/victory.mp3');
    audio.play();
  }
}

moles.forEach((topo) => topo.addEventListener("click", wack));

let tipo_ope = 0;
$(document).ready(function() {
  var tipo_ope = Math.floor(Math.random() * (2 - 1 + 1) + 1);
  switch (tipo_ope) {
    case 1:
      var num = Math.floor(Math.random() * (12 - 2 + 1) + 2)
      var numeros = generateMultiplos(num)
      document.getElementById("tipo_t").innerText = '"Multiplos de '+num+'"'
      startGame(numeros);
      break;
    case 2:
      var num = Math.floor(Math.random() * (10000 - 100 + 1) + 100);
      var numeros = generateDivisores(num)
      document.getElementById("tipo_t").innerText = '"Divisores de '+num+'"'
      startGame(numeros);
      break;
    default:
      break;
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
          maquina2("bienvenida",'Hola, soy Genio. <br> En este juego selecciona los topos que tengas los multiplos o divisores del numero que se te indique en el enunciado. <br> ¡Tu Puedes!',50,1);
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
        }, 2000)
    }, 2000);
  }
}


function generateMultiplos(num){
  let multiples = [];

  for (let i = 1; i <= 100; i++) {
    multiples.push(num * i);
  }

  multiples = randomValueGenerator(multiples);

  let mul = []
  for (let index = 0; index < 3; index++) {
    const element = multiples[index];
    mul.push({
      numero: element,
      tipo: "correcta" 
    });
  }

  for (let i = 1; i <= 3; i++) {
    mul.push({
      numero: num+1 * i,
      tipo: "incorrecta" 
    });
  }

  return mul.sort(function(a, b){return a - b});;
}

function generateDivisores(num){
  let divisores = [];
  let no_divisores = [];
  let div = []
  if(esPrimo(num)){
    div.push({
      numero: 1,
      tipo: "correcta" 
    });
    div.push({
      numero: num,
      tipo: "correcta" 
    });
    div.push({
      numero: Math.floor(Math.random() * (num - 100 + 1) + 100),
      tipo: "incorrecta" 
    })
    div.push({
      numero: Math.floor(Math.random() * (num - 100 + 1) + 100),
      tipo: "incorrecta" 
    })
    div.push({
      numero: Math.floor(Math.random() * (num - 100 + 1) + 100),
      tipo: "incorrecta" 
    })
    div.push({
      numero: Math.floor(Math.random() * (num - 100 + 1) + 100),
      tipo: "incorrecta" 
    })
  }else{
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisores.push(i);
      }else{
        no_divisores.push(i);
      }
    }

    divisores = randomValueGenerator(divisores);
    no_divisores = randomValueGenerator(no_divisores);

    
    for (let index = 0; index < 3; index++) {
      const element = divisores[index];
      div.push({
        numero: element,
        tipo: "correcta" 
      });
    }

    for (let index = 0; index < 3; index++) {
      const element = no_divisores[index];
      div.push({
        numero: element,
        tipo: "incorrecta" 
      });
    }
  }

  return div.sort(function(a, b){return a - b});
}

function randomValueGenerator (vector) {
	return vector.sort(function() {return Math.random() - 0.5});
};

function esPrimo(numero) {
  if (numero < 2) return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}