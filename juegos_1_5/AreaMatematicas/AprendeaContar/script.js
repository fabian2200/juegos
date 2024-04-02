var preg = 0;
var buenas = 0;

var txt1 = document.getElementById("tipo_imagen");
var txt2 = document.getElementById("tipo_imagen2");
var txt3 = document.getElementById("tipo_imagen3");

var numeroAleatorio = 0;

function comenzar(){
	let div_imagenes = document.getElementById("cantidad_elementos");
	div_imagenes.innerHTML = "";

	var imagen = Math.floor(Math.random() * 43) + 1;
	numeroAleatorio = Math.floor(Math.random() * 10) + 1;

	var div = "";
	for (let index = 0; index < numeroAleatorio; index++) {
		div += '<div style="height: 70px; margin-top: 10px; margin-bottom: 10px; display: flex; align-items: center; justify-content: center;" class="col-lg-2">'+
			'<img onclick="cambiar_color(this)" style="width: 80%;" src="img/'+imagen+'.png" alt="imagen">'+
		'</div>';
	}

	div_imagenes.innerHTML = div;
	
	if(imagen >= 1 && imagen <= 13){
		txt1.innerText = "los barcos"; 
		txt2.innerText = "barco"; 
		txt3.innerText = "barcos"; 
	}

	if(imagen >= 14 && imagen <= 19){
		txt1.innerText = "los aviones"; 
		txt2.innerText = "avión"; 
		txt3.innerText = "aviones"; 
	}

	if(imagen >= 20 && imagen <= 22){
		txt1.innerText = "los helicópteros"; 
		txt2.innerText = "helicóptero"; 
		txt3.innerText = "helicópteros"; 
	}

	if(imagen >= 23 && imagen <= 30){
		txt1.innerText = "los carros"; 
		txt2.innerText = "carro"; 
		txt3.innerText = "carros"; 
	}

	if(imagen == 31){
		txt1.innerText = "los patos"; 
		txt2.innerText = "pato"; 
		txt3.innerText = "patos"; 
	}

	if(imagen == 32){
		txt1.innerText = "las águilas"; 
		txt2.innerText = "águila"; 
		txt3.innerText = "águilas"; 
	}

	if(imagen == 33){
		txt1.innerText = "los pelícanos"; 
		txt2.innerText = "pelícano"; 
		txt3.innerText = "pelícanos"; 
	}

	if(imagen == 34){
		txt1.innerText = "los flamencos"; 
		txt2.innerText = "flamenco"; 
		txt3.innerText = "flamencos"; 
	}

	if(imagen == 35){
		txt1.innerText = "las palomas"; 
		txt2.innerText = "paloma"; 
		txt3.innerText = "palomas"; 
	}

	if(imagen == 36){
		txt1.innerText = "los camellos"; 
		txt2.innerText = "camello"; 
		txt3.innerText = "camellos"; 
	}

	if(imagen == 37){
		txt1.innerText = "los escorpiones"; 
		txt2.innerText = "escorpión"; 
		txt3.innerText = "escorpiones"; 
	}

	if(imagen == 38){
		txt1.innerText = "los lobos"; 
		txt2.innerText = "lobo"; 
		txt3.innerText = "lobos"; 
	}

	if(imagen == 39){
		txt1.innerText = "las ballenas"; 
		txt2.innerText = "ballena"; 
		txt3.innerText = "ballenas"; 
	}

	if(imagen == 40){
		txt1.innerText = "las langostas"; 
		txt2.innerText = "langosta"; 
		txt3.innerText = "langostas"; 
	}

	if(imagen == 41){
		txt1.innerText = "los pulpos"; 
		txt2.innerText = "pulpo"; 
		txt3.innerText = "pulpos"; 
	}

	if(imagen == 42){
		txt1.innerText = "los calamares"; 
		txt2.innerText = "calamar"; 
		txt3.innerText = "calamares"; 
	}

	if(imagen == 43){
		txt1.innerText = "las medusas"; 
		txt2.innerText = "medusa"; 
		txt3.innerText = "medusas"; 
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
function controlarRespuesta(respuesta){
	if(respuesta == numeroAleatorio){
		document.getElementById("preg_"+preg).innerHTML = "<i style='color: green' class='fa-sharp fa-solid fa-face-smile fa-2x'></i>";
		var audio = new Audio('../../sounds/ok.mp3');
    	audio.play(); 
		buenas += 1;
		setTimeout(comenzar, 1500);
	}else{
		document.getElementById("preg_"+preg).innerHTML = "<i style='color: red' class='fa-solid fa-face-sad-tear fa-2x'></i>";
		var audio = new Audio('../../sounds/over.mp3');
    	audio.play(); 
		setTimeout(comenzar, 1500);
	}
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
                        "Hola, soy Genio. <br> En este juego deberás contar cuantos objetos hay, y luego seleccionar la respuesta correcta, acierta mas de 6 preguntas para ganar.<br> ¡Tu puedes!",
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

		let audio = new Audio('../../sounds/aprende_a_contar.mp3');
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