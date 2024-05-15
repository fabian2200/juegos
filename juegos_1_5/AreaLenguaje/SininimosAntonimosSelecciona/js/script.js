var textosJson = [];

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

const tipo = [
    {
        parte: "adjetivos",
    },
    {
        parte: "pronombres",
    },
    {
        parte: "sustantivos",
    },
];

function iniciar() {
    var tipo = Math.floor(Math.random() * (1 - 0 + 1) + 0);
    var base_preguntas = null;

    if(tipo == 1){
        base_preguntas = readText("js/textos.json");
        textosJson = JSON.parse(base_preguntas);
        document.getElementById("tipo_preg").innerText = "antónimo";
    }else{
        base_preguntas = readText("js/textos2.json");
        textosJson = JSON.parse(base_preguntas);
        document.getElementById("tipo_preg").innerText = "sinónimo";
    }    
  
    let textAleatorio = Math.floor(Math.random() * textosJson.length);
    let antonimos = randomValueGenerator(textosJson[textAleatorio].antonimos);

    antonimos = antonimos.slice(0, 4);

    var antonimos_o = [];

    antonimos.forEach(element => {
        antonimos_o.push(element[0]);
    });
    

    let textoResaltado = textosJson[textAleatorio].parrafo;
    let palabras = textoResaltado.split(" ");

    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        if(palabra.includes('.')){
            var minuscu = palabra.split(".")[0].toLowerCase();
            if (antonimos_o.includes(minuscu)) {
                palabras[i] = '<span class="borde" style="color: #fb078c;">' + palabra + '</span>';
            }
        }else{
            if(palabra.includes(',')){
                var minuscu = palabra.split(",")[0].toLowerCase();
                if (antonimos_o.includes(minuscu)) {
                    palabras[i] = '<span class="borde" style="color: #fb078c;">' + palabra + '</span>';
                }
            }else{
                if (antonimos_o.includes(palabra.toLowerCase())) {
                    palabras[i] = '<span class="borde" style="color: #fb078c;">' + palabra + '</span>';
                }
            }
        }       
    }

    textoResaltado = palabras.join(' ');

    document.getElementById("titulo_texto").innerHTML = textosJson[textAleatorio].titulo;
    document.getElementById("parrafos").innerHTML = textoResaltado;

    var div = "";
    var contenedor = document.getElementById("opciones_respuestas");

    var i = 0;
    antonimos.forEach(element => {
        div += "<div class='col-6' style='display: flex; justify-content: center; align-items: center'>"+
                    "<label class='label_letra'>"+element[0]+"</label>"+"<span style='height: 57px !important' onclick='openModal("+i+")' id='input"+i+"' data-id='"+element[1]+"' class='form-control input_letra'>"+
                "</div>";
        i++;
    });

    antonimos = randomValueGenerator(antonimos);

    var clases = ["btn btn-info", "btn btn-warning", "btn btn-primary", "btn btn-success"];
    clases = randomValueGenerator(clases);

    var index = 0;
    var div2 = "";
    antonimos.forEach(element => {
        div2 += "<div class='col-6'><button onclick='seleccionarOpcion(this)' class='boton_opcion_modal "+clases[index]+"' data-id='"+element[1]+"'>"+element[1]+"</div>";
        index++;
    });

    document.getElementById("opciones_modal_body").innerHTML = div2;

    contenedor.innerHTML = div;
}

var seleccionado__input = 0;
function openModal(index) {
    seleccionado__input = index;
    $('#modalOpciones').modal('show');
}

var numero_selecciones = 0;
function seleccionarOpcion(boton){
    
    numero_selecciones++;
    var input = document.getElementById("input"+seleccionado__input) 
    var valor = boton.getAttribute('data-id');
    input.innerText  = valor;

    var clases = boton.classList;
    clases.remove(...clases);

    boton.classList.add("btn");
    boton.classList.add("btn-secondary");
    boton.classList.add("boton_opcion_modal");
    boton.disabled = true;

    $('#modalOpciones').modal('hide');

    if(numero_selecciones == 4){
        calificar();
    }
}

var correctasTotal = 0;
function calificar(){
    var inputs = document.getElementsByClassName("input_letra");

    for (let index = 0; index < inputs.length; index++) {
        const element = inputs[index];
        if (element.getAttribute("data-id") == element.innerText) {
            element.style.backgroundColor = "#238d23";
            element.style.borderColor = "#238d23";
            element.style.color = "#ffff";
            correctasTotal++;
        } else {
            element.style.backgroundColor = "#f5153e";
            element.style.borderColor = "#f5153e";
            element.style.color = "#ffff";
        }
    }

    setTimeout(()=>{
        $("#principal").fadeToggle(1000);
        $("#final").fadeToggle(1000);
        if (correctasTotal <= 2) {
            var audio = new Audio("../../sounds/game_over.mp3");
            audio.play();
            document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
        } else {
            document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
            var audio = new Audio("../../sounds/victory.mp3");
            audio.play();
        }
        document.getElementById("texto_final").innerText = "Has obtenido " + (correctasTotal * 25) + " puntos de 100 posibles";
    }, 500)
}

$(document).ready(function () {
    iniciar();

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
                        "Hola, soy Genio. <br> En este juego selecciona los antonimos o sinónimos de las cuatro palabras que se te muestren en el enunciado.",
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

const randomValueGenerator = (vector) => {
    return vector.sort(function (a, b) {
        return Math.random() - 0.5;
    });
};