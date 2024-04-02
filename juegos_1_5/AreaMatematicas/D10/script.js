var tipo = 0;
let preg = 0;
let numero = "";
let enunciado = "";
buenas = 0;

var colores = [{op1: '#662482', op2: '#39134a'},{op1: '#4494d0', op2: '#3372a1'}, {op1: '#f08218', op2: '#c86b12'}, {op1: '#e83967', op2: '#be3156'}];

function comenzar(){
	//genera la suma - Numeros aleatorios entre 0 1 9
	if(preg < 10){
		let tipo = Math.floor((Math.random() * (2 - 0 + 1)) + 0);
		if(tipo == 1){
			tipo_1();
		}else{
			tipo_2();
		}
		preg = preg + 1;

		document.getElementById("numero_pregunta").innerText = " Pregunta "+preg+" de 10 "
	}else{
		$('#principal').fadeToggle(500);
		setTimeout(()=>{
			$('#final').fadeToggle(1000);
		}, 500)
		if(buenas < 6 ){
			document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
		}else{
			document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
		}

		document.getElementById("texto_final").innerText = "Has contestado correctamente "+buenas+" preguntas de 10"

		if(buenas >= 6){
		var audio = new Audio('../../sounds/victory.mp3');
		audio.play();
		}else{
		var audio = new Audio('../../sounds/game_over.mp3');
		audio.play();
		}

		preg = 1;
		buenas = 0;
	}
}

function nueva_opcion(){
	//genera la suma - Numeros aleatorios entre 0 1 9
	if(preg < 11){
		let tipo = Math.floor((Math.random() * (2 - 0 + 1)) + 0);
		if(tipo == 1){
			tipo_1();
		}else{
			tipo_2();
		}
	}else{
		Swal.fire(
			'Finalizado',
			buenas+' de 10 respuestas correctas',
			'info'
		);

		preg = 1;
		buenas = 0;

		for (let index = 1; index < 11 ; index++) {
			document.getElementById("preg_"+index).innerHTML = ""		
		}
	}
}


function tipo_1(){

	document.getElementById("titulo").innerText = "¿La imagen que observamos tiene?"

	let centenas = Math.round(Math.random() * (1 - 1) + 1);
	let decenas =  Math.round(Math.random() * (2 - 0) + 0);
	let docenas =  Math.round(Math.random() * (2 - 0) + 0);
	let unidades =  Math.round(Math.random() * (2 - 0) + 0);

	div = "";

	for (let index = 1; index <= centenas; index++) {
		div += "<img src='img/centena.png' class='img_tipo' alt=''>";
	}

	for (let index = 1; index <= decenas; index++) {
		div += "<img src='img/decena.png' class='img_tipo' alt=''>";
	}

	for (let index = 1; index <= docenas; index++) {
		div += "<img src='img/docena.png' class='img_tipo' alt=''>";
	}

	for (let index = 1; index <= unidades; index++) {
		div += "<img src='img/unidad.png' class='img_tipo_2' alt=''>";
	}

	document.getElementById("imagenes").innerHTML = "";
	document.getElementById("imagenes").innerHTML = div;

	let array_res = [];
	array_res.push("<div class='col-12 opcion' data-id='correcta' onclick='controlarRespuesta(this)' style='background-color: "+colores[0].op1+"'>"+centenas+(centenas != 1? " centenas, ": " centena, ")+docenas+(docenas != 1? " docenas, ": " docena, ")+decenas+(decenas != 1? " decenas, ": " decena, ")+unidades+(unidades != 1? " unidades. ": " unidad. ")+"</div>");
	
	for (let index = 1; index <= 2; index++) {
		let centenas2 = Math.round(Math.random() * (1 - 1) + 1);
		let decenas2 =  Math.round(Math.random() * (2 - 0) + 0);
		let docenas2 =  Math.round(Math.random() * (2 - 0) + 0);
		let unidades2 =  Math.round(Math.random() * (2 - 0) + 0);

		array_res.push("<div class='col-12 opcion' data-id='incorrecta' onclick='controlarRespuesta(this)' style='background-color: "+colores[index].op1+"'>"+centenas2+(centenas2 != 1? " centenas, ": " centena, ")+docenas2+(docenas2 != 1? " docenas, ": " docena, ")+decenas2+(decenas2 != 1? " decenas, ": " decena, ")+unidades2+(unidades2 != 1? " unidades. ": " unidad. ")+"</div>");
	}


	array_res = array_res.sort(function(a,b) {return (Math.random()-0.5)});

	enunciado = "";

	for (let index = 0; index < array_res.length; index++) {
		const element = array_res[index];
		enunciado += element;
	}

	var div_ok = document.getElementById("respuestas_ok");
	div_ok.innerHTML = "";
	div_ok.innerHTML = enunciado;

	div_ok.style.display = "flex";
	div_ok.style.alignItems = "center";
}

function tipo_2(){

	document.getElementById("titulo").innerText = "¿Que número es?"
	let centenas = Math.round(Math.random() * (1 - 0) + 0);
	let decenas =  Math.round(Math.random() * (2 - 0) + 0);
	let docenas =  Math.round(Math.random() * (2 - 0) + 0);
	let unidades =  Math.round(Math.random() * (2 - 0) + 0);

	let numero = 0;
	numero += centenas * 100;
	numero += decenas * 10;
	numero += docenas * 12;
	numero += unidades * 1;

	div = "";

	for (let index = 1; index <= centenas; index++) {
		div += "<img src='img/centena.png' class='img_tipo' alt=''>";
	}

	for (let index = 1; index <= decenas; index++) {
		div += "<img src='img/decena.png' class='img_tipo' alt=''>";
	}

	for (let index = 1; index <= docenas; index++) {
		div += "<img src='img/docena.png' class='img_tipo' alt=''>";
	}

	for (let index = 1; index <= unidades; index++) {
		div += "<img src='img/unidad.png' class='img_tipo_2' alt=''>";
	}

	document.getElementById("imagenes").innerHTML = "";
	document.getElementById("imagenes").innerHTML = div;


	let array_res = [];
	array_res.push("<div class='col-12 opcion' data-id='correcta' onclick='controlarRespuesta(this)' style='background-color: "+colores[0].op1+"'>"+numero+"</div>");
	
	for (let index = 1; index <= 2; index++) {
		let centenas2 = Math.round(Math.random() * (1 - 1) + 1);
		let decenas2 =  Math.round(Math.random() * (2 - 0) + 0);
		let docenas2 =  Math.round(Math.random() * (2 - 0) + 0);
		let unidades2 =  Math.round(Math.random() * (2 - 0) + 0);

		let numero2 = 0;

		numero2 += centenas2 * 100;
		numero2 += decenas2 * 10;
		numero2 += docenas2 * 12;
		numero2 += unidades2 * 1;
		array_res.push("<div class='col-12 opcion' data-id='incorrecta' onclick='controlarRespuesta(this)' style='background-color: "+colores[index].op1+"'>"+numero2+"</div>");
	}


	array_res = array_res.sort(function(a,b) {return (Math.random()-0.5)});

	enunciado = "";

	for (let index = 0; index < array_res.length; index++) {
		const element = array_res[index];
		enunciado += element;
	}

	var div_ok = document.getElementById("respuestas_ok");
	div_ok.innerHTML = "";
	div_ok.innerHTML = enunciado;

	div_ok.style.display = "flex";
	div_ok.style.alignItems = "center";
}

var seleccionado = null;
function controlarRespuesta(element){	
	if(element.getAttribute("data-id") == "correcta"){
		element.classList.add("correcto");
		setTimeout(comenzar, 1500);
		buenas += 1;
		var audio = new Audio('../../sounds/ok.mp3');
    	audio.play(); 
	}else{
		element.classList.add("incorrecto");
		setTimeout(comenzar, 1500);
		var audio = new Audio('../../sounds/over.mp3');
    	audio.play(); 
	}
}

comenzar();

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
			  maquina2("bienvenida",'Hola, soy Genio. <br> En este juego indica el numero que representa la imagen de la izquierda contando el numero de cuadros que estan en la imagen. <br> ¡Tu Puedes!',50,1);
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
		let audio2 = new Audio('../../sounds/fondo.mp3');
		audio2.play(); 
		audio2.volume = 0.2;

		let audio = new Audio('../../sounds/enunciado_d10.mp3');
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