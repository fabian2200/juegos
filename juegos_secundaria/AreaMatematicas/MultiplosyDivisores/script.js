// Obtener el ancho y alto de la pantalla
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

// Función para generar coordenadas aleatorias dentro de la pantalla
function randomCoordinates() {
    var x = Math.floor(Math.random() * (screenWidth - 0 + 1) + 0);
    var y = Math.floor(Math.random() * (screenHeight - 100 + 1) + 100);
    return { x: x, y: y };
}

function llenarArray(num, tipo) {
    let arrayNumeros = [];
    if (tipo == 1) {
        arrayNumeros = generateMultiplos(num);
        document.getElementById("tipo").innerHTML = "Selecciona los multiplos del número " + num;
    } else {
        arrayNumeros = generateDivisores(num);
        document.getElementById("tipo").innerHTML = "Selecciona los divisores del número " + num;
    }

    let div = "";
    for (let index = 0; index < arrayNumeros.length; index++) {
        let element = arrayNumeros[index];
        div +=
            "<div onclick='nuevodivAzar(this)' style='background-image: url(img/" + index + ".png)' class='elemento " + element.tipo + "' data-id='" +
            element.tipo +
            "'>" +
            "<h2>" + element.numero.toLocaleString() + "</h2>" +
            "</div>";
    }

    document.getElementById("principal2").innerHTML = div;
    moveImages();
    moveImages();
    setInterval(moveImages, 4000);
}


function generateMultiplos(num) {
    let multiples = [];

    for (let i = 1; i <= 100; i++) {
        multiples.push(num * i);
    }

    multiples = randomValueGenerator(multiples);

    let mul = [];
    for (let index = 0; index < 6; index++) {
        const element = multiples[index];
        mul.push({
            numero: element,
            tipo: "correcta",
        });
    }

    for (let i = 1; i <= 10; i++) {
        mul.push({
            numero: num + 3 * i,
            tipo: (num + 3 * i) % num == 0 ? "correcta" : "incorrecta",
        });
    }

    return mul.sort(function (a, b) {
        return a - b;
    });
}

function generateDivisores(num) {
    let divisores = [];
    let no_divisores = [];
    let div = [];
    if (esPrimo(num)) {
        div.push({
            numero: 1,
            tipo: "correcta",
        });
        div.push({
            numero: num,
            tipo: "correcta",
        });

        for (let index = 0; index < 14; index++) {
            div.push({
                numero: Math.floor(Math.random() * (num - 100 + 1) + 100),
                tipo: "incorrecta",
            });
        }
    } else {
        for (let i = 1; i <= num; i++) {
            if (num % i == 0) {
                divisores.push(i);
            } else {
                no_divisores.push(i);
            }
        }

        divisores = randomValueGenerator(divisores);
        no_divisores = randomValueGenerator(no_divisores);

        for (let index = 0; index < divisores.length; index++) {
            const element = divisores[index];
            div.push({
                numero: element,
                tipo: "correcta",
            });
        }

        for (let index = 0; index < (16 - div.length); index++) {
            const element = no_divisores[index];
            div.push({
                numero: element,
                tipo: "incorrecta",
            });
        }

        if (div.length < 16) {
            let faltan = 16 - (div.length);
            for (let index = 0; index < faltan; index++) {
                let numero = Math.floor(Math.random() * (num - 100 + 1) + 100);
                if (num % numero == 0) {
                    div.push({
                        numero: numero,
                        tipo: "correcta",
                    });
                } else {
                    div.push({
                        numero: numero,
                        tipo: "incorrecta",
                    });
                }
            }
        }
    }

    return div.sort(function (a, b) {
        return a - b;
    });
}

function randomValueGenerator(vector) {
    return vector.sort(function () {
        return Math.random() - 0.5;
    });
}

function esPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// Función para mover las imágenes
function moveImages() {
    let images = document.getElementsByClassName("elemento");

    for (let index = 0; index < images.length; index++) {
        const imgElem = images[index];
        var newCoords = randomCoordinates();
        imgElem.style.left = newCoords.x - 100 + "px";
        imgElem.style.top = newCoords.y - 100 + "px";
    }
}


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
                    maquina2("bienvenida", 'Hola, soy Genio. <br> Selecciona una de las siguientes categorias para jugar, y luego selecciona los multiplos o divisores del numero indicado. <br> ¡Tú Puedes!', 50, 1);
                }, 3000)
            }, 2000)
        })
    }, 200)
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
                seleccionar_item();
            }, 2000)
        }, 2000);
    }
}

function seleccionar_item() {
    Swal.fire({
        title: 'Seleccione una categoria',
        icon: 'warning',
        html: '<hr><div class="row">' +
            '<div class="col-2"></div>' +
            '<div class="col-4"><div><button onclick="seleccionar(this,1)" style="font-size: 30px;" class="btn btn-warning">Multiplos <img width="30%" src="img/mul.png"></button></div></div>' +
            '<div class="col-4"><div><button onclick="seleccionar(this,2)" style="font-size: 30px;" class="btn btn-success">Divisores <img width="30%" src="img/divi.png"></button></div></div>' +
            '<div class="col-2"></div>' +
            '</div><hr>',
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        showConfirmButton: false,
        allowOutsideClick: false,
    })
}

let tipo_ope = 0;
function seleccionar(element, tipo) {
    tipo_ope = tipo;
    Swal.close();
    if (tipo == 1) {
        llenarArray(Math.floor(Math.random() * (12 - 2 + 1) + 2), 1)
    } else {
        llenarArray(Math.floor(Math.random() * (10000 - 100 + 1) + 100), 2)
    }
}

let errores = 0;
function nuevodivAzar(element, tipo) {
    let respuesta = element.getAttribute("data-id");

    if (respuesta == "correcta") {
        element.style.backgroundImage = "";
        setTimeout(() => {
            element.style.backgroundImage = 'url("img/bueno.png")';
        }, 200)
    } else {
        errores++;
        element.style.backgroundImage = "";
        setTimeout(() => {
            element.style.backgroundImage = 'url("img/malo.png")';
        }, 200)
    }

    element.style.opacity = "0";
    element.setAttribute("onclick", "")
    element.classList.remove("correcta");
    let correctas = document.getElementsByClassName("correcta").length;

    if (correctas == 0) {
        $('#principal').fadeToggle(500);
        setTimeout(() => {
            $('#final').fadeToggle(1000);
        }, 500)

        document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";

        document.getElementById("texto_final").innerText = "Has terminado, respondiste " + errores + " respuestas incorrectas";

        var audio = new Audio('../../sounds/victory.mp3');
        audio.play();

    }
}