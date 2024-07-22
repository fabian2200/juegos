function mostrarOpciones(posActual, posFinal){
	if(posActual <= posFinal){
		var elemento = document.getElementById("op"+posActual);
		elemento.style.animation = "expandir 0.5s forwards";
		elemento.innerHTML ="<h4 class='borde' style='margin: 0; font-size: 15px'>"+opciones_respuesta[posActual-1][0]+"</h4>";
		elemento.setAttribute("data-id", opciones_respuesta[posActual-1][1]);
		setTimeout(()=>{
			mostrarOpciones(posActual+1, 3);
		}, 500)
	}
}

var numero_respuestas = 0;
var correctas = 0;

function verificar(elemento){
	var resultado = elemento.getAttribute("data-id");
	elemento.style.width = "200px";
	elemento.style.height = "80px";
	elemento.style.opacity = "1";

	if(resultado == "true"){
		elemento.style.animation = "titileo 3s forwards";
		correctas++;
		setTimeout(()=>{
			var audio = new Audio('../../sounds/ok.mp3');
			audio.play();
		}, 2500)
	}else{
		elemento.style.animation = "titileo2 3s forwards";
		setTimeout(()=>{
			var audio = new Audio('../../sounds/over.mp3');
			audio.play();
		}, 2500)
	}

	numero_respuestas++;
	setTimeout(()=>{
		elemento.style.backgroundColor = "#24b9fb";
		ocultarOpciones(1, 3);
		setTimeout(()=>{
			if(numero_respuestas < 10){
				crearJuego();
			}else{
			    $('#principal').fadeToggle(1000);
                setTimeout(()=>{
                    $('#final').fadeToggle(1000);
                }, 1000)

                if(correctas < 6 ){
                    document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
                    var audio = new Audio('../../sounds/game_over.mp3');
                    audio.play();
                }else{
                    document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
                    var audio = new Audio('../../sounds/victory.mp3');
                    audio.play();
                }

                document.getElementById("texto_final").innerText = "Has contestado correctamente "+correctas+" preguntas de 10"
			}
		}, 2000)
	}, 3100)
}

function ocultarOpciones(posActual, posFinal){
	if(posActual <= posFinal){
		var elemento = document.getElementById("op"+posActual);
		elemento.style.animation = "ocultar 0.5s forwards";
		setTimeout(()=>{
			ocultarOpciones(posActual+1, 3);
		}, 500)
	}
}


function randomValueGenerator(vector) {
    return vector.sort(function () { return Math.random() - 0.5 });
}


$(document).ready(function() {
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
                        "Hola, soy Genio. <br> En este juego deberás hacer el calculo que se te indique y seleccionar la opción que tenga la respuesta correcta. <br> ¡Tu puedes!",
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
	if(!cerrardo) {
		let audio2 = new Audio('../../sounds/fondo.mp3');
		audio2.play();
		audio2.volume = 0.2;

		let audio = new Audio('../../sounds/sumayresta.mp3');
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
				crearJuego();
			}, 2000)
		}, 2000);
	}
}


function crearJuego(){
	var numero_aleatorio = Math.floor(Math.random() * (4 - 1 + 1) + 1);

	var num1 = Math.floor(Math.random() * (10 - 2 + 1) + 2);
	var resultado_correcto = 0;
	var unidaddestino = '';
	var unidadorigen = '';

	switch (numero_aleatorio) {
		case 1:

			var nombres = [
				{ nombre: "milímetro", simbolo: "mm", factor: 1 },
				{ nombre: "centímetro", simbolo: "cm", factor: 10 },
				{ nombre: "decímetro", simbolo: "dm", factor: 100 },
				{ nombre: "metro", simbolo: "m", factor: 1000 },
				{ nombre: "decámetro", simbolo: "dam", factor: 10000 },
				{ nombre: "hectómetro", simbolo: "hm", factor: 100000 },
				{ nombre: "kilómetro", simbolo: "km", factor: 1000000 },
				{ nombre: "pie", simbolo: "ft", factor: 304.8 },
				{nombre: "milla", simbolo: "mi", factor: 1609344 },
				{ nombre: "yarda", simbolo: "yd", factor: 914.4 }
			];

			nombres = randomValueGenerator(nombres);

			unidadorigen = nombres[0].nombre;
			unidaddestino = nombres[2].nombre;

			if(nombres[2].factor <= 1000){
				num1 = num1 * Math.floor(Math.random() * (100 - 50 + 1) + 50);
			}

			resultado_correcto = convertirUnidad(num1, unidaddestino, unidadorigen);
			break;
		case 2:
			var nombres = [
				{ nombre: "segundo", factor: 1 },
				{ nombre: "minuto", factor: 60 },
				{ nombre: "hora", factor: 3600 },
				{ nombre: "día", factor: 86400 },
				{ nombre: "semana", factor: 604800 },
				{ nombre: "mes", factor: 2592000 },
				{ nombre: "año", factor: 31536000 },
				{ nombre: "siglo", factor: 3153600000 },
			];

			nombres = randomValueGenerator(nombres);

			unidadorigen = nombres[0].nombre;
			unidaddestino = nombres[2].nombre;

			if(nombres[2].factor <= 3600){
				num1 = num1 * Math.floor(Math.random() * (150 - 80 + 1) + 50);
			}

			resultado_correcto = convertirUnidadTiempo(num1, unidaddestino, unidadorigen);
			break;
		case 3:
			var nombres = [
				{ nombre: "gramo", factor: 1 },
				{ nombre: "onza", factor: 28.3495 },
				{ nombre: "libra", factor: 500 },
				{ nombre: "kilo", factor: 1000 },
				{ nombre: "quintal", factor: 100000 },
				{ nombre: "tonelada", factor: 1000000 }
			];

			nombres = randomValueGenerator(nombres);

			unidadorigen = nombres[0].nombre;
			unidaddestino = nombres[2].nombre;

			if(nombres[2].factor <= 500){
				num1 = num1 * Math.floor(Math.random() * (100 - 50 + 1) + 50);
			}

			resultado_correcto = convertirUnidadMasa(num1, unidaddestino, unidadorigen);
			break;
		case 4:
			var nombres = [
				{ nombre: "Celsius"},
				{ nombre: "Fahrenheit"},
				{ nombre: "Kelvin"},
			];

			nombres = randomValueGenerator(nombres);

			unidadorigen = nombres[0].nombre;
			unidaddestino = nombres[2].nombre;

			resultado_correcto = convertirTemperatura(num1, unidaddestino, unidadorigen);
			break;
	}

	if(unidadorigen == "quintal"){
		document.getElementById("uo").innerText = unidadorigen+"es";
	}else{
		if(unidadorigen == "Celsius" || unidadorigen == "Fahrenheit" || unidadorigen == "Kelvin" ){
			document.getElementById("uo").innerText = "grados "+ unidadorigen;
		}else{
			document.getElementById("uo").innerText = unidadorigen+"s";
		}
	}


	if(unidaddestino == "quintal"){
		document.getElementById("ud").innerText = unidaddestino+"es";
	}else{
		if(unidaddestino == "Celsius" || unidaddestino == "Fahrenheit" || unidaddestino == "Kelvin" ){
			document.getElementById("ud").innerText = "grados "+ unidaddestino;
		}else{
			document.getElementById("ud").innerText = unidaddestino+"s";
		}
	}

	document.getElementById("num").innerText = num1;

	var num_res = resultado_correcto[0];
	var uni_res = resultado_correcto[1];

	opciones_respuesta = [];
	opciones_respuesta.push([num_res+" "+uni_res, true]);

	if(Number.isInteger(num_res)){
		opciones_respuesta.push([(num_res * (Math.random() * (2 - 0 + 1) + 0)).toFixed(0)+uni_res, false]);
		opciones_respuesta.push([(num_res * (Math.random() * (2 - 0 + 1) + 0)).toFixed(0)+uni_res, false]);
	}else{
		opciones_respuesta.push([(num_res * (Math.random() * (2 - 0 + 1) + 0)).toFixed(4)+uni_res, false]);
		opciones_respuesta.push([(num_res * (Math.random() * (2 - 0 + 1) + 0)).toFixed(4)+uni_res, false]);
	}

	opciones_respuesta = randomValueGenerator(opciones_respuesta);
	mostrarOpciones(1, 3);
}


function convertirUnidad(numero, unidadOrigen, unidadDestino) {
    const unidades = {
        "milímetro": { nombre: "milímetro", simbolo: "mm", factor: 1 },
        "centímetro": { nombre: "centímetro", simbolo: "cm", factor: 10 },
        "decímetro": { nombre: "decímetro", simbolo: "dm", factor: 100 },
        "metro": { nombre: "metro", simbolo: "m", factor: 1000 },
        "decámetro": { nombre: "decámetro", simbolo: "dam", factor: 10000 },
        "hectómetro": { nombre: "hectómetro", simbolo: "hm", factor: 100000 },
        "kilómetro": { nombre: "kilómetro", simbolo: "km", factor: 1000000 },
        "pie": { nombre: "pie", simbolo: "ft", factor: 304.8 },
        "milla": { nombre: "milla", simbolo: "mi", factor: 1609344 },
        "yarda": { nombre: "yarda", simbolo: "yd", factor: 914.4 }
    };

    if (unidades.hasOwnProperty(unidadOrigen) && unidades.hasOwnProperty(unidadDestino)) {
        const factorOrigen = unidades[unidadOrigen].factor;
        const factorDestino = unidades[unidadDestino].factor;
        const resultado = (numero * factorOrigen) / factorDestino;
        return [Number.isInteger(resultado) ? resultado : resultado.toFixed(4), " "+unidadDestino+'s'];
    } else {
        return "Unidad de origen o de destino no válida";
    }
}

function convertirUnidadTiempo(numero, unidadOrigen, unidadDestino) {
    const unidades = {
        "segundo": { nombre: "segundo", factor: 1 },
        "minuto": { nombre: "minuto", factor: 60 },
        "hora": { nombre: "hora", factor: 3600 },
        "día": { nombre: "día", factor: 86400 },
        "semana": { nombre: "semana", factor: 604800 },
        "mes": { nombre: "mes", factor: 2592000 },
        "año": { nombre: "año", factor: 31536000 },
        "siglo": { nombre: "siglo", factor: 3153600000 },
        "milenio": { nombre: "milenio", factor: 31536000000 }
    };

    if (unidades.hasOwnProperty(unidadOrigen) && unidades.hasOwnProperty(unidadDestino)) {
        const factorOrigen = unidades[unidadOrigen].factor;
        const factorDestino = unidades[unidadDestino].factor;
        const resultado = (numero * factorOrigen) / factorDestino;
        if(unidadDestino == "mes"){
			return [Number.isInteger(resultado) ? resultado : resultado.toFixed(4), " "+unidadDestino+'es'];
		}else{
			return [Number.isInteger(resultado) ? resultado : resultado.toFixed(4), " "+unidadDestino+'s'];
		}
    } else {
        return "Unidad de origen o de destino no válida";
    }
}

function convertirUnidadMasa(numero, unidadOrigen, unidadDestino) {
    const unidades = {
        "gramo": { nombre: "gramo", factor: 1 },
        "onza": { nombre: "onza", factor: 28.3495 },
        "libra": { nombre: "libra", factor: 500 },
        "kilo": { nombre: "kilo", factor: 1000 },
        "quintal": { nombre: "quintal", factor: 100000 },
        "tonelada": { nombre: "tonelada", factor: 1000000 }
    };

    if (unidades.hasOwnProperty(unidadOrigen) && unidades.hasOwnProperty(unidadDestino)) {
        const factorOrigen = unidades[unidadOrigen].factor;
        const factorDestino = unidades[unidadDestino].factor;
        const resultado = (numero * factorOrigen) / factorDestino;
		if(unidadDestino == "quintal"){
			return [Number.isInteger(resultado) ? resultado : resultado.toFixed(4), " "+unidadDestino+'es'];
		}else{
			return [Number.isInteger(resultado) ? resultado : resultado.toFixed(4), " "+unidadDestino+'s'];
		}
    } else {
        return "Unidad de origen o de destino no válida";
    }
}

function convertirTemperatura(valor, escalaOrigen, escalaDestino) {
    const escalas = {
        "Celsius": {
            "Celsius": (temp) => temp,
            "Fahrenheit": (temp) => (temp * 9/5) + 32,
            "Kelvin": (temp) => temp + 273.15
        },
        "Fahrenheit": {
            "Celsius": (temp) => (temp - 32) * 5/9,
            "Fahrenheit": (temp) => temp,
            "Kelvin": (temp) => (temp + 459.67) * 5/9
        },
        "Kelvin": {
            "Celsius": (temp) => temp - 273.15,
            "Fahrenheit": (temp) => (temp * 9/5) - 459.67,
            "Kelvin": (temp) => temp
        }
    };

    if (escalas.hasOwnProperty(escalaOrigen) && escalas[escalaOrigen].hasOwnProperty(escalaDestino)) {
        return [escalas[escalaOrigen][escalaDestino](valor).toFixed(4),  "º " + escalaDestino];
    } else {
        return "Conversion no soportada";
    }
}