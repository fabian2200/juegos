let iconos = []
let selecciones = []


function cargarIconos(tipo) {
    let iconos_partes_casa = [
        { icon1: '<img style="width: 130px;" src="img/LUGARES/1.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/1_2.png" alt="">', id: "lugar_1"},
        { icon1: '<img style="width: 130px;" src="img/LUGARES/2.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/2_2.png" alt="">', id: "lugar_2"},
        { icon1: '<img style="width: 130px;" src="img/LUGARES/3.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/3_2.png" alt="">', id: "lugar_3"},
        { icon1: '<img style="width: 130px;" src="img/LUGARES/4.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/4_2.png" alt="">', id: "lugar_4"},
        { icon1: '<img style="width: 130px;" src="img/LUGARES/5.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/5_2.png" alt="">', id: "lugar_5"},
        { icon1: '<img style="width: 130px;" src="img/LUGARES/6.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/6_2.png" alt="">', id: "lugar_6"},
        { icon1: '<img style="width: 130px;" src="img/LUGARES/7.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/7_2.png" alt="">', id: "lugar_7"},
        { icon1: '<img style="width: 130px;" src="img/LUGARES/8.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/8_2.png" alt="">', id: "lugar_8"},
        { icon1: '<img style="width: 130px;" src="img/LUGARES/9.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/9_2.png" alt="">', id: "lugar_9"},
        { icon1: '<img style="width: 130px;" src="img/LUGARES/10.png" alt="">', icon2: '<img style="width: 130px;" src="img/LUGARES/10_2.png" alt="">', id: "lugar_10"}
    ]

    let iconos_saludos = [
        { icon1: '<img style="width: 130px;" src="img/SALUDOS/1.png" alt="">', icon2: '<img style="width: 130px;" src="img/SALUDOS/1_2.png" alt="">', id: "saludo_1"},
        { icon1: '<img style="width: 130px;" src="img/SALUDOS/2.png" alt="">', icon2: '<img style="width: 130px;" src="img/SALUDOS/2_2.png" alt="">', id: "saludo_2"},
        { icon1: '<img style="width: 130px;" src="img/SALUDOS/3.png" alt="">', icon2: '<img style="width: 130px;" src="img/SALUDOS/3_2.png" alt="">', id: "saludo_3"},
        { icon1: '<img style="width: 130px;" src="img/SALUDOS/4.png" alt="">', icon2: '<img style="width: 130px;" src="img/SALUDOS/4_2.png" alt="">', id: "saludo_4"},
        { icon1: '<img style="width: 130px;" src="img/SALUDOS/5.png" alt="">', icon2: '<img style="width: 130px;" src="img/SALUDOS/5_2.png" alt="">', id: "saludo_5"},
        { icon1: '<img style="width: 130px;" src="img/SALUDOS/6.png" alt="">', icon2: '<img style="width: 130px;" src="img/SALUDOS/6_2.png" alt="">', id: "saludo_6"},
        { icon1: '<img style="width: 130px;" src="img/SALUDOS/7.png" alt="">', icon2: '<img style="width: 130px;" src="img/SALUDOS/7_2.png" alt="">', id: "saludo_7"},
        { icon1: '<img style="width: 130px;" src="img/SALUDOS/8.png" alt="">', icon2: '<img style="width: 130px;" src="img/SALUDOS/8_2.png" alt="">', id: "saludo_8"},
        { icon1: '<img style="width: 130px;" src="img/SALUDOS/9.png" alt="">', icon2: '<img style="width: 130px;" src="img/SALUDOS/9_2.png" alt="">', id: "saludo_9"},
        { icon1: '<img style="width: 130px;" src="img/SALUDOS/10.png" alt="">', icon2: '<img style="width: 130px;" src="img/SALUDOS/10_2.png" alt="">', id: "saludo_10"}
    ]

    let iconos_ocupaciones = [
        { icon1: '<img style="width: 130px;" src="img/PROFE/1.png" alt="">', icon2: '<img style="width: 130px;" src="img/PROFE/1_2.png" alt="">', id: "profe_1"},
        { icon1: '<img style="width: 130px;" src="img/PROFE/2.png" alt="">', icon2: '<img style="width: 130px;" src="img/PROFE/2_2.png" alt="">', id: "profe_2"},
        { icon1: '<img style="width: 130px;" src="img/PROFE/3.png" alt="">', icon2: '<img style="width: 130px;" src="img/PROFE/3_2.png" alt="">', id: "profe_3"},
        { icon1: '<img style="width: 130px;" src="img/PROFE/4.png" alt="">', icon2: '<img style="width: 130px;" src="img/PROFE/4_2.png" alt="">', id: "profe_4"},
        { icon1: '<img style="width: 130px;" src="img/PROFE/5.png" alt="">', icon2: '<img style="width: 130px;" src="img/PROFE/5_2.png" alt="">', id: "profe_5"},
        { icon1: '<img style="width: 130px;" src="img/PROFE/6.png" alt="">', icon2: '<img style="width: 130px;" src="img/PROFE/6_2.png" alt="">', id: "profe_6"},
        { icon1: '<img style="width: 130px;" src="img/PROFE/7.png" alt="">', icon2: '<img style="width: 130px;" src="img/PROFE/7_2.png" alt="">', id: "profe_7"},
        { icon1: '<img style="width: 130px;" src="img/PROFE/8.png" alt="">', icon2: '<img style="width: 130px;" src="img/PROFE/8_2.png" alt="">', id: "profe_8"},
        { icon1: '<img style="width: 130px;" src="img/PROFE/9.png" alt="">', icon2: '<img style="width: 130px;" src="img/PROFE/9_2.png" alt="">', id: "profe_9"},
        { icon1: '<img style="width: 130px;" src="img/PROFE/10.png" alt="">', icon2: '<img style="width: 130px;" src="img/PROFE/10_2.png" alt="">', id: "profe_10"}
    ]

    switch (tipo) {
        case 1:
            return iconos_saludos;
        break;
        case 2:
            return iconos_partes_casa;
        break;
        case 3:
            return iconos_ocupaciones;
        break;
        default:
            return [];
        break;
    }
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
              maquina2("bienvenida",'Hola, soy Genio. <br> A continuación selecciona una categoria y luego resuelve el memograma, encontrando la imagen y la manera correcta de escribirla. <br> ¡Tu Puedes!',50,1);
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
            elegir();
            $('#principal').fadeToggle(1000);
        }, 2000)
    }, 2000);
}

let audio2 = null;
function elegir(){
    if(audio2 != null){
        audio2.pause();
    }
    audio2 = new Audio('../../sounds/fondo.mp3');
    audio2.play(); 
    audio2.volume = "0.2";

    Swal.fire({
    title: 'Selecciona una Categoria...',
    icon: 'info',
    html: '<div style="padding-top: 20px"  class="row">'+
            '<div class="col-4"><div><img onclick="seleccionar(this, 1)" class="imagen_Vocal" src="img/saludos.png" alt=""></div></div>'+
            '<div class="col-4"><div><img onclick="seleccionar(this, 2)" class="imagen_Vocal" src="img/partes.png" alt=""></div></div>'+
            '<div class="col-4"><div><img onclick="seleccionar(this, 3)" class="imagen_Vocal" src="img/ocupaciones.png" alt=""></div></div>'+
        '</div>',
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: false,
    allowOutsideClick: false,
    focusConfirm: false,
    });
}

function seleccionar(elemento, tipo) {

    var datos_array = cargarIconos(tipo);
    var tema = "";

    switch (tipo) {
    case 1:
        tema = "Saludos (Grettings and Farewells)";
    break;
    case 2:
        tema = "Partes de la Casa (Parts of the house)";
    break;
    case 3:
        tema = "Ocupaciones (Occupations)";
    break;
    default:
    break;
    }

    elemento.classList.add("seleccionado");

    setTimeout(()=>{
    swal.close();
    document.getElementById("tema").innerHTML = tema;
    generarTablero(datos_array);
    }, 1000)
}

function generarTablero(datos) {
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for (let i = 0; i < 10; i++) {
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

    for (let i = 0; i < 10; i++) {
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

        if(encontrados == 10){
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