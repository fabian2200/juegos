$(document).ready(function () {
    setTimeout(() => {
        $('#principal').fadeToggle(1000);
        $('#fondo_blanco').fadeToggle(3000);
        setTimeout(() => {
            const divAnimado = document.querySelector('.overlay');
            divAnimado.style.animationName = 'moverDerecha';
            divAnimado.style.animationDirection = 'normal';
            divAnimado.style.display = 'block';
            setTimeout(() => {
                const divAnimado2 = document.querySelector('.nube');
                divAnimado2.style.animationName = 'moverArriba';
                divAnimado2.style.animationDirection = 'normal';
                divAnimado2.style.display = 'block';
                setTimeout(() => {
                    divAnimado.style.backgroundImage = "url(../../images/normal2.gif)"
                    maquina2("bienvenida", 'Hola, soy Genio. <br> A continuación se te presentará una recta numérica incompleta, en las cuales deberás llevar el astronauta al mundo que tenga el numero correcto, responde mas de 6 preguntas correctamente para ganar el juego. <br> ¡Tú Puedes!', 50, 1);
                }, 3000)
            }, 2000)
        })
    }, 200)
});

function maquina2(contenedor, texto, intervalo, n) {
    var i = 0,
        timer = setInterval(function () {
            if (i < texto.length) {
                $("#" + contenedor).html(texto.substr(0, i++) + "_");
            } else {
                clearInterval(timer);
                $("#" + contenedor).html(texto);
                if (!cerrardo) {
                    document.querySelector('#btnomitir').style.display = "none";
                    setTimeout(() => {
                        cerrar_anuncio();
                    }, 3000)
                }
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
        let audio = new Audio('../../sounds/fondo.mp3');
        audio.play();
        audio.volume = 0.2;
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
                preguntar();
            }, 2000)
        }, 2000);
    }
}

let pregunta_actual = 1;
var halfwayPosition = window.innerWidth / 2;
var div = document.getElementById("myDiv");
var astronauta = document.getElementById("astronauta");
var myReq;
let correctas = 0;

function preguntar() {
    if (pregunta_actual <= 10) {
        div.style.animation = "moveDiv 20s linear infinite";
        astronauta.style.display = "none";
        astronauta.style.animation = "";
        astronauta.style.top = "90px";
        astronauta.style.backgroundImage = "url(astronauta.png)";
        astronauta.style.transform = "rotate(1deg)";
        astronauta.style.height = "40px";

        document.getElementById("pregunta_numero").innerText = pregunta_actual+" / 10";

        for (let index = 1; index <= 3; index++) {
            const element = document.getElementById("planeta" + index);
            element.innerHTML = "";
        }
        generarRecta();
    } else {
        $('#principal').fadeToggle(500);
        setTimeout(() => {
            $('#final').fadeToggle(1000);
        }, 500)
        if (correctas >= 6) {
            document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
            var audio = new Audio('../../sounds/victory.mp3');
            audio.play();
        } else {
            document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
            var audio = new Audio('../../sounds/game_over.mp3');
            audio.play();
        }

        document.getElementById("texto_final").innerText = "Has respondido correctamente " + correctas + "  preguntas de 10.";
    }
}

function generarRecta() {
    var numero =  0;
    var paso = Math.floor(Math.random() * (5 - 1 + 1) + 1);

    if(paso == 1){
        Math.floor(Math.random() * (90 - 1 + 1) + 1);
    }else{
        if(paso == 2){
           numero = Math.floor(Math.random() * (80 - 1 + 1) + 1);
        }else{
            if(paso == 3){
                numero = Math.floor(Math.random() * (70 - 1 + 1) + 1);
            }else{
                if(paso == 4){
                    numero = Math.floor(Math.random() * (60 - 1 + 1) + 1);
                }else{
                    if(paso == 5){
                        numero =  Math.floor(Math.random() * (50 - 1 + 1) + 1);
                    }
                }
            }
        }
    }

    var faltante =  Math.floor(Math.random() * (10 - 1 + 1) + 1);

    var faltante_numero = 0;

    var i = 1;
    for (let index = 0; index < 10; index++) {
        var numero_recta = numero + (index * paso);
        if(i != faltante ){
            document.getElementById("cajon"+i).innerHTML = "<h2 style='color: blue'>"+numero_recta+"</h2>";
        }else{
            document.getElementById("cajon"+i).innerHTML = "<h2 style='color: red'> ? </h2>";
            faltante_numero = numero_recta;
        }
        i++;
    }

    var numero1 = faltante_numero + (Math.floor(Math.random() * (paso - 1 + 1) + 1))
    var numero2 = faltante_numero - (Math.floor(Math.random() * (paso - 1 + 1) + 1))

    var numeros_opciones = [[faltante_numero, true], [numero1, false], [numero2, false]];
    
    numeros_opciones = randomValueGenerator(numeros_opciones);

    for (let index = 1; index <= 3; index++) {
        const element = numeros_opciones[index-1];
        
        document.getElementById("planeta"+index).setAttribute("data-id", element[1]);
        document.getElementById("planeta"+index).innerHTML = "<h2 class='borde'>"+element[0]+"</h2>";
    }

}

function randomValueGenerator(vector) {
    return vector.sort(function () { return Math.random() - 0.5 });
};

function checkPosition() {
    var currentPosition = parseFloat(getComputedStyle(div).left);

    if (currentPosition >= halfwayPosition && currentPosition <= halfwayPosition + 2) {
        astronauta.style.display = "block";
        astronauta.style.left = halfwayPosition + "px";
        astronauta.style.animation = "moveDiv2 15s linear";

        document.addEventListener('click', handleClickOrTouch);
        document.addEventListener('touchstart', handleClickOrTouch);

        setTimeout(() => {
            astronauta.style.top = "500px";
            document.removeEventListener('click', handleClickOrTouch);
            document.removeEventListener('touchstart', handleClickOrTouch);

            var container = document.querySelector('[data-id="true"]');
            var element = astronauta;

            var containerRect = container.getBoundingClientRect();
            var elementRect = element.getBoundingClientRect();

            if (elementRect.top >= containerRect.top && elementRect.left >= containerRect.left && elementRect.right <= containerRect.right && elementRect.bottom <= containerRect.bottom) {
                astronauta.style.transition = "left 3.5s linear, top 3.5s linear";
                astronauta.style.animation = "";
                astronauta.style.backgroundImage = "url(cohete.png)";
                correctas++;
                setTimeout(() => {
                    astronauta.style.transform = "rotate(45deg)"
                    astronauta.style.height = "90px"
                    astronauta.style.left = "1800px";
                    astronauta.style.top = "250px";
                }, 200)
            } else {
                astronauta.style.animation = "rotate-scale 3s linear";
                astronauta.style.transition = "left 3s linear, top 3s linear";
                setTimeout(() => {
                    astronauta.style.left = halfwayPosition + "px";
                    astronauta.style.top = "250px";
                }, 100)
                setTimeout(() => {
                    astronauta.style.display = "none";
                }, 3000)
            }

            setTimeout(() => {
                pregunta_actual++;
                preguntar();
            }, 3500)
        }, 14900)
    }

    if (currentPosition >= 1780) {
        div.style.animation = "";
        div.style.left = "-500px";
    }

    myReq = requestAnimationFrame(checkPosition);
}

checkPosition();

function handleClickOrTouch(event) {
    astronauta.style.transition = "left .5s linear";
    var touchX = event.clientX || event.touches[0].clientX;
    var halfScreenWidth = window.innerWidth / 2;

    if (touchX < halfScreenWidth) {
        astronauta.style.left = (astronauta.offsetLeft - 50) + "px";
    } else {
        astronauta.style.left = (astronauta.offsetLeft + 50) + "px";
    }
}

function mover_izquierda(){
    astronauta.style.transition = "left .5s linear";
    astronauta.style.left = (astronauta.offsetLeft - 50) + "px";
}

function mover_derecha(){
    astronauta.style.transition = "left .5s linear";
    astronauta.style.left = (astronauta.offsetLeft + 50) + "px";
}

document.addEventListener('mousemove', function (event) {
    var body = document.querySelector('body');
    var halfWidth = window.innerWidth / 2;
    if (event.clientX < halfWidth) {
        body.classList.remove('right-cursor');
        body.classList.add('left-cursor');
    } else {
        body.classList.remove('left-cursor');
        body.classList.add('right-cursor');
    }
});