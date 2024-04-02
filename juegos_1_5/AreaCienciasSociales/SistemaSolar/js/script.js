let correctas = 0;
let cont = 0;
let avatar = "";
let array_divs = [];
let x = 1;

////INICIO JUEGO PISOS TERMINCOS CATEGORIA 1


function elegir() {
    Swal.fire({
        title: "Selecciona una Categoria",
        icon: "info",
        html:
            '<div style="padding-top: 20px"  class="divopciones">' +
            '<div style="margin:15px;">' +
            '<a href="#" class="card partes">' +
            '<div class="cor__cobertura"></div>' +
            '<div class="circulo">' +
            '<img onclick="seleccionar(this, 1)" class="imagen_Termico imagen2" src="img/categotia1.png" alt="">' +
            "</div>" +
            "</a></div>" +
            '<div style="margin:15px;">' +
            '<a href="#" class="card cate">' +
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

let tipo_global = 0;
function seleccionar(elemento, letra) {
    let audio = "";
    switch (letra) {
        case 1:
            categoria = "Mueve los Planetas al lugar correspondiente dentro del sistema solar";
            textTitulo = "Hola, soy Genio. <br> En este juego debes arrastrar los planetas al lugar correspodiente dentro del sistema solar.";
            break;
        case 2:
            categoria = "Mueve los Nombre de los planetas al lugar correspondiente dentro del sistema solar.";
            textTitulo = "Hola, soy Genio. <br> En este juego debes arrastrar el nombre de los planetas al lugar correspodiente dentro del sistema solar";
            break;
    }

    elemento.classList.add("seleccionado");

    document.getElementById("categoria").innerText = categoria;

    setTimeout(function () {
        swal.close();
        if (letra == 1) {
            CargarJuegoCat1(textTitulo);
            tipo_global = 1;
        } else {
            CargarJuegoCat2(textTitulo);
            tipo_global = 2;
        }
    }, 2000);
}


function CargarJuegoCat1(textTitulo) {
    cargarPresentacion(textTitulo);
    document.getElementById("opcion1").style.display = "block";

    var puntos = document.querySelectorAll(".puntoCate1");
    puntos.forEach((punto) => {
        punto.addEventListener("dragover", permitirSoltar1);
        punto.addEventListener("drop", soltarNombre1);
    });
    correctas = 0;
    cont = 0;
    avatar = "";

    array_divs = [];
    x = 1;

    array_divs.push(
        "<img id='nombre1_1' data-id='jupiter' draggable='true' width='60' class='nombreCat1'  src='img/categoria1/jupiter.png' />"
    );

    array_divs.push(
        "<img id='nombre2_1' data-id='mercurio' draggable='true' width='60' class='nombreCat1'  src='img/categoria1/mercurio.png' />"
    );

    array_divs.push(
        "<img id='nombre3_1' data-id='neptuno' draggable='true' width='60' class='nombreCat1'  src='img/categoria1/neptuno.png' />"
    );

    array_divs.push(
        "<img id='nombre4_1' data-id='saturno' draggable='true' width='60' class='nombreCat1'  src='img/categoria1/saturno.png' />"
    );

    array_divs.push(
        "<img id='nombre5_1' data-id='tierra' draggable='true' width='60' class='nombreCat1'  src='img/categoria1/tierra.png' />"
    );

    array_divs.push(
        "<img id='nombre6_1' data-id='urano' draggable='true' width='60' class='nombreCat1'  src='img/categoria1/urano.png' />"
    );

    array_divs.push(
        "<img id='nombre7_1' data-id='venus' draggable='true' width='60' class='nombreCat1'  src='img/categoria1/venus.png' />"
    );

    array_divs.push(
        "<img id='nombre8_1' data-id='marte' draggable='true' width='60' class='nombreCat1'  src='img/categoria1/marte.png' />"
    );

    array_divs = randomValueGenerator(array_divs);

    div = "";
    for (let index = 0; index < array_divs.length; index++) {
        const element = array_divs[index];
        div += element;
    }

    //document.getElementById("animales").innerHTML = "";
    document.getElementById("planetaSistemaSolar").innerHTML = div;

    // Creamos los eventos para arrastrar los nombres
    var nombres = document.querySelectorAll(".nombreCat1");

    let top = 0;
    let lef = 80;

    for (let i = 0; i < nombres.length; i++) {
        let imagenContenedor = nombres[i];

        imagenContenedor.addEventListener("dragstart", arrastrar1);
        imagenContenedor.addEventListener("dragend", soltar1);

        if (isTouchDevice()) {
            imagenContenedor.addEventListener('touchstart', mover_tactil);
            imagenContenedor.addEventListener('touchmove', mover_tactil2);
            imagenContenedor.addEventListener("touchend", drop);

            imagenContenedor.style.position = "absolute";
            imagenContenedor.style.top = top + "px"
            imagenContenedor.style.left = lef + "px";
            lef += 90;
        }

        var puntos = document.querySelectorAll(".punto");
        puntos.forEach((punto) => {
            punto.addEventListener("dragover", permitirSoltar1);
            punto.addEventListener("drop", soltarNombre1);
        });
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

function mover_tactil(event) {
    event.preventDefault();
    // Obtener la posición inicial del dedo
    initialXx = event.touches[0].clientX - event.target.offsetLeft;
    initialYy = event.touches[0].clientY - event.target.offsetTop;
    currentElement = event.target;
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
    const currentDrop = document.elementsFromPoint(pos.left+25, pos.top+25);

    let id1 = currentElement.getAttribute("data-id");
    let id2 = currentDrop[1].children[0].getAttribute("data-id");

    if (id1 == id2) {
        //hide actual image
        currentElement.classList.add("hide");
        currentDrop[1].innerHTML = ``;
        //Insert new img element
        if(tipo_global == 1){
            currentDrop[1].insertAdjacentHTML(
                "afterbegin",
                `<img class='img_drag' style='width: 60px' src="${currentElement.src}">`
            );
        }else{
            currentDrop[1].insertAdjacentHTML(
                "afterbegin",
                `<img class='img_drag' style='width: 60px' src="img/categoria2/${id1}B.png">`
            );
        }
        
        correctas++;
        cont++;
    } else {
        currentElement.classList.add("hide");
        currentDrop[1].innerHTML = ``;
        //Insert new img element
        if(tipo_global == 1){
            currentDrop[1].insertAdjacentHTML(
                "afterbegin",
                `<img class='img_drag' style='width: 60px' src="${currentElement.src}">`
            );
        }else{
            currentDrop[1].insertAdjacentHTML(
                "afterbegin",
                `<img class='img_drag' style='width: 60px' src="img/categoria2/${id1}B.png">`
            );
        }
        cont++;
    }

    if (cont == 8) {
        $("#principal").fadeToggle(1000);
        $("#final").fadeToggle(1000);
        if (correctas <= 6) {
            var audio = new Audio("../../sounds/game_over.mp3");
            audio.play();
            document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
        } else {
            document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
            var audio = new Audio("../../sounds/victory.mp3");
            audio.play();
        }
        document.getElementById("texto_final").innerText = "Has obetenido " + correctas + " de 8 puntos posibles";
    }
};

function CargarJuegoCat2(){
    cargarPresentacion(textTitulo);
    document.getElementById("opcion2").style.display = "block";

    var puntos = document.querySelectorAll(".puntoCate2");
    puntos.forEach((punto) => {
        punto.addEventListener("dragover", permitirSoltar2);
        punto.addEventListener("drop", soltarNombre2);
    });
    correctas = 0;
    cont = 0;
    avatar = "";

    array_divs = [];
    x = 1;

    array_divs.push(
        "<img id='nombre1_2' data-id='jupiter' draggable='true' width='60' class='nombreCat2'  src='img/categoria2/jupiterN.png' />"
    );

    array_divs.push(
        "<img id='nombre2_2' data-id='mercurio' draggable='true' width='60' class='nombreCat2'  src='img/categoria2/mercurioN.png' />"
    );

    array_divs.push(
        "<img id='nombre3_2' data-id='neptuno' draggable='true' width='60' class='nombreCat2'  src='img/categoria2/neptunoN.png' />"
    );

    array_divs.push(
        "<img id='nombre4_2' data-id='saturno' draggable='true' width='60' class='nombreCat2'  src='img/categoria2/saturnoN.png' />"
    );

    array_divs.push(
        "<img id='nombre5_2' data-id='tierra' draggable='true' width='60' class='nombreCat2'  src='img/categoria2/tierraN.png' />"
    );

    array_divs.push(
        "<img id='nombre6_2' data-id='urano' draggable='true' width='60' class='nombreCat2'  src='img/categoria2/uranoN.png' />"
    );

    array_divs.push(
        "<img id='nombre7_2' data-id='venus' draggable='true' width='60' class='nombreCat2'  src='img/categoria2/venusN.png' />"
    );

    array_divs.push(
        "<img id='nombre8_2' data-id='marte' draggable='true' width='60' class='nombreCat2'  src='img/categoria2/marteN.png' />"
    );

    array_divs = randomValueGenerator(array_divs);

    div = "";
    for (let index = 0; index < array_divs.length; index++) {
        const element = array_divs[index];
        div += element;
    }

    //document.getElementById("animales").innerHTML = "";
    document.getElementById("planetaSistemaSolar2").innerHTML = div;

    // Creamos los eventos para arrastrar los nombres
    var nombres = document.querySelectorAll(".nombreCat2");

    let top = 0;
    let lef = 80;

    for (let i = 0; i < nombres.length; i++) {
        let imagenContenedor = nombres[i];

        imagenContenedor.addEventListener("dragstart", arrastrar1);
        imagenContenedor.addEventListener("dragend", soltar1);

        if (isTouchDevice()) {
            imagenContenedor.addEventListener('touchstart', mover_tactil);
            imagenContenedor.addEventListener('touchmove', mover_tactil2);
            imagenContenedor.addEventListener("touchend", drop);

            imagenContenedor.style.position = "absolute";
            imagenContenedor.style.top = top + "px"
            imagenContenedor.style.left = lef + "px";
            lef += 90;
        }

        var puntos = document.querySelectorAll(".punto");
        puntos.forEach((punto) => {
            punto.addEventListener("dragover", permitirSoltar1);
            punto.addEventListener("drop", soltarNombre1);
        });
    }
}

const randomValueGenerator = (vector) => {
    return vector.sort(function (a, b) {
        return Math.random() - 0.5;
    });
};

function permitirSoltar1(evento) {
    evento.preventDefault();
}

function permitirSoltar2(evento) {
    evento.preventDefault();
}

function soltarNombre1(evento) {
    evento.preventDefault();

    // Obtenemos el ID del nombre que se está soltando
    var idNombre = evento.dataTransfer.getData("text");

    // Obtenemos el ID del punto donde se soltó el nombre
    var idPunto = evento.target.parentElement.getAttribute("id");
    var elemento = document.getElementById(idPunto);
    
    elemento.removeEventListener("dragover", permitirSoltar1);
    var Ubicacion = evento.target.getAttribute("data-id");

    // Obtenemos el elemento del nombre
    var nombre = document.getElementById(idNombre);
    console.log(idNombre);
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
    } else {
        nombre.draggable = false;
    
    }

    cont++;

    if (cont == 8) {
        
    $('#principal').fadeToggle(500);
    setTimeout(()=>{
        $('#final').fadeToggle(1000);
    }, 500)
    if (correctas < 4) {
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
    document.getElementById("texto_final").innerText =
        "Has obtenido " + correctas + " puntos de 8 posibles";

    }
}

function soltarNombre2(evento) {
    evento.preventDefault();

    // Obtenemos el ID del nombre que se está soltando
    var idNombre = evento.dataTransfer.getData("text");

    // Obtenemos el ID del punto donde se soltó el nombre
    var idPunto = evento.target.parentElement.getAttribute("id")
   
    
    var Ubicacion = evento.target.getAttribute("data-id");
  
    document.getElementById(idPunto).style.color="#050519";
    document.getElementById(idPunto).style.fontSize="1px";

    // Obtenemos el elemento del nombre
    var nombre = document.getElementById(idNombre);

       const planeta = nombre.getAttribute("data-id");
    nombre.src="img/categoria2/"+planeta+"B.png";

    // Lo movemos al punto donde se soltó
    evento.target.appendChild(nombre);

    // Centramos el nombre dentro del punto
    var rectPunto = evento.target.getBoundingClientRect();
    var rectNombre = nombre.getBoundingClientRect();
    var desplazamientoX = rectPunto.left -  rectNombre.left + 0.5 * (rectPunto.width - rectNombre.width);
    var desplazamientoY = rectPunto.top -  rectNombre.top + 0.5 * (rectPunto.height - rectNombre.height);

    nombre.style.transform = "translate(" + desplazamientoX + "px, " + desplazamientoY + "px)";

    // Verificamos si el nombre ha sido soltado en el punto correcto

    if (Ubicacion == planeta) {
        correctas++;
        nombre.draggable = false;
    } else {
        nombre.draggable = false;
    
    }

    cont++;

    if (cont == 8) {
        
      $("#principal").fadeToggle(1000);
    $("#final").fadeToggle(1000);
    if (correctas < 4) {
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
    document.getElementById("texto_final").innerText =
        "Has obtenido " + correctas + " puntos de 8 posibles";

    }
}

// Funciones para arrastrar y soltar los nombres
function arrastrar1(evento) {
    evento.dataTransfer.setData("text", evento.target.id);
    evento.target.style.opacity = "0.5";
}

function soltar1(evento) {
    evento.target.style.opacity = "1";
}
// Funciones para arrastrar y soltar los nombres
function arrastrar2(evento) {
    evento.dataTransfer.setData("text", evento.target.id);
    evento.target.style.opacity = "0.5";
}

function soltar2(evento) {
    evento.target.style.opacity = "1";
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
                        "url(../../images/normal2.gif)";
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