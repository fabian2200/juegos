document.addEventListener("DOMContentLoaded", () => {
    //Activar Listeners Modales
    var mds = document.querySelectorAll("[data-id]");
    mds.forEach(function (md) {
        md.addEventListener("click", openModal, false);
    });

    var closes = document.querySelectorAll(".md-close");
    closes.forEach(function (close) {
        close.addEventListener("click", closeModal, false);
    });
    document
        .querySelector(".md-overlay")
        .addEventListener("click", closeModal, false);
});

const imgPosition = (el) => {
    const rect = el.getBoundingClientRect();
    return {
        top: rect.top + "px",
        left: rect.left + "px",
        width: rect.width + "px",
        height: rect.height + "px",
    };
};

const move = (el, position) => {
    el.style.left = position.left;
    el.style.top = position.top;
    el.style.width = position.width;
    el.style.height = position.height;
};

const openModal = (id) => {
    const modal = document.querySelector("#modal");
    modal.classList.add("md--active");

    document.getElementById("npreg").innerHTML = "Pregunta " + id;

    const bg = document.createElement("div");
    bg.classList.add("bg-animation");
    window.addEventListener("load", quiz.init);
};

const closeModal = () => {
    if (document.querySelector(".md--active"))
        document.querySelector(".md--active").classList.remove("md--active");
};

var imagenes = new Array(
    ["img/1.png", "1"],
    ["img/2.png", "2"],
    ["img/3.png", "3"],
    ["img/4.png", "4"],
    ["img/5.png", "5"],
    ["img/6.png", "6"]
);
let curImage = 0;
var img = "";
var dad1;
var dad2;
let maxId = 0;
let dadMostrados = [];

function lanzarDados() {
    rotarImagenes(0, 5);
}

function rotarImagenes(i, n) {
    if (i < n) {
        const imagen = document.getElementById("dado1_1");
        const imagen2 = document.getElementById("dado1_2");
        imagen.style.opacity = "1";
        dad1 = Math.floor(Math.random() * 6);
        dad2 = Math.floor(Math.random() * 6);
        //imagen1
        imagen.style.opacity = "1";
        imagen.src = imagenes[dad1 % imagenes.length][0];
        imagen.alt = imagenes[dad1 % imagenes.length][1];
        imagen.setAttribute("data-id", imagenes[dad1 % imagenes.length][1]);

        //imagen2
        imagen2.style.opacity = "1";
        imagen2.src = imagenes[dad2 % imagenes.length][0];
        imagen2.alt = imagenes[dad2 % imagenes.length][1];
        imagen2.setAttribute("data-id", imagenes[dad2 % imagenes.length][1]);
        setTimeout(function () {
            rotarImagenes(i + 1, n);
        }, 500);
    } else {
        maxId = 0;

        $(".opacidad").each(function () {
            maxId = maxId + parseInt($(this).attr("data-id"));
        });

        let id_temp = maxId;
        let bandera = false;

        for (let index = 0; index < dadMostrados.length; index++) {
            const element = dadMostrados[index];
            if (element == id_temp) {
                bandera = true;
                break;
            }
        }

        if (!bandera) {
            dadMostrados.push(id_temp);
            recorrerDivs();
        } else {
            rotarImagenes(0, 5);
        }
    }

    // cambiamos la imagen y el alt
}

function recorrerDivs() {
    maxId = 0;
    $(".opacidad").each(function () {
        maxId = maxId + parseInt($(this).attr("data-id"));
    });

    const divs = document.querySelectorAll(".img-wrapper");
    const ids = Array.from(divs).map((div) =>
        parseInt(div.getAttribute("data-id"))
    );

    let currentId = 1;
    let prevColor = "#FFF"; // Variable para guardar el color anterior
    let intervalId = setInterval(() => {
        divs.forEach((div) => {
            const divId = parseInt(div.getAttribute("data-id"));

            if (divId === currentId) {
                document.getElementById("divAct").value = divId;
                prevColor = div.style.backgroundColor; // Guarda el color anterior
                div.style.backgroundColor = "#FEF229"; // Cam                            bia el fondo a rojo
            } else if (divId === currentId - 1) {
                div.style.backgroundColor = prevColor; // Restaura el color anterior
            }
        });
        if (currentId === maxId) {
            clearInterval(intervalId); // Detiene la función
            openModal(maxId);
        } else {
            currentId++;
        }
    }, 500); // Se ejecuta cada 1000 milisegundos (1 segundo)
}



$(document).ready(function () {
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
                        "Hola, soy Genio. <br> En este juego debes lanzar los dados para abrir una caja de pregunta la cual tendra que ser resuelta.",
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

