let cont = 0;
let correctas = 0;
const drop = (e) => {
    e.preventDefault();
    //For touch screen
    if (isTouchDevice()) {
        moveElement = false;
        const pos = currentElement.getBoundingClientRect();
        const currentDrop = document.elementsFromPoint(pos.left, pos.top);
        let signo = currentDrop[1];
        if (signo != null) {
            if (currentElement.getAttribute("data-id") == signo.getAttribute("data-id")) {
                currentElement.classList.add("hide");
                signo.innerHTML += `<img class='img_drag' style='margin: 15px; height: 30pt; width: auto' src="img/${currentElement.id.split("_")[0]}/${currentElement.id.split("_")[1]}.png">`;
                cont++;
                correctas++;
                top_o = 0;
                left_o = 0;

            } else {
                var off = document.getElementById(id_sel).parentElement;
                off.style.position = "absolute",
                off.style.top = top_o;
                off.style.left = left_o;
                off.firstElementChild.style.width = "55pt";
                off.firstElementChild.style.height = "55pt";
            }
        } else {
            var off = document.getElementById(id_sel).parentElement;
            off.style.position = "absolute",
            off.style.top = top_o;
            off.style.left = left_o;
            off.firstElementChild.style.width = "55pt";
            off.firstElementChild.style.height = "55pt";
        }
    } else {
        //Access data
        const draggedElementData = e.dataTransfer.getData("text");
        //Get custom attribute value
        const droppableElementData = e.target.getAttribute("data-id");
        const draggedElement = document.getElementById(draggedElementData);
        let imagen_id = draggedElement.getAttribute("data-id");
        
        if (droppableElementData === imagen_id) {
            draggedElement.classList.add("hide");
            e.target.insertAdjacentHTML(
                "afterbegin",
                `<img class='img_drag' style='margin: 15px; height: 40pt; width: 40pt' src="img/${draggedElementData.split("_")[0]}/${draggedElementData.split("_")[1]}.png">`
            );
            var audio = new Audio("../../sounds/ok.mp3");
            audio.play();
            correctas++;
        }

        cont++;
    }

    if (cont == 24) {

        $('#principal').fadeToggle(500);
        setTimeout(()=>{
          $('#final').fadeToggle(1000);
        }, 500)
        if (correctas <= 12) {
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
        document.getElementById("texto_final").innerText = "Has obetenido " + correctas + " de 24 puntos posibles";
    }
};

//Creates number and request
const creator = () => {
    correctas = 0;
    cont = 0;

    let atico_ramdom = randomValueGenerator([1, 2, 3, 4, 5]);
    let banio_ramdom = randomValueGenerator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    let cocina_ramdom = randomValueGenerator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    let dormitorio_ramdom = randomValueGenerator([1, 2, 3, 4, 5, 6, 7]);
    let sala_ramdom = randomValueGenerator([1, 2, 3, 4, 5]);
   

    let array_divs = [];

    if (isTouchDevice()) {
        for (let index = 0; index < 5; index++) {
            array_divs.push(
                "<div class='draggable-image miDiv text-center' draggable='true'><img class='img_drag' data-id='ático' style='height: 55pt; width: 55pt;  border-radius: 10px;  border: 1px dashed;' id='atico_" +
                atico_ramdom[index] +
                "' src='img/atico/" +
                atico_ramdom[index] +
                ".png' alt='prueba.png'></div>"
            );
        }

        for (let index = 0; index < 5; index++) {
            array_divs.push(
                "<div class='draggable-image miDiv text-center' draggable='true'><img class='img_drag' data-id='baño' style='height: 55pt; width: 55pt; border-radius: 10px;  border: 1px dashed;' id='banio_" +
                banio_ramdom[index] +
                "' src='img/banio/" +
                banio_ramdom[index] +
                ".png' alt='prueba.png'></div>"
            );
        }

        for (let index = 0; index < 5; index++) {
            array_divs.push(
                "<div class='draggable-image miDiv text-center' draggable='true'><img class='img_drag' data-id='cocina' style='height: 55pt; width: 55pt; border-radius: 10px;  border: 1px dashed;' id='cocina_" +
                cocina_ramdom[index] +
                "' src='img/cocina/" +
                cocina_ramdom[index] +
                ".png' alt='prueba.png'></div>"
            );
        }

        for (let index = 0; index < 5; index++) {
            array_divs.push(
                "<div class='draggable-image miDiv text-center' draggable='true'><img class='img_drag' data-id='dormitorio' style='height: 55pt; width: 55pt; border-radius: 10px;  border: 1px dashed;' id='dormitorio_" +
                dormitorio_ramdom[index] +
                "' src='img/dormitorio/" +
                dormitorio_ramdom[index] +
                ".png' alt='prueba.png'></div>"
            );
        }

        for (let index = 0; index < 5; index++) {
            array_divs.push(
                "<div class='draggable-image miDiv text-center' draggable='true'><img class='img_drag' data-id='sala' style='height: 55pt; width: 55pt; border-radius: 10px;  border: 1px dashed;' id='sala_" +
                sala_ramdom[index] +
                "' src='img/sala/" +
                sala_ramdom[index] +
                ".png' alt='prueba.png'></div>"
            );
        }
    } else {
        for (let index = 0; index < 5; index++) {
            array_divs.push(
                "<div class='col-2 draggable-image text-center' draggable='true'><img class='img_drag' data-id='ático' style='height: 55pt; width: 55pt;  border-radius: 10px;  border: 1px dashed;' id='atico_" +
                atico_ramdom[index] +
                "' src='img/atico/" +
                atico_ramdom[index] +
                ".png' alt='prueba.png'></div>"
            );
        }

        for (let index = 0; index < 5; index++) {
            array_divs.push(
                "<div class='col-2 draggable-image text-center' draggable='true'><img class='img_drag' data-id='baño' style='height: 55pt; width: 55pt; border-radius: 10px;  border: 1px dashed;' id='banio_" +
                banio_ramdom[index] +
                "' src='img/banio/" +
                banio_ramdom[index] +
                ".png' alt='prueba.png'></div>"
            );
        }

        for (let index = 0; index < 5; index++) {
            array_divs.push(
                "<div class='col-2 draggable-image text-center' draggable='true'><img class='img_drag' data-id='cocina' style='height: 55pt; width: 55pt; border-radius: 10px;  border: 1px dashed;' id='cocina_" +
                cocina_ramdom[index] +
                "' src='img/cocina/" +
                cocina_ramdom[index] +
                ".png' alt='prueba.png'></div>"
            );
        }

        for (let index = 0; index < 5; index++) {
            array_divs.push(
                "<div class='col-2 draggable-image text-center' draggable='true'><img class='img_drag' data-id='dormitorio' style='height: 55pt; width: 55pt; border-radius: 10px;  border: 1px dashed;' id='dormitorio_" +
                dormitorio_ramdom[index] +
                "' src='img/dormitorio/" +
                dormitorio_ramdom[index] +
                ".png' alt='prueba.png'></div>"
            );
        }

        for (let index = 0; index < 5; index++) {
            array_divs.push(
                "<div class='col-2 draggable-image text-center' draggable='true'><img class='img_drag' data-id='sala' style='height: 55pt; width: 55pt; border-radius: 10px;  border: 1px dashed;' id='sala_" +
                sala_ramdom[index] +
                "' src='img/sala/" +
                sala_ramdom[index] +
                ".png' alt='prueba.png'></div>"
            );
        }
    }

    array_divs = randomValueGenerator(array_divs);

    div = "";
    for (let index = 0; index < array_divs.length; index++) {
        const element = array_divs[index];
        div += element;
    }

    if (isTouchDevice()) {
        document.getElementById("imagenes").innerHTML = "";
        document.getElementById("imagenes").innerHTML = div;

        var imagenes = document.getElementsByClassName("miDiv");

        let top = 10;
        let left = 5;
        let aux = 0;
        for (let index = 1; index <= imagenes.length; index++) {
            const element = imagenes[index - 1];

            element.style.top = top + "px";
            element.style.left = left + "px";


            if (aux < 5) {
                left += 90;
                aux++;
            } else {
                left = 5;
                top += 110;
                aux = 0;
            }
        }

    } else {
        document.getElementById("imagenes").innerHTML = "";
        document.getElementById("imagenes").innerHTML = div;
    }

};

startGame = async () => {
    currentElement = "";
    await creator();

    dropPoints = document.querySelectorAll(".signo");

    if (!isTouchDevice()) {
        draggableObjects = document.querySelectorAll(".draggable-image");
        draggableObjects.forEach((element) => {
            element.addEventListener("dragstart", dragStart);
        });
    } else {
        var miDivs = document.getElementsByClassName('miDiv');

        for (let index = 0; index < miDivs.length; index++) {
            var miDiv = miDivs[index];

            miDiv.addEventListener('touchstart', mover_tactil);
            miDiv.addEventListener('touchmove', mover_tactil2);
            miDiv.addEventListener("touchend", drop);
        }
    }

    dropPoints.forEach((element) => {
        element.addEventListener("dragover", dragOver);
        element.addEventListener("drop", drop);
    });
}

var initialXx = 0;
var initialYy = 0;

var top_o = 0;
var left_o = 0;
var id_sel = "";
function mover_tactil(event) {
    event.preventDefault();
    // Obtener la posición inicial del dedo
    initialXx = event.touches[0].clientX - event.target.parentElement.offsetLeft;
    initialYy = event.touches[0].clientY - event.target.parentElement.offsetTop;


    if (id_sel != event.target.id) {
        currentElement = event.target;
        id_sel = currentElement.id;
        var offsets = document.getElementById(id_sel).parentElement;
        top_o = offsets.style.top;
        left_o = offsets.style.left;
    }

}

function mover_tactil2(event) {
    event.preventDefault();
    // Obtener la posición actual del dedo
    var currentX = event.touches[0].clientX - initialXx;
    var currentY = event.touches[0].clientY - initialYy;

    // Actualizar la posición de la div
    event.target.parentElement.style.left = currentX + 'px';
    event.target.parentElement.style.top = currentY + 'px';

    event.target.style.width = "50px";
    event.target.style.height = "50px";
}



//Random value from Array
const randomValueGenerator = (vector) => {
    return vector.sort(function (a, b) {
        return Math.random() - 0.5;
    });
};

//Drag & Drop Functions
function dragStart(e) {
    if (isTouchDevice()) {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
        //Start movement for touch
        moveElement = true;
        currentElement = e.target;
    } else {
        //For non touch devices set data to be transfered
        e.dataTransfer.setData("text", e.target.id);
    }
}



//For touchscreen movement
var top_o = 0;
var left_o = 0;
var id_sel = "";
const touchMove = (e) => {
    if (moveElement) {
        e.preventDefault();

        let newX = e.touches[0].clientX;
        let newY = e.touches[0].clientY;
        let currentSelectedElement = document.getElementById(e.target.id);

        if (top_o == 0 && left_o == 0) {
            id_sel = currentElement.id;
            var offsets = document
                .getElementById(currentElement.id)
                .getBoundingClientRect();
            top_o = offsets.top;
            left_o = offsets.left;
        }

        currentSelectedElement.parentElement.style.top =
            currentSelectedElement.parentElement.offsetTop -
            (initialY - newY) +
            "px";
        currentSelectedElement.parentElement.style.left =
            currentSelectedElement.parentElement.offsetLeft -
            (initialX - newX) +
            "px";
        initialX = newX;
        initialY = newY;
    }
};

//Events fired on the drop target
function dragOver(e) {
    e.preventDefault();
}

//Detect touch device
const isTouchDevice = () => {
    try {
        //We try to create Touch Event (It would fail for desktops and throw error)
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

function limpiar() {
    divs = document.getElementsByClassName("signo");
    for (let index = 0; index < divs.length; index++) {
        const element = divs[index];
        element.classList.remove("dropped");
        element.classList.remove("error");
        element.innerHTML = "";
    }
}


$(document).ready(function () {
    startGame();

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
                        "Hola, soy Genio. <br> En este juego debes clasificar los objetos del hogar, moviendo las imagenes al lugar correspondiente.",
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
    if(!cerrardo) {
        let audio2 = new Audio("../../sounds/fondo.mp3");
        audio2.play();
        audio2.volume = 0.2;

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

