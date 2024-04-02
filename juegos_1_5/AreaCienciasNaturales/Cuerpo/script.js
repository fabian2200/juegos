let intentosIncorrectos = 0;
let cantidad = 0; 
let cuerpoSel;
let parteMostrada = [];

let acciones = [
    {
      nombre: "Pensar",
      imagen: "imagen_pensar.png",
      audio: "sounds/audio_pensar.mp3",
      parte_del_cuerpo: "Cabeza",
    },
    {
      nombre: "Saltar",
      imagen: "imagen_saltar.png",
      audio: "sounds/audio_saltar.mp3",
      parte_del_cuerpo: "Piernas",
    },
    {
      nombre: "Aplaudir",
      imagen: "imagen_aplaudir.png",
      audio: "sounds/audio_aplaudir.mp3",
      parte_del_cuerpo: "Manos",
    },
    {
      nombre: "Nadar",
      imagen: "imagen_nadar.png",
      audio: "sounds/audio_nadar.mp3",
      parte_del_cuerpo: "Brazos",
    },
    {
      nombre: "Caminar",
      imagen: "imagen_caminar.png",
      audio: "sounds/audio_caminar.mp3",
      parte_del_cuerpo: "Piernas",
    },
    {
      nombre: "Escribir",
      imagen: "imagen_escribir.png",
      audio: "sounds/audio_escribir.mp3",
      parte_del_cuerpo: "Manos",
    },
    {
      nombre: "Tocar",
      imagen: "imagen_tocar.png",
      audio: "sounds/audio_tocar.mp3",
      parte_del_cuerpo: "Manos",
    },
    {
      nombre: "Abrazar",
      imagen: "imagen_abrazar.png",
      audio: "sounds/audio_abrazar.mp3",
      parte_del_cuerpo: "Brazos",
    },
    {
      nombre: "Inclinarse",
      imagen: "imagen_inclinarse.png",
      audio: "sounds/audio_inclinarse.mp3",
      parte_del_cuerpo: "Tronco",
    },
    {
      nombre: "Sentarse",
      imagen: "imagen_sentarse.png",
      audio: "sounds/audio_sentarse.mp3",
      parte_del_cuerpo: "Tronco",
    },
  ];

function inicioJuego() {
    cantidad++;
    let cuerpoSel = obtenerIndiceAleatorio(acciones);
    console.log(cuerpoSel);
    acccionParte = cuerpoSel.nombre;
    nombreParte = cuerpoSel.parte_del_cuerpo;
   
    // Muestra la imagen del animal
    let divAccion = document.getElementById("cajonAccion");
    divAccion.style.backgroundImage = "url('img/" + cuerpoSel.imagen + "')";
    
    var audio = new Audio(cuerpoSel.audio);
    audio.play();
  
}

function verifResp(element){
    let partSel = element.getAttribute("data-parte");
 
    var imagen = document.createElement("img");
    imagen.style.width = "100px";
    if(partSel == nombreParte){
        imagen.src = "img/correcta.png";
        intentosIncorrectos++;
    }else{
        imagen.src = "img/incorrecta.png";
    }

    element.appendChild(imagen);
    console.log(cantidad);
    setTimeout(function(){
        imagen.remove();
        if(cantidad < 10){
            inicioJuego();
        }else{
          $("#principal").fadeToggle(1000);
            $("#final").fadeToggle(1000);
            if (intentosIncorrectos < 6) {
                var audio = new Audio("../../sounds/game_over.mp3");
                audio.play();
                document.getElementById("final").style.backgroundImage =
                    "url(../../images/derrota.gif)";
            } else {
                document.getElementById("final").style.backgroundImage =
                    "url(../../images/victoria.gif)";
                var audio = new Audio("../../sounds/victory.mp3");
                audio.play();
            }
            document.getElementById("texto_final").innerText =
            "Has obtenido "+ intentosIncorrectos+ " puntos de 10 posibles";
        }
        
    
    },2000);
}

function obtenerIndiceAleatorio(cuerpo) {
    console.log(cuerpo);
    let indice = Math.floor(Math.random() * cuerpo.length);
    while (parteMostrada.includes(indice)) {
        indice = Math.floor(Math.random() * cuerpo.length);
    }
    parteMostrada.push(indice);

    return cuerpo[indice];
}

$(document).ready(function () {
  setTimeout(function () {
   
    let audio2 = new Audio("sounds/enunciado.mp3");
    audio2.playbackRate = 0.8;
    audio2.play();
  }, 4500);

  setTimeout(() => {
    $("#principal").fadeToggle(1000);
    $("#fondo_blanco").fadeToggle(3000);
    setTimeout(() => {
      const divAnimado = document.querySelector(".overlay");
      divAnimado.style.animationName = "moverDerecha";
      divAnimado.style.animationDirection = "normal";
      divAnimado.style.display = "block";
      setTimeout(() => {
        const divAnimado2 = document.querySelector(".nube");
        divAnimado2.style.animationName = "moverArriba";
        divAnimado2.style.animationDirection = "normal";
        divAnimado2.style.display = "block";
        setTimeout(() => {
          divAnimado.style.backgroundImage = "url(../../images/normal2.gif)";
          maquina2(
            "bienvenida",
            "Hola!, Soy genio, en este juego deberás identificar con que parte de tu cuerpo realizas las acciones mostradas. Tu puedes!!!",
            100,
            1
          );
        }, 3000);
      }, 2000);
    });
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
          document.querySelector("#btnomitir").style.display = "none";
          setTimeout(() => {
            cerrar_anuncio();
          }, 3000);
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
  let audio2 = new Audio("../../sounds/fondo.mp3");
  audio2.play();
  audio2.volume = 0.2;
  cerrardo = true;
  const divAnimado2 = document.querySelector(".nube");
  divAnimado2.style.animationName = "moverabajo";
  const divAnimado = document.querySelector(".overlay");
  divAnimado.style.backgroundImage = "url(../../images/normal1.gif)";
  $("#fondo_blanco").fadeToggle(3000);
  setTimeout(function () {
    divAnimado.style.animationName = "moverIzquierda";
    divAnimado.style.animationDirection = "normal";
    setTimeout(() => {
      $("#principal").fadeToggle(1000);
      inicioJuego();
    }, 2000);
  }, 2000);
}
