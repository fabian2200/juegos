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
            if (currentElement.getAttribute("data-id") == signo.parentElement.getAttribute("data-id")) {
                signo.innerHTML = currentElement.parentElement.innerHTML;
                cont++;
                correctas++;
                top_o = 0;
                left_o = 0;
                currentElement.classList.add("hide");
            } else {
                var off = document.getElementById(id_sel).parentElement;
                off.style.position = "absolute",
                off.style.top = top_o;
                off.style.left = left_o;
            }
        } else {
            var off = document.getElementById(id_sel).parentElement;
            off.style.position = "absolute",
            off.style.top = top_o;
            off.style.left = left_o;
        }
    } else {
        //Access data
        const draggedElementData = e.dataTransfer.getData("text");
        //Get custom attribute value
        const droppableElementData = e.target.parentElement.getAttribute("data-id");
        const draggedElement = document.getElementById(draggedElementData);
        let imagen_id = draggedElement.firstElementChild.getAttribute("data-id");
        
        if (droppableElementData === imagen_id) {
            draggedElement.classList.add("hide");
            e.target.insertAdjacentHTML(
                "afterbegin",
                draggedElement.innerHTML
            );
            var audio = new Audio("../../sounds/ok.mp3");
            audio.play();
            correctas++;
            cont++;
        }
    }

    if (cont == 6) {

        $('#principal').fadeToggle(500);
        setTimeout(()=>{
          $('#final').fadeToggle(1000);
        }, 500)
        if (correctas <= 5) {
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
        document.getElementById("texto_final").innerText = "Has obtenido " + correctas + " de 6 puntos posibles";
    }
};

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

var coloresBonitos = [
    "#FF5733", // Rojo coral
    "#FFC300", // Amarillo neón
    "#FF85A2", // Rosa brillante
    "#7D3C98", // Púrpura oscuro
    "#3498DB", // Azul claro
    "#2ECC71", // Verde esmeralda
    "#E74C3C", // Rojo fuerte
    "#F39C12", // Naranja vivo
    "#9B59B6", // Violeta
    "#1ABC9C", // Turquesa
    "#16A085", // Verde azulado
    "#34495E"  // Gris azulado
];
  
  
//Creates number and request
const creator = () => {

    coloresBonitos = randomValueGenerator(coloresBonitos);

    correctas = 0;
    cont = 0;

    var base_preguntas = readText("js/oraciones.json");
    var textosJson = JSON.parse(base_preguntas);
    textosJson = randomValueGenerator(textosJson);
    textosJson = randomValueGenerator(textosJson);
    textosJson = randomValueGenerator(textosJson);
    textosJson = randomValueGenerator(textosJson);

    let array_divs = [];
    let array_oraciones = [];

    if (isTouchDevice()) {
        for (let index = 0; index < 6; index++) {
            var pregunta = textosJson[index];
            var opciones = randomValueGenerator(pregunta.respuestas);
            var opcion = opciones[0];
            array_divs.push(
                "<div class='draggable-image miDiv text-center' draggable='true'>"+
                "<h5 class='img_drag borde3' data-id='op_"+index+"' style='color: white; background-color: "+coloresBonitos[index]+"; border-radius: 10px;  border: 1px dashed;' id='op_"+index+"'>"+opcion+"</h5>"+
                "</div>"
            );
            
            array_oraciones.push(
                '<div class="col-12 text-left" style="margin-top: 10px">'+
                    '<div style="z-index: 1000; position: relative;">'+
                        '<h5 data-id="op_'+index+'" style="z-index: 0; display: flex; align-items: center">'+pregunta.oracion+'</h5>'+
                    '</div>'+
                '</div>'
            )
        }
    } else {
        for (let index = 0; index < 6; index++) {
            var pregunta = textosJson[index];
            var opciones = randomValueGenerator(pregunta.respuestas);
            var opcion = opciones[0];
            array_divs.push(
                "<div id='op_"+index+"' class='col-6 draggable-image text-center' draggable='true'>"+
                "<h5 class='img_drag borde3' data-id='op_"+index+"' style='color: white; background-color: "+coloresBonitos[index]+"; border-radius: 10px; border: 1px dashed;' id='op_"+index+"'>"+opcion+"<h5>"+
                "</div>"
            );

            array_oraciones.push(
                '<div class="col-12 text-left" style="margin-top: 10px">'+
                    '<div style="z-index: 1000; position: relative;">'+
                        '<h4 data-id="op_'+index+'" style="z-index: 0; display: flex; align-items: center">'+pregunta.oracion+'</h4>'+
                    '</div>'+
                '</div>'
            )
        }
    }

    array_divs = randomValueGenerator(array_divs);

    div = "";
    for (let index = 0; index < array_divs.length; index++) {
        const element = array_divs[index];
        div += element;
    }

    div2 = "";
    for (let index = 0; index < array_oraciones.length; index++) {
        const element = array_oraciones[index];
        div2 += element;
    }

    if (isTouchDevice()) {
        document.getElementById("imagenes").innerHTML = "";
        document.getElementById("imagenes").innerHTML = div;

        var imagenes = document.getElementsByClassName("miDiv");

        let top = 140;
        let left = 25;
        let aux = 0;
        for (let index = 1; index <= imagenes.length; index++) {
            const element = imagenes[index - 1];

            element.style.top = top + "px";
            element.style.left = left + "px";


            if (aux < 1) {
                left += 200;
                aux++;
            } else {
                left = 25;
                top += 100;
                aux = 0;
            }
        }

    } else {
        document.getElementById("imagenes").innerHTML = "";
        document.getElementById("imagenes").innerHTML = div;        
    }


    document.getElementById("caja_oraciones").innerHTML = "";
    document.getElementById("caja_oraciones").innerHTML = div2;

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
                        "Hola, soy Genio. <br> En este juego debes arrastrar cada objetivo calificativo a su lugar correspondiente, moviendo las palabras al cajon correcto.",
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

