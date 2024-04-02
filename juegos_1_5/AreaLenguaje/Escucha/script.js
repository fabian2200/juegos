const sounds = {
    A: "sounds/A.mp3",
    B: "sounds/B.mp3",
    C: "sounds/C.mp3",
    D: "sounds/D.mp3",
    E: "sounds/E.mp3",
    F: "sounds/F.mp3",
    G: "sounds/G.mp3",
    H: "sounds/H.mp3",
    I: "sounds/I.mp3",
    J: "sounds/J.mp3",
    K: "sounds/K.mp3",
    L: "sounds/L.mp3",
    M: "sounds/M.mp3",
    N: "sounds/N.mp3",
    O: "sounds/O.mp3",
    P: "sounds/P.mp3",
    Q: "sounds/Q.mp3",
    R: "sounds/R.mp3",
    S: "sounds/S.mp3",
    T: "sounds/T.mp3",
    U: "sounds/U.mp3",
    V: "sounds/V.mp3",
    W: "sounds/W.mp3",
    X: "sounds/X.mp3",
    Y: "sounds/Y.mp3",
    Z: "sounds/Z.mp3",
};

let letrasMostradas = [];
let palabra = "";
let acento = "";
let npreg = 0;
let correctas = 0;
let correctLetter;

const playBtn = document.getElementById("play-btn");
playBtn.addEventListener("click", function () {
    playBtn.disabled = true;
    playSound(correctLetter);
});

function inicioJuego() {
    npreg++;
    correctLetter = getRandomLetter();
    playBtn.disabled = false;
    playSound(correctLetter);

    questionElement.textContent = `¿Cuál es la letra correcta?`;
    const options = generateOptions(correctLetter);

    displayOptions(options);
}

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");

$(document).ready(function () {


    setTimeout(function() {
        let audio2 = new Audio('sounds/enunciado.mp3');
        audio2.playbackRate =0.8;
        audio2.play();
      },4500);

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
                        "Hola!, Soy genio, En este juego deberás escuchar el nombre de la letra y luego seleccionar la opción correcta.",
                        100,
                        1
                    );
                }, 3000);
            }, 2000);
        });
    }, 200);
});

const alphabet = Object.keys(sounds);
function getRandomLetter() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function playSound(letter) {
    const audio = new Audio(sounds[letter]);
    audio.play();
}

function generateOptions(correctLetter) {
    const options = [correctLetter];
    while (options.length < 4) {
        const randomLetter = getRandomLetter();

        if (!options.includes(randomLetter)) {
            options.push(randomLetter);
        }
    }
    return options.sort(() => Math.random() - 0.5);
}

function displayOptions(options) {
    optionsContainer.innerHTML = "";

    options.forEach((option) => {
        const img = document.createElement("img");
        console.log(option);
        img.src = "img/" + option + ".png";
        img.alt = option;
        img.classList.add("option-btn");

        img.addEventListener("click", function () {
            checkAnswer(option, correctLetter, img);
        });

        optionsContainer.appendChild(img);
    });
}

function checkAnswer(selectedLetter, correctLetter, img) {
    if (selectedLetter === correctLetter) {
        correctas++;
        img.classList.add("correct-answer");
    } else {
        img.classList.add("incorrect-answer");
    }
    // Mostrar la siguiente pregunta
    setTimeout(() => {
        img.classList.remove("correct-answer", "incorrect-answer");
        if (npreg < 11) {
            inicioJuego();
        } else {
            $("#principal").fadeToggle(1000);
            $("#final").fadeToggle(1000);
            if (correctas <= 6) {
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
        }
    }, 1500);
}

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
