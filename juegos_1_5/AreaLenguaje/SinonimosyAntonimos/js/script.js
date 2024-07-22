let cont = 0;
let correctas = 0;
let moveElement = false;
const drop = (e) => {
    e.preventDefault();
    //For touch screen
    if (isTouchDevice()) {
        moveElement = false;
        //Select country name div using the custom attribute
        const pos = currentElement.getBoundingClientRect();
        const currentDrop = document.elementsFromPoint(pos.left, pos.top);
    
        let id1 = currentElement.getAttribute("data-id");
        let id2 = currentDrop[1].getAttribute("data-id");
        if (id1 == id2) {
            currentDrop[1].classList.add("dropped");
            //hide actual image
            currentElement.classList.add("hide");
            currentDrop[1].innerHTML = ``;
            //Insert new img element
            currentDrop[1].insertAdjacentHTML(
                "afterbegin",
                `<img class='img_drag' style='height: 85pt; width: 80%' src="img/${id1}/${currentElement.id.split("_")[1]}.png">`
            );
            correctas++;
            cont++;
            top_o = 0;
            left_o = 0;
        }else{
          var off = document.getElementById(id_sel).parentElement;
          off.style.position = "absolute",
          off.style.top = top_o;
          off.style.left = left_o;
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
            e.target.innerHTML = "";
            e.target.classList.add("dropped");
            e.target.insertAdjacentHTML(
                "afterbegin",
                `<img class='img_drag' style='height: 95pt; width: 90%' src="img/${imagen_id}/${draggedElementData.split("_")[1]}.png">`
            );
            var audio = new Audio("../../sounds/ok.mp3");
            audio.play();
            correctas++;
        } else {
            e.target.innerHTML = "";
            draggedElement.classList.add("hide");
            var audio = new Audio("../../sounds/over.mp3");
            audio.play();
            e.target.classList.add("error");
            e.target.insertAdjacentHTML(
                "afterbegin",
                `<img class='img_drag' style='height: 95pt; width: 90%' src="img/${imagen_id}/${draggedElementData.split("_")[1]
                }.png">`
            );
        }
        cont++;
    }

   
    if (cont == 8) {
        $('#principal').fadeToggle(500);
        setTimeout(()=>{
          $('#final').fadeToggle(1000);
        }, 500)
        if (correctas <= 6) {
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
        document.getElementById("texto_final").innerText = "Has obetenido " + correctas + " de 8 puntos posibles";
    }
};

//Creates number and request
const creator = () => {
    correctas = 0;

    cont = 0;

    let sinonimos_ramdom = randomValueGenerator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    let antonimos_ramdom = randomValueGenerator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);

    let array_divs = [];
    if (isTouchDevice()) {
        for (let index = 0; index < 4; index++) {
            array_divs.push(
                "<div class='miDiv draggable-image text-center' draggable='true' style='position: absolute'><img class='img_drag' data-id='sinonimos' style='height: 90pt; margin-right:15px;  border-radius: 10px;  border: 1px dashed; width: auto' id='sinonimos_" +
                sinonimos_ramdom[index] +
                "' src='img/sinonimos/" +
                sinonimos_ramdom[index] +
                ".png' alt='prueba.png'></div>"
            );
        }

        for (let index = 0; index < 4; index++) {
            array_divs.push(
                "<div class='miDiv draggable-image text-center' draggable='true' style='position: absolute'><img class='img_drag' data-id='antonimos' style='height: 90pt;   margin-right:15px; border-radius: 10px;  border: 1px dashed; width: auto' id='antonimos_" +
                antonimos_ramdom[index] +
                "' src='img/antonimos/" +
                antonimos_ramdom[index] +
                ".png' alt='prueba.png'></div>"
            );
        }

    } else {
        for (let index = 0; index < 4; index++) {
            array_divs.push(
                "<div class='draggable-image text-center' draggable='true'><img class='img_drag' data-id='sinonimos' style='height: 90pt; margin-right:15px;  border-radius: 10px;  border: 1px dashed; width: auto' id='sinonimos_" +
                sinonimos_ramdom[index] +
                "' src='img/sinonimos/" +
                sinonimos_ramdom[index] +
                ".png' alt='prueba.png'></div>"
            );
        }

        for (let index = 0; index < 4; index++) {
            array_divs.push(
                "<div class='draggable-image text-center' draggable='true'><img class='img_drag' data-id='antonimos' style='height: 90pt;   margin-right:15px; border-radius: 10px;  border: 1px dashed; width: auto' id='antonimos_" +
                antonimos_ramdom[index] +
                "' src='img/antonimos/" +
                antonimos_ramdom[index] +
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

    document.getElementById("imagenes").innerHTML = "";
    document.getElementById("imagenes").innerHTML = div;

    if (isTouchDevice()) {
        document.getElementById("imagenes").style.height = "280px";
        var imagenes = document.getElementsByClassName("draggable-image");

        let top = 55;
        let left = 80;
        for (let index = 1; index <= imagenes.length; index++) {
            const element = imagenes[index - 1];
            element.style.top = top + "px";
            element.style.left = left + "px";

            left += 147;
        }
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
};

$(document).ready(function () {
    setTimeout(function () {
        let audio = new Audio("../../sounds/fondo.mp3");
        audio.play();
        audio.volume = 0.2;
        startGame();
    }, 100);
});

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

var initialXx = 0;
var initialYy = 0;

var top_o = 0;
var left_o = 0;
var id_sel = "";
function mover_tactil (event) {
  event.preventDefault();
  // Obtener la posición inicial del dedo
  initialXx = event.touches[0].clientX - event.target.parentElement.offsetLeft;
  initialYy = event.touches[0].clientY - event.target.parentElement.offsetTop;


  if(id_sel != event.target.id){
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

    initialX = event.touches[0].clientX;
    initialY = event.touches[0].clientY;
}


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
                        "Hola, soy Genio. <br> En este juego debes identificar los Sinónimo y el Antónimo representados en la imagen.",
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
        let audio2 = new Audio("../../../sounds/fondo.mp3");
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