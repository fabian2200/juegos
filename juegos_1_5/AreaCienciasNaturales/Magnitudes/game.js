// Array con las preguntas y respuestas
const questions = [
    {
        image: "img/magnitudes/longitud1.png",
        options: ["Longitud ", "Masa", "Temperatura"],
        answer: 0
    },
    {
        image: "img/magnitudes/longitud2.png",
        options: ["Temperatura", "Tiempo", "Longitud"],
        answer: 2
    },
    {
        image: "img/magnitudes/longitud3.png",
        options: ["Tiempo", "Longitud", "Temperatura"],
        answer: 1
    },
    {
        image: "img/magnitudes/longitud4.png",
        options: ["Longitud", "Masa", "Tiempo"],
        answer: 0
    },
    {
        image: "img/magnitudes/longitud5.png",
        options: ["Masa", "Temperatura", "Longitud"],
        answer: 2
    },
    {
        image: "img/magnitudes/masa1.png",
        options: ["Masa", "Longitud", "Temperatura"],
        answer: 0
    },
    {
        image: "img/magnitudes/masa2.png",
        options: ["Longitud", "Masa", "Tiempo"],
        answer: 1
    },
    {
        image: "img/magnitudes/masa3.png",
        options: ["Temperatura", "Tiempo", "Masa"],
        answer: 2
    },
    {
        image: "img/magnitudes/masa4.png",
        options: ["Tiempo", "Masa", "Temperatura"],
        answer: 1
    },
    {
        image: "img/magnitudes/masa5.png",
        options: ["Masa", "Temperatura", "Longitud"],
        answer: 0
    },
    {
        image: "img/magnitudes/tiempo1.png",
        options: ["Temperatura", "Tiempo", "Masa"],
        answer: 1
    },
    {
        image: "img/magnitudes/tiempo2.png",
        options: ["Tiempo", "Masa", "Temperatura"],
        answer: 0
    },
    {
        image: "img/magnitudes/tiempo3.png",
        options: ["Longitud", "Temperatura", "Tiempo"],
        answer: 2
    },
    {
        image: "img/magnitudes/tiempo4.png",
        options: ["Temperatura", "Masa", "Tiempo"],
        answer: 2
    },
    {
        image: "img/magnitudes/tiempo5.png",
        options: ["Tiempo", "Longitud", "Masa"],
        answer: 0
    },{
        image: "img/magnitudes/temperatura1.png",
        options: ["Temperatura", "Longitud", "Masa"],
        answer: 0
    },{
        image: "img/magnitudes/temperatura2.png",
        options: ["Tiempo", "Longitud", "Temperatura"],
        answer: 2
    },{
        image: "img/magnitudes/temperatura3.png",
        options: ["Masa", "Temperatura", "Tiempo"],
        answer: 1
    },{
        image: "img/magnitudes/temperatura4.png",
        options: ["Tiempo", "Masa", "Temperatura"],
        answer: 2
    },{
        image: "img/magnitudes/temperatura5.png",
        options: ["Temperatura", "Longitud", "Tiempo"],
        answer: 0
    },
];

// Variables globales
let currentQuestion = 0;
let npreg = 0;
let score = 0;
let PreguntasMostradas = [];

// Función para mostrar la pregunta actual
function CargaPregunta() {
    const questionContainer = document.getElementById("imgpreg");
    const pregunta = document.getElementById("pregunta");
    const optionsContainer = document.getElementById("div-opciones");

    // Mostrar la imagen del lugar
    const image = document.createElement("img");
    currentQuestion = obtenerIndiceAleatorio(questions);

    image.src = questions[currentQuestion].image;
    image.width = "300";
    questionContainer.appendChild(image);

    // Mostrar las opciones de respuesta

    for (let i = 0; i < 3; i++) {
        const option = document.createElement("div");
        option.textContent = questions[currentQuestion].options[i];
        option.addEventListener("click", selectOption);
        optionsContainer.appendChild(option);
    }
}

// Función para obtener el indice aleatorio
function obtenerIndiceAleatorio(lista) {
    let indice = Math.floor(Math.random() * lista.length);
    while (PreguntasMostradas.includes(indice)) {
        indice = Math.floor(Math.random() * lista.length);
    }
    PreguntasMostradas.push(indice);
    return indice;
}

// Función para seleccionar una opción de respuesta
function selectOption(event) {
    const selectedOption = event.target;
    const options = document.getElementById("div-opciones").children;
    const questionContainer = document.getElementById("imgpreg");

    // Deshabilitar los botones de respuesta
    for (let i = 0; i < options.length; i++) {
        options[i].disabled = true;
    }

    // Comprobar si la respuesta es correcta
    const answer = questions[currentQuestion].answer;
    questionContainer.innerHTML = "";

    // Mostrar la imagen del lugar
    const image = document.createElement("img");

    image.width = "300";

    if (
        selectedOption.textContent ===
        questions[currentQuestion].options[answer]
    ) {
        score++;
        $("#imgpreg").removeClass("imgpred");
        $("#imgpreg").addClass("imgpredResp");

        image.src = "../../images/ciencia/correcto.gif";

    } else {
        $("#imgpreg").removeClass("imgpred");
        $("#imgpreg").addClass("imgpredResp");
        image.src = "../../images/ciencia/incorrecto.gif";

    }
    questionContainer.appendChild(image);

    setTimeout(siguientePregunta, 3000);
}

// Función para mostrar la siguiente pregunta
function siguientePregunta() {
    $("#imgpreg").removeClass("imgpredResp");
    $("#imgpreg").addClass("imgpred");

    // Limpiar la pregunta anterior
    const questionContainer = document.getElementById("imgpreg");
    const optionsContainer = document.getElementById("div-opciones");
    questionContainer.innerHTML = "";
    optionsContainer.innerHTML = "";

    // Mostrar la siguiente pregunta
    npreg++;
    if (npreg < 10) {
        CargaPregunta();
    } else {
        // Mostrar la puntuación final
        $("#principal").fadeToggle(1000);
        $("#final").fadeToggle(1000);

      

        if (score < 6) {
            var audio = new Audio("../../sounds/game_over.mp3");
            audio.play();
            document.getElementById("final").style.backgroundImage =
                "url(../../images/ciencia/derrota.gif)";
        } else {
            document.getElementById("final").style.backgroundImage =
                "url(../../images/ciencia/victoria.gif)";
            var audio = new Audio("../../sounds/victory.mp3");
            audio.play();
        }
        document.getElementById("texto_final").innerText =
            "Has contestado correctamente " +
            score +
            " preguntas de 10";
    }
}

// Mostrar la primera pregunta

$(document).ready(function () {
    CargaPregunta();
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
                        "url(../../images/ciencia/normal2.gif)";
                    maquina2(
                        "bienvenida",
                        "Hola, soy Genio. <br> En este juego debes seleccionar la magnitud física representada en la imagen.",
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

