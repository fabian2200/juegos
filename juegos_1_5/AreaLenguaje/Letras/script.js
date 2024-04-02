const letras = {
    A: "img/A.png",
    B: "img/B.png",
    C: "img/C.png",
    D: "img/D.png",
    E: "img/E.png",
    F: "img/F.png",
    G: "img/G.png",
    H: "img/H.png",
    I: "img/I.png",
    J: "img/J.png",
    K: "img/K.png",
    L: "img/L.png",
    M: "img/M.png",
    N: "img/N.png",
    O: "img/O.png",
    P: "img/P.png",
    Q: "img/Q.png",
    R: "img/R.png",
    S: "img/S.png",
    T: "img/T.png",
    U: "img/U.png",
    V: "img/V.png",
    W: "img/W.png",
    X: "img/X.png",
    Y: "img/Y.png",
    Z: "img/Z.png",
    a: "img/minuscula/a.png",
    b: "img/minuscula/b.png",
    c: "img/minuscula/c.png",
    d: "img/minuscula/d.png",
    e: "img/minuscula/e.png",
    f: "img/minuscula/f.png",
    g: "img/minuscula/g.png",
    h: "img/minuscula/h.png",
    i: "img/minuscula/i.png",
    j: "img/minuscula/j.png",
    k: "img/minuscula/k.png",
    l: "img/minuscula/l.png",
    m: "img/minuscula/m.png",
    n: "img/minuscula/n.png",
    o: "img/minuscula/o.png",
    p: "img/minuscula/p.png",
    q: "img/minuscula/q.png",
    r: "img/minuscula/r.png",
    s: "img/minuscula/s.png",
    t: "img/minuscula/t.png",
    u: "img/minuscula/u.png",
    v: "img/minuscula/v.png",
    w: "img/minuscula/w.png",
    x: "img/minuscula/x.png",
    y: "img/minuscula/y.png",
    z: "img/minuscula/z.png",
};
const container = document.getElementById("container");

let letrasMostradas = [];
let palabra = "";
let acento = "";
let score = 0;

const gameDuration = 60;
let timer = gameDuration;
let countdownInterval;
let countdownLetras;
let isPaused = true;

function inicioJuego() {
    countdownInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            updateTimer();
        } else {
            clearInterval(countdownInterval);
            clearInterval(countdownLetras);
            if (score <= 0) {
                isPaused = false;
                var audio = new Audio("../../sounds/game_over.mp3");
                audio.play();
                document.getElementById("final").style.backgroundImage =
                    "url(../../images/derrota.gif)";
                document.getElementById("texto_final").innerText =
                    "No has logrado obtener ningún punto";
            } else {
                document.getElementById("final").style.backgroundImage =
                    "url(../../images/victoria.gif)";
                var audio = new Audio("../../sounds/victory.mp3");
                audio.play();
                document.getElementById("texto_final").innerText =
                    "Has obtenido " + score + " puntos";
            }
        }
    }, 1000);

    countdownLetras = setInterval(() => {
        const letters = Object.keys(letras);
        const randomLetter =
            letters[Math.floor(Math.random() * letters.length)];
        const box = createBox(randomLetter);
        const intervalId = setInterval(() => {
            const bottom = parseInt(box.style.bottom) || 0;

            if (bottom > window.innerHeight) {
                if (container.contains(box)) {
                   
                    container.removeChild(box);
                }
                clearInterval(intervalId);
            } else {
                console.log(isPaused);
                if (isPaused) {
                    box.style.bottom = `${bottom + 2}px`;
                }
            }
        }, 16);
    }, 1000);
}

function updateTimer() {
    document.getElementById(
        "timer_sec"
    ).innerText = `Tiempo restante: ${timer} s`;
}

function createBox(letter) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `<img src="${letras[letter]}" alt="${letter}">`;
    box.style.left = `${Math.random() * (window.innerWidth - 30)}px`;
    box.style.bottom = "0";
    container.appendChild(box);

    const intervalId = setInterval(() => {
        const bottom = parseInt(box.style.bottom) || 0;

        if (bottom > window.innerHeight) {
            if (container.contains(box)) {
                container.removeChild(box);
            }
            clearInterval(intervalId);
         
            if (isVowel(letter)) {
              isPaused = false;
                $("#principal").fadeToggle(1000);
                $("#final").fadeToggle(1000);
                clearInterval(countdownInterval);
                var audio = new Audio("../../sounds/game_over.mp3");
                audio.play();
                document.getElementById("final").style.backgroundImage =
                    "url(../../images/derrota.gif)";
                document.getElementById("texto_final").innerText =
                    "Has dejado escapar una vocal";
            }
        } else if (bottom <= 0 && isVowel(letter)) {
            stopAllBoxes();
        } else if (!isPaused) {
            if (isPaused) {
                box.style.bottom = `${bottom + 2}px`;
            }
        }
    }, 16);

    box.addEventListener("mouseover", () => {
        if (isVowel(letter)) {
            box.classList.add("desintegrar");
            setTimeout(() => {
                container.removeChild(box);
            }, 200);

            score++;
        } else {
            box.classList.add("red");
            setTimeout(() => {
                box.classList.remove("red");
            }, 500);
            score--;
        }
    });

    return box;
}

function isVowel(letter) {
    return ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"].includes(
        letter.toUpperCase()
    );
}

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");

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
                        "Hola!, Soy genio, En este juego deberás desaparecer con la varita mágica todas la vocales. Evita que escapen. Tu puedes!!!",
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

function stopAllBoxes() {
    clearInterval(countdownInterval);
    clearInterval(countdownLetras);
    isPaused = true;
    const allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach((box) => {
        const bottom = parseInt(box.style.bottom) || 0;
        box.style.bottom = `${bottom}px`;
    });
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

            updateTimer();
            inicioJuego();
        }, 2000);
    }, 2000);
}
