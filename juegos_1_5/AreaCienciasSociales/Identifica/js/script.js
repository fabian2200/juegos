let cont = 0;
let correctas = 0;
let cont_total = 0;
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
                signo.innerHTML += `<div class="dropped"><img class='img_drag' style='height: auto; width: 50pt' src="profesiones/${currentElement.id.split("_")[1]}"></div>`;
                cont++;
                cont_total++;
                correctas++;
                top_o = 0;
                left_o = 0;

            } else {
                var off = document.getElementById(id_sel).parentElement;
                off.style.position = "absolute",
                off.style.top = top_o;
                off.style.left = left_o;
                off.firstElementChild.style.width = "auto";
                off.firstElementChild.style.height = "105pt";
            }
        } else {
            var off = document.getElementById(id_sel).parentElement;
            off.style.position = "absolute",
            off.style.top = top_o;
            off.style.left = left_o;
            off.firstElementChild.style.width = "auto";
            off.firstElementChild.style.height = "105pt";
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
                `<div class="dropped"><img class='img_drag' style='height: auto; width: 48pt;' src="profesiones/${draggedElementData.split("_")[1]}"></div>`
            );
            var audio = new Audio("../../sounds/ok.mp3");
            audio.play();
            correctas++;
            cont++;
        }else{
            var audio = new Audio("../../sounds/over.mp3");
            audio.play();
        }
    }

    
    if(cont % 3 === 0 && cont != 0){
      setTimeout(()=>{
        cont = 0;
        startGame();
      }, 1200);
    }

    if (cont_total == 15) {
        $('#principal').fadeToggle(500);
        setTimeout(()=>{
          $('#final').fadeToggle(1000);
        }, 500)
        if (correctas <= 8) {
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
        document.getElementById("texto_final").innerText = "Has obetenido " + correctas + " de 15 puntos posibles";
    }
};

//Creates number and request

var profesiones = [
    {
      "imagen": "1.png",
      "lugar": "hospital"
    },
    {
      "imagen": "2.png",
      "lugar": "galeria_arte"
    },
    {
      "imagen": "3.png",
      "lugar": "obra"
    },
    {
      "imagen": "4.png",
      "lugar": "noticiero"
    },
    {
      "imagen": "5.png",
      "lugar": "teatro_musica"
    },
    {
      "imagen": "6.png",
      "lugar": "bomberos"
    },
    {
      "imagen": "7.png",
      "lugar": "circo"
    },
    {
      "imagen": "8.png",
      "lugar": "salon"
    },
    {
      "imagen": "9.png",
      "lugar": "aeropuerto"
    },
    {
      "imagen": "10.png",
      "lugar": "cocina_restaurante"
    },
    {
      "imagen": "11.png",
      "lugar": "noticiero"
    },
    {
      "imagen": "12.png",
      "lugar": "estadio"
    },
    {
      "imagen": "13.png",
      "lugar": "granja"
    },
    {
      "imagen": "14.png",
      "lugar": "estacion_policia"
    },
    {
      "imagen": "15.png",
      "lugar": "hospital"
    },
    {
      "imagen": "16.png",
      "lugar": "muelle"
    },
    {
      "imagen": "17.png",
      "lugar": "restaurante"
    },
    {
      "imagen": "18.png",
      "lugar": "laboratorio"
    },
    {
      "imagen": "19.png",
      "lugar": "juzgado"
    },
    {
      "imagen": "20.png",
      "lugar": "obra"
    },
    {
      "imagen": "21.png",
      "lugar": "obra"
    },
    {
      "imagen": "22.png",
      "lugar": "obra_carretera"
    },
    {
      "imagen": "23.png",
      "lugar": "obra_carretera"
    },
    {
      "imagen": "24.png",
      "lugar": "granja"
    },
    {
      "imagen": "25.png",
      "lugar": "granja"
    },
    {
      "imagen": "26.png",
      "lugar": "bomberos"
    },
    {
      "imagen": "27.png",
      "lugar": "bomberos"
    },
    {
      "imagen": "28.png",
      "lugar": "bomberos"
    },
    {
      "imagen": "29.png",
      "lugar": "estacion_policia"
    },
    {
      "imagen": "30.png",
      "lugar": "estacion_policia"
    },
    {
      "imagen": "31.png",
      "lugar": "estacion_policia"
    },
    {
      "imagen": "32.png",
      "lugar": "restaurante"
    },
    {
      "imagen": "33.png",
      "lugar": "panaderia"
    },
    {
      "imagen": "34.png",
      "lugar": "restaurante"
    },
    {
      "imagen": "35.png",
      "lugar": "taller"
    },
    {
      "imagen": "36.png",
      "lugar": "bomberos"
    },
    {
      "imagen": "37.png",
      "lugar": "obra"
    },
    {
      "imagen": "38.png",
      "lugar": "estacion_policia"
    },
    {
      "imagen": "39.png",
      "lugar": "cocina_restaurante"
    },
    {
      "imagen": "40.png",
      "lugar": "estacion_policia"
    },
    {
      "imagen": "41.png",
      "lugar": "cocina_restaurante"
    },
    {
      "imagen": "42.png",
      "lugar": "hospital"
    },
    {
      "imagen": "43.png",
      "lugar": "hospital"
    },
    {
      "imagen": "44.png",
      "lugar": "salon"
    },
    {
      "imagen": "45.png",
      "lugar": "bomberos"
    },
    {
      "imagen": "46.png",
      "lugar": "estacion_policia"
    },
    {
      "imagen": "47.png",
      "lugar": "obra"
    },
    {
      "imagen": "48.png",
      "lugar": "galeria_arte"
    },
    {
      "imagen": "49.png",
      "lugar": "mensajeria"
    },
    {
      "imagen": "50.png",
      "lugar": "estacion_lanzamiento"
    },
    {
      "imagen": "51.png",
      "lugar": "restaurante"
    },
    {
      "imagen": "52.png",
      "lugar": "batallon"
    },
    {
      "imagen": "53.png",
      "lugar": "juzgado"
    }
];  


var pregunta_actual = 0;
const creator = () => {
    let array_divs = [];
    var ids = [];

    if (isTouchDevice()) {
      for (let index = pregunta_actual; index < pregunta_actual + 3; index++) {
        array_divs.push(
          "<div class='draggable-image miDiv text-center' draggable='true'>"+
            "<img class='img_drag' data-id='"+profesiones[index].lugar+"' style='height: 90pt; width: auto;  border-radius: 10px;  border: 1px dashed; padding: 18px;' id='imagen_"+profesiones[index].imagen+ "' src='profesiones/"+profesiones[index].imagen+"' alt='prueba.png'>"+
          "</div>"
        );
        ids.push(profesiones[index].lugar);
      }
    } else {
      for (let index = pregunta_actual; index < pregunta_actual + 3; index++) {
        array_divs.push(
          "<div class='col-12 draggable-image text-center' draggable='true'>"+
              "<img class='img_drag' data-id='"+profesiones[index].lugar+"' style='height: 105pt; width: auto; border-radius: 10px; border: 1px dashed; padding: 18px;' id='imagen_"+profesiones[index].imagen+ "' src='profesiones/"+profesiones[index].imagen+"' alt='prueba.png'>"+
          "</div>"
        );
        ids.push(profesiones[index].lugar);
      }
    }

    dropPoints = document.querySelectorAll(".signo");

    var i = 0;
    ids = randomValueGenerator(ids);
    dropPoints.forEach((element) => {
        element.setAttribute("data-id", ids[i]);
        element.style.backgroundImage = "url('lugares/"+ids[i]+".png')";
        element.innerHTML = "";
        i++;
    });

    pregunta_actual += 3;

    div = "";
    for (let index = 0; index < array_divs.length; index++) {
        const element = array_divs[index];
        div += element;
    }

    document.getElementById("imagenes").innerHTML = "";
    document.getElementById("imagenes").innerHTML = div;

    if (isTouchDevice()) { 
        var imagenes = document.getElementsByClassName("miDiv");

        let top = 0;
        let left = 105;

        for (let index = 1; index <= imagenes.length; index++) {
          const element = imagenes[index - 1];
          element.style.top = top + "px";
          element.style.left = left + "px";

          top += 200;
        }
    }
};

startGame = async () => {
    currentElement = "";
    profesiones = randomValueGenerator(profesiones);
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

    event.target.style.width = "80px";
    event.target.style.height = "80px";
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
                        "Hola, soy Genio. <br> En este juego debes arrastrar cada una de las personas en la imagen a su respectivo lugar de trabajo, según su profesión.",
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

