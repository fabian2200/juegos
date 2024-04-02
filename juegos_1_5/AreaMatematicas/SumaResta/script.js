var num1, num2, respuesta;
var preg = 1;
var buenas = 0;

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
                        "Hola, soy Genio. <br> En este juego deberas realizar la operación matemática que se te muestra y luego seleccionar la respuesta correcta. <br> ¡Tu puedes!",
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

        let audio = new Audio("../../sounds/sumayresta.mp3");
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
                comenzar();
            }, 2000)
        }, 2000);
    }
}

var intervalo;

var t1 = document.getElementById("trompa1");
var t2 = document.getElementById("trompa2");
var t3 = document.getElementById("trompa3");
var t4 = document.getElementById("trompa4");

var overlay = document.getElementById('centrodiv');
var centeredImg = document.getElementById('centeredImg');

function comenzar() {
    clearInterval(intervalo);
    document.getElementById("operacion").style.transition = "";
    document.getElementById("operacion").style.backgroundImage = "url(globo.png)";
    document.getElementById("operacion").style.top = "-30px";

    t1.style.animation = "";
    t2.style.animation = "";
    t3.style.animation = "";
    t4.style.animation = "";

    overlay.style.display = 'none';
    centeredImg.style.display = 'none';

    if (preg <= 10) {
        //genera la suma - Numeros aleatorios entre 0 1 9
        num1 = Math.round(Math.random() * 9);
        num2 = Math.round(Math.random() * 9);

        // generar numero aleatorio entre 0 y 1
        operacion = Math.round(Math.random() * 1);
        signo = "";
        if (operacion == 1) {
            signo = "-";
            while (num1 <= num2) {
                num1 = Math.round(Math.random() * 9);
                num2 = Math.round(Math.random() * 9);
            }
            respuesta = num1 - num2;
        } else {
            signo = "+";
            respuesta = num1 + num2;
        }

        var op1 = respuesta;
        var op2 = respuesta + 1;
        var op3 = respuesta - 1;
        var op4 = respuesta + 2;

        var respuestas = [op1, op2, op3, op4];

        var opciones = document.getElementsByClassName("opcion");
        opciones = randomValueGenerator([...opciones]);

        for (let index = 0; index < opciones.length; index++) {
            const element = opciones[index];
            var opcion = respuestas[index];

            element.innerHTML = "<h4 style='margin: 0' class='borde3'>" + opcion + "</h4>"

            if (opcion == respuesta) {
                element.setAttribute("data-id", true)
            } else {
                element.setAttribute("data-id", false)
            }

        }

        //asignamos lo números para que se muestren
        document.getElementById("operacion").innerHTML = "<h3 class='borde'>" + num1 + "</h3>" + "<h3 class='borde'>" + (signo + " " + num2) + "</h3>" + "<h3 style='width: 53px; border-top: 5px solid black'></h3>";
        setTimeout(() => {
            t1.style.animation = "rotateHand 20s linear infinite";
            t2.style.animation = "rotateHand2 20s linear infinite";
            t3.style.animation = "rotateHand3 20s linear infinite";
            t4.style.animation = "rotateHand4 20s linear infinite";

            document.getElementById("operacion").style.transition = "top 20s linear";
            document.getElementById("operacion").style.top = "400px";
            preg = preg + 1;
            intervalo = setInterval(comenzar, 20000);
        }, 10)
    } else {

        $('#principal').fadeToggle(1000);
        setTimeout(() => {
            $('#final').fadeToggle(1000);
        }, 1000)

        if (buenas < 6) {
            document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
        } else {
            document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
        }

        document.getElementById("texto_final").innerText = "Has contestado correctamente " + buenas + " preguntas de 10"

        if (buenas >= 6) {
            var audio = new Audio('../../sounds/victory.mp3');
            audio.play();
        } else {
            var audio = new Audio('../../sounds/game_over.mp3');
            audio.play();
        }

        preg = 1;
        buenas = 0;

        for (let index = 1; index < 11; index++) {
            document.getElementById("preg_" + index).innerHTML = "";
        }
    }
}

function randomValueGenerator(vector) {
    return vector.sort(function () { return Math.random() - 0.5 });
};

function verificar(elemento) {
    var imageContainer = document.getElementById("operacion");
    var image = document.getElementById("imagen");
    var hijo = elemento.firstElementChild.getBoundingClientRect();

    image.style.display = "block"
    image.style.transition = "";
    image.style.left = hijo.left+"px";
    image.style.top = (hijo.top-80)+"px";
    
    var clientX = imageContainer.getBoundingClientRect().left;
    var clientY = imageContainer.getBoundingClientRect().top;


    setTimeout(()=>{
        image.style.transform = "rotate(" + 0 + "deg)";
        var rect = image.getBoundingClientRect();
        var centerX = rect.left + rect.width / 2;
        var centerY = rect.top + rect.height / 2;
        var angle = Math.atan2(clientY - centerY, clientX - centerX);
        var degrees = angle * (180 / Math.PI);
        console.log(degrees);
        image.style.transform = "rotate(" + degrees + "deg)";

        image.style.transition = "left .6s linear, top .6s linear"
        image.style.left = (clientX)+"px";
        image.style.top = (clientY+50)+"px";

        setTimeout(()=>{
            image.style.display = "none";
            imageContainer.style.backgroundImage = "url(explotado.png)";

            if(elemento.firstElementChild.getAttribute("data-id")=="true"){
                buenas++;
                mostrarImagen("../../images/correcto.gif");
            }else{
                mostrarImagen("../../images/derrota.gif");
            }
            
            setTimeout(()=>{
                comenzar();
            }, 2000)
        }, 600)
        
    }, 100)
    
   
}

function mostrarImagen(imagen) {
    overlay.style.display = 'block';
    centeredImg.style.display = 'block';
    centeredImg.setAttribute("src", imagen)
}