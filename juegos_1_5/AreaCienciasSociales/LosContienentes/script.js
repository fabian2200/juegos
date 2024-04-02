var colores = [{ op1: '#662482', op2: '#39134a' }, { op1: '#4494d0', op2: '#3372a1' }, { op1: '#f08218', op2: '#c86b12' }, { op1: '#e83967', op2: '#be3156' }, { op1: "#FF0032", op2: "#CD0404" }, { op1: "#2146C7", op2: "#0008C1" }];
var array_c = [
    {
        "nombre": "África",
        "imagen": "img/africa.png"
    },
    {
        "nombre": "Asia",
        "imagen": "img/asia.png"
    },
    {
        "nombre": "Europa",
        "imagen": "img/europa.png"
    },
    {
        "nombre": "Norteamérica",
        "imagen": "img/norteamerica.png"
    },
    {
        "nombre": "Sudamérica",
        "imagen": "img/sudamerica.png"
    },
    {
        "nombre": "Oceanía",
        "imagen": "img/oceania.png"
    }
]


$(document).ready(function () {
    colores = randomValueGenerator(colores);
    generarPaisesAzar();
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
                    maquina2("bienvenida", 'Hola, soy Genio. <br> En este juego, relaciona cada pais con el continente donde se encuentra ubicado, responde mas de 4 respuestas correctas para ganar el juego. <br> ¡Tu Puedes!', 50, 1);
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
    if (!cerrardo) {    
        let audio2 = new Audio('../../sounds/fondo.mp3');
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

var continentes = [];
var arrayPaises = [];

function generarPaisesAzar() {
    var base_preguntas = readText("paises.json");

    interprete_bp = JSON.parse(base_preguntas);
    let paises_africa = interprete_bp.Africa;
    let paises_asia = interprete_bp.Asia;
    let paises_europa = interprete_bp.Europa;
    let paises_namerica = interprete_bp.Norteamerica;
    let paises_samerica = interprete_bp.Sudamerica;
    let paises_oceania = interprete_bp.Oceania;
    //preguntas_desordenadas = interprete_bp.sort(function() {return Math.random() - 0.5});

    arrayPaises = [];
    continentes = [];

    arrayPaises.push({
        pais: "<h4>" + paises_africa[Math.floor(Math.random() * ((paises_africa.length - 1) - 0 + 1) + 0)] + "</h4>",
        id: "África"
    });

    arrayPaises.push({
        pais: "<h4>" + paises_asia[Math.floor(Math.random() * ((paises_asia.length - 1) - 0 + 1) + 0)] + "</h4>",
        id: "Asia"
    });

    arrayPaises.push({
        pais: "<h4>" + paises_europa[Math.floor(Math.random() * ((paises_europa.length - 1) - 0 + 1) + 0)] + "</h4>",
        id: "Europa"
    });

    arrayPaises.push({
        pais: "<h4>" + paises_namerica[Math.floor(Math.random() * ((paises_namerica.length - 1) - 0 + 1) + 0)] + "</h4>",
        id: "Norteamérica"
    });

    arrayPaises.push({
        pais: "<h4>" + paises_samerica[Math.floor(Math.random() * ((paises_samerica.length - 1) - 0 + 1) + 0)] + "</h4>",
        id: "Sudamérica"
    });

    arrayPaises.push({
        pais: "<h4>" + paises_oceania[Math.floor(Math.random() * ((paises_oceania.length - 1) - 0 + 1) + 0)] + "</h4>",
        id: "Oceanía"
    });

    array_c.forEach(element => {
        continentes.push({
            id: element.nombre,
            imagen: "<img class='img_cont' src='" + element.imagen + "' alt='imagen'>"
        });
    });


    arrayPaises = randomValueGenerator(arrayPaises);
    continentes = randomValueGenerator(continentes);
    crearDivs();
}

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


function randomValueGenerator(vector) {
    return vector.sort(function () { return Math.random() - 0.5 });
};

function crearDivs() {
    var columna1 = document.getElementById("columna1");
    var i = 0;
    arrayPaises.forEach(element => {
        let div = "<div onclick='crear_linea(this, 1)' data-id='" + element.id + "' class='point'>" + element.pais + "</div><br>";
        columna1.insertAdjacentHTML('beforeend', div);
        i++
    });

    var columna2 = document.getElementById("columna2");
    continentes.forEach(element => {
        let div = "<div onclick='crear_linea(this, 2)' data-id='" + element.id + "' class='point'>" + element.imagen + "</div><br>";
        columna2.insertAdjacentHTML('beforeend', div);
    });
}

var respuesta_actual = 0;
var respuestas_reci = [];
var point1 = null;
var point2 = null;
var respuesta_a = 0;
function crear_linea(elemento, tipo) {

    if (tipo == 1 && point1 == null) {
        point1 = elemento;
        point1.style.backgroundColor = colores[respuesta_a].op1;
        point1.style.borderColor = colores[respuesta_a].op2;
        point1.style.color = "#ffff";
    }

    if (tipo == 2 && point2 == null) {
        point2 = elemento;
        point2.style.backgroundColor = colores[respuesta_a].op1;
        point2.style.borderColor = colores[respuesta_a].op2;
        point2.style.color = "#ffff";
        point2.firstChild.classList.add("invertir-color");
    }

    if (point1 != null && point2 != null) {
        point1.setAttribute("onclick", "");
        point2.setAttribute("onclick", "");
        //save respuestas
        respuestas_reci.push({
            pregunta: point1.getAttribute('data-id'),
            respuesta: point2.getAttribute('data-id'),
            linea: "line_" + point1.getAttribute('data-id'),
        });


        var line = document.createElement("div");
        line.classList.add("line");
        line.setAttribute("id", "line_" + point1.getAttribute('data-id'))

        // Find the points based off the elements left and top
        var p1 = { x: point1.offsetLeft, y: point1.offsetTop };
        var p2 = { x: point2.offsetLeft, y: point2.offsetTop };

        // Get distance between the points for length of line
        var a = p1.x - p2.x;
        var b = p1.y - p2.y;
        var length = Math.sqrt(a * a + b * b);

        // Get angle between points
        var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;

        // Get distance from edge of point to center
        var pointWidth = point1.clientWidth / 2 + 20;
        var pointHeight = point1.clientHeight / 2 + 20;

        // Set line distance and position
        // Add width/height from above so the line starts in the middle instead of the top-left corner
        line.style.width = length + 'px';
        line.style.left = (p1.x + pointWidth) + 'px';
        line.style.top = (p1.y + pointHeight) + 'px';

        // Rotate line to match angle between points
        line.style.transform = "rotate(" + angleDeg + "deg)";

        document.body.appendChild(line);

        setTimeout(() => {
            point1 = null;
            point2 = null;
        }, 500);

        respuesta_a++;

        point1 = null;
        point2 = null;
    }

    if (respuesta_a >= 6) {
        setTimeout(() => {
            calificar();
        }, 1000)
    }
}

function calificar() {
    let buenas = 0;

    for (let index = 0; index < respuestas_reci.length; index++) {
        const element = respuestas_reci[index];
        var linea = document.getElementById(element.linea);
        if (element.pregunta == element.respuesta) {
            linea.style.backgroundColor = "#1a7412";
            buenas++;
        } else {
            linea.style.backgroundColor = "#aa1b1b";
        }
    }

    setTimeout(() => {
        $('#final').fadeToggle(1000);
    }, 500)
    if (buenas < 6) {
        document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
    } else {
        document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
    }

    document.getElementById("texto_final").innerText = "Has contestado correctamente " + buenas + " preguntas de 6"

    if (buenas >= 4) {
        var audio = new Audio('../../sounds/victory.mp3');
        audio.play();
    } else {
        var audio = new Audio('../../sounds/game_over.mp3');
        audio.play();
    }
}