// Array con las preguntas y respuestas
const partesPlanta = [
    {
        image: "img/hojas.png",
        options: ["Tallo", "Raíces", "Hojas"],
        correcta: 2,
    },
    {
        image: "img/flores.png",
        options: ["Raíces", "Flores", "Hojas"],
        correcta: 1,
    },
    {
        image: "img/frutos.png",
        options: ["Frutos", "Tallo", "Raíces"],
        correcta: 0,
    },
    {
        image: "img/tallo.png",
        options: ["Hojas", "Tallo", "Frutos"],
        correcta: 1,
    },
    {
        image: "img/raices.png",
        options: ["Tallo", "Raíces", "Hojas"],
        correcta: 1,
    },
];

const ClasificacionPlantas = [
    {
        image: "img/hierba.png",
        options: ["Flores", "Hierba", "Árboles"],
        correcta: 1,
    },
    {
        image: "img/arbusto.png",
        options: ["Arbusto", "No es un Planta", "Flores"],
        correcta: 0,
    },
    {
        image: "img/arboles.png",
        options: ["Árboles", "Hierba", "Hierbas"],
        correcta: 0,
    },
    {
        image: "img/flores.png",
        options: ["Ninguna", "Árboles", "Arbusto"],
        correcta: 0,
    },
];

let imagenes = [
    {
        url: "img/agua.png",
        tipo: "vivir",
    },
    {
        url: "img/aire.png",
        tipo: "vivir",
    },
    {
        url: "img/sol.png",
        tipo: "vivir",
    },
    {
        url: "img/tierra.png",
        tipo: "vivir",
    },
    {
        url: "img/jugo.png",
        tipo: "morir",
    },
    {
        url: "img/comida.png",
        tipo: "morir",
    },
    {
        url: "img/pez.png",
        tipo: "morir",
    },
    {
        url: "img/refrescos.png",
        tipo: "morir",
    },
];

// Variables globalesp
let currentQuestion = 0;
let npreg = 0;
let score = 0;
let cplan = 0;
let PreguntasMostradas = [];

function seleccionar(elemento, letra) {
    let audio = "";
    switch (letra) {
        case 1:
            questions = partesPlanta;
            categoria = "Identifica las Partes de las Plantas";
            audio = new Audio("../../sounds/PartedePlantas.mp3");
            textTitulo =
                "Hola, soy Genio. <br> En este juego debes identificar la parte de la plantas que se muestra en la imagen, seleccionando la respuesta correctamente.";
            break;
        case 2:
            questions = ClasificacionPlantas;
            categoria = "Identifica la Clasificación de las Plantas";
            audio = new Audio("../../sounds/ClasificacionPlantas.mp3");
            textTitulo =
                "Hola, soy Genio. <br> En este juego debes identificar la clasificación de la plantas que se muestra en la imagen, seleccionando la respuesta correctamente.";

            break;
        case 3:
            categoria = "¿Que Necesitan las plantas para Vivir?";
            audio = new Audio("../../sounds/cuidalaPlanta.mp3");
            textTitulo =
                "Hola, soy Genio. <br> En este juego debes arrastrar los elementos que nececesita la planta para poder vivir.";

            break;
        default:
            break;
    }

    elemento.classList.add("seleccionado");

    document.getElementById("categoria").innerText = categoria;

    audio.play();

    setTimeout(function () {
        swal.close();
        if (letra == 3) {
            CargarJuegoPlanta(textTitulo);
        } else {
            CargaPregunta(textTitulo);
        }
    }, 2000);
}

// Función para mostrar la pregunta actual
let flag = true;
function CargaPregunta(textTitulo) {
    if (flag) {
        cargarPresentacion(textTitulo);
    }
    flag = false;

    const questionContainer = document.getElementById("imgpreg");
    const pregunta = document.getElementById("pregunta");
    const optionsContainer = document.getElementById("div-opciones");

    // Mostrar la imagen  de la aprte de la plata
    const image = document.createElement("img");
    currentQuestion = obtenerIndiceAleatorio12(questions);

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

function CargarJuegoPlanta(textTitulo) {
    cargarPresentacion(textTitulo);
    document.getElementById("opcion12").style.display = "none";
    document.getElementById("opcion3").style.display = "block";
    mostrarImagenes();
}

// Función para obtener el indice aleatorio
function obtenerIndiceAleatorio12(lista) {
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
    const correcta = questions[currentQuestion].correcta;
    questionContainer.innerHTML = "";

    // Mostrar la imagen del lugar
    const image = document.createElement("img");

    image.width = "300";

    if (
        selectedOption.textContent ===
        questions[currentQuestion].options[correcta]
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
    if (npreg < questions.length) {
        CargaPregunta();
    } else {
        $("#principal").fadeToggle(1000);
        $("#final").fadeToggle(1000);

        let prom = questions.length / 2;

        if (score <= prom) {
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
            " preguntas de " +
            questions.length;

    }
}

function elegir() {
    let audio = new Audio("../../sounds/enunciado_plantas.mp3");
    audio.play();

    Swal.fire({
        title: "Selecciona una Categoria",
        icon: "info",
        html:
            '<div style="padding-top: 20px"  class="divopciones">' +
            '<div style="margin:15px;">' +
            '<a href="#" class="card partes">' +
            '<div class="cor__cobertura"></div>' +
            '<div class="circulo">' +
            '<img onclick="seleccionar(this, 1)" class="imagen_Planta imagen2" src="img/categotia1.png" alt="">' +
            "</div>" +
            "</a></div>" +
            '<div style="margin:15px;">' +
            '<a href="#" class="card cate">' +
            '<div class="cor__cobertura"></div>' +
            '<div class="circulo">' +
            '<img onclick="seleccionar(this, 2)"" class="imagen_Planta imagen2" src="img/categotia2.png" alt="">' +
            "</div>" +
            '</a></div><div style="margin:15px;">' +
            '<a href="#" class="card cuida">' +
            '<div class="cor__cobertura"></div>' +
            '<div class="circulo">' +
            '<img onclick="seleccionar(this, 3)"" class="imagen_Planta imagen3" src="img/categotia3.png" alt="">' +
            "</div>" +
            "</a></div></div>",
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        focusConfirm: false,
    });
}

let imagenesMostradas = [];

function obtenerIndiceAleatorio(imagenes) {
    let indice = Math.floor(Math.random() * imagenes.length);
    while (imagenesMostradas.includes(indice)) {
        indice = Math.floor(Math.random() * imagenes.length);
    }
    imagenesMostradas.push(indice);

    return imagenes[indice];
}

function mostrarImagenes() {
    let contenedor = document.getElementById("div-elementos");
    var lef_p = 270;
    for (let i = 0; i < 8; i++) {
        let imagenObj = obtenerIndiceAleatorio(imagenes);

        let imagenContenedor = document.createElement("img");
        
        imagenContenedor.classList.add("item-element");
        imagenContenedor.setAttribute("src", imagenObj.url);
        imagenContenedor.setAttribute("alt", imagenObj.tipo);
        imagenContenedor.setAttribute("id", imagenObj.tipo);
        imagenContenedor.setAttribute("draggable", "true");
        imagenContenedor.style.width = "90px";
        imagenContenedor.style.position = "absolute";
        imagenContenedor.style.top = "15px";
        imagenContenedor.style.left = lef_p+"px";

        imagenContenedor.addEventListener('touchstart', mover_tactil);
        imagenContenedor.addEventListener('touchmove', mover_tactil2);
        imagenContenedor.addEventListener("touchend", drop);

        contenedor.appendChild(imagenContenedor);

        lef_p += 100;
    }
}

const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

//For touchscreen movement
var initialXx = 0;
var initialYy = 0;

var top_o = 0;
var left_o = 0;
var corriendo = false;

function mover_tactil(event) {
    event.preventDefault();
    // Obtener la posición inicial del dedo
    initialXx = event.touches[0].clientX - event.target.offsetLeft;
    initialYy = event.touches[0].clientY - event.target.offsetTop;
    currentElement = event.target;

    if(!corriendo){
        corriendo = true;
        top_o = currentElement.style.top;
        left_o = currentElement.style.left;
    }
}

function mover_tactil2(event) {
    event.preventDefault();
    // Obtener la posición actual del dedo
    var currentX = event.touches[0].clientX - initialXx;
    var currentY = event.touches[0].clientY - initialYy;

    // Actualizar la posición de la div
    event.target.style.left = currentX + 'px';
    event.target.style.top = currentY + 'px';
}

const drop = (e) => {
    e.preventDefault();
    const binId = currentElement.getAttribute("id");
    const item = document.querySelector(".opcion3");
    const itemId = item.getAttribute("data-id");

    const binIdRect = currentElement.getBoundingClientRect();
    const itemRect  = item.getBoundingClientRect();

    const samePosition = binIdRect.left >= itemRect.left && binIdRect.right <= itemRect.right && binIdRect.top >= itemRect.top && binIdRect.bottom <= itemRect.bottom;
    corriendo = false;
    if(samePosition){
        if (binId === itemId) {
            score += 10;

            var image1 = document.getElementById("cicloPlanta" + cplan);
            var image3 = document.getElementById("morir" + cplan);

            cplan++;
            var image2 = document.getElementById("cicloPlanta" + cplan);
            image1.style.opacity = 0;
            image3.style.opacity = 0;
            image2.style.opacity = 1;

            currentElement.remove();

            if (cplan == 4) {
                $("#principal").fadeToggle(1000);
                $("#final").fadeToggle(1000);
                if (score <= 0) {
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
                document.getElementById("texto_final").innerText = "Has obtenido " + score + " puntos";
            }
        } else {
            var image1 = document.getElementById("cicloPlanta" + cplan);
            var image2 = document.getElementById("morir" + cplan);
            image1.style.opacity = 0;
            image2.style.opacity = 1;

            score -= 5;
            currentElement.remove();
        }  
    }else{
        currentElement.style.position = "absolute",
        currentElement.style.top = top_o;
        currentElement.style.left = left_o;
    }             
}

elegir();

function cargarPresentacion(textTitulo) {
   

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
                    maquina2("bienvenida", textTitulo, 100, 1);
                }, 3000);
            }, 2000);
        });
    }, 200);
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
    if(!cerrardo) {
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

