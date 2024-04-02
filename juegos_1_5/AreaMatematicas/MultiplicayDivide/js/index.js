//Referencias a objetos
const ruleta = document.getElementById("ruleta");
const ruleta2 = document.getElementById("ruleta2");
let opcionesContainer;
let opcionesContainer2;
let opciones = Array.from(document.getElementsByClassName("opcion"));
const root = document.documentElement;
const formContainer = document.getElementById("formContainer");
const totalElement = document.getElementById("porcentaje");
const ganadorTextoElement = document.getElementById("ganadorTexto");
const ganadorTextoElement2 = document.getElementById("ganadorTexto2");

/** Texto de la opción ganadora */
let ganador = "";
let ganador2 = "";
/** Para el setInterval que hace que el cartel de ganador anime los "..." */
/** Estado actual de la ruleta true => Bloquea el mouse; */
let sorteando = false;
/** Contiene la lista de colores posibles para el gráfico */
const colores = ["009A9A", "E83A55", "f65b00", "B14191", "83C8B8", "009DD0", "E73186", "FFEC55", "DE97BD", "70C8DD"];

/** Cambia la escala para hacer la herramienta pseudo responsive (faltaría un event listener al cambio de width para que sea bien responsive) */
let escala = 300;
root.style.setProperty("--escala", escala + "px");

/** Contiene la suma actual de probabilidades en base 100 */
let suma = 0;



/** Instancias de conceptos que se cargan al iniciar la app */
const uno = {
	nombre: "1",
	probabilidad: 10
}
const dos = {
	nombre: "2",
	probabilidad: 10
}
const tres = {
	nombre: "3",
	probabilidad: 10
}
const cuatro = {
	nombre: "4",
	probabilidad: 10
}

const cinco = {
	nombre: "5",
	probabilidad: 10
}

const seis = {
	nombre: "6",
	probabilidad: 10
}
const siete = {
	nombre: "7",
	probabilidad: 10
}
const ocho = {
	nombre: "8",
	probabilidad: 10
}
const nueve = {
	nombre: "9",
	probabilidad: 10
}

const diz = {
	nombre: "10",
	probabilidad: 10
}

let conceptos = [uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diz];


/** Pone a girar la ruleta y hace el sorteo del resultado */
function sortear() {
	sorteando = true;
	ganadorTextoElement.textContent = "?";
	ganadorTextoElement2.textContent = "?"
				
	/** Numero del 0 al 1 que contiene al ganador del sorteo */
	const nSorteo = Math.random();
	/** Cantidad de grados que debe girar la ruleta */
	const giroRuleta = (1 - nSorteo) * 360 + 360 * 10; //10 vueltas + lo aleatorio;
	root.style.setProperty('--giroRuleta', giroRuleta + "deg");
	ruleta.classList.toggle("girar", true)
	/** Acumulador de probabilidad para calcular cuando una probabilidad fue ganadora */
	let pAcumulada = 0;
	conceptos.forEach(concepto => {
		if (nSorteo * 100 > pAcumulada && nSorteo * 100 <= pAcumulada + concepto.probabilidad) {
			ganador = concepto.nombre;
		};
		pAcumulada += concepto.probabilidad;
	})



	/** Numero del 0 al 1 que contiene al ganador del sorteo */
	const nSorteo2 = Math.random();
	/** Cantidad de grados que debe girar la ruleta */
	const giroRuleta2 = (1 - nSorteo2) * 360 + 360 * 10; //10 vueltas + lo aleatorio;
	root.style.setProperty('--giroRuleta2', giroRuleta2 + "deg");
	ruleta2.classList.toggle("girar2", true)
	/** Acumulador de probabilidad para calcular cuando una probabilidad fue ganadora */
	let pAcumulada2 = 0;
	conceptos.forEach(concepto => {
		if (nSorteo2 * 100 > pAcumulada2 && nSorteo2 * 100 <= pAcumulada2 + concepto.probabilidad) {
			ganador2 = concepto.nombre;
		};
		pAcumulada2 += concepto.probabilidad;
	})
}

/** Desacopla lo que ocurre al terminar de girar la ruleta de la función girar */
var resultado = 0;
var opciones_respuesta = [];
ruleta.addEventListener("animationend", () => {
	ruleta.style.transform = "rotate(" + getCurrentRotation(ruleta) + "deg)";
	ruleta.classList.toggle("girar", false)
	sorteando = false;
	ganadorTextoElement.textContent = ganador;
})

ruleta2.addEventListener("animationend", () => {
	ruleta2.style.transform = "rotate(" + getCurrentRotation(ruleta2) + "deg)";
	ruleta2.classList.toggle("girar2", false)
	sorteando = false;
	ganadorTextoElement2.textContent = ganador2;

	resultado = parseInt(ganador) * parseInt(ganador2);

	opciones_respuesta = [];
	opciones_respuesta.push([resultado, true]);
	opciones_respuesta.push([resultado + Math.floor((Math.random() * (5 - 1 + 1)) + 1), false]);
	opciones_respuesta.push([resultado - Math.floor((Math.random() * (5 - 1 + 1)) + 1), false]);

	opciones_respuesta = randomValueGenerator(opciones_respuesta);
	mostrarOpciones(1, 3);
})

function mostrarOpciones(posActual, posFinal){
	if(posActual <= posFinal){
		var elemento = document.getElementById("op"+posActual);
		elemento.style.animation = "expandir 0.5s forwards";
		elemento.innerHTML ="<h2 class='borde' style='margin: 0; font-size: 23px'>"+opciones_respuesta[posActual-1][0]+"</h2>";
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
	elemento.style.width = "80px";
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

	setTimeout(()=>{
		elemento.style.backgroundColor = "#24b9fb";
		ganadorTextoElement.textContent = "?";
		ganadorTextoElement2.textContent = "?";
		numero_respuestas++;
		ocultarOpciones(1, 3);
	}, 3100)

	if(numero_respuestas == 10){
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

/** Crea todas las partes del elemento ruleta según la lista de conceptos */
function ajustarRuleta() {
	// Primero borro la ruleta anterior y creo una nueva.
	if (opcionesContainer) ruleta.removeChild(opcionesContainer)
	opcionesContainer = document.createElement("div");
	opcionesContainer.id = "opcionesContainer";
	ruleta.appendChild(opcionesContainer);
	let pAcumulada = 0
	conceptos.forEach((concepto, i) => {
		//Creo triangulos de colores
		const opcionElement = document.createElement("div");
		opcionElement.classList.toggle("opcion", true);
		opcionElement.style = `
			--color: #${colores[i % colores.length]};
			--deg:${probabilidadAGrados(pAcumulada)}deg;
			${getPosicionParaProbabilidad(concepto.probabilidad)}`
		opcionesContainer.appendChild(opcionElement);
		//Creo textos
		const nombreElement = document.createElement("p");
		nombreElement.textContent = concepto.nombre;
		nombreElement.classList.add("nombre");
		nombreElement.style = `width : calc(${concepto.probabilidad} * var(--escala) * 1.5 / 80);
			transform: rotate(${probabilidadAGrados(concepto.probabilidad) / 2 + probabilidadAGrados(pAcumulada)}deg)`
		opcionesContainer.appendChild(nombreElement);
		//Creo separadores
		const separadorElement = document.createElement("div");
		separadorElement.style = `transform: rotate(${probabilidadAGrados(pAcumulada)}deg)`
		separadorElement.classList.add("separador");
		opcionesContainer.appendChild(separadorElement);
		pAcumulada += concepto.probabilidad;
		//Reseteo la posición y el cartel
		ruleta.style.transform = "rotate(0deg)";
	})


	if (opcionesContainer2) ruleta2.removeChild(opcionesContainer2)
	opcionesContainer2 = document.createElement("div");
	opcionesContainer2.id = "opcionesContainer2";
	ruleta2.appendChild(opcionesContainer2);
	let pAcumulada2 = 0
	conceptos.forEach((concepto, i) => {
		//Creo triangulos de colores
		const opcionElement = document.createElement("div");
		opcionElement.classList.toggle("opcion", true);
		opcionElement.style = `
			--color: #${colores[i % colores.length]};
			--deg:${probabilidadAGrados(pAcumulada2)}deg;
			${getPosicionParaProbabilidad(concepto.probabilidad)}`
		opcionesContainer2.appendChild(opcionElement);
		//Creo textos
		const nombreElement = document.createElement("p");
		nombreElement.textContent = concepto.nombre;
		nombreElement.classList.add("nombre");
		nombreElement.style = `width : calc(${concepto.probabilidad} * var(--escala) * 1.5 / 80);
			transform: rotate(${probabilidadAGrados(concepto.probabilidad) / 2 + probabilidadAGrados(pAcumulada2)}deg)`
		opcionesContainer2.appendChild(nombreElement);
		//Creo separadores
		const separadorElement = document.createElement("div");
		separadorElement.style = `transform: rotate(${probabilidadAGrados(pAcumulada2)}deg)`
		separadorElement.classList.add("separador");
		opcionesContainer2.appendChild(separadorElement);
		pAcumulada2 += concepto.probabilidad;
		//Reseteo la posición y el cartel
		ruleta2.style.transform = "rotate(0deg)";
	})
}


//Eventos de botones

document.getElementById("boton_sortear").addEventListener("click", () => {
	if (!sorteando) sortear()
})


/** Revisa si  los porcentajes de probabilidades suman a 100% */
function verificarValidezFormulario() {
	suma = 0;
	Array.from(formContainer.children).forEach(opcion => {
		suma += parseFloat(opcion.children[1].value);
	})
	botonAceptar.disabled = suma !== 100; // Deshabilito el botón aceptar si la suma es distinto de 100
	totalElement.textContent = suma.toString();

}


function agregarConfiguracionProbabilidad(probabilidad = undefined) {
	const opcionContainer = document.createElement("div");
	let opcionLabel;
	const opcionInput = document.createElement("input");
	const eliminarBoton = document.createElement("button");
	if (probabilidad) {
		opcionLabel = document.createElement("label");
		opcionLabel.textContent = probabilidad.nombre;
		opcionLabel.for = probabilidad.nombre;
		opcionInput.value = probabilidad.probabilidad;
		opcionLabel.type = "text";
	}
	else {
		opcionLabel = document.createElement("input");
	}
	opcionInput.type = "number";
	eliminarBoton.textContent = "X"
	opcionInput.addEventListener("change", () => verificarValidezFormulario())
	opcionContainer.appendChild(opcionLabel);
	opcionContainer.appendChild(opcionInput);
	opcionContainer.appendChild(eliminarBoton);
	formContainer.appendChild(opcionContainer);
	eliminarBoton.addEventListener("click", (event) => {
		event.target.parentNode.parentNode.removeChild(event.target.parentNode); //También puede ser formContainer.removeChild(event.target.parentNode)
		verificarValidezFormulario();
	})
}


function getPosicionParaProbabilidad(probabilidad) {
	if (probabilidad === 100) {
		return ''
	}
	if (probabilidad >= 87.5) {
		const x5 = Math.tan(probabilidadARadianes(probabilidad)) * 50 + 50;
		return `clip-path: polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 0, ${x5}% 0, 50% 50%)`
	}
	if (probabilidad >= 75) {
		const y5 = 100 - (Math.tan(probabilidadARadianes(probabilidad - 75)) * 50 + 50);
		return `clip-path: polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0% ${y5}%, 50% 50%)`
	}
	if (probabilidad >= 62.5) {
		const y5 = 100 - (0.5 - (0.5 / Math.tan(probabilidadARadianes(probabilidad)))) * 100;
		return `clip-path: polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0% ${y5}%, 50% 50%)`
	}
	if (probabilidad >= 50) {
		const x4 = 100 - (Math.tan(probabilidadARadianes(probabilidad)) * 50 + 50);
		return `clip-path: polygon(50% 0, 100% 0, 100% 100%, ${x4}% 100%, 50% 50%)`
	}
	if (probabilidad >= 37.5) {
		const x4 = 100 - (Math.tan(probabilidadARadianes(probabilidad)) * 50 + 50);
		return `clip-path: polygon(50% 0, 100% 0, 100% 100%, ${x4}% 100%, 50% 50%)`
	}
	if (probabilidad >= 25) {
		const y3 = Math.tan(probabilidadARadianes(probabilidad - 25)) * 50 + 50;
		return `clip-path: polygon(50% 0, 100% 0, 100% ${y3}%, 50% 50%)`
	}
	if (probabilidad >= 12.5) {
		const y3 = (0.5 - (0.5 / Math.tan(probabilidadARadianes(probabilidad)))) * 100;
		return `clip-path: polygon(50% 0, 100% 0, 100% ${y3}%, 50% 50%)`
	}
	if (probabilidad >= 0) {
		const x2 = Math.tan(probabilidadARadianes(probabilidad)) * 50 + 50;
		return `clip-path: polygon(50% 0, ${x2}% 0, 50% 50%)`
	}
}

ajustarRuleta();


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
			}, 2000)
		}, 2000);
	}
}
