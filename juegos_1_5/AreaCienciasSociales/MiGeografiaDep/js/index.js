var nameDpto;
var nameDpto1;
var nameMunicipio;

var actual;
var actual_departamento;
var actual_municipio;

var vconf = { style: "color: #000000" };
var clickDpto;
$typeOffice = 0;

$municipios = [];
var fload = false;

var array_dep = ["Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andres", "Providencia", "Santa catalina", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"]
var dep_sel = "";
var preg_actual = 1;
let correctas = 0;

$(window).on("load", function () {
    array_dep = array_dep.sort(function () { return Math.random() - 0.5 });
    Cargar_Colombia();
    generarPregunta();
});

function generarPregunta() {
    if (preg_actual <= 10) {
        dep_sel = array_dep[preg_actual];
        document.getElementById("nameCiudad").innerText = dep_sel;
    } else {
        $('#principal').fadeToggle(500);
        setTimeout(() => {
            $('#final').fadeToggle(1000);
        }, 500)
        if (correctas < 6) {
            document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
        } else {
            document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
        }

        document.getElementById("texto_final").innerText = "Has contestado correctamente " + correctas + " preguntas de 10"

        if (correctas >= 6) {
            var audio = new Audio('../../sounds/victory.mp3');
            audio.play();
        } else {
            var audio = new Audio('../../sounds/game_over.mp3');
            audio.play();
        }
    }

    preg_actual++;
}

function Cargar_Colombia() {
    actual = "pais";
    $("div#colombia").load("img/Colombia.svg", function () {
        $("div#colombia").on("click", "path", Colombia_a_Departamento)

        var dpto = undefined;
        var fclick = undefined;
        if (!fload) {
            fload = true;
            var p = getUrlParams()
            dpto = p['dpto'];
            console.log(dpto)
        }
    });

}

function Colombia_a_Departamento() {
    if ($(this).hasClass("disabled")) return;
    actual_departamento = $(this).attr("url");
    var element = this;
    element.classList.remove("cls-1");

    if (actual_departamento == dep_sel) {
        element.classList.remove("incorrecto");
        element.classList.add("correcto");
        var audio = new Audio('../../sounds/ok.mp3');
        audio.play();
        correctas++;
    } else {
        element.classList.add("incorrecto");
        var audio = new Audio('../../sounds/over.mp3');
        audio.play();
    }

    setTimeout(() => {
        generarPregunta();
    }, 2000)
}

function zoomState(state, nameParent) {
    var zoomState = document.getElementById(state), tl = new TimelineMax();

    var svg1 = zoomState;
    var rect = svg1.getBoundingClientRect();

    var scale = 0; //Establecer nuevo scale automatico, ignora SVG
    if (rect.width > rect.height) {
        scale = 450 / rect.width;
    } else {
        scale = 450 / rect.height;
    }
    var position = positionElementToCenter(zoomState, nameParent, 0);
    tl
        .set(zoomState, {
            visibility: "visible"
        })
        .set(zoomState, {
            transformOrigin: "50% 50%"
        })
        .to(zoomState, 0.7, {
            scale: 10,
            x: position.x,
            y: position.y,
            ease: Power2.easeInOut
        });
    tl.pause;
    $('.state-details').on('click', function () {
        tl.reverse();
    });
}

function positionElementToCenter(element, nameParent, move) {

    var bbox = element.getBBox(),
        svg = document.getElementById(nameParent),
        viewBox = $(svg).attr('viewBox');
    viewBox = viewBox.split(' ');

    var cx = parseFloat(viewBox[0]) + (parseFloat(viewBox[2]) / 2);
    var cy = parseFloat(viewBox[1]) + (parseFloat(viewBox[3]) / 2);

    if (move == null) {
        var x = cx - bbox.x - ((bbox.width / 2) + 1); // 30 is offset
        var y = cy - bbox.y - ((bbox.height / 2) + 10); // 20 is offset
    } else {
        var x = cx - bbox.x - ((bbox.width / 2) + 1); // 30 is offset
        var y = cy - bbox.y - ((bbox.height / 2) + parseInt(move)); // 20 is offset
    }
    return { x: x, y: y };
}

SVGElement.prototype.getTransformToElement = SVGElement.prototype.getTransformToElement || function (toElement) {
    return toElement.getScreenCTM().inverse().multiply(this.getScreenCTM());
};

function formatCurrency(locales, currency, number, fractionDigits = 0, mm = 0) {
    number = mm === 0 ? number : number / mm;
    return format(number);
}


function format(value, div = 1, signo = "") {
    if (div === 1) {
        var v = value
    } else {
        var v = Math.round(value / div)
    }
    return signo + " " + new Intl.NumberFormat(["ban", "id"]).format(v)
}


$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    else {
        return results[1] || 0;
    }
}
function getUrlParams() {
    var url = window.location.href;
    var params = {};
    url.substring(1).replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (str, key, value) {
            params[key] = value;
        });
    return params;
}