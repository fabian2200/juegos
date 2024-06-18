//Initial References
let draggableObjects;
let dropPoints;
const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

let deviceType = "";
let initialX = 0,
    initialY = 0;
let currentElement = "";
let moveElement = false;

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

//Random value from Array
const randomValueGenerator = () => {
    return data[Math.floor(Math.random() * data.length)];
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

//Events fired on the drop target
function dragOver(e) {
    e.preventDefault();
}

//For touchscreen movement
var top_o = "0";
var left_o = "0";
var id_sel = "";
const touchMove = (e) => {
    e.preventDefault();

    let newX = e.touches[0].clientX;
    let newY = e.touches[0].clientY;
    let currentSelectedElement = document.getElementById(e.target.id);  
    
    if(top_o == 0 && left_o == 0){
      id_sel = currentElement.id;
      var offsets = document.getElementById(currentElement.id).parentElement;
      top_o = offsets.style.top;
      left_o = offsets.style.left;
    }
    
    currentSelectedElement.parentElement.style.top =
      currentSelectedElement.parentElement.offsetTop - (initialY - newY) + "px";
    currentSelectedElement.parentElement.style.left =
      currentSelectedElement.parentElement.offsetLeft -
      (initialX - newX) +
      "px";
    initialX = newX;
    initialY = newY;
};

let cont = 0;
let correctas = 0;
const drop = (e) => {
    e.preventDefault();
    //For touch screen
    if (isTouchDevice()) {
        moveElement = false;
        //Select country name div using the custom attribute
        const currentDrop = document.querySelector(
            `div[data-id='${e.target.id.substring(3)}']`
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
            currentDrop.classList.add("dropped");
            //hide actual image
            currentElement.parentElement.classList.add("hide");
            currentDrop.innerHTML = ``;
            //Insert new img element
            currentDrop.insertAdjacentHTML(
                "afterbegin",
                e.target.outerHTML
            );

            top_o = "";
            left_o = "";

            correctas++;
            cont++;
        }else{
            var off = document.getElementById(id_sel).parentElement;
            off.style.position = "absolute",
            off.style.top = top_o;
            off.style.left = left_o;

            top_o = "";
            left_o = "";
        }
    } else {
        //Access data
        const draggedElementData = e.dataTransfer.getData("text");
        //Get custom attribute value
        const droppableElementData = e.target.getAttribute("data-id");
        var vacio = e.target.innerHTML;
        if (vacio == "") {
            if (draggedElementData === droppableElementData) {
                e.target.classList.add("dropped");
                e.target.insertAdjacentHTML(
                    "afterbegin",
                    `${draggedElementData}`
                );

                var audio = new Audio("../../sounds/ok.mp3");
                audio.play();

                correctas++;
            } else {
                var audio = new Audio("../../sounds/over.mp3");
                audio.play();

                e.target.classList.add("error");
                e.target.insertAdjacentHTML(
                    "afterbegin",
                    `${draggedElementData}`
                );
            }
            cont++;
        }
    }

    

    if (cont == 3) {

      $('#principal').fadeToggle(500);
      setTimeout(()=>{
        $('#final').fadeToggle(1000);
      }, 500)
      
      
      if(correctas < 2 ){
        document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
      }else{
        document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
      }

      document.getElementById("texto_final").innerText = "Has contestado correctamente "+correctas+" preguntas de 3"

      if(correctas >= 2){
        var audio = new Audio('../../sounds/victory.mp3');
        audio.play();
      }else{
        var audio = new Audio('../../sounds/game_over.mp3');
        audio.play();
      }
    }
};

//Creates number and request
const creator = () => {

    let top = 26;
    let lef = 682;
    correctas = 0;
    cont = 0;

    for (let index = 0; index < 3; index++) {
        document.getElementsByClassName("signo")[index].setAttribute("data-id", "");
        document.getElementsByClassName("signo")[index].innerHTML = "";
        document.getElementsByClassName("signo")[index].classList.remove("error");
        document.getElementsByClassName("signo")[index].classList.remove("dropped");
    }

   
    var signos = [];

    for (let index = 0; index < 3; index++) {
        const element = Math.floor(Math.random() * (9 - 0 + 1) + 0);
        const element2 = Math.floor(Math.random() * (9 - 0 + 1) + 0);
        
        let signo = "";
        if (element == element2) {
            signo = "=";
        }

        if (element < element2) {
            signo = "<";
        }

        if (element > element2) {
            signo = ">";
        }

        if(!signos.includes(signo)){
            signos.push(signo);
            const flagDiv = document.createElement("div");
            flagDiv.classList.add("numero");
            flagDiv.innerHTML = `<p>${element}</p>`;
            document.getElementById("numero_" + index + "_1").innerHTML = "";
            document.getElementById("numero_" + index + "_1").appendChild(flagDiv);

            const flagDiv2 = document.createElement("div");
            flagDiv2.classList.add("numero");
            flagDiv2.innerHTML = `<p>${element2}</p>`;
            document.getElementById("numero_" + index + "_2").innerHTML = "";
            document.getElementById("numero_" + index + "_2").appendChild(flagDiv2);
        }else{
            index--;
        }
    }

    let div_movil = document.getElementById("res_movil");
    let div_m = "";
    
    for (let index = 0; index < signos.length; index++) {
        const element = signos[index];
        document
            .getElementsByClassName("signo")
            [index].setAttribute("data-id", element);
        if (isTouchDevice()) {
            document.getElementsByClassName("signo_2")[index].style.position =
                "absolute";
        }
    }

    signos = signos.sort(function() {return Math.random() - 0.5});
    for (let index = 0; index < signos.length; index++) {
        const element = signos[index];
        div_m+= '<div class="signo_2 draggable-image" style="position: absolute; left: 683px; top:'+top+'px;" draggable="true">'+
                '<p id="div'+element+'"> '+element+' </p>'+
            '</div>';

        top += 100;
    }

    div_movil.innerHTML = div_m;
    document.getElementById("movil").style.display = "none";
};

//Start Game
startGame = async () => {
    currentElement = "";
    //This will wait for creator to create the images and then move forward
    await creator();

    dropPoints = document.querySelectorAll(".signo");
    draggableObjects = document.querySelectorAll(".draggable-image");

    //Events
    draggableObjects.forEach((element) => {
        element.addEventListener("dragstart", dragStart);
        //for touch screen
        element.addEventListener("touchstart", dragStart);
        element.addEventListener("touchend", drop);
        element.addEventListener("touchmove", touchMove);
    });

    dropPoints.forEach((element) => {
        element.addEventListener("dragover", dragOver);
        element.addEventListener("drop", drop);
    });
};

startGame();

$(document).ready(function () {

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
                        "Hola, soy Genio. <br> En este juego deberás arrastrar el signo de ( mayor que, menor que o igual ) al lugar correspondiente. <br> ¡Tu puedes!",
                        50,
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
    if(!cerrardo){
        let audio2 = new Audio("../../sounds/fondo.mp3");
        audio2.play();
        audio2.volume = 0.2;

        let audio = new Audio("../../sounds/enunciado_mayor_menor.mp3");
        audio.play();
        
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