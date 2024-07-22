let Correctas = 0;
let cont = 0;
let avatar = "";
let array_divs = [];
let x = 1;

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
    tipo_global = letra;
    let audio = "";
    switch (letra) {
        case 1:
            categoria = "Arrastra el nombre del piso termico al lugar indicado";
            textTitulo =
                "Hola, soy Genio. <br> En este juego debes arrastrar los nombres de los pisos termicos al punto conrrespondiente.";
            break;
        case 2:
            categoria = "Arrastra los elementos naturales al piso termico indicado";
            textTitulo =
                "Hola, soy Genio. <br> En este juego debes arrastar los elementos naturales al punto correspondiente.";
            break;
    }

    elemento.classList.add("seleccionado");

    document.getElementById("categoria").innerText = categoria;

    setTimeout(function () {
        swal.close();
        if (letra == 1) {
            CargarJuegoCat1(textTitulo);
        } else {
            CargarJuegoCat2(textTitulo);
        }
    }, 500);
}


////INICIO JUEGO PISOS TERMINCOS CATEGORIA 1

function CargarJuegoCat1(textTitulo) {
    cargarPresentacion(textTitulo);
    document.getElementById("opcion1").style.display = "block";
    var puntos = document.querySelectorAll(".puntoCate1");
    puntos.forEach((punto) => {
        punto.addEventListener("dragover", permitirSoltar);
        punto.addEventListener("drop", soltarNombre);
    });
    correctas = 0;
    cont = 0;
    avatar = "";

    array_divs = [];
    x = 1;


    array_divs.push(
        "<img id='nombreCat1_1' data-id='calido' draggable='true' width='60' class='nombreCat1'  src='img/categoria1/calido.png' />"
    );


    array_divs.push(
        "<img id='nombreCat1_2' data-id='frio' draggable='true' width='60' class='nombreCat1'  src='img/categoria1/frio.png' />"
    );


    array_divs.push(
        "<img id='nombreCat1_3' data-id='nieve' draggable='true' width='60' class='nombreCat1'  src='img/categoria1/nieve.png' />"
    );

    array_divs.push(
        "<img id='nombreCat1_4' data-id='paramo' draggable='true' width='60' class='nombreCat1'  src='img/categoria1/paramo.png' />"
    );


    array_divs.push(
        "<img id='nombreCat1_5' data-id='templado' draggable='true' width='60' class='nombreCat1'  src='img/categoria1/templado.png' />"
    );


    array_divs = randomValueGenerator(array_divs);

    div = "";
    for (let index = 0; index < array_divs.length; index++) {
        const element = array_divs[index];
        div += element;
    }

    //document.getElementById("animales").innerHTML = "";
    document.getElementById("pisorTermicoCat1").innerHTML = div;

    // Creamos los eventos para arrastrar los nombres
    var nombres = document.querySelectorAll(".nombreCat1");

    let top = 0;
    let lef = 200;

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
            lef += 117;
        }

        var puntos = document.querySelectorAll(".punto");
        puntos.forEach((punto) => {
            punto.addEventListener("dragover", permitirSoltar);
            punto.addEventListener("drop", soltarNombre);
        });
    }

}

//For touchscreen movement
var initialXx = 0;
var initialYy = 0;
var moviendo = false;
function mover_tactil(event) {
    event.preventDefault();
    // Obtener la posición inicial del dedo
    initialXx = event.touches[0].clientX - event.target.offsetLeft;
    initialYy = event.touches[0].clientY - event.target.offsetTop;
    currentElement = event.target;

    if(!moviendo){
        moviendo = true;
        top_o = event.target.style.top;
        left_o = event.target.style.left;
    }
    
}

function mover_tactil2(event) {
    event.preventDefault();
    // Obtener la posición actual del dedo
    var currentX = event.touches[0].clientX - initialXx;
    var currentY = event.touches[0].clientY - initialYy;

    // Actualizar la posición de la div
    event.target.style.left = currentX + 'px';
    event.target.style.top = currentY + 'px';
    
    if(tipo_global != 1){
        currentElement.style.width = "40px";
        currentElement.style.height = "40px";
    }
    
}


const drop = (e) => {
    e.preventDefault();
    const pos = currentElement.getBoundingClientRect();
    const currentDrop = document.elementsFromPoint(pos.left, pos.top);

    let id1 = currentElement.getAttribute("data-id");
    let id2 = currentDrop[1].children[0].getAttribute("data-id");
    moviendo = false;
    if(id2 == "nieve" || id2 == "paramo" || id2 == "frio" || id2 == "templado" || id2 == "calido" ){
        if (id1 == id2) {
            //hide actual image
            currentElement.classList.add("hide");
            currentDrop[1].innerHTML = ``;
            //Insert new img element
            currentDrop[1].insertAdjacentHTML(
                "afterbegin",
                `<img class='img_drag' style='width: 60px' src="${currentElement.src}">`
            );
    
            document.getElementById("img-mascota").src = "../../images/correcto.gif";
            correctas++;
            cont++;
        } else {
            currentElement.classList.add("hide");
            currentDrop[1].innerHTML = ``;
            //Insert new img element
            currentDrop[1].insertAdjacentHTML(
                "afterbegin",
                `<img class='img_drag' style='width: 60px' src="${currentElement.src}">`
            );
            document.getElementById("img-mascota").src = "../../images/incorrecto.gif";
            cont++;
        }
    
        setTimeout(() => {
            document.getElementById("img-mascota").src = "../../images/pensando.gif";
        }, 1000)
    }else{
        currentElement.style.position = "absolute",
        currentElement.style.top = top_o;
        currentElement.style.left = left_o;
    }
   

    if(tipo_global == 1){
        if (cont == 5) {
            $("#principal").fadeToggle(1000);
            $("#final").fadeToggle(1000);
            if (correctas <= 3) {
                var audio = new Audio("../../sounds/game_over.mp3");
                audio.play();
                document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
            } else {
                document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
                var audio = new Audio("../../sounds/victory.mp3");
                audio.play();
            }
            document.getElementById("texto_final").innerText = "Has obetenido " + correctas + " de 5 puntos posibles";
        }
    } else {
        if (cont == 10) {
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
            document.getElementById("texto_final").innerText = "Has obetenido " + correctas + " de 10 puntos posibles";
        }
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

function CargarJuegoCat2() {
    cargarPresentacion(textTitulo);
    document.getElementById("opcion2").style.display = "block";
    var puntos = document.querySelectorAll(".puntoCate2");

    puntos.forEach((punto) => {
        punto.addEventListener("dragover", permitirSoltar);
        punto.addEventListener("drop", soltarNombre2);
    });
    correctas = 0;
    cont = 0;
    avatar = "";

    let nieve_ramdom = randomValueGenerator([1, 2, 3, 4]);
    let paramo_ramdom = randomValueGenerator([1, 2, 3, 4]);
    let frio_ramdom = randomValueGenerator([1, 2, 3, 4]);
    let templado_ramdom = randomValueGenerator([1, 2, 3, 4]);
    let calido_ramdom = randomValueGenerator([1, 2, 3, 4]);

    array_divs = [];
    x = 1;

    for (let index = 0; index < 2; index++) {
        array_divs.push(
            "<img id='nombreCat2_" + x + "' data-id='nieve' draggable='true' width='50' class='nombreCat2'  src='img/categoria2/nieve/" + nieve_ramdom[index] + ".png' />"
        );
        x++;
    }

    for (let index = 0; index < 2; index++) {
        array_divs.push(
            "<img id='nombreCat2_" + x + "' data-id='paramo' draggable='true' width='50' class='nombreCat2'  src='img/categoria2/paramo/" + paramo_ramdom[index] + ".png' />"
        );
        x++;
    }

    for (let index = 0; index < 2; index++) {
        array_divs.push(
            "<img id='nombreCat2_" + x + "' data-id='frio' draggable='true' width='50' class='nombreCat2'  src='img/categoria2/frio/" + frio_ramdom[index] + ".png' />"
        );
        x++;
    }

    for (let index = 0; index < 2; index++) {
        array_divs.push(
            "<img id='nombreCat2_" + x + "' data-id='templado' draggable='true' width='50' class='nombreCat2'  src='img/categoria2/templado/" + templado_ramdom[index] + ".png' />"
        );
        x++;
    }

    for (let index = 0; index < 2; index++) {
        array_divs.push(
            "<img id='nombreCat2_" + x + "' data-id='calido' draggable='true' width='50' class='nombreCat2'  src='img/categoria2/calido/" + calido_ramdom[index] + ".png' />"
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
    document.getElementById("pisorTermicoCat2").innerHTML = div;

    // Creamos los eventos para arrastrar los nombres
    var nombres = document.querySelectorAll(".nombreCat2");

    let top = 0;
    let lef = 130;

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
            lef += 70;
        }

        var puntos = document.querySelectorAll(".punto");
        puntos.forEach((punto) => {
            punto.addEventListener("dragover", permitirSoltar);
            punto.addEventListener("drop", soltarNombre);
        });
    }


}

const randomValueGenerator = (vector) => {
    return vector.sort(function (a, b) {
        return Math.random() - 0.5;
    });
};

function permitirSoltar(evento) {
    evento.preventDefault();
}

function soltarNombre(evento) {
    evento.preventDefault();

    // Obtenemos el ID del nombre que se está soltando
    var idNombre = evento.dataTransfer.getData("text");

  
     // Obtenemos el ID del punto donde se soltó el nombre
     var idPunto = evento.target.parentElement.getAttribute("id");
     var elemento = document.getElementById(idPunto);
     elemento.removeEventListener("dragover", permitirSoltar);

    var Ubicacion = evento.target.getAttribute("data-id");

    // Obtenemos el elemento del nombre
    var nombre = document.getElementById(idNombre);

    const hab_animal = nombre.getAttribute("data-id");


    // Lo movemos al punto donde se soltó
    evento.target.appendChild(nombre);

    // Centramos el nombre dentro del punto
    var rectPunto = evento.target.getBoundingClientRect();
    var rectNombre = nombre.getBoundingClientRect();
    var desplazamientoX = rectPunto.left - rectNombre.left + 0.5 * (rectPunto.width - rectNombre.width);
    var desplazamientoY = rectPunto.top - rectNombre.top + 0.5 * (rectPunto.height - rectNombre.height);

    nombre.style.transform = "translate(" + desplazamientoX + "px, " + desplazamientoY + "px)";

    // Verificamos si el nombre ha sido soltado en el punto correcto

    if (Ubicacion == hab_animal) {
        correctas++;
        nombre.draggable = false;
        nombre.style.border = "2px solid #00B54B";
        nombre.style.borderRadius = "5px";
        document.getElementById("img-mascota").src = "../../images/correcto.gif";
    } else {
        nombre.draggable = false;
        nombre.style.border = "2px solid #FF0000";
        nombre.style.borderRadius = "5px";
        document.getElementById("img-mascota").src = "../../images/incorrecto.gif";

    }

    cont++;

    if (cont == 5) {
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
            "Has obtenido " + correctas + " puntos de 5 posibles";


    }
}

function soltarNombre2(evento) {
    evento.preventDefault();

    // Obtenemos el ID del nombre que se está soltando
    var idNombre = evento.dataTransfer.getData("text");

    // Obtenemos el ID del punto donde se soltó el nombre
    var idPunto = evento.target.parentElement.getAttribute("id");
    var elemento = document.getElementById(idPunto);
    
    elemento.removeEventListener("dragover", permitirSoltar);

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
    var desplazamientoX = rectPunto.left - rectNombre.left + 0.5 * (rectPunto.width - rectNombre.width);
    var desplazamientoY = rectPunto.top - rectNombre.top + 0.5 * (rectPunto.height - rectNombre.height);

    nombre.style.transform = "translate(" + desplazamientoX + "px, " + desplazamientoY + "px)";

    // Verificamos si el nombre ha sido soltado en el punto correcto

    if (Ubicacion == hab_animal) {
        correctas++;
        nombre.draggable = false;

    } else {
        nombre.draggable = false;

    }

    cont++;

    if (cont == 10) {
        $("#principal").fadeToggle(1000);
        $("#final").fadeToggle(1000);
        if (correctas < 6) {
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
            "Has obtenido " + correctas + " puntos de 6 posibles";


    }
}

// Funciones para arrastrar y soltar los nombres
function arrastrar(evento) {
    evento.dataTransfer.setData("text", evento.target.id);
    evento.target.style.opacity = "0.5";
}

function soltar(evento) {
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
