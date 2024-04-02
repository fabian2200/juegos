var txt1 = document.getElementById("tipo_imagen");
var txt2 = document.getElementById("tipo_imagen2");
var txt3 = document.getElementById("tipo_imagen3");

var numeroAleatorio = 0;
var tipoFigura = 0;
var figura_ok = 0;


var figuras = ["CÍRCULOS", "CUADRADOS", "TRIÁNGULOS", "RECTÁNGULOS"];

function comenzar(){
	let div_imagenes = document.getElementById("figuras_geometricas");
	div_imagenes.innerHTML = "";

	numeroAleatorio = Math.floor(Math.random() * 5) + 1;
	tipoFigura = Math.floor(Math.random() * 3) + 1;

	var imagenes = [];

	var max = 0;
	var min = 0;

	min = 16;
	max = 30;
	
	for (let index = min; index <= max; index++) {
		imagenes.push({
			ruta: "CIRCULOS/Mesa de trabajo "+index+".png",
			tipo: "CÍRCULOS"
		});
	}

	min = 1;
	max = 15;
	
	for (let index = min; index <= max; index++) {
		imagenes.push({
			ruta: "CUADRADOS/Mesa de trabajo "+index+".png",
			tipo: "CUADRADOS"
		});
	}

	min = 31;
	max = 45;
	
	for (let index = min; index <= max; index++) {
		imagenes.push({
			ruta: "TRIANGULOS/Mesa de trabajo "+index+".png",
			tipo: "TRIÁNGULOS"
		});
	}

	min = 46;
	max = 60;

	for (let index = min; index <= max; index++) {
		imagenes.push({
			ruta: "RECTANGULOS/Mesa de trabajo "+index+".png",
			tipo: "RECTÁNGULOS"
		});
	}

	
	var div = "";
	while(figura_ok <= 3){
		figura_ok = 0;
		imagenes = randomValueGenerator(imagenes);
		div = "";
		for (let index = 0; index < 12; index++) {
			if(figuras[tipoFigura] == imagenes[index].tipo){
				figura_ok++;
			}
		    div += '<div style="height: 150px; margin-top: 10px; margin-bottom: 10px; text-align: center" class="col-lg-2 d-flex align-items-center justify-content-center">'+
				'<img style="max-width: 100%; position: relative" onclick="controlarRespuesta(\''+imagenes[index].tipo+'\', this)"  src="'+imagenes[index].ruta+'" alt="'+imagenes[index].ruta+'">'+
			'</div>';
		}
	}

	document.getElementById("tip_figura").innerText = figuras[tipoFigura];

	setTimeout(()=>{
		if(tipoFigura == 0){
			let audio = new Audio('../../sounds/selecciona_circulos.mp3');
			audio.play(); 
		}
		
		if(tipoFigura == 1){
			let audio = new Audio('../../sounds/selecciona_cuadrados.mp3');
			audio.play(); 
		}
		
		if(tipoFigura == 2){
			let audio = new Audio('../../sounds/selecciona_triangulos.mp3');
			audio.play(); 
		}
		
		if(tipoFigura == 3){
			let audio = new Audio('../../sounds/selecciona_rectangulos.mp3');
			audio.play(); 
		}
	}, 3000)
	
	div_imagenes.innerHTML = div;
}

function randomValueGenerator(vector) {
    return vector.sort(function () { return Math.random() - 0.5 });
};

var seleccionadoCorrecto = null;
function controlarRespuesta(respuesta, elemento){
	if(figuras[tipoFigura] == respuesta){
		elemento.style.display = "none";
		var audio = new Audio('../../sounds/ok.mp3');
    	audio.play(); 
		seleccionadoCorrecto++;
		if(seleccionadoCorrecto == figura_ok){
			terminarJuego();
		}
	}else{
		var audio = new Audio('../../sounds/over.mp3');
		elemento.classList.add('titilar');

		setTimeout(function() {
			elemento.classList.remove('titilar');
		}, 800);

    	audio.play(); 
	}
}

function terminarJuego(){
	$('#principal').fadeToggle(1000);
	setTimeout(()=>{
		$('#final').fadeToggle(1000);
	}, 1000)
	
	document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
	document.getElementById("texto_final").innerText = "Felicitaciones, haz encontrado todos los "+figuras[tipoFigura];

	var audio = new Audio('../../sounds/victory.mp3');
	audio.play();
}

function cambiar_color(elemento){
	elemento.style.backgroundColor = "green";
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
                        "Hola, soy Genio. <br> En este juego deberás seleccionar todas las imagenes de la figura geométrica que se te indique.<br> ¡Tu puedes!",
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

		let audio = new Audio('../../sounds/identificaFiguras.mp3');
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