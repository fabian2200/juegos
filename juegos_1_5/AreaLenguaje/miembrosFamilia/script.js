let iconos = []
let selecciones = []


function cargarIconos() {
    let iconos_familia = [
        { icon1: '<img style="width: 130px;" src="img/LUGARES/abuela.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/abuela2.png" alt="">', id: "lugar_1"},
        { icon1: '<img style="width: 130px;" src="img/LUGARES/abuelo.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/abuelo2.png" alt="">', id: "lugar_2"},
        { icon1: '<img style="width: 130px;" src="img/LUGARES/bebe.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/bebe2.png" alt="">', id: "lugar_3"},
        { icon1: '<img style="width: 130px;" src="img/LUGARES/hija.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/hija2.png" alt="">', id: "lugar_4"},
        { icon1: '<img style="width: 130px;" src="img/LUGARES/hijo.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/hijo2.png" alt="">', id: "lugar_5"},
        { icon1: '<img style="width: 130px;" src="img/LUGARES/mama.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/mama2.png" alt="">', id: "lugar_6"},
        { icon1: '<img style="width: 130px;" src="img/LUGARES/nieta.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/nieta2.png" alt="">', id: "lugar_7"},
        { icon1: '<img style="width: 130px;" src="img/LUGARES/nieto.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/nieto2.png" alt="">', id: "lugar_8"},
        { icon1: '<img style="width: 130px;" src="img/LUGARES/papa.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/papa2.png" alt="">', id: "lugar_9"},
        { icon1: '<img style="width: 130px;" src="img/LUGARES/primo.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/primo2.png" alt="">', id: "lugar_10"},
        { icon1: '<img style="width: 130px;" src="img/LUGARES/tia.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/tia2.png" alt="">', id: "lugar_11"},
        { icon1: '<img style="width: 130px;" src="img/LUGARES/tio.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/tio2.png" alt="">', id: "lugar_12"}
    ]

    return iconos_familia;
}

$(document).ready(function() { 
    setTimeout(()=>{
        $('#principal').fadeToggle(1000);
        $('#fondo_blanco').fadeToggle(3000);
        setTimeout(()=>{
          const divAnimado = document.querySelector('.overlay');
          divAnimado.style.animationName = 'moverDerecha';
          divAnimado.style.animationDirection = 'normal';
          divAnimado.style.display = 'block';
          setTimeout(()=>{
            const divAnimado2 = document.querySelector('.nube');
            divAnimado2.style.animationName = 'moverArriba';
            divAnimado2.style.animationDirection = 'normal';
            divAnimado2.style.display = 'block';
            setTimeout(()=>{
              divAnimado.style.backgroundImage = "url(../../images/normal2.gif)"
              maquina2("bienvenida",'Hola, soy Genio. <br> A continuación deberás buscar las cartas que tengan el miembro de la familia en ingles y español, para ganar tendrás que relacionar todas las cartas cuyo significado sea igual <br> ¡Tu Puedes!',50,1);
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
            seleccionar();
            $('#principal').fadeToggle(1000);
        }, 2000)
    }, 2000);
}

function seleccionar() {
    var datos_array = cargarIconos();
    var tema = "Miembros de la familia";
    document.getElementById("tema").innerHTML = tema;
    generarTablero(datos_array);
}

const randomValueGenerator = (vector) => {
    return vector.sort(function (a, b) {
        return Math.random() - 0.5;
    });
};

function generarTablero(datos) {
    datos = randomValueGenerator(datos);
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for (let i = 0; i < 4; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" data-id="${datos[i].id}" id="trasera${i}">
                    ${datos[i].icon1}
                </div>
                <div class="cara superior">
                    <img style="width: 130px;" src="img/cara.png" alt="">
                </div>
            </div>
        </div>`)
    }

    for (let i = 0; i < 4; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta('_${i}')">
            <div class="tarjeta" id="tarjeta_${i}">
                <div class="cara trasera" data-id="${datos[i].id}" id="trasera_${i}">
                    ${datos[i].icon2}
                </div>
                <div class="cara superior">
                    <img style="width: 130px;" src="img/cara.png" alt="">
                </div>
            </div>
        </div>`)
    }

    tarjetas.sort(() => Math.random() - 0.5);
    tablero.innerHTML = tarjetas.join(" ");
    document.getElementById("opciones").style.opacity = "1";
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

let encontrados = 0;
function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0]).getAttribute("data-id");
        let trasera2 = document.getElementById("trasera" + selecciones[1]).getAttribute("data-id");
        if (trasera1 != trasera2) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            encontrados++;
        }

        if(encontrados == 4){
            $('#principal').fadeToggle(500);
            setTimeout(()=>{
                $('#final').fadeToggle(1000);
            }, 500)
            
            document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
            
            document.getElementById("texto_final").innerText = "Felicitaciones, lo has logrado"

            var audio = new Audio('../../sounds/victory.mp3');
            audio.play();
           
        }
    }, 700);
}