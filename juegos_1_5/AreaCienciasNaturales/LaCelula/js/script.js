const celulaAnimal = [
    {
        parte: "La Membrana",
        pista: "Es una capa fina y flexible que controla el paso de sustancias dentro y fuera de la célula.",
        id: 1,
    },
    {
        parte: "El Citoplasma",
        pista: "Es la parte de la célula donde se encuentran los orgánulos y se lleva a cabo el metabolismo celular.",
        id: 2,
    },
    {
        parte: "El Núcleo",
        pista: "Es la parte de la célula que alberga el ADN y es responsable de la regulación de la expresión génica.",
        id: 3,
    },
    {
        parte: "La Mitocondria",
        pista: "Es la parte de la célula que produce la mayor parte de la energía necesaria para el funcionamiento celular.",
        id: 4,
    },
    {
        parte: "Los Ribosomas",
        pista: "Son los orgánulos encargados de la síntesis de proteínas en la célula.",
        id: 5,
    },
    {
        parte: "El Retículo endoplásmico",
        pista: "Es una red de membranas que se encarga de la síntesis, procesamiento y transporte de proteínas y lípidos en la célula.",
        id: 6,
    },
    {
        parte: "El Aparato de Golgi",
        pista: "Es un orgánulo encargado del procesamiento y transporte de proteínas y lípidos hacia su destino final en la célula.",
        id: 7,
    },

    {
        parte: "Los Lisosomas",
        pista: "Son los orgánulos encargados de la digestión y reciclaje de materiales celulares.",
        id: 9,
    },
    {
        parte: "El Centriolo",
        pista: "Es un orgánulo formado por dos cilindros de microtúbulos perpendiculares entre sí, que juega un papel importante en la división celular.",
        id: 10,
    },
    {
        parte: "Los Microtúbulos",
        pista: "Son estructuras tubulares formadas por la proteína tubulina, que forman parte del citoesqueleto y juegan un papel importante en la forma y movimiento celular.",
        id: 11,
    },
    {
        parte: "Nucleolo",
        pista: "Es una estructura esférica dentro del núcleo celular que produce ribosomas y es esencial para la síntesis de proteínas.",
        id: 12,
    },
];

const celulaVegetal = [
    {
        parte: "La membrana nuclear",
        pista: "Es una doble capa de lípidos que rodea el núcleo y separa su contenido del citoplasma.",
        id: 1,
    },

    {
        parte: "La pared celular",
        pista: "Es una capa rígida y delgada que da soporte y protección a la célula vegetal.",
        id: 2,
    },

    {
        parte: "El citoplasma",
        pista: "Es el medio interno de la célula que contiene orgánulos y otras estructuras celulares.",
        id: 3,
    },
    {
        parte: "El núcleo",
        pista: "Es la estructura que contiene el material genético de la célula y controla su función y reproducción.",
        id: 4,
    },
    {
        parte: "El nucleolo",
        pista: "Es una estructura esférica no membranosa que se encuentra dentro del núcleo y es responsable de producir los componentes ribosomales de la célula.",
        id: 5,
    },
    {
        parte: "Los cloroplastos",
        pista: "Son orgánulos que contienen clorofila y son responsables de la fotosíntesis en las células vegetales.",
        id: 6,
    },
    {
        parte: "Las mitocondrias",
        pista: "Son orgánulos encargados de la producción de energía a través de la respiración celular.",
        id: 7,
    },
    {
        parte: "El retículo endoplásmico rugoso",
        pista: "Es un sistema de membranas con ribosomas adheridos que transporta y procesa proteínas.",
        id: 8,
    },
    {
        parte: "El aparato de Golgi",
        pista: "Es un orgánulo que procesa y empaca proteínas y lípidos para su transporte fuera de la célula.",
        id: 9,
    },
    {
        parte: "Las vacuolas",
        pista: "Son sacos membranosos que almacenan agua, nutrientes y desechos en las células vegetales.",
        id: 10,
    },
    {
        parte: "Las vesículas membranosas",
        pista: "Son pequeñas estructuras esféricas rodeadas de una bicapa lipídica que contienen y transportan diversas sustancias dentro y fuera de la célula.",
        id: 11,
    },
    {
        parte: "Los tonoplastos",
        pista: "Son orgánulos de la célula vegetal que se encargan de almacenar y transportar sustancias como agua, nutrientes y iones a través de la membrana vacuolar.",
        id: 12,
    },
    {
        parte: "La membrana celular",
        pista: "Es una capa delgada y flexible que rodea la célula y regula el intercambio de sustancias entre el interior y el exterior de la célula.",
        id: 13,
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

function elegir() {
    Swal.fire({
        title: "Selecciona una Categoria",
        icon: "info",
        html:
            '<div style="padding-top: 20px"  class="divopciones">' +
            '<div style="margin:15px;">' +
            '<a  class="card partes">' +
            '<div class="cor__cobertura"></div>' +
            '<div class="circulo">' +
            '<img onclick="seleccionar(this, 1)" class="imagen_Termico imagen2" src="img/categotia1.png" alt="">' +
            "</div>" +
            "</a></div>" +
            '<div style="margin:15px;">' +
            '<a class="card cate">' +
            '<div class="cor__cobertura"></div>' +
            '<div class="circulo">' +
            '<img onclick="seleccionar(this, 2)"" class="imagen_Termico imagen2" src="img/categotia2.png" alt="">' +
            "</div>" +
            "</a></div>",
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
            categoria = "Identifica parte de la célula Animal.";
            textTitulo =
                "Hola, soy Genio. <br> En este juego debes dar click en la parte de la célula animal mostrada.";
            break;
        case 2:
            categoria = "Identifica la parte de la célula Vegetal.";
            textTitulo =
                "Hola, soy Genio. <br> En este juego debes dar click en la parte de la célula vegetal mostrada.";
            break;
    }

    elemento.classList.add("seleccionado");

    document.getElementById("categoria").innerText = categoria;

    setTimeout(function () {
        swal.close();
        if (letra == 1) {
            CargarJuegoCAnimal(textTitulo);
        } else {
            CargarJuegoCVegetal(textTitulo);
        }
    }, 2000);
}

////INICIO JUEGO PISOS TERMINCOS CATEGORIA 1

let flag = true;

function CargarJuegoCAnimal(textTitulo) {
    if (flag) {
        cargarPresentacion(textTitulo);
    }

    flag = false;
    document.getElementById("opcion1").style.display = "block";
    let arrayParte = obtenerIndiceAleatorio(celulaAnimal);
    document.getElementById("mensaje-clic").innerHTML = arrayParte.parte;
    pista = arrayParte.pista;
    parteAct = arrayParte.id;
    i = 0;
}

function obtenerIndiceAleatorio(celula) {
    let indice = Math.floor(Math.random() * celula.length);
    while (parteMostrada.includes(indice)) {
        indice = Math.floor(Math.random() * celula.length);
    }
    parteMostrada.push(indice);

    return celula[indice];
}

function CargarJuegoCVegetal(textTitulo) {
    if (flag) {
        cargarPresentacion(textTitulo);
    }
    flag = false;
    document.getElementById("opcion2").style.display = "block";
    let arrayParte = obtenerIndiceAleatorio(celulaVegetal);
    document.getElementById("mensaje-clic2").innerHTML = arrayParte.parte;
    pista = arrayParte.pista;
    parteAct = arrayParte.id;
    i = 0;
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
    console.log(contador);

    if (contador < 11) {
        CargarJuegoCAnimal();
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
    console.log(contador);

    if (contador < 13) {
        CargarJuegoCVegetal();
    } else {
        $("#principal").fadeToggle(1000);
        $("#final").fadeToggle(1000);
        if (correctas < 7) {
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
            "Has obtenido " + correctas + " puntos de 13 posibles";
    }
}

let modal = document.getElementById("miModal");
let flex = document.getElementById("flex");
let abrir = document.getElementById("abrirPista");
let cerrar = document.getElementById("close");

abrir.addEventListener("click", function () {
    $("#bienvenida").html("");
    cargarPresentacion(pista);
});

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
    if (!cerrardo) {
        cerrardo = true;
        const divAnimado2 = document.querySelector(".nube");
        divAnimado2.style.animationName = "moverabajo";
        const divAnimado = document.querySelector(".overlay");
        divAnimado.style.backgroundImage = "url(../../images/ciencia/normal1.gif)";
        $("#fondo_blanco").fadeToggle(3000);
        setTimeout(function () {
            divAnimado.style.animationName = "moverIzquierda";
            divAnimado.style.animationDirection = "normal";
            setTimeout(() => {
                $("#principal").fadeToggle(1000);
            }, 2000);
        }, 2000);
    }
}
