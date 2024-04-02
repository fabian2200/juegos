const sistemaOseo = [
    {
        parte: "Cráneo",
        pista: "Forma la estructura ósea de la cabeza y protege el cerebro",
        id: 1,
    },
    {
        parte: "Columna vertebral",
        pista: "Protege la médula espinal y proporciona soporte para el cuerpo",
        id: 2,
    },
    {
        parte: "Costillas",
        pista: "Protegen los órganos vitales del tórax, como el corazón y los pulmones",
        id: 3,
    },
    {
        parte: "Esternón",
        pista: "Es un hueso plano que se encuentra en la parte anterior del tórax",
        id: 4,
    },
    {
        parte: "Pelvis",
        pista: "Soporta el peso del cuerpo y protege los órganos reproductores",
        id: 5,
    },
    {
        parte: "Húmero",
        pista: "Es el hueso del brazo que se extiende desde el hombro hasta el codo",
        id: 6,
    },
    {
        parte: "Cúbito",
        pista: "Es uno de los dos huesos del antebrazo y se encuentra en el lado interno",
        id: 7,
    },
    {
        parte: "Radio",
        pista: "Es uno de los dos huesos del antebrazo y se encuentra en el lado externo",
        id: 8,
    },
    {
        parte: "Fémur",
        pista: "Es el hueso más largo y fuerte del cuerpo humano y se encuentra en el muslo",
        id: 9,
    },  
    {
        parte: "Tibia",
        pista: "Es uno de los dos huesos de la pierna y se encuentra en la parte interna",
        id: 10,
    },
    {
        parte: "Peroné",
        pista: "Es uno de los dos huesos de la pierna y se encuentra en la parte externa",
        id: 11,
    },
];

const sistemaDigestivo = [
    {
        parte: "Boca",
        pista: "Lugar donde comienza la digestión mecánica y química de los alimentos",
        id: 1,
    },
    {
        parte: "Faringe",
        pista: "Conduce el bolo alimenticio desde la boca hasta el esófago",
        id: 2,
    },
    {
        parte: "Esófago",
        pista: "Conduce el bolo alimenticio desde la faringe hasta el estómago",
        id: 3,
    },
    {
        parte: "Estómago",
        pista: "Lugar donde se lleva a cabo la digestión química de los alimentos",
        id: 4,
    },
    {
        parte: "Intestino delgado",
        pista: "Lugar donde se lleva a cabo la absorción de nutrientes",
        id: 5,
    },
    {
        parte: "Intestino grueso",
        pista: "Lugar donde se absorbe agua y se forman las heces",
        id: 6,
    },
    {
        parte: "Recto",
        pista: "Almacena las heces antes de su eliminación",
        id: 7,
    },
    {
        parte: "Ano",
        pista: "Lugar de eliminación de las heces",
        id: 8,
    },
    {
        parte: "Hígado",
        pista: "Órgano vital que produce bilis y ayuda en la digestión y eliminación de toxinas",
        id: 9,
    },
];

let correctas = 0;
let cont = 0;
let avatar = "";
let parteMostrada = [];
let x = 1;
let parteAct = "";
let pista = "";
let i = 0;
const velocidad = 50; // velocidad de escritura en milisegundos

let modal = document.getElementById("miModal");
let flex = document.getElementById("flex");
//let abrir = document.getElementById("abrirPista");
let cerrar = document.getElementById("close");

function elegir() {
    Swal.fire({
        title: "Selecciona una Categoria",
        icon: "info",
        html:
            '<div style="padding-top: 20px"  class="divopciones">' +
            '<div style="margin:15px;">' +
            '<a class="card partes">' +
            '<div class="cor__cobertura"></div>' +
            '<div class="circulo">' +
            '<img onclick="seleccionar(this, 1)" class="imagen_Planta imagen2" src="img/catSistemaOseo.png" alt="">' +
            "</div>" +
            "</a></div>" +
            '<div style="margin:15px;">' +
            '<a class="card cate">' +
            '<div class="cor__cobertura"></div>' +
            '<div class="circulo">' +
            '<img onclick="seleccionar(this, 2)"" class="imagen_Planta imagen2" src="img/catSistemaDigestivo.png" alt="">' +
            "</div>" +
            '</a></div><div style="margin:15px;">' +
            '<a class="card cuida">' +
            '<div class="cor__cobertura"></div>' +
            '<div class="circulo">' +
            '<img onclick="seleccionar(this, 3)"" class="imagen_Planta imagen3" src="img/catSistemaRespiratorio.png" alt="">' +
            "</div>" +
            "</a></div></div>",
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        focusConfirm: false,
    });
}

function seleccionar(elemento, letra) {
    switch (letra) {
        case 1:
            categoria = "Identifica las partes del Sistema Óseo.";
            textTitulo =
            "Hola, soy Genio. <br> En este juego debes dar click en la parte del sistema Óseo mostrada.";
            break;
        case 2:
            categoria = "Identifica las partes del Sistema Digestivo.";
            textTitulo =
            "Hola, soy Genio. <br> En este juego debes dar click en la parte del sistema Digestivo mostrada.";
            break;
        case 3:
            categoria = "Contesta las Siguientes Preguntas.";
            textTitulo =
            "Hola, soy Genio. <br> En este juego debes responder correctamenta a las preguntas mostradas.";
            break;
    }

    elemento.classList.add("seleccionado");

    document.getElementById("categoria").innerText = categoria;

    setTimeout(function () {
        swal.close();
        if (letra == 1) {
            CargarJuegoSOseo(textTitulo);
        } else if (letra == 2) {
            CargarJuegoSDigestivo(textTitulo);
        } else {
            CargarJuegoSRespiratorio(textTitulo);
        }
    }, 2000);
}

////INICIO JUEGO PISOS TERMINCOS CATEGORIA 1
let flag = true;

function CargarJuegoSOseo() {

    if (flag) {
        cargarPresentacion(textTitulo);
    }

    flag = false;
    document.getElementById("opcion1").style.display = "block";
    let arrayParte = obtenerIndiceAleatorio1(sistemaOseo);

    document.getElementById("mensaje-clic").innerHTML = arrayParte.parte;
    pista = arrayParte.pista;
    console.log(pista);
    parteAct = arrayParte.id;
    i = 0;
}

function CargarJuegoSDigestivo() {
    if (flag) {
        cargarPresentacion(textTitulo);
    }
    flag = false;
    document.getElementById("opcion2").style.display = "block";
    let arrayParte = obtenerIndiceAleatorio1(sistemaDigestivo);
    document.getElementById("mensaje-clic2").innerHTML = arrayParte.parte;
    pista = arrayParte.pista;
    parteAct = arrayParte.id;
    i = 0;
}

function CargarJuegoSRespiratorio() {
    cargarPresentacion(textTitulo);

    document.getElementById("opcion3").style.display = "block";
    document.getElementById("abrirPista").style.display = "none";
    iniciarTrivia();
}

function obtenerIndiceAleatorio1(sistema) {
    let indice = Math.floor(Math.random() * sistema.length);
    while (parteMostrada.includes(indice)) {
        indice = Math.floor(Math.random() * sistema.length);
    }
    parteMostrada.push(indice);

    return sistema[indice];
}

let contador = 0;
function ValidarParte1(id) {
    contador++;
    var article = document.getElementById(id);
    var idsel = article.dataset.id;

    if (idsel == parteAct) {
        correctas++;
        article.style.color = "#01E675";

        $("#" + id).removeClass("pulse-effect-infinite");
    } else {
        article.style.color = "#d33f25";
        $("#" + id).removeClass("pulse-effect-infinite");
    }

    if (contador <= 10) {
        CargarJuegoSOseo();
    } else {
          $("#principal").fadeToggle(1000);
        $("#final").fadeToggle(1000);
        if (correctas < 6) {
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
            "Has obtenido " + correctas + " puntos de 11 posibles";

    }
}

function ValidarParte2(id) {
    contador++;
    var article = document.getElementById(id);
    var idsel = article.dataset.id;

    if (idsel == parteAct) {
        correctas++;
        article.style.color = "#01E675";

        $("#" + id).removeClass("pulse-effect-infinite");
    } else {
        article.style.color = "#d33f25";
        $("#" + id).removeClass("pulse-effect-infinite");
    }

    if (contador <= 8) {
        CargarJuegoSDigestivo();
    } else {
        $("#principal").fadeToggle(1000);
        $("#final").fadeToggle(1000);
        if (correctas < 5) {
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
            "Has obtenido " + correctas + " puntos de 9 posibles";

    }
}

function abrirPista() {
    cerrado = true;
    $("#bienvenida").html("");
    cargarPresentacion(pista);
}


elegir();


function cargarPresentacion(textTitulo) {
    let audio2 = new Audio("../../sounds/fondo.mp3");
    audio2.play();
    audio2.volume = 0.2;

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
    if (!cerrardo) {
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