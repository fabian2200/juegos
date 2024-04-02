const palabras = [
    {
        palabra: "pájaro",
        sin_acento: "pajaro",
        acento: 1,
    },
    {
        palabra: "bebé",
        sin_acento: "bebe",
        acento: 3,
    },
    {
        palabra: "camión",
        sin_acento: "camion",
        acento: 4,
    },
    {
        palabra: "árbol",
        sin_acento: "arbol",
        acento: 0,
    },
    {
        palabra: "cárcel",
        sin_acento: "carcel",
        acento: 1,
    },
    {
        palabra: "sábado",
        sin_acento: "sabado",
        acento: 1,
    },
    {
        palabra: "día",
        sin_acento: "dia",
        acento: 1,
    },
    {
        palabra: "sofá",
        sin_acento: "sofa",
        acento: 3,
    },
    {
        palabra: "música",
        sin_acento: "musica",
        acento: 1,
    },
    {
        palabra: "teléfono",
        sin_acento: "telefono",
        acento: 3,
    },
    {
        palabra: "frío",
        sin_acento: "frio",
        acento: 2,
    },
    {
        palabra: "estás",
        sin_acento: "estas",
        acento: 3,
    },
    {
        palabra: "fácil",
        sin_acento: "facil",
        acento: 1,
    },
    {
        palabra: "huésped",
        sin_acento: "huesped",
        acento: 2,
    },
    {
        palabra: "vía",
        sin_acento: "via",
        acento: 1,
    },
    {
        palabra: "éxito",
        sin_acento: "exito",
        acento: 0,
    },
    {
        palabra: "lápiz",
        sin_acento: "lapiz",
        acento: 1,
    },
    {
        palabra: "análisis",
        sin_acento: "analisis",
        acento: 2,
    },
    {
        palabra: "césped",
        sin_acento: "cesped",
        acento: 1,
    },
    {
        palabra: "vértigo",
        sin_acento: "vertigo",
        acento: 1,
    },

    {
        palabra: "anécdota",
        sin_acento: "anecdota",
        acento: 2,
    },
    {
        palabra: "tóxico",
        sin_acento: "toxico",
        acento: 1,
    },
    {
        palabra: "café",
        sin_acento: "cafe",
        acento: 3,
    },
    {
        palabra: "país",
        sin_acento: "pais",
        acento: 2,
    },
    {
        palabra: "círculo",
        sin_acento: "circulo",
        acento: 1,
    },
    {
        palabra: "salón",
        sin_acento: "salon",
        acento: 3,
    },
    {
        palabra: "álbum",
        sin_acento: "album",
        acento: 0,
    },
    {
        palabra: "fútbol",
        sin_acento: "futbol",
        acento: 1,
    },
    {
        palabra: "eléctrico",
        sin_acento: "electrico",
        acento: 2,
    },
    {
        palabra: "médico",
        sin_acento: "medico",
        acento: 1,
    },
];

let palabrasMostradas = [];
let palabra = "";
let acento = "";
let npreg = 0;
let correctas = 0;

function separarCaracteres() {
    // Obtener la palabra ingresada por el usuario
    npreg++;
    let arrayPalabra = obtenerIndiceAleatorio(palabras);
    palabra = arrayPalabra.sin_acento;
    acento = arrayPalabra.acento;
    document.getElementById("img-mascota").src = "../../images/pensando.gif";

    // Separar los caracteres de la palabra y crear un array con ellos
    let caracteres = palabra.split("");

    // Limpiar el contenido del div de resultado
    document.getElementById("palabra").innerHTML = "";

    // Generar un evento sobre cada caracter de la palabra
    let cont = 0;

    caracteres.forEach(function (caracter) {
        let div = document.createElement("div");
        div.classList.add("letra");
        div.id = cont;
        div.innerHTML = caracter;
        div.addEventListener("click", function () {
            if (acento == this.id) {
                document.getElementById("img-mascota").src =
                    "../../images/correcto.gif";
                $("#" + this.id)
                    .addClass("letraCorrecta")
                    .removeClass("letra");
                correctas++;
            } else {
                document.getElementById("img-mascota").src =
                    "../../images/incorrecto.gif";

                $("#" + this.id).addClass("letraErrada").removeClass("letra");
                $("#" + acento).addClass("letraCorrecta").removeClass("letra");
            }

            if (npreg < 10) {
                setTimeout(separarCaracteres, 3000);
            } else {
                $("#principal").fadeToggle(1000);
                $("#final").fadeToggle(1000);
                if (correctas < 6) {
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
                    "Has obtenido " + correctas + " puntos de 10 posibles";
            }
        });
        document.getElementById("palabra").appendChild(div);
        cont++;
    });
}

function obtenerIndiceAleatorio(palabras) {
    let indice = Math.floor(Math.random() * palabras.length);
    while (palabrasMostradas.includes(indice)) {
        indice = Math.floor(Math.random() * palabras.length);
    }
    palabrasMostradas.push(indice);

    return palabras[indice];
}

$(document).ready(function () {
    separarCaracteres();

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
                    divAnimado.style.backgroundImage =
                        "url(../../images/normal2.gif)";
                    maquina2(
                        "bienvenida",
                        "Hola, soy Genio. <br> En este juego seleccionaras donde está ubicada la acentuación en la palabra.",
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
        let audio2 = new Audio("../../sounds/fondo.mp3");
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
