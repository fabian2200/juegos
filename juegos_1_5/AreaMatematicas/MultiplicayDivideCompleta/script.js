var num1, num2, respuesta;
var preg = 0;
var buenas = 0;

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
                        "Hola, soy Genio. <br> En este juego deberas seleccionar la operación matemática con la que quieres jugar y luego realizar la operación que se te muestra para luego completar los espacios en blanco. <br> ¡Tu puedes!",
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
				elegir();
			}, 2000)
		}, 2000);
	}
}


function elegir(){
    Swal.fire({
    title: 'Selecciona una Categoria...',
    icon: 'info',
    html: '<div style="padding-top: 20px"  class="row">'+
			'<div class="col-3"></div>'+
            '<div class="col-3"><div><img onclick="seleccionar(this, 1)" class="imagen_Vocal" src="images/multiplicacion.png" alt=""></div></div>'+
            '<div class="col-3"><div><img onclick="seleccionar(this, 2)" class="imagen_Vocal" src="images/division.png" alt=""></div></div>'+
			'<div class="col-3"></div>'+
		'</div>',
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: false,
    allowOutsideClick: false,
    focusConfirm: false,
    });
}

function seleccionar(elemento, tipo) {
	elemento.classList.add("seleccionado");
	document.getElementById("container_division").style.display = "none";
	document.getElementById("container_multi").style.display = "none";


	if(tipo == 2){
		setTimeout(()=>{
			document.getElementById("container_division").style.display = "block";
			division();
		}, 2000)
	}else{
		setTimeout(()=>{
			document.getElementById("container_multi").style.display = "block";
			multiplicacion();
		}, 2000)
	}

    setTimeout(()=>{
    	swal.close();
    }, 1000)
}


var operaciones_g = [];
cociente_g = 0;
function division(){
	let num1 = Math.floor(Math.random() * (999999 - 200000 + 1) + 200000);
	let num2 = Math.floor(Math.random() * (99 - 10 + 1) + 10);
	
	while(num1 <= num2 || num2 == 0){
		num1 = Math.floor(Math.random() * (999999 - 200000 + 1) + 200000);
		num2 = Math.floor(Math.random() * (99 - 10 + 1) + 10);
	}

	document.getElementById("dividendo_inicial").innerText = num1;
	document.getElementById("divisor_inicial").innerText = num2;


	let numero_divisiomn = 0;
	let bandera = true;
	let numero_op = 0;
	let cociente = "";
	let dividendo_aux = 0;
	let dividendo_digits_aux = [];
	var operaciones = [];

	while (bandera) {
		let dividendo = "";
		let divisor = num2;
		let dividendo_digits = [];
		let divisor_digits = num2.toString().split('').length;

		if(numero_op == 0){
			dividendo_digits = num1.toString().split('');
			let bandera2 = true;
			let i = 0;
			while(bandera2){
				dividendo = dividendo+dividendo_digits[i]+""; 
				if(parseInt(dividendo) > divisor){
					bandera2 = false
				}else{
					i++;
				}
			}

			for (let index = 0; index <= i ; index++) {
				dividendo_digits.splice(0, 1);
			}
			
			numero_op++;
		}else{
			dividendo = dividendo_aux;
			dividendo_digits = dividendo_digits_aux;
		}

		dividendo = parseInt(dividendo);
		
		let producto = 0;
		let residuo = 0;
		let operador = 9;
		for (let index = 9; index >= 1; index--) {
			producto = divisor * index;
			if(producto <= dividendo){
				residuo = dividendo - producto;
				operador = index;
				cociente = cociente+""+operador;
				break
			}
		}

		if(dividendo_digits.length > 0){
			let j = 0;
			for (let index = 0; index < dividendo_digits.length; index++) {
				dividendo  = parseInt(residuo+""+dividendo_digits.join('')[index]);
				if(dividendo >= divisor){    
					j++;
					break;
				}else{
					cociente = cociente+"0";
				}
			}
		
			for (let index = 0; index < j; index++) {
				dividendo_digits.splice(0, 1);
			}

			residuo = dividendo;
		}

		operaciones.push({
			num_2: producto,
			num_3: residuo
		});
		

		dividendo_digits_aux = dividendo_digits;
		dividendo_aux = residuo;

		if(residuo < divisor){
			bandera = false;
			pintar(operaciones, cociente)
		}
	}
	
}

function pintar(operaciones, cociente){

	operaciones_g = operaciones;
	cociente_g = cociente;

	let padding_left = 0;
	let div_cociente = document.getElementById("cociente");

	cociente = cociente.split("");

	let o = 0;
	cociente.forEach(element => {
		let inputt = document.createElement("input");
		inputt.classList.add("cociente_d");
		inputt.style.marginRight = "10px";
		inputt.style.width = "40px";
		inputt.style.height = "auto";
		div_cociente.appendChild(inputt);
	});

	let div = document.getElementById("operaciones");
	let i = 0;
	operaciones.forEach(element => {
	
		let dp2 = document.createElement("div");
		dp2.classList.add("input-group")
		dp2.innerHTML ="<p> -  </p> "

		let n2 = element.num_2;
		n2 = n2.toString().split("");
		n2.forEach(element => {
			let inputt = document.createElement("input");
			inputt.classList.add("producto_"+i);
			inputt.style.marginRight = "9px";
			inputt.style.marginLeft = "9px";
			inputt.style.width = "40px";
			inputt.style.height = "auto";
			inputt.setAttribute("max", "9")
			inputt.setAttribute("type", "text")
			dp2.appendChild(inputt);
		});

		if(i != 0){
			dp2.style.paddingLeft = padding_left+12-1+"px";
		}
		
	

		let line = document.createElement("hr");
		line.style.paddingLeft = padding_left+"px";

		let dp3 = document.createElement("div");
		dp3.classList.add("input-group")
		dp3.innerHTML ="<p style='letter-spacing: 27px;'>"+element.num_3+"</p>"

		dp3.style.paddingLeft = i != operaciones.length - 1 ? parseInt(padding_left+88)+"px" : "0px";
		dp2.style.marginTop = "10px";
		
		if(i == operaciones.length - 1){
			dp3.style.display = "flex";
			dp3.style.justifyContent = "end";
			dp3.style.marginLeft = "20px";
		}
		div.appendChild(dp2);
		div.appendChild(line);
		div.appendChild(dp3);
		
		padding_left = padding_left + 40;

		i++;
	});
}

function verificar_div(){
	let buenas1 = 0;
	let buenas2 = 0;

	for (let index = 0; index < operaciones_g.length; index++) {
		let producto_bien = operaciones_g[index].num_2.toString().split("");
		let producto = document.getElementsByClassName("producto_"+index);
		for (let index2 = 0; index2 < producto_bien.length; index2++) {
			let element = parseInt(producto[index2].value);
			let element2 = parseInt(producto_bien[index2]);
			if(element == element2){
				producto[index2].classList.add("bien")
				producto[index2].classList.remove("error")
			}else{
				producto[index2].classList.add("error")
				producto[index2].classList.remove("bien")
			}
		}     
		
		let cociente_bien = cociente_g.split("");
		var cociente = document.getElementsByClassName("cociente_d");
		for (let index2 = 0; index2 < cociente_bien.length; index2++) {
			let element = parseInt(cociente[index2].value);
			let element2 = parseInt(cociente_bien[index2]);
			if(element == element2){
				cociente[index2].classList.add("bien")
				cociente[index2].classList.remove("error")
			}else{
				cociente[index2].classList.add("error")
				cociente[index2].classList.remove("bien")
			}
		}  
	}

	if(buenas2 == cociente_bien.length && buenas1 == operaciones_g.length){
		

		$('#principal').fadeToggle(1000);
        setTimeout(() => {
            $('#final').fadeToggle(1000);
        }, 1000)


        document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
        document.getElementById("texto_final").innerText = "Has completado correctamente la división";
		var audio = new Audio('../../sounds/victory.mp3');
		audio.play();
	}

}

let multiplicaciones = [];
let resultado_multi = 0;
function multiplicacion(){
	multiplicaciones = [];

	let num1 = Math.floor(Math.random() * (999999 - 200000 + 1) + 200000);
	let num2 = Math.floor(Math.random() * (999 - 10 + 1) + 10);

	resultado_multi = num1 * num2;
	
	let p = 0;

	p = "<div style='width: 50%; text-align: right'><p style='letter-spacing: 16px;'>"+num1+"</p><p style='letter-spacing: 16px;'>x "+num2+"</p><hr></div>";
	document.getElementById("numeros").innerHTML = p;

	num2 = num2.toString().split('');

	num2.forEach(element => {
		multiplicaciones.push(num1*parseInt(element))
	});

	var div = "";
	let padding = 0;
	for (let index = multiplicaciones.length - 1; index >= 0; index--) {
		var element = multiplicaciones[index].toString().split('');
		div += '<div style="display: flex; margin-top: 10px; justify-content: right; margin-right: '+padding+'px;">'
		element.forEach(element2 => {
			div += '<input type="text" class="resultado_'+index+'" style="width: 40px; margin-left: 10px;">'
		});
		div += "</div>"
		padding += 50;
	}

	var div2= "";
	resultado_multi = resultado_multi.toString().split('');
	for (let index = 0; index < resultado_multi.length; index++) {
		div2 += '<input class="resultado_final_'+index+'" type="text" style="z-index: 1000; width: 40px; margin-left: 10px;">'
	}

	document.getElementById("resultados").innerHTML = div;
	document.getElementById("resultado").innerHTML = div2;
	
}


function verificar_multi(){
	
	let buenas1 = 0;
	let buenas2 = 0;

	for (let index = multiplicaciones.length-1; index >= 0; index--) {
		let resultado_bien = multiplicaciones[index].toString().split("");
		let resultado = document.getElementsByClassName("resultado_"+index);
		let ok = 0;
		for (let index2 = 0; index2 < resultado_bien.length; index2++) {
			let element = parseInt(resultado[index2].value);
			let element2 = parseInt(resultado_bien[index2]);
			if(element == element2){
				resultado[index2].classList.add("bien")
				resultado[index2].classList.remove("error")
				ok++;
			}else{
				resultado[index2].classList.add("error")
				resultado[index2].classList.remove("bien")
			}
		}     

		if(ok == resultado_bien.length){
			buenas1++;
		}
	}

	for (let index = 0; index < resultado_multi.length; index++) {
		let resultado_bien = resultado_multi[index].toString().split("");
		let resultado = document.getElementsByClassName("resultado_final_"+index);
		for (let index2 = 0; index2 < resultado_bien.length; index2++) {
			let element = parseInt(resultado[index2].value);
			let element2 = parseInt(resultado_bien[index2]);
			if(element == element2){
				resultado[index2].classList.remove("error")
				resultado[index2].classList.add("bien")
				buenas2++;
			}else{
				resultado[index2].classList.remove("bien")
				resultado[index2].classList.add("error")
			}
		}     
	}

	if(buenas2 == resultado_multi.length && buenas1 == multiplicaciones.length){
		
		$('#principal').fadeToggle(1000);
        setTimeout(() => {
            $('#final').fadeToggle(1000);
        }, 1000)


        document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
        document.getElementById("texto_final").innerText = "Has completado correctamente la multiplicación";
		var audio = new Audio('../../sounds/victory.mp3');
		audio.play();
    
	}
}