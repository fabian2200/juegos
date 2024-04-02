let poemas_array = [];
let simil_array = [];
let oraciones_array = [];
let paises = [];
//arreglo que guarda los paises para jugar
poemas_array = [
  "La luz del sol acaricia mi piel, y siento la vida latir en mi ser.",
  "El viento canta su melodía, y las hojas bailan en su ritmo.",
  "Las estrellas brillan en el cielo, y mi alma se llena de su magia.",
  "El mar susurra secretos a la playa, y yo los escucho con mi corazón.",
  "La lluvia cae suavemente, y con cada gota renuevo mi esperanza.",
  "El silencio habla con su voz suave, y me invita a la introspección.",
  "La primavera llega con sus flores, y el mundo se llena de color.",
  "El invierno cubre todo de blanco, y la tierra se prepara para renacer.",
  "La luna llena ilumina el camino, y me guía hacia la luz.",
  "El sol se esconde tras el horizonte, y deja paso a la noche estrellada.",
  "Las aves vuelan libres en el cielo, y me hacen sentir que todo es posible.",
  "El arcoíris dibuja su sonrisa, y me regala un momento de felicidad.",
  "Las nubes forman figuras en el cielo, y me invitan a soñar despierto.",
  "El fuego arde con fuerza, y me calienta el alma con su luz.",
  "El río fluye con suavidad, y me enseña que la vida siempre sigue su curso.",
  "El bosque esconde secretos mágicos, y me invita a explorar su belleza.",
  "La nieve cubre todo de blanco, y me transporta a un mundo de ensueño.",
  "El amanecer me despierta con su luz, y me llena de energía para un nuevo día.",
  "El atardecer pinta el cielo de colores, y me invita a contemplar su belleza.",
  "La noche me envuelve con su misterio, y me hace sentir parte del universo.",
  "El sol ilumina el día, y la luna la noche. Juntos, forman un ciclo eterno.",
  "La brisa acaricia mi rostro, y me transporta a un lugar de paz y armonía.",
  "El tiempo pasa inexorable, pero los recuerdos permanecen para siempre.",
  "La música suena en mi interior, y me hace vibrar con cada nota.",
  "La montaña se alza majestuosa, y me enseña que la grandeza está en la humildad.",
  "La lluvia lava el alma, y con ella se van las tristezas del corazón.",
  "El mar es un misterio que esconde secretos que nunca conoceremos del todo.",
  "Las estaciones cambian, pero la belleza de la naturaleza siempre está presente.",
  "El viento sopla libre, y me invita a dejar ir todo lo que me impide avanzar.",
  "La flor nace del barro, y me recuerda que la belleza puede surgir de cualquier lugar.",
  "El canto de un pájaro es un regalo para el alma, y me hace sentir en paz con el mundo.",
  "La poesía es un puente que conecta el corazón con el universo.",
  "El silencio es la antesala de la reflexión, y me permite encontrar respuestas en mi interior.",
  "El amor es un fuego que quema sin consumirse, y nos hace sentir vivos.",
  "La noche es un lienzo en blanco, y las estrellas son los pinceles que lo llenan de luz.",
  "La vida es un camino lleno de sorpresas, y yo soy el dueño de mi propio destino.",
  "La tristeza es un huésped incómodo, pero necesario para valorar la alegría.",
  "La risa es la medicina que cura el alma, y nos devuelve la energía para seguir adelante.",
  "El marfil de la luna ilumina la noche, y con ella los sueños se hacen realidad.",
  "La fe es la llave que abre la puerta del milagro, y nos permite alcanzar lo imposible.",
];

simil_array = [
  "Esa mujer es lista como un zorro.",
  "La niña estaba tan nerviosa que temblaba como una hoja.",
  "El bebé dormía profundamente como un tronco.",
  "El hombre era fuerte como un toro.",
  "La comida estaba caliente como un volcán.",
  "El día estaba tan soleado como una tarde de verano.",
  "El gato era tan ágil como un acróbata.",
  "La risa del niño sonaba como campanitas.",
  "La abuela era dulce como la miel.",
  "El coche iba tan rápido como un rayo.",
  "El perro era tan fiel como un amigo.",
  "El campo estaba verde como una esmeralda.",
  "El mar estaba tranquilo como un lago.",
  "La mujer era hermosa como una flor.",
  "El cielo estaba oscuro como la noche.",
  "El niño era dulce como un pastel.",
  "El anciano era sabio como un búho.",
  "La voz del cantante era suave como la seda.",
  "El viento soplaba fuerte como un huracán.",
  "La niña bailaba grácil como una mariposa.",
  "La nieve era blanca como la leche.",
  "El mar estaba azul como el cielo.",
  "El hombre era rápido como un guepardo.",
  "El niño era inquieto como una abeja.",
  "La risa del niño sonaba como una sinfonía.",
  "La mujer era hermosa como una diosa.",
  "El anciano era sabio como un libro.",
  "El pájaro volaba libre como el viento.",
  "La abuela cocinaba como un chef.",
  "El perro era fuerte como un león.",
  "El hombre era alto como una torre.",
  "La noche estaba oscura como el carbón.",
  "El gato era tan rápido como una bala.",
  "El niño era feliz como una lombriz.",
  "El caballo era veloz como un rayo.",
  "El cielo estaba despejado como un cristal.",
  "La flor era tan delicada como una pluma.",
  "El hombre era valiente como un héroe.",
  "La mujer hablaba suave como una brisa.",
  "El león rugía fuerte como un trueno.",
];

oraciones_array = [
  "El perro ladra.",
  "El gato maulla.",
  "La vaca come pasto.",
  "El caballo corre rápido.",
  "El pájaro canta.",
  "La abeja zumba.",
  "El niño juega con su pelota.",
  "La niña baila en el escenario.",
  "El hombre lee un libro.",
  "La mujer cocina la cena.",
  "El estudiante estudia para el examen.",
  "La profesora enseña a sus alumnos.",
  "El médico examina al paciente.",
  "La enfermera cuida a los enfermos.",
  "El carpintero corta la madera.",
  "La costurera cose la tela.",
  "El pintor pinta un cuadro.",
  "La escultora talla una estatua.",
  "El arquitecto diseña un edificio.",
  "El programador codifica un programa.",
  "La diseñadora crea una nueva moda.",
  "El músico toca la guitarra.",
  "La cantante interpreta una canción.",
  "El chef cocina una deliciosa comida.",
  "La mesera sirve la comida en el restaurante.",
  "El jugador anota un gol en el partido.",
  "La árbitra toma una decisión importante en el juego.",
  "El actor actúa en una película.",
  "La actriz gana un premio por su actuación.",
  "El presidente habla en la conferencia.",
  "El sol brilla en el cielo.",
  "La luna ilumina la noche.",
  "El mar rompe en la playa.",
  "El viento sopla fuerte.",
  "El río fluye hacia el mar.",
  "El tren llega a la estación.",
  "El avión despega de la pista.",
  "El barco navega por el océano.",
  "El auto corre por la carretera.",
  "El camión transporta mercancías.",
  "El helicóptero vuela alto en el cielo.",
  "El globo aerostático asciende lentamente.",
  "El cohete despega hacia el espacio.",
  "El científico realiza un experimento.",
  "La investigadora descubre una cura.",
  "El abogado defiende a su cliente.",
  "La jueza dicta sentencia en el juicio.",
  "El periodista escribe una noticia importante.",
  "La reportera entrevista a un personaje famoso.",
  "El escritor crea una novela fascinante.",
  "La poetisa escribe un poema conmovedor.",
  "El fotógrafo toma una foto impresionante.",
  "La modelo desfila en la pasarela.",
  "El jugador de baloncesto encesta la pelota.",
  "El árbitro señala una falta en el partido.",
  "El bombero apaga el fuego en el edificio.",
  "La policía arresta al ladrón.",
  "El paramédico atiende a un herido en la calle.",
  "El voluntario ayuda a los necesitados en la comunidad.",
];

//arreglo donde se guradaran los paises desordenados
let paisesDesordenados = [];
//variable que guarda la posicion actual
let posJuegoActual = 0;
//variable que guarda la cantidad acertada
let cantidadAcertados = 0;

//ACENTOS
const acentos = {
  á: "á",
  é: "é",
  í: "í",
  ó: "ó",
  ú: "ú",
  Á: "Á",
  É: "É",
  Í: "Í",
  Ó: "Ó",
  Ú: "Ú",
};

//funcion para desordenar los paises
function desordenarPaises() {
  paises = paises.sort(function () {
    return Math.random() - 0.5;
  });
  for (var i = 0; i < paises.length; i++) {
    //convertimos el pais en un arreglo
    let pais = paises[i];
    pais = pais.toUpperCase();
    let palabras = pais.split(" ");
    palabras.sort(function () {
      return Math.random() - 0.5;
    });

    let fraseDesordenada = palabras.join(" ");
    //Guardamos el pais en el arreglo de paises desordenads
    paisesDesordenados.push(fraseDesordenada);
  }
}

function mostrarNuevoPais() {
  document.getElementById("palabra_actual").innerText =
    "Frase " + (posJuegoActual + 1) + " de 10";
  letras_correctas = 0;
  //controlo si terminaron las palabras
  if (posJuegoActual >= 10) {
    mostrarPantallaFinal();
    setTimeout(() => {
      $("#principal").fadeToggle(500);
      setTimeout(() => {
        $("#final").fadeToggle(1000);
      }, 500);
      if (cantidadAcertados < 6) {
        document.getElementById("final").style.backgroundImage =
          "url(../../images/derrota.gif)";
      } else {
        document.getElementById("final").style.backgroundImage =
          "url(../../images/victoria.gif)";
      }

      document.getElementById("texto_final").innerText =
        "Has ordenado correctamente " + cantidadAcertados + " frases de 10";

      if (cantidadAcertados >= 6) {
        var audio = new Audio("../../sounds/victory.mp3");
        audio.play();
      } else {
        var audio = new Audio("../../sounds/game_over.mp3");
        audio.play();
      }

      posJuegoActual = 0;
      cantidadAcertados = 0;
    }, 3000);
  }
  let contenedorPais = document.getElementById("pais");
  //eliminamos todo lo que tiene el div del pais
  contenedorPais.innerHTML = "";

  let pais = paisesDesordenados[posJuegoActual];
  pais = pais.split(" ");

  x = 0;
  clearInterval(idInterval);
  move();
  for (i = 0; i < pais.length; i++) {
    let id = "letra_" + i;
    var div = document.createElement("div");
    if (pais[i] != " ") {
      div.className = "letra";
    } else {
      div.className = "letra_2";
      div.classList.add("selector_none");
    }
    div.innerHTML = pais[i];
    div.setAttribute("id", id);
    div.classList.add("cursorImg");
    div.classList.add("data");
    div.setAttribute("data-id", pais[i]);
    contenedorPais.appendChild(div);
  }

  setTimeout(() => {
    ordenar();
  }, 2000);
}

function ordenar() {
  var items = document.querySelector(".sortable");
  Sortable.create(items, {
    animation: 150,
    chosenClass: "chosen",
    ghostClass: "ghost",
    dragClass: "drag",
    onEnd: () => {
      var paisOrdanedo = paises[posJuegoActual];
      paisOrdanedo = paisOrdanedo.toUpperCase();
      orden_correcto = paisOrdanedo.split(" ").toString();

      let orden = document.getElementsByClassName("data");
      let orden_actual = [];
      for (let index = 0; index < orden.length; index++) {
        const element = orden[index];
        let id = element.dataset.id;
        orden_actual.push(id);
      }

      orden_actual = orden_actual.toString();

      if (orden_correcto === orden_actual) {
        console.log("correcto!");
        var audio = new Audio("../../sounds/victory.mp3");
        audio.play();
        setTimeout(() => {
          cantidadAcertados += 1;
          posJuegoActual += 1;
          document.getElementById("contador").innerHTML = cantidadAcertados;
          mostrarNuevoPais();
        }, 500);
      } else {
        console.log("incorrecto!");
      }
    },
    group: "cards",
    store: {
      set: (sortable) => {
        const orden = sortable.toArray();
      },
      //obtener orden de la lista
      get: (sortable) => {
        let orden = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        orden = orden.sort(function () {
          return Math.random() - 0.5;
        });
        return orden;
      },
    },
  });
}

function mostrarPantallaFinal() {
  clearInterval(idInterval);
  document.getElementById("pantalla-juego").style.display = "none";
  document.getElementById("pantalla-final").style.display = "flex";
  document.getElementById("acertadas").innerHTML = cantidadAcertados;
}

//Funcion que compara el pais ingresado con el pais correcto
let x = 0;
let idInterval;
function move() {
  if (x == 0) {
    x = 1;
    let elem = document.getElementById("myBar");
    let width = 1;
    idInterval = setInterval(frame, 1000);
    function frame() {
      if (width >= 100) {
        clearInterval(idInterval);
        x = 0;
        posJuegoActual++;
        mostrarNuevoPais();
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function comenzarJuego() {
  for (i = 0; i <= 10; i++) {
    setTimeout(
      "document.getElementById('categoria').style.opacity = '" + i / 10 + "'",
      i * 100
    );
  }
}

var tipo_juego = "";

function play(tipo) {
  switch (tipo) {
    case 1:
      tipo_juego = "Los Poemas";
      paises = poemas_array;
      break;
    case 2:
      tipo_juego = "El Símil";
      paises = simil_array;
      break;
    case 3:
      tipo_juego = "La Oración";
      paises = oraciones_array;
      break;
    default:
      break;
  }

  document.getElementById("tipo_juego").innerHTML = tipo_juego;
  setTimeout(() => {
    paisesDesordenados = [];
    posJuegoActual = 0;
    cantidadAcertados = 0;
    desordenarPaises();
    document.getElementById("pantalla-inicio").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    document.getElementById("pantalla-final").style.display = "none";
    mostrarNuevoPais();
    document.getElementById("contador").innerHTML = 0;
  }, 500);
}

function comenzar_de_nuevo() {
  document.getElementById("pantalla-inicio").style.display = "flex";
  document.getElementById("pantalla-juego").style.display = "none";
  document.getElementById("pantalla-final").style.display = "none";

  for (i = 10; i >= 0; i--) {
    document.getElementById("categoria").style.opacity = "0";
  }
}

$(document).ready(function () {
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
          divAnimado.style.backgroundImage = "url(../../images/normal2.gif)";
          maquina2(
            "bienvenida",
            "Hola, soy Genio. <br> En este juego deberas seleccionar la categoria, y luego se te dara una frase la cual debes ordenar y asi poder ganar. <br> ¡Tu puedes!",
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
          document.querySelector("#btnomitir").style.display = "none";
          setTimeout(() => {
            cerrar_anuncio();
          }, 3000);
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
    const divAnimado2 = document.querySelector(".nube");
    divAnimado2.style.animationName = "moverabajo";
    const divAnimado = document.querySelector(".overlay");
    divAnimado.style.backgroundImage = "url(../../images/normal1.gif)";
    $("#fondo_blanco").fadeToggle(3000);
    setTimeout(function () {
      divAnimado.style.animationName = "moverIzquierda";
      divAnimado.style.animationDirection = "normal";
      setTimeout(() => {
        $("#principal").fadeToggle(1000);
      }, 2000);
    }, 2000);
  }
}
