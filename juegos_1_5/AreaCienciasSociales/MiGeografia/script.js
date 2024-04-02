function randomValueGenerator(vector) {
  return vector.sort(function () { return Math.random() - 0.5 });
};

var respuesta_correcta = "";

var colores = [{ op1: '#662482', op2: '#39134a' }, { op1: '#4494d0', op2: '#3372a1' }, { op1: '#f08218', op2: '#c86b12' }, { op1: '#e83967', op2: '#be3156' }];

var Regiones = [
  { opcion: 'Caribe', region: "Caribe", ruta: "caribe.png" },
  { opcion: 'Andina', region: "Andina", ruta: "andina.png" },
  { opcion: 'Pacifica', region: "Pacifica", ruta: "pacifica.png" },
  { opcion: 'Orinoquía', region: "Orinoquía", ruta: "orinoquia.png" },
  { opcion: 'Amazónica', region: "Amazónica", ruta: "amazonica.png" },
  { opcion: 'Insulara', region: "Insular", ruta: "insular.png" }
]

var RegionesDepartamentos = [
  { opcion: 'La Guajira', region: "Caribe", ruta: "guajira.png" },
  { opcion: 'Cesar', region: "Caribe", ruta: "cesar.png" },
  { opcion: 'Magdalena', region: "Caribe", ruta: "magdalena.png" },
  { opcion: 'Atlántico', region: "Caribe", ruta: "atlantico.png" },
  { opcion: 'Bolivar', region: "Caribe", ruta: "bolivar.png" },
  { opcion: 'Sucre', region: "Caribe", ruta: "sucre.png" },
  { opcion: 'Córdoba', region: "Caribe", ruta: "cordoba.png" },
  { opcion: 'Antioquia', region: "Andina", ruta: "antioquia.png" },
  { opcion: 'Nte. Santander', region: "Andina", ruta: "ntesantander.png" },
  { opcion: 'Santander', region: "Andina", ruta: "santander.png" },
  { opcion: 'Risaralda', region: "Andina", ruta: "risaralda.png" },
  { opcion: 'Caldas', region: "Andina", ruta: "caldas.png" },
  { opcion: 'Cundinamarca', region: "Andina", ruta: "cundinamarca.png" },
  { opcion: 'Tolima', region: "Andina", ruta: "tolima.png" },
  { opcion: 'Huila', region: "Andina", ruta: "huila.png" },
  { opcion: 'Boyacá', region: "Andina", ruta: "boyaca.png" },
  { opcion: 'Quindio', region: "Andina", ruta: "quindio.png" },
  { opcion: 'Chocó', region: "Pacifica", ruta: "choco.png" },
  { opcion: 'Valle', region: "Pacifica", ruta: "valle.png" },
  { opcion: 'Cauca', region: "Pacifica", ruta: "cauca.png" },
  { opcion: 'Nariño', region: "Pacifica", ruta: "narino.png" },
  { opcion: 'Arauca', region: "Orinoquía", ruta: "arauca.png" },
  { opcion: 'Casanare', region: "Orinoquía", ruta: "casanare.png" },
  { opcion: 'Meta', region: "Orinoquía", ruta: "meta.png" },
  { opcion: 'Vichada', region: "Orinoquía", ruta: "vichada.png" },
  { opcion: 'Guainía', region: "Amazónica", ruta: "guainia.png" },
  { opcion: 'Vaupés', region: "Amazónica", ruta: "vaupes.png" },
  { opcion: 'Guaviare', region: "Amazónica", ruta: "guaviare.png" },
  { opcion: 'Caquetá', region: "Amazónica", ruta: "caqueta.png" },
  { opcion: 'Putumayo', region: "Amazónica", ruta: "putumayo.png" },
  { opcion: 'Amazonas', region: "Amazónica", ruta: "amazonas.png" },
  { opcion: 'San Andrés', region: "Insular", ruta: "sanandres.png" },
  { opcion: 'Providencia', region: "Insular", ruta: "providencia.png" },
  { opcion: 'Sta. Catalina', region: "Insular", ruta: "stacatalina.png" }
];

var depSel = [];


let correctas = 0;

function verificarRespuesta(elemento, departamento, ruta) {
  elemento.setAttribute("onclick", "");

  if (departamento.toLocaleLowerCase() == tipo_letra) {
    elemento.classList.add("btn-success");
    elemento.classList.remove("btn-danger");
    var audio = new Audio('../../sounds/ok.mp3');
    audio.play();

    var div = document.getElementById("mapas");

    img = document.createElement("img");
    img.setAttribute("src", "img/" + ruta)
    img.style.position = "absolute";
    img.style.height = "300pt";
    img.style.left = "7%"

    div.appendChild(img);

    correctas++;
  } else {
    elemento.classList.add("btn-danger");
    elemento.classList.remove("btn-success");
    var audio = new Audio('../../sounds/over.mp3');
    audio.play();
  }

  if (correctas == numero_correctas) {
    $('#principal').fadeToggle(500);
    setTimeout(() => {
      $('#final').fadeToggle(1000);
    }, 500)
   
    document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
    var audio = new Audio('../../sounds/victory.mp3');
    audio.play();
  }
}

function jugar_de_nuevo(){
  $('#final').fadeToggle(1000);
  $('#principal').fadeToggle(1000);
  document.getElementById("mapas").innerHTML = "";
  document.getElementById("botones").innerHTML = "";
  elegir();
}

$(document).ready(function () {

  setTimeout(() => {
    $('#principal').fadeToggle(1000);
    $('#fondo_blanco').fadeToggle(3000);
    setTimeout(() => {
      const divAnimado = document.querySelector('.overlay');
      divAnimado.style.animationName = 'moverDerecha';
      divAnimado.style.animationDirection = 'normal';
      divAnimado.style.display = 'block';
      setTimeout(() => {
        const divAnimado2 = document.querySelector('.nube');
        divAnimado2.style.animationName = 'moverArriba';
        divAnimado2.style.animationDirection = 'normal';
        divAnimado2.style.display = 'block';
        setTimeout(() => {
          divAnimado.style.backgroundImage = "url(../../images/normal2.gif)"
          maquina2("bienvenida", 'Hola, soy Genio. <br> En este juego, primero selecciona con que región de colombia quieres jugar, luego se te mostraran una serie de departamentos, de los cuales debes seleccionar los departamentos que pertenecen a la región que seleccionaste. <br> ¡Tu Puedes!', 50, 1);
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
    let audio = new Audio('../../sounds/fondo.mp3');
    audio.play();
    audio.volume = 0.2;
    
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

function elegir() {
  Swal.fire({
    title: 'Selecciona una Región...',
    icon: 'info',
    html: '<div style="padding-top: 20px"  class="row">' +
      '<div class="col-4"><button onclick="seleccionar(0)" class="btnw btn btn-danger btn-lg">Región Caribe</button></div>' +
      '<div class="col-4"><button onclick="seleccionar(1)" class="btnw btn btn-success btn-lg">Región Andina</button></div>' +
      '<div class="col-4"><button onclick="seleccionar(2)" class="btnw btn btn-warning btn-lg">Región pacifica</button></div>' +
      '</div>' +
      '<div style="padding-top: 20px"  class="row">' +
      '<div class="col-4"><button onclick="seleccionar(3)" class="btnw btn btn-info btn-lg">Región Orinoquía</button></div>' +
      '<div class="col-4"><button onclick="seleccionar(4)" class="btnw btn btn-primary btn-lg">Región Amazónica</button></div>' +
      '<div class="col-4"><button onclick="seleccionar(5)" class="btnw btn btn-danger btn-lg">Región Insular</button></div>' +
      '</div>',
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: false,
    allowOutsideClick: false,
    focusConfirm: false,
  });
}

var tipo_letra;
var numero_correctas = 0;
function seleccionar(region) {

  RegionesDepartamentos = randomValueGenerator(RegionesDepartamentos);

  depSel = [];
  tipo_letra = "";

  switch (region) {
    case 0:
      tipo_letra = "caribe";
      break;
    case 1:
      tipo_letra = "andina";
      break;
    case 2:
      tipo_letra = "pacifica";
      break;
    case 3:
      tipo_letra = "orinoquía";
      break;
    case 4:
      tipo_letra = "amazónica";
      break;
    case 5:
      tipo_letra = "insular";
      break;
    default:
      break;
  }

  document.getElementById("tipo_region").innerText = tipo_letra;

  for (let index = 0; index < RegionesDepartamentos.length; index++) {
    const element = RegionesDepartamentos[index];
    if (element.region.toLocaleLowerCase() == tipo_letra) {
      depSel.push(element);
      numero_correctas++;
    }
  }

  let i = 0;
  let j = 0;

  while (i < 6) {
    const element = RegionesDepartamentos[j];
    if (element.region.toLocaleLowerCase() != tipo_letra) {
      depSel.push(element)
      i++;
    }
    j++;
  }

  var div = document.getElementById("mapas");

  img = document.createElement("img");
  img.setAttribute("src", "img/" + Regiones[region].ruta)
  img.style.position = "absolute";
  img.style.height = "300pt";
  img.style.left = "7%"

  div.appendChild(img);

  pintarBotones();
}

function pintarBotones() {
  var botones = "";

  depSel = randomValueGenerator(depSel);

  for (let index = 0; index < depSel.length; index++) {
    const element = depSel[index];
    botones += "<div class='col-4 text-center' style='margin-top: 15px;'><button class='btnw btn btn-primary' onclick='verificarRespuesta(this,\"" + element.region + "\", \"" + element.ruta + "\")' >" + element.opcion + "</button></div>"
  }

  document.getElementById("botones").innerHTML = "";
  document.getElementById("botones").innerHTML = botones;

  swal.close();
}