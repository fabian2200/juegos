var colores = [{op1: '#662482', op2: '#39134a'},{op1: '#4494d0', op2: '#3372a1'}, {op1: '#f08218', op2: '#c86b12'}, {op1: '#e83967', op2: '#be3156'}];

$(document).ready(function() {
	let audio2 = new Audio('../../sounds/fondo.mp3');
	audio2.play(); 
	audio2.volume = 0.2;
  colores = randomValueGenerator(colores);
  let data = generarDatos();
	generarTabla(data);
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
          maquina2("bienvenida",'Hola, soy Genio. <br> En este juego, deberás completar la tabla de frecuencia y hayar las medidas de tendencia central, tomando como base los datos que se te dan a continuacion. <br> ¡Tu Puedes!',50,1);
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
  if (!cerrardo) {
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

let numeroGeneradoDevalores = 0;
var conjunto_datos = [];
function generarDatos() {
  numeroGeneradoDevalores = Math.floor(Math.random() * (10 - 4 + 1) + 4) * 5;
  let data = [];
  let tipo_dato = Math.floor(Math.random() * (4 - 1 + 1) + 1);
  let vector = [];
  switch (tipo_dato) {
    case 1:
      vector = ["🍎","🍌","🍍","🍇","🍓"]
      document.getElementById("tipo_variable").innerText = "fruta favorita"
      break;
    case 2:
      vector = ["⚽","🏀","⚾","🚵","🏐"]
      document.getElementById("tipo_variable").innerText = "deporte favorito"
      break;
    case 3:
      vector = ["🐶","🐱","🐹","🐴","🐦"]
      document.getElementById("tipo_variable").innerText = "animal favorito"
      break;
    default:
      vector = ["🚗","🛵","🚲","🚂","🚕"]
      document.getElementById("tipo_variable").innerText = "medio de transporte"
      break;
  }

  conjunto_datos = vector;

  document.getElementById("cantidad_personas").innerText = numeroGeneradoDevalores
  

  for (let index = 0; index < numeroGeneradoDevalores; index++) {
    let key = Math.floor(Math.random() * (4 - 0 + 1) + 0);
    let element = vector[key];
    data.push(element);
  }

  celda = "";
  for (let index = 0; index < numeroGeneradoDevalores; index+=5) {
    celda += "<tr>"+
        "<td>" + data[index] + "</td>"+
        "<td>" + data[index+1] + "</td>"+
        "<td>" + data[index+2] + "</td>"+
        "<td>" + data[index+3] + "</td>"+
        "<td>" + data[index+4] + "</td>"+
    "</tr>";
  }

  document.getElementById("resultados").innerHTML = celda;

  return data;
}

function generarTabla(datos) {
  // Crear objeto para almacenar la frecuencia de cada dato
  var frecuencia = {};

  // Calcular la frecuencia de cada dato
  datos.forEach(function(dato) {
      if (frecuencia[dato]) {
      frecuencia[dato]++;
      } else {
      frecuencia[dato] = 1;
      }
  });

  // Convertir el objeto de frecuencias en un array de objetos
  var frecuencias = Object.keys(frecuencia).map(function(dato) {
      return {dato: dato, frecuencia: frecuencia[dato]};
  });

  // Ordenar el array de frecuencias por frecuencia de mayor a menor
  frecuencias.sort(function(a, b) {
      return b.frecuencia - a.frecuencia;
  });

  // Calcular la frecuencia acumulada y la frecuencia relativa
  var total = datos.length;
  var acumulada = 0;
  frecuencias.forEach(function(dato) {
      dato.frecuenciaAcumulada = acumulada + dato.frecuencia;
      acumulada += dato.frecuencia;
      dato.frecuenciaRelativa = dato.frecuencia / total;
      dato.frecuenciaRelativaAcumulada = dato.frecuenciaAcumulada / total;
      dato.porcentaje = dato.frecuenciaRelativa * 100;
  });

  // Imprimir la tabla de frecuencia
  let celda = "";
  frecuencias.forEach(function(dato) {
      celda += "<tr>"+
          "<th>" + dato.dato + "</th>"+
          "<td><input type='text' min='0' data-id='" + dato.frecuencia + "' class='valor'></td>"+
          "<td><input type='text' data-id='" + dato.frecuenciaAcumulada + "' class='valor'></td>"+
          "<td><input style='width: 80px !important' type='text' data-id='" + dato.frecuenciaRelativa.toFixed(2) + "' class='valor'></td>"+
          "<td><input style='width: 80px !important' type='text' data-id='" + (dato.frecuenciaRelativaAcumulada === parseInt(dato.frecuenciaRelativaAcumulada) ? dato.frecuenciaRelativaAcumulada : dato.frecuenciaRelativaAcumulada.toFixed(2)) + "' class='valor'></td>"+
          "<td><input style='width: 70px !important' type='text' data-id='" + (dato.porcentaje === parseInt(dato.porcentaje) ? dato.porcentaje : dato.porcentaje.toFixed(2)) + "' class='valor'> %</td>"+
      "</tr>";
  });
  
  document.getElementById('t-body').innerHTML = celda;
  
  medidasTendenciaCentral(datos);
}

var moda_global;
function medidasTendenciaCentral(datos) {
    var n = datos.length;
  
    // Calcular la media
    var media = datos.reduce(function(sum, value) {
      return sum + value;
    }, 0) / n;
  
    // Ordenar los datos
    datos.sort(function(a, b) {
      return a - b;
    });
  
    // Calcular la mediana
    var mediana;

    if (n % 2 === 0) {
      mediana = (datos[n/2 - 1] + datos[n/2]) / 2;
    } else {
      mediana = datos[(n - 1) / 2];
    }
  
    // Calcular la moda
    var moda = {};
    datos.forEach(function(dato) {
      if (moda[dato]) {
        moda[dato]++;
      } else {
        moda[dato] = 1;
      }
    });
    var modaArray = Object.keys(moda).map(function(dato) {
      return {dato: dato, frecuencia: moda[dato]};
    });
    modaArray.sort(function(a, b) {
      return b.frecuencia - a.frecuencia;
    });
    var modaMaxFrecuencia = modaArray[0].frecuencia;
    var modaArrayFiltrado = modaArray.filter(function(dato) {
      return dato.frecuencia === modaMaxFrecuencia;
    });

    var modaValores = modaArrayFiltrado.map(function(dato) {
      return dato.dato;
    });

    moda_global = modaValores[0];
  
    //document.getElementById("media").setAttribute("data-id", media.toFixed(2));
    //document.getElementById("mediana").setAttribute("data-id", mediana.toFixed(2));

    var div = "";
    var j = 0;
    conjunto_datos.forEach(element => {
      div += "<div style='display:flex; align-items: center'><input style='transform: scale(3)' id='r"+j+"' type='radio' name='moda' value='"+element+"'><label style='font-size: 40px; margin: 0;margin-left: 20px;' for='r"+j+"'> "+element+"</label></div>";
      j++;
    });
    document.getElementById("div_moda").innerHTML = div;
}

let inputs = [];
function verificar(){
  inputs = document.getElementsByClassName("valor");
  var valorSeleccionado = $("input[name='moda']:checked").val();
  let bandera = 0;
  for (let index = 0; index < inputs.length; index++) {
    const element = inputs[index];
    if(element.value == ""){
      bandera = 1;
    }
    if(parseInt(element.value) < 0 || valorSeleccionado == ""){
      bandera = 2;
    }
  }

  if(bandera == 0){
    calificar(0, inputs.length-1);
  }else{
    if(bandera == 1){
      Swal.fire(
        {
          icon: "info",
          position: 'center',
          title:  'Atención',
          text:'Debe llenar todos los campos',
          showConfirmButton: false,
          timer: 3000
        }
      );
    }else{
      Swal.fire(
        {
          icon: "info",
          position: 'center',
          title:  'Atención',
          text:'los numeros ingresados deben ser positivos',
          showConfirmButton: false,
          timer: 3000
        }
      );
    }
  }
}

let correcto = 0;
function calificar(i,n){
  var valorSeleccionado = $("input[name='moda']:checked").val();
  if (i <= n) {
      let signo = inputs[i];

      if(signo.getAttribute("data-id") == signo.value){
          signo.style.backgroundColor = "#238d23";
          signo.style.borderColor = "#238d23";
          correcto++;
      }else{
          signo.style.backgroundColor = "#f5153e";
          signo.style.borderColor = "#f5153e";
      }

      setTimeout(function () {
        calificar(i + 1, n);
      }, 200);
  }else{
    $('#principal').fadeToggle(500);
    setTimeout(()=>{
      $('#final').fadeToggle(1000);
    }, 500)
    if(correcto < 6 ){
      document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
    }else{
      document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
    }


    if((correcto / (n+1)) * 100 >= 60){
      debugger
      if(valorSeleccionado == moda_global){
        document.getElementById("texto_final").innerText = "Has contestado correctamente el "+((correcto / (n+1)) * 100).toFixed(2)+"% valores de los valores <br> y la moda que seleccionaste es incorrecta.";
        var audio = new Audio('../../sounds/game_over.mp3');
        audio.play();
      }else{
        document.getElementById("texto_final").innerText = "Has contestado correctamente el "+((correcto / (n+1)) * 100).toFixed(2)+"% valores de los valores";
        var audio = new Audio('../../sounds/victory.mp3');
        audio.play();
      }
      
    }else{
      document.getElementById("texto_final").innerText = "Has contestado correctamente el "+((correcto / (n+1)) * 100).toFixed(2)+"% valores de los valores";
      var audio = new Audio('../../sounds/game_over.mp3');
      audio.play();
    }
  }
}


function randomValueGenerator (vector) {
	return vector.sort(function() {return Math.random() - 0.5});
};