var num1, num2, respuesta;
var preg = 0;
var buenas = 0;

txt1 = document.getElementById("num_1");
txt2 = document.getElementById("num_2");
txt3 = document.getElementById("num_3");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");

function comenzar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";

	//genera la suma - Numeros aleatorios entre 0 1 9
	num1 = Math.round(Math.random()*9999);
	num2 = Math.round(Math.random()*9999);
	num3 = Math.round(Math.random()*9999);

	// generar numero aleatorio entre 0 y 2
	operacion = Math.round(Math.random()*1);
	signo = "";

	if(operacion == 1){
		signo = "-";
		while((num1 - num2 - num3) < 0){
			num1 = Math.round(Math.random()*9999);
			num2 = Math.round(Math.random()*9999);
			num3 = Math.round(Math.random()*9999);
		}
		respuesta = num1 - num2 - num3;
	}else{
		signo = "+";
		respuesta = 0;
		num1 = Math.round(Math.random()*9999);
		num2 = Math.round(Math.random()*9999);
		num3 = Math.round(Math.random()*9999);
		respuesta = num1 + num2 + num3;
	}
	
	//asignamos lo números para que se muestren
	txt1.innerHTML = num1;
	txt2.innerHTML = signo+"&nbsp;&nbsp;&nbsp;"+num2;
	txt3.innerHTML = num3;

	//genero un número entre 0 y 2 para colocar la opcion correcta
	indiceOpCorrecta = Math.round(Math.random()*2);

	//si indiceCorrrecta es igual 0
	if(indiceOpCorrecta == 0){
		op1.innerHTML = respuesta;
		op2.innerHTML = respuesta + 1;
		op3.innerHTML = respuesta - 1
	}
	if(indiceOpCorrecta == 1){
		op1.innerHTML = respuesta-1;
		op2.innerHTML = respuesta;
		op3.innerHTML = respuesta - 2;
	}
	if(indiceOpCorrecta == 2){
		op1.innerHTML = respuesta+ 2;
		op2.innerHTML = respuesta + 3;
		op3.innerHTML = respuesta;
	}

	preg = preg + 1;

	if (preg == 11) {

		$('#principal').fadeToggle(1000);
		setTimeout(()=>{
            $('#final').fadeToggle(1000);
        }, 1000)
		
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

        for (let index = 1; index < 11; index++) {
            document.getElementById("preg_" + index).innerHTML = "";
        }
    }
}

var seleccionado = null;
function controlarRespuesta(opcionElegida){	
	seleccionado = opcionElegida;
	txt_resultado.innerHTML = opcionElegida.innerHTML;
	opcionElegida.style.backgroundColor = "black";

	if(respuesta == opcionElegida.innerHTML){
		txt_msj.innerHTML = "Excelente !";
		txt_msj.style.color="green";
		document.getElementById("preg_"+preg).innerHTML = "<i style='color: green' class='fa-sharp fa-solid fa-face-smile fa-2x'></i>";
		setTimeout(limpiar, 1500);
		setTimeout(comenzar, 1500);
		var audio = new Audio('../../sounds/ok.mp3');
    	audio.play(); 
		buenas += 1;
	}else{
		txt_msj.innerHTML = "Respuesta Incorrecta !";
		txt_msj.style.color="red";
		setTimeout(limpiar, 1500);
		setTimeout(comenzar, 1500);
		document.getElementById("preg_"+preg).innerHTML = "<i style='color: red' class='fa-solid fa-face-sad-tear fa-2x'></i>";
		var audio = new Audio('../../sounds/over.mp3');
    	audio.play(); 
	}
}
function limpiar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";
	seleccionado.style.backgroundColor = "#612e82";
}

comenzar();

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
 	if (!cerrardo) {
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