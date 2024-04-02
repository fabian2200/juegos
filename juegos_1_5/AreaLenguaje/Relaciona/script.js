let intentosIncorrectos = 0;
let movimientos = 0;

function inicioJuego() {
    const letrasMay = {
        A: "img/A.png",
        B: "img/B.png",
        C: "img/C.png",
        D: "img/D.png",
        E: "img/E.png",
        F: "img/F.png",
        G: "img/G.png",
        H: "img/H.png",
        I: "img/I.png",
        J: "img/J.png",
        K: "img/K.png",
        L: "img/L.png",
        M: "img/M.png",
        N: "img/N.png",
        O: "img/O.png",
        P: "img/P.png",
        Q: "img/Q.png",
        R: "img/R.png",
        S: "img/S.png",
        T: "img/T.png",
        U: "img/U.png",
        V: "img/V.png",
        W: "img/W.png",
        X: "img/X.png",
        Y: "img/Y.png",
        Z: "img/Z.png",
    };
    const letrasMin = {
        a: "img/minuscula/a.png",
        b: "img/minuscula/b.png",
        c: "img/minuscula/c.png",
        d: "img/minuscula/d.png",
        e: "img/minuscula/e.png",
        f: "img/minuscula/f.png",
        g: "img/minuscula/g.png",
        h: "img/minuscula/h.png",
        i: "img/minuscula/i.png",
        j: "img/minuscula/j.png",
        k: "img/minuscula/k.png",
        l: "img/minuscula/l.png",
        m: "img/minuscula/m.png",
        n: "img/minuscula/n.png",
        o: "img/minuscula/o.png",
        p: "img/minuscula/p.png",
        q: "img/minuscula/q.png",
        r: "img/minuscula/r.png",
        s: "img/minuscula/s.png",
        t: "img/minuscula/t.png",
        u: "img/minuscula/u.png",
        v: "img/minuscula/v.png",
        w: "img/minuscula/w.png",
        x: "img/minuscula/x.png",
        y: "img/minuscula/y.png",
        z: "img/minuscula/z.png",
    };

    const letrasMayArray = Object.keys(letrasMay);
    const letrasMinArray = Object.keys(letrasMin);

    shuffleArray(letrasMayArray);
    shuffleArray(letrasMinArray);

    for (let i = 0; i < 10; i++) {
        const letraMayuscula = letrasMayArray[i];
        const letraMinuscula = letrasMinArray[i];

        const imgMayuscula = document.createElement("img");
        imgMayuscula.src = letrasMay[letraMayuscula];
        imgMayuscula.alt = letraMayuscula;
        imgMayuscula.draggable = true;
        imgMayuscula.className = "letra";
        imgMayuscula.setAttribute("ondragstart", "drag(event)");
        imgMayuscula.setAttribute("data-id", "mayusculas");

        const imgMinuscula = document.createElement("img");
        imgMinuscula.src = letrasMin[letraMinuscula];
        imgMinuscula.alt = letraMinuscula;
        imgMinuscula.draggable = true;
        imgMinuscula.className = "letra";
        imgMinuscula.setAttribute("ondragstart", "drag(event)");
        imgMinuscula.setAttribute("data-id", "minusculas");
        const cajonLetras = document.getElementById("cajonLetras");

        // Posición aleatoria dentro del cajón de letras
        let posX, posY;
        do {
            posX = Math.floor(Math.random() * (cajonLetras.offsetWidth - 90));
            posY = Math.floor(Math.random() * (cajonLetras.offsetHeight - 90));
        } while (isOverlapping(posX, posY, imgMayuscula, cajonLetras) || isOverlapping(posX, posY, imgMinuscula, cajonLetras));


        imgMayuscula.style.left = posX + "px";
        imgMayuscula.style.top = posY + "px";

        imgMinuscula.style.left = posX + "px";
        imgMinuscula.style.top = posY + "px";

        cajonLetras.appendChild(imgMayuscula);
        cajonLetras.appendChild(imgMinuscula);
    }
}

function createDraggableImage(letrasObj, letra, dataId) {
    const img = document.createElement("img");
    img.src = letrasObj[letra];
    img.alt = letra;
    img.draggable = true;
    img.className = "letra";
    img.setAttribute("ondragstart", "drag(event)");
    img.setAttribute("data-id", dataId);
    return img;
}

function isOverlapping(x, y, element, container) {
    const elementRect = {
        left: x,
        top: y,
        right: x + element.width,
        bottom: y + element.height
    };

    // Comprobar si la nueva letra se superpone con alguna letra existente en el cajón de letras
    const letrasExistentes = container.querySelectorAll('.letra');
    for (const letraExistente of letrasExistentes) {
        const letraExistenteRect = letraExistente.getBoundingClientRect();

        if (
            elementRect.left < letraExistenteRect.right &&
            elementRect.right > letraExistenteRect.left &&
            elementRect.top < letraExistenteRect.bottom &&
            elementRect.bottom > letraExistenteRect.top
        ) {
            return true; // Hay superposición
        }
    }

    return false; // No hay superposición
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.alt);
}

function drop(event, tipo) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const letraImg = document.querySelector(`img[alt="${data}"]`);
    const cajonDestino = document.getElementById(
        `cajon${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`
    );
    const dataId = letraImg.getAttribute("data-id");

    if (dataId !== tipo) {
        intentosIncorrectos++;
    }

    const posX = event.clientX - cajonDestino.getBoundingClientRect().left - letraImg.width / 2;
    const posY = event.clientY - cajonDestino.getBoundingClientRect().top - letraImg.height / 2;


    const cajon = cajonDestino.getAttribute("data-id");
    if(cajon == "1"){
        movimientos++;
        letraImg.draggable = false;
    }

    letraImg.style.left = posX + "px";
    letraImg.style.top = posY + "px";
   

    cajonDestino.appendChild(letraImg);

    if(movimientos == 20){
        $("#principal").fadeToggle(1000);
        $("#final").fadeToggle(1000);

        if (intentosIncorrectos > 10) {
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
        let tot = 20 - intentosIncorrectos;
        document.getElementById("texto_final").innerText =
        "Has obtenido "+ tot+ " puntos correctos";
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

$(document).ready(function () {
    setTimeout(function () {
        let audio2 = new Audio("sounds/enunciado.mp3");
        audio2.playbackRate = 0.8;
        audio2.play();
    }, 4500);

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
                        "Hola!, Soy genio, En este juego deberás arrastrar las mayúsculas y minúsculas al tablero correspondiente. Tu puedes!!!",
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
                    document.querySelector("#btnomitir").style.display = "none";
                    setTimeout(() => {
                        cerrar_anuncio();
                    }, 3000);
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
    let audio2 = new Audio("../../sounds/fondo.mp3");
    audio2.play();
    audio2.volume = 0.2;
    cerrardo = true;
    const divAnimado2 = document.querySelector(".nube");
    divAnimado2.style.animationName = "moverabajo";
    const divAnimado = document.querySelector(".overlay");
    divAnimado.style.backgroundImage = "url(../../images/normal1.gif)";
    $("#fondo_blanco").fadeToggle(3000);
    setTimeout(function () {
        divAnimado.style.animationName = "moverIzquierda";
        divAnimado.style.animationDirection = "normal";
        setTimeout(() => {
            $("#principal").fadeToggle(1000);
            inicioJuego();
        }, 2000);
    }, 2000);
}
