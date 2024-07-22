let correctas = 0;
let cont = 0;
let avatar = "";

//Creates number and request
const creator = () => {
    correctas = 0;
    cont = 0;

    let desierto_ramdom = randomValueGenerator([1, 2, 3, 4, 5]);
    let polar_ramdom = randomValueGenerator([1, 2, 3, 4, 5]);
    let selvatica_ramdom = randomValueGenerator([1, 2, 3, 4, 5]);
    let aire_ramdom = randomValueGenerator([1, 2, 3, 4, 5]);
    let oceano_ramdom = randomValueGenerator([1, 2, 3, 4, 5]);
    let rios_ramdom = randomValueGenerator([1, 2, 3, 4, 5]);

    let array_divs = [];
    let x = 1;
    for (let index = 0; index < 2; index++) {
        array_divs.push(
            "<img id='nombre" +
            x +
            "' data-id='desierto' draggable='true' width='60' class='nombre'  src='img/desierto/" +
            desierto_ramdom[index] +
            ".png' />"
        );
        x++;
    }

    for (let index = 0; index < 2; index++) {
        array_divs.push(
            "<img id='nombre" +
            x +
            "' data-id='polar' draggable='true' width='60' class='nombre'  src='img/polar/" +
            polar_ramdom[index] +
            ".png'/>"
        );
        x++;
    }

    for (let index = 0; index < 2; index++) {
        array_divs.push(
            "<img  data-id='selvatica' draggable='true' class='nombre' width='60'  id='nombre" +
            x +
            "' src='img/selvatica/" +
            selvatica_ramdom[index] +
            ".png'></div>"
        );
        x++;
    }

    for (let index = 0; index < 2; index++) {
        array_divs.push(
            "<img  data-id='aire' draggable='true' class='nombre' width='60'  id='nombre" +
            x +
            "' src='img/aire/" +
            aire_ramdom[index] +
            ".png' ></div>"
        );
        x++;
    }

    for (let index = 0; index < 2; index++) {
        array_divs.push(
            "<img  data-id='oceano' draggable='true' class='nombre' width='60'  id='nombre" +
            x +
            "' src='img/oceano/" +
            oceano_ramdom[index] +
            ".png' ></div>"
        );
        x++;
    }

    for (let index = 0; index < 2; index++) {
        array_divs.push(
            "<img  data-id='rios' draggable='true' class='nombre' width='60'  id='nombre" +
            x +
            "' src='img/rios/" +
            rios_ramdom[index] +
            ".png' ></div>"
        );
        x++;
    }

    array_divs = randomValueGenerator(array_divs);

    div = "";
    for (let index = 0; index < array_divs.length; index++) {
        const element = array_divs[index];
        div += element;
    }

    //document.getElementById("animales").innerHTML = "";
    document.getElementById("animales").innerHTML = div;

    // Creamos los eventos para arrastrar los nombres
    var nombres = document.querySelectorAll(".nombre");

    let top = 0;
    let lef = 85;

    for (let i = 0; i < nombres.length; i++) {
        let imagenContenedor = nombres[i];

        imagenContenedor.addEventListener("dragstart", arrastrar);
        imagenContenedor.addEventListener("dragend", soltar);

        if (isTouchDevice()) {

            imagenContenedor.addEventListener('touchstart', mover_tactil);
            imagenContenedor.addEventListener('touchmove', mover_tactil2);
            imagenContenedor.addEventListener("touchend", drop);

            imagenContenedor.style.position = "absolute";
            imagenContenedor.style.top = top + "px"
            imagenContenedor.style.left = lef + "px";
            lef += 60;


        }

        var puntos = document.querySelectorAll(".punto");
        puntos.forEach((punto) => {
            punto.addEventListener("dragover", permitirSoltar);
            punto.addEventListener("drop", soltarNombre);
        });
    }
};


var initialXx = 0;
var initialYy = 0;

var top_o = 0;
var left_o = 0;
var id_sel = "";

function mover_tactil (event) {
  event.preventDefault();
  initialXx = event.touches[0].clientX - event.target.offsetLeft;
  initialYy = event.touches[0].clientY - event.target.offsetTop;
  if(id_sel != event.target.id){
    currentElement = event.target;
    id_sel = currentElement.id;
    var offsets = document.getElementById(id_sel);
    top_o = offsets.style.top;
    left_o = offsets.style.left;
  }

  event.target.style.width = "40px";
  event.target.style.height = "40px";
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
    const pos = currentElement.getBoundingClientRect();
    const currentDrop = document.elementsFromPoint(pos.left, pos.top);

    if(currentDrop[0].children[0] != undefined){
        let id2 = currentDrop[0].children[0].getAttribute("data-id");
        let id1 = currentElement.getAttribute("data-id");
        if (id1 == id2) {
            currentElement.classList.add("hide");
            currentDrop[0].innerHTML = ``;
            currentDrop[0].insertAdjacentHTML(
                "afterbegin",
                `<img class='img_drag' style='width: 60px' src="${currentElement.src}">`
            );

            document.getElementById("img-mascota").src = "../../images/ciencia/correcto.gif";
            correctas++;
            cont++;
            top_o = 0;
            left_o = 0;
        }else{
            var off = document.getElementById(id_sel);
            off.style.position = "absolute",
            off.style.top = top_o;
            off.style.left = left_o;
            off.style.width = "60px";
            off.style.height = "auto";
        }
    }else{
        var off = document.getElementById(id_sel);
        off.style.position = "absolute",
        off.style.top = top_o;
        off.style.left = left_o;
        off.style.width = "60px";
        off.style.height = "auto";
    }

    setTimeout(()=>{
        document.getElementById("img-mascota").src = "../../images/ciencia/pensando.gif";
    }, 1000)

    if (cont == 12) {
        $("#principal").fadeToggle(1000);
        $("#final").fadeToggle(1000);
        if (correctas <= 6) {
            var audio = new Audio("../../sounds/game_over.mp3");
            audio.play();
            document.getElementById("final").style.backgroundImage = "url(../../images/ciencia/derrota.gif)";
        } else {
            document.getElementById("final").style.backgroundImage = "url(../../images/ciencia/victoria.gif)";
            var audio = new Audio("../../sounds/victory.mp3");
            audio.play();
        }
        document.getElementById("texto_final").innerText = "Has obetenido " + correctas + " de 12 puntos posibles";
    }
};


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

const randomValueGenerator = (vector) => {
    return vector.sort(function (a, b) {
        return Math.random() - 0.5;
    });
};

// Funciones para arrastrar y soltar los nombres
function arrastrar(evento) {
    evento.dataTransfer.setData("text", evento.target.id);
    evento.target.style.opacity = "0.5";
}

function soltar(evento) {
    evento.target.style.opacity = "1";
}

function permitirSoltar(evento) {
    evento.preventDefault();
}

function soltarNombre(evento) {
    evento.preventDefault();

    // Obtenemos el ID del nombre que se está soltando
    var idNombre = evento.dataTransfer.getData("text");

    // Obtenemos el ID del punto donde se soltó el nombre
    var idPunto = evento.target.id;
    var Ubicacion = evento.target.getAttribute("data-id");

    // Obtenemos el elemento del nombre
    var nombre = document.getElementById(idNombre);
    const hab_animal = nombre.getAttribute("data-id");
    console.log(hab_animal);

    // Lo movemos al punto donde se soltó
    evento.target.appendChild(nombre);

    // Centramos el nombre dentro del punto
    var rectPunto = evento.target.getBoundingClientRect();
    var rectNombre = nombre.getBoundingClientRect();
    var desplazamientoX =
        rectPunto.left -
        rectNombre.left +
        0.5 * (rectPunto.width - rectNombre.width);
    var desplazamientoY =
        rectPunto.top -
        rectNombre.top +
        0.5 * (rectPunto.height - rectNombre.height);
    nombre.style.transform =
        "translate(" + desplazamientoX + "px, " + desplazamientoY + "px)";

    // Verificamos si el nombre ha sido soltado en el punto correcto

    if (Ubicacion == hab_animal) {
        correctas++;
        nombre.draggable = false;
        document.getElementById("img-mascota").src = "../../images/ciencia/correcto.gif";
    } else {
        nombre.draggable = true;
        document.getElementById("img-mascota").src = "../../images/ciencia/incorrecto.gif";
    }

    setTimeout(()=>{
        document.getElementById("img-mascota").src = "../../images/ciencia/pensando.gif";
    }, 1000)

    cont++;

    if (cont == 12) {
        $("#principal").fadeToggle(1000);
        $("#final").fadeToggle(1000);
        if (correctas <= 6) {
            var audio = new Audio("../../sounds/game_over.mp3");
            audio.play();
            document.getElementById("final").style.backgroundImage = "url(../../images/ciencia/derrota.gif)";
        } else {
            document.getElementById("final").style.backgroundImage = "url(../../images/ciencia/victoria.gif)";
            var audio = new Audio("../../sounds/victory.mp3");
            audio.play();
        }
        document.getElementById("texto_final").innerText = "Has obetenido " + correctas + " de 8 puntos posibles";
    }
}





$(document).ready(function () {
    creator();
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
                        "Hola, soy Genio. <br> En este juego debes arrastrar cada animal a su hábitat correspondiente.",
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