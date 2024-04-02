var animals = [
    {
        name: "León",
        image: "img/leon.png",
        audio: "sounds/audio_leon.mp3",
        timeOfDay: "diurno",
    },
    {
        name: "Búho",
        image: "img/buho.png",
        audio: "sounds/audio_buho.mp3",
        timeOfDay: "nocturno",
    },
    {
        name: "Jirafa",
        image: "img/jirafa.png",
        audio: "sounds/audio_jirafa.mp3",
        timeOfDay: "diurno",
    },
    {
        name: "Murciélago",
        image: "img/murcielago.png",
        audio: "sounds/audio_murcielago.mp3",
        timeOfDay: "nocturno",
    },
    {
        name: "Elefante",
        image: "img/elefante.png",
        audio: "sounds/audio_elefante.mp3",
        timeOfDay: "diurno",
    },
    {
        name: "Perro",
        image: "img/perro.png",
        audio: "sounds/audio_perro.mp3",
        timeOfDay: "diurno",
    },
    {
        name: "Zorro",
        image: "img/zorro.png",
        audio: "sounds/audio_zorro.mp3",
        timeOfDay: "nocturno",
    },
    {
        name: "Gorila",
        image: "img/gorila.png",
        audio: "sounds/audio_gorila.mp3",
        timeOfDay: "diurno",
    },
    {
        name: "Tigre",
        image: "img/tigre.png",
        audio: "audio_tigre.mp3",
        timeOfDay: "diurno",
    },
    {
        name: "Canguro",
        image: "img/canguro.png",
        audio: "sounds/audio_canguro.mp3",
        timeOfDay: "diurno",
    },
    {
        name: "Erizo",
        image: "img/erizo.png",
        audio: "sounds/audio_erizo.mp3",
        timeOfDay: "nocturno",
    },
    {
        name: "Cebra",
        image: "img/cebra.png",
        audio: "sounds/audio_cebra.mp3",
        timeOfDay: "diurno",
    },
    {
        name: "Mapache",
        image: "img/mapache.png",
        audio: "sounds/audio_mapache.mp3",
        timeOfDay: "nocturno",
    },
    {
        name: "Sapo",
        image: "img/sapo.png",
        audio: "sounds/audio_sapo.mp3",
        timeOfDay: "nocturno",
    },
    {
        name: "Oso Panda",
        image: "img/panda.png",
        audio: "sounds/audio_panda.mp3",
        timeOfDay: "diurno",
    },
    {
        name: "Loro",
        image: "img/loro.png",
        audio: "sounds/audio_loro.mp3",
        timeOfDay: "diurno",
    },
    {
        name: "Lechuza",
        image: "img/lechuza.png",
        audio: "sounds/audio_lechuza.mp3",
        timeOfDay: "nocturno",
    },
    {
        name: "Ratón",
        image: "img/raton.png",
        audio: "sounds/audio_raton.mp3",
        timeOfDay: "nocturno",
    },
    {
        name: "Polilla",
        image: "img/polilla.png",
        audio: "sounds/audio_polilla.mp3",
        timeOfDay: "nocturno",
    },
    {
        name: "Lémur",
        image: "img/lemur.png",
        audio: "sounds/audio_lemur.mp3",
        timeOfDay: "nocturno",
    },
    {
        name: "Luciérnaga",
        image: "img/luciernaga.png",
        audio: "sounds/audio_luciernaga.mp3",
        timeOfDay: "nocturno",
    },
];


var currentAnimalIndex;
var correctAnswer;
let correctas = 0;
let cantidad = 0;

function inicioJuego() {
    for (var i = 0; i < 10; i++) {
        cantidad++;
        showRandomAnimal();
    }
}
function showRandomAnimal() {
    currentAnimalIndex = Math.floor(Math.random() * animals.length);
    correctAnswer = animals[currentAnimalIndex].timeOfDay;

    // Muestra la imagen del animal
    document.getElementById("animal").src = animals[currentAnimalIndex].image;
}

function playAudio() {
    var audio = new Audio(animals[currentAnimalIndex].audio);
    audio.play();
}

function checkAnswer(timeOfDay) {
    var dayDiv = document.getElementById("day");
    var nightDiv = document.getElementById("night");
    var animal = document.getElementById("animal");

    if (timeOfDay == "diurno") {
        dayDiv.classList.add("zoomed");
    } else {
        nightDiv.classList.add("zoomed");
    }

    nightDiv.classList.add("deshabilitado");
    dayDiv.classList.add("deshabilitado");

    setTimeout(function () {
        dayDiv.classList.remove("zoomed", "deshabilitado");
        nightDiv.classList.remove("zoomed", "deshabilitado");
    }, 2000);

    if (timeOfDay === correctAnswer) {
        animal.classList.add("correct-answer");
        correctas++;
    } else {
        animal.classList.add("incorrect-answer");
    }

    setTimeout(function () {
        animal.classList.remove("correct-answer");
        animal.classList.remove("incorrect-answer");
    }, 3000);

    setTimeout(function () {
        if(cantidad<=10){
            showRandomAnimal();
        }else{
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
            "Has obtenido "+ correctas+ " puntos de 10 posibles";

        }

    }, 3000);
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
                    divAnimado.style.backgroundImage =
                        "url(../../images/normal2.gif)";
                    maquina2(
                        "bienvenida",
                        "Hola!, Soy genio, en este juego deberás identificar, seleccionando en la imagen correspondiente si el animal mostrado es diurno no nocturno. Tu puedes!!!",
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
