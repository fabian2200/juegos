let intentosIncorrectos = 0;
let cantidad = 0; 
let cuerpoSel;
let parteMostrada = [];

let seres = [
 
  {
    imagen: "img/perro.png",
    clasificacion: "vivo",
  },
  {
    imagen: "img/gato.png",
    clasificacion: "vivo",
  },
  {
    imagen: "img/leon.png",
    clasificacion: "vivo",
  },
  {
    imagen: "img/elefante.png",
    clasificacion: "vivo",
  },
  {
    imagen: "img/abeja.png",
    clasificacion: "vivo",
  },
  {
    imagen: "img/araña.png",
    clasificacion: "vivo",
  },
  {
    imagen: "img/pez.png",
    clasificacion: "vivo",
  },
  {
    imagen: "img/delfin.png",
    clasificacion: "vivo",
  },
  {
    imagen: "img/flor.png",
    clasificacion: "vivo",
  },
  {
    imagen: "img/arbol.png",
    clasificacion: "vivo",
  },
  {
    imagen: "img/hongo.png",
    clasificacion: "vivo",
  },
  {
    imagen: "img/oso.png",
    clasificacion: "vivo",
  },
  {
    imagen: "img/pajaro.png",
    clasificacion: "vivo",
  },
  {
    imagen: "img/tigre.png",
    clasificacion: "vivo",
  },
  {
    imagen: "img/cangrejo.png",
    clasificacion: "vivo",
  },
  {
    imagen: "img/jirafa.png",
    clasificacion: "vivo",
  },
  {
    imagen: "img/tortuga.png",
    clasificacion: "vivo",
  },
  {
    imagen: "img/lobo.png",
    clasificacion: "vivo",
  },
  {
    imagen: "img/medusa.png",
    clasificacion: "vivo",
  },
  {
    imagen: "img/colibri.png",
    clasificacion: "vivo",
  },

  // Seres inertes
  {
    imagen: "img/mesa.png",
    clasificacion: "inerte",
  },
  {
    imagen: "img/silla.png",
    clasificacion: "inerte",
  },
  {
    imagen: "img/roca.png",
    clasificacion: "inerte",
  },
  {
    imagen: "img/reloj.png",
    clasificacion: "inerte",
  },
  {
    imagen: "img/computadora.png",
    clasificacion: "inerte",
  },
  {
    imagen: "img/libro.png",
    clasificacion: "inerte",
  },
  {
    imagen: "img/celular.png",
    clasificacion: "inerte",
  },
  {
    imagen: "img/boligrafo.png",
    clasificacion: "inerte",
  },
  {
    imagen: "img/lampara.png",
    clasificacion: "inerte",
  },
  {
    imagen: "img/carro.png",
    clasificacion: "inerte",
  },
  {
    imagen: "img/bicicleta.png",
    clasificacion: "inerte",
  },
  {
    imagen: "img/television.png",
    clasificacion: "inerte",
  },
  {
    imagen: "img/llave.png",
    clasificacion: "inerte",
  },
  {
    imagen: "img/gafas.png",
    clasificacion: "inerte",
  },
  {
    imagen: "img/escalera.png",
    clasificacion: "inerte",
  },
  {
    imagen: "img/martillo.png",
    clasificacion: "inerte",
  },
  {
    imagen: "img/taza.png",
    clasificacion: "inerte",
  },
  {
    imagen: "img/bomba.png",
    clasificacion: "inerte",
  },
  {
    imagen: "img/candado.png",
    clasificacion: "inerte",
  },
];


function inicioJuego() {
  
  const contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";

  for (let i = 0; i < 2; i++) {
      const serAleatorio = seres[Math.floor(Math.random() * seres.length)];
      const div = document.createElement("div");
      div.className = "ser";
      div.style.backgroundImage = `url('${serAleatorio.imagen}')`;
      contenedor.appendChild(div);
  }

  // Aplicar la transición
  contenedor.children[0].style.transform = "translateX(-100%)";
  contenedor.children[1].style.transform = "translateX(100%)";

  setTimeout(() => {
      contenedor.children[0].style.transform = "";
      contenedor.children[1].style.transform = "";
  }, 1000);
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
      setInterval(inicioJuego, 5000);
    }, 2000);
  }, 2000);
}
