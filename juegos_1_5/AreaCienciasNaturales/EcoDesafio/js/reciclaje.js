// Array de imágenes
let imagenes = [
    {
        url: "img/elementos/caja-aprovechable.png",
        tipo: "aprovechable",
    },
    {
        url: "img/elementos/papelperiodico.png",
        tipo: "noaprovechable",
    },
    {
        url: "img/elementos/papeles.png",
        tipo: "aprovechable",
    },
    {
        url: "img/elementos/botellavidrio.png",
        tipo: "aprovechable",
    },
    {
        url: "img/elementos/copavidrio.png",
        tipo: "aprovechable",
    },
    {
        url: "img/elementos/botellavidrio2.png",
        tipo: "aprovechable",
    },
    {
        url: "img/elementos/botellavidrio3.png",
        tipo: "aprovechable",
    },
    {
        url: "img/elementos/latausada.png",
        tipo: "noaprovechable",
    },
    {
        url: "img/elementos/lata.png",
        tipo: "aprovechable",
    },
    {
        url: "img/elementos/bolsa.png",
        tipo: "aprovechable",
    },
    {
        url: "img/elementos/botellaplastico.png",
        tipo: "aprovechable",
    },
    {
        url: "img/elementos/tijeras.png",
        tipo: "aprovechable",
    },
    {
        url: "img/elementos/juevos.png",
        tipo: "noaprovechable",
    },
    {
        url: "img/elementos/hueso.png",
        tipo: "organico",
    },
    {
        url: "img/elementos/banana.png",
        tipo: "organico",
    },
    {
        url: "img/elementos/aji.png",
        tipo: "organico",
    },
    {
        url: "img/elementos/pez.png",
        tipo: "organico",
    },
    {
        url: "img/elementos/patilla.png",
        tipo: "organico",
    },
    {
        url: "img/elementos/lata2.png",
        tipo: "aprovechable",
    },
    {
        url: "img/elementos/bateria.png",
        tipo: "aprovechable",
    },
    {
        url: "img/elementos/botellapartida.png",
        tipo: "aprovechable",
    },
    {
        url: "img/elementos/empaquecomida1.png",
        tipo: "noaprovechable",
    },
    {
        url: "img/elementos/empaquecomida2.png",
        tipo: "noaprovechable",
    },
    {
        url: "img/elementos/empaquecomida3.png",
        tipo: "noaprovechable",
    },
];

let imagenesMostradas = [];
let score = 0;
function obtenerIndiceAleatorio(imagenes) {
    let indice = Math.floor(Math.random() * imagenes.length);
    while (imagenesMostradas.includes(indice)) {
        indice = Math.floor(Math.random() * imagenes.length);
    }
    imagenesMostradas.push(indice);

    return imagenes[indice];
}


function mostrarImagenes() {

    let contenedor = null;

    if (isTouchDevice()) {
        contenedor = document.getElementById("div-elementos-movil");
    }else{
        contenedor = document.getElementById("div-elementos");
    }
    

    document.getElementById("img-mascota").src = "../../images/ciencia/pensando.gif";
    let bottom = 60;
    let lef = 200;

    for (let i = 0; i < 8; i++) {
        let imagenContenedor = document.createElement("div");
        imagenContenedor.setAttribute("drawable", true);
        imagenContenedor.classList.add("item-basura");

        imagenContenedor.addEventListener("dragstart", dragStart);
        imagenContenedor.addEventListener("dragend", dragEnd);


        imagenContenedor.addEventListener("touchstart", dragStart);
        imagenContenedor.addEventListener("touchend", drop);
        imagenContenedor.addEventListener("touchmove", touchMove);

        if (isTouchDevice()) {
           imagenContenedor.style.position = "absolute";
           imagenContenedor.style.bottom = bottom+"px"
           imagenContenedor.style.left = lef+"px";
           lef += 100;
        }

        let imagen = new Image();
        imagen.onload = function () {
            imagenContenedor.appendChild(imagen);
            contenedor.appendChild(imagenContenedor);
        };
        let imagenObj = obtenerIndiceAleatorio(imagenes);
        imagen.src = imagenObj.url;
        imagen.alt = imagenObj.tipo;
        imagen.width = "90";

        imagen.className;
        imagenContenedor.setAttribute("data-id", imagenObj.tipo)
        imagenContenedor.id = "basura_"+i;
    }
}
var audio = new Audio("../../sounds/enunciado_reciclaje.mp3");
audio.play();

const bins = document.querySelectorAll(".contenedor");

bins.forEach((bin) => {
    bin.addEventListener("dragover", dragOver);
    bin.addEventListener("dragenter", dragEnter);
    bin.addEventListener("dragleave", dragLeave);
    bin.addEventListener("drop", dragDrop);
});

function dragStart(e) {
    this.classList.add("dragging");

    if (isTouchDevice()) {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
        //Start movement for touch
        moveElement = true;
        currentElement = e.target.parentElement;
    }
}

function dragEnd() {
    this.classList.remove("dragging");
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add("over");
}

function dragLeave() {
    this.classList.remove("over");
}

function dragDrop() {
    const binId = this.getAttribute("data-id");
    const item = document.querySelector(".dragging");
    const itemId = item.getAttribute("data-id");
    var basuras = document.getElementsByClassName("item-basura");
    var nbasura = basuras.length;

    if (binId === itemId) {
        score += 10;
        document.getElementById("img-mascota").src = "../../images/ciencia/correcto.gif";

        this.classList.remove("over");
        item.remove();
        if (nbasura == 1) {
            $('#principal').fadeToggle(500);
            setTimeout(()=>{
              $('#final').fadeToggle(1000);
            }, 500)
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
            document.getElementById("texto_final").innerText =
                "Has obtenido " + score + " puntos";
        }
    } else {
        document.getElementById("img-mascota").src = "../../images/ciencia/incorrecto.gif";
        score -= 5;
        this.classList.remove("over");
    }

    setTimeout(()=>{
        document.getElementById("img-mascota").src = "../../images/ciencia/pensando.gif";
    }, 1000)
}

//Initial References
let draggableObjects;
let dropPoints;
let deviceType = "";
let initialX = 0,
    initialY = 0;
let currentElement = "";
let moveElement = false;

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

const drop = (e) => {
    e.preventDefault();
    //For touch screen
    if (isTouchDevice()) {
        moveElement = false;
        //Select country name div using the custom attribute
        const currentDrop = document.querySelector(
            `div[data-id='${e.target.alt}']`
        );
        
        //Get boundaries of div
        const currentDropBound = currentDrop.getBoundingClientRect();
        //if the position of flag falls inside the bounds of the countru name
        if (
            initialX >= currentDropBound.left &&
            initialX <= currentDropBound.right &&
            initialY >= currentDropBound.top &&
            initialY <= currentDropBound.bottom
        ) {
            currentElement.classList.add("dropped");
            currentElement.style.display = "none";
            top_o = "";
            left_o = "";

            score += 10;

            document.getElementById("img-mascota").src = "../../images/ciencia/correcto.gif";
        }else{
            var off = document.getElementById(id_sel);
            off.style.position = "absolute",
            off.style.top = top_o;
            off.style.left = left_o;

            top_o = "";
            left_o = "";

            score -= 5;

            document.getElementById("img-mascota").src = "../../images/ciencia/incorrecto.gif";
        }

        setTimeout(()=>{
            document.getElementById("img-mascota").src = "../../images/ciencia/pensando.gif";
            let ok = document.getElementsByClassName("dropped");
            if( ok.length == 8){
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
            }
        }, 1000)

    }
};

//For touchscreen movement
var top_o = "0";
var left_o = "0";
var id_sel = "";
const touchMove = (e) => {
    e.preventDefault();

    let newX = e.touches[0].clientX;
    let newY = e.touches[0].clientY;
    let currentSelectedElement = currentElement;  
    
    if(top_o == 0 && left_o == 0){
      id_sel = currentElement.id;
      var offsets = document.getElementById(currentElement.id);
      top_o = offsets.style.top;
      left_o = offsets.style.left;
    }
    
    currentSelectedElement.style.top =
      currentSelectedElement.offsetTop - (initialY - newY) + "px";
    currentSelectedElement.style.left =
      currentSelectedElement.offsetLeft -
      (initialX - newX) +
      "px";
    initialX = newX;
    initialY = newY;
};

$(document).ready(function () {

    mostrarImagenes();

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
                        "Hola, soy Genio. <br> En este juego debes clasificar los residuos (Aprovechables, no aprovechables y organicos) moviendolos a la caneca corrrespondiente.",
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

