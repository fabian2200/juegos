var interprete_bp = [];

$(document).ready(function () {

    var base_preguntas = readText("data.json");
    interprete_bp = JSON.parse(base_preguntas);
    interprete_bp = randomValueGenerator(interprete_bp);

    setTimeout(() => {
        $('#principal').fadeToggle(1000);
        $('#fondo_blanco').fadeToggle(3000);
        setTimeout(() => {
            const divAnimado = document.querySelector('.overlay');
            divAnimado.style.animationName = 'moverDerecha';
            divAnimado.style.animationDirection = 'normal';
            divAnimado.style.display = 'block';
            setTimeout(() => {
                const divAnimado2 = document.querySelector('.nube');
                divAnimado2.style.animationName = 'moverArriba';
                divAnimado2.style.animationDirection = 'normal';
                divAnimado2.style.display = 'block';
                setTimeout(() => {
                    divAnimado.style.backgroundImage = "url(../../images/normal2.gif)"
                    maquina2("bienvenida", 'Hola, soy Genio. <br> En este juego de ortografia, lanza los dados y completa el texto haciendo uso de mayusculas, signos, puntos, comas, entre otras, responde correctamente mas del 60% para ganar. <br> ¡Tu Puedes!', 50, 1);
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
        var audio = new Audio('../../sounds/fondo.mp3');
        audio.play();
        audio.volume = 0.2;
        
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

function randomValueGenerator(imagenes) {
    return imagenes.sort(function () { return Math.random() - 0.5 });
};


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
    const bg = document.createElement("div");
    bg.classList.add("bg-animation");

    const arrayTexto = interprete_bp[id - 1].split(' ');
    var actualNumero = 0;
    var numeros = generateRandomNumbers(30, 0, interprete_bp[id - 1].split(' ').length - 1);

    for (let index = 0; index < arrayTexto.length; index++) {
        let element = arrayTexto[index];
        if (index == numeros[actualNumero]) {
            if (element.length >= 5) {
                if (element.indexOf("b") !== -1) {
                    arrayTexto[index] = element.replace("b", "<input  onclick='elegir(this)' type='text' id='punto_" + actualNumero + "' data-id='b' class='input_t' placeholder='?'>");
                } else {
                    if (element.indexOf("v") !== -1) {
                        arrayTexto[index] = element.replace("v", "<input  onclick='elegir(this)' type='text'id='punto_" + actualNumero + "' data-id='v' class='input_t' placeholder='?'>");
                    } else {
                        if (element.indexOf("j") !== -1) {
                            arrayTexto[index] = element.replace("j", "<input  onclick='elegir(this)' type='text'id='punto_" + actualNumero + "' data-id='j' class='input_t' placeholder='?'>");
                        } else {
                            if (element.indexOf("g") !== -1) {
                                arrayTexto[index] = element.replace("g", "<input  onclick='elegir(this)' type='text'id='punto_" + actualNumero + "' data-id='g' class='input_t' placeholder='?'>");
                            } else {
                                if (element.indexOf("z") !== -1) {
                                    arrayTexto[index] = element.replace("z", "<input  onclick='elegir(this)' type='text'id='punto_" + actualNumero + "' data-id='z' class='input_t' placeholder='?'>");
                                } else {
                                    if (element.indexOf("s") !== -1) {
                                        arrayTexto[index] = element.replace("s", "<input  onclick='elegir(this)' type='text'id='punto_" + actualNumero + "' data-id='s' class='input_t' placeholder='?'>");
                                    } else {
                                        if (element.includes("c") && element.indexOf("c") !== 0 && element.lastIndexOf("c") !== element.length - 1) {
                                            arrayTexto[index] = element.replace("c", "<input  onclick='elegir(this)' type='text'id='punto_" + actualNumero + "' data-id='c' class='input_t' placeholder='?'>");
                                        } else {

                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                if (element.indexOf("á") !== -1) {
                    arrayTexto[index] = arrayTexto[index].replace("á", "<input  onclick='elegir(this)' type='text'id='punto_tilde_" + actualNumero + "' data-id='á' class='input_t' placeholder='?'>");
                } else {
                    if (element.indexOf("é") !== -1) {
                        arrayTexto[index] = arrayTexto[index].replace("é", "<input  onclick='elegir(this)' type='text'id='punto_tilde_" + actualNumero + "' data-id='é' class='input_t' placeholder='?'>");
                    } else {
                        if (element.indexOf("í") !== -1) {
                            arrayTexto[index] = arrayTexto[index].replace("í", "<input  onclick='elegir(this)' type='text'id='punto_tilde_" + actualNumero + "' data-id='í' class='input_t' placeholder='?'>");
                        } else {
                            if (element.indexOf("ó") !== -1) {
                                arrayTexto[index] = arrayTexto[index].replace("ó", "<input  onclick='elegir(this)' type='text'id='punto_tilde_" + actualNumero + "' data-id='ó' class='input_t' placeholder='?'>");
                            } else {
                                arrayTexto[index] = arrayTexto[index].replace("ú", "<input  onclick='elegir(this)' type='text'id='punto_tilde_" + actualNumero + "' data-id='ú' class='input_t' placeholder='?'>");

                            }
                        }
                    }
                }

                if (index != 0) {
                    let elemento_anterior = arrayTexto[index - 1];
                    if (elemento_anterior[elemento_anterior.length - 1] == ".") {
                        arrayTexto[index] = element.replace(arrayTexto[index][0], "<input  onclick='elegir(this)' type='text'id='punto_" + actualNumero + "' data-id='" + arrayTexto[index][0] + "' class='input_t' placeholder='?'>");
                    }
                }
            }
            actualNumero++;
        }
    }
    let miString = arrayTexto.join(' ');
    miString = "<p>" + miString + "</p>";
    document.getElementById("quizWrap").innerHTML = miString;
};

function generateRandomNumbers(n, min, max) {
    let numbers = [];

    while (numbers.length < n) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNumber) && (randomNumber % 2) == 0) {
            numbers.push(randomNumber);
        }
    }

    return numbers.sort((a, b) => a - b);
}

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

let lanzados = 0;
function lanzarDados() {
    lanzados++;
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

let idElemento = "";
function elegir(elemento) {
    idElemento = elemento;
    Swal.fire({
        title: 'Selecciona la letra para completar la palabra',
        html: '<div style="padding-top: 20px"  class="row">' +
            '<div class="col-12"><h2>Minusculas</h2></div>' +
            '<div style="margin-top: 5px" class="col-12"><div class="flex-row" id="abcdario"></div></div>' +
            '<div style="margin-top: 20px" class="col-12"><h2>Mayusculas</h2></div>' +
            '<div style="margin-top: 5px" class="col-12"><div class="flex-row" id="abcdarioMayuscula"></div></div>' +
            '<div style="margin-top: 20px" class="col-12"><h2>Acentuaciones</h2></div>' +
            '<div style="margin-top: 5px" class="col-12"><div class="flex-row" id="acentuaciones"></div></div>' +
            '</div>',
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        focusConfirm: false,
    });

    setTimeout(() => {
        generaABC("a", "z");
    }, 200)

}

//Generar abecedario
function generaABC(a, z) {
    document.getElementById("abcdario").innerHTML = "";
    document.getElementById("acentuaciones").innerHTML = "";
    document.getElementById("abcdarioMayuscula").innerHTML = "";

    var i = a.charCodeAt(0), j = z.charCodeAt(0);
    var letra = "";
    for (; i <= j; i++) {
        letra = String.fromCharCode(i).toUpperCase();
        document.getElementById("abcdario").innerHTML += '<button onclick="intento(\'' + letra.toLocaleLowerCase() + '\')" class="letra">' + letra.toLocaleLowerCase() + '</button>';
        if (i == 110) {
            document.getElementById("abcdario").innerHTML += '<button onclick="intento(\'ñ\')" class="letra">ñ</button>';
        }
    }

    document.getElementById("acentuaciones").innerHTML += '<button onclick="intento(\'á\')" class="letra">á</button>';
    document.getElementById("acentuaciones").innerHTML += '<button onclick="intento(\'é\')" class="letra">é</button>';
    document.getElementById("acentuaciones").innerHTML += '<button onclick="intento(\'í\')" class="letra">í</button>';
    document.getElementById("acentuaciones").innerHTML += '<button onclick="intento(\'ó\')" class="letra">ó</button>';
    document.getElementById("acentuaciones").innerHTML += '<button onclick="intento(\'ú\')" class="letra">ú</button>';

    var i = a.charCodeAt(0), j = z.charCodeAt(0);
    for (; i <= j; i++) {
        letra = String.fromCharCode(i).toUpperCase();
        document.getElementById("abcdarioMayuscula").innerHTML += '<button onclick="intento(\'' + letra + '\')" class="letra">' + letra + '</button>';
        if (i == 110) {
            document.getElementById("abcdarioMayuscula").innerHTML += '<button onclick="intento(\'ñ\')" class="letra">ñ</button>';
        }
    }
}

let intentos = 0;
var inputs = null;
var palabras_correctas = 0;

function intento(letra) {
    Swal.close();
    idElemento.value = letra;
    idElemento.setAttribute("onclick", "");
    idElemento.setAttribute("disabled", true);
    idElemento.classList.remove("input_t");
    idElemento.classList.add("respondido");
    intentos++;

    let input1 = document.getElementsByClassName("input_t");
    let input2 = document.getElementsByClassName("respondido");

    inputs = [];
    for (let index = 0; index < input2.length; index++) {
        const element = input2[index];
        inputs.push(element);
    }

    for (let index = 0; index < input1.length; index++) {
        const element = input1[index];
        inputs.push(element);
    }

    if (inputs.length == intentos) {
        intentos = 0;
        palabras_correctas = 0;
        palabras_global += inputs.length;
        calificar(0, inputs.length - 1);
    }
}

let palabras_global = 0;
let correctas_global = 0;
function calificar(i, n) {
    if (i <= n) {
        let signo = inputs[i];

        if (signo.getAttribute("data-id") == signo.value) {
            signo.style.backgroundColor = "#238d23";
            signo.style.borderColor = "#238d23";
            palabras_correctas++;
            correctas_global++;
        } else {
            signo.style.backgroundColor = "#f5153e";
            signo.style.borderColor = "#f5153e";
        }

        setTimeout(function () {
            calificar(i + 1, n);
        }, 800);
    } else {

        if ((palabras_correctas / inputs.length) * 100 > 60) {
            Swal.fire({
                position: "center",
                imageUrl: "../../images/correcto.gif",
                imageWidth: 250,
                imageHeight: 250,
                title: palabras_correctas + '/' + inputs.length + ' palabras correctas.',
                showConfirmButton: false,
                timer: 2500,
            });
        } else {
            Swal.fire({
                position: "center",
                imageUrl: "../../images/incorrecto.gif",
                imageWidth: 250,
                imageHeight: 250,
                title: palabras_correctas + '/' + inputs.length + ' palabras correctas.',
                showConfirmButton: false,
                timer: 2500,
            });
        }

        setTimeout(() => {
            document.querySelector(".md--active").classList.remove("md--active");
            if (lanzados == 4) {
                $('#principal').fadeToggle(500);
                setTimeout(() => {
                    $('#final').fadeToggle(1000);
                }, 500)
                if ((correctas_global / palabras_global) + 100 < 60) {
                    document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
                } else {
                    document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
                }
                document.getElementById("texto_final").innerText = "Has contestado correctamente " + ((correctas_global / palabras_global) * 100).toFixed(2) + "%"

                if (correctas >= 6) {
                    var audio = new Audio('../../sounds/victory.mp3');
                    audio.play();
                } else {
                    var audio = new Audio('../../sounds/game_over.mp3');
                    audio.play();
                }
            }
        }, 2500)
    }
}
