const textosJson = [
       {
        texto: "El sol brillaba en el cielo azul. Los pájaros cantaban alegremente en los árboles. Los niños jugaban con sus pelotas en el parque.",
        adjetivos: ["brillaba", "alegremente", "azul"],
        pronombres: ["el", "los", "sus"],
        sustantivos: [
            "sol",
            "cielo",
            "pájaros",
            "árboles",
            "niños",
            "pelotas",
            "parque",
        ],
    },
    {
        texto: "Había una vez un conejito muy travieso. Siempre se escapaba del jardín y se metía en problemas. Un día encontró una zanahoria gigante y decidió llevársela a casa.",
        adjetivos: ["travieso", "gigante"],
        pronombres: ["un", "se", "la"],
        sustantivos: ["conejito", "jardín", "problemas", "zanahoria", "casa"],
    },
    {
        texto: "La luna brillaba en el cielo oscuro. Las estrellas parpadeaban como luciérnagas. Un búho ululaba en el árbol cercano.",
        adjetivos: ["oscuro", "cercano"],
        pronombres: ["la", "un", "el"],
        sustantivos: [
            "luna",
            "cielo",
            "estrellas",
            "luciérnagas",
            "búho",
            "árbol",
        ],
    },
    {
        texto: "La lluvia caía suavemente sobre el tejado de la casa. Un gato negro se refugiaba debajo de un árbol frondoso. Los niños saltaban en los charcos llenos de agua.",
        adjetivos: ["suavemente", "negro", "frondoso", "llenos"],
        pronombres: ["la", "un", "los"],
        sustantivos: [
            "lluvia",
            "tejado",
            "casa",
            "gato",
            "árbol",
            "niños",
            "charcos",
            "agua",
        ],
    },
    {
        texto: "La mariposa de colores volaba entre las flores del jardín. El sol brillaba y la brisa suave movía las hojas de los árboles. Los niños jugaban en el parque y reían felices.",
        adjetivos: ["colores", "suave", "felices"],
        pronombres: ["la", "las", "los"],
        sustantivos: [
            "mariposa",
            "flores",
            "jardín",
            "sol",
            "brisa",
            "hojas",
            "árboles",
            "niños",
            "parque",
        ],
    },
    {
        texto: "Había una vez un osito muy querido por todos los niños. Un día se cayó de la cama y perdió uno de sus botones. Los niños lo arreglaron con hilo y aguja y lo abrazaron con ternura.",
        adjetivos: ["querido", "ternura"],
        pronombres: ["un", "lo", "los"],
        sustantivos: [
            "osito",
            "niños",
            "cama",
            "botones",
            "hilo",
            "aguja",
        ],
    },
    {
        texto: "El río serpenteaba entre los montes verdes y la naturaleza parecía estar en armonía. Los pájaros cantaban y los animales correteaban por el bosque. Los niños recogían frutos silvestres para hacer una tarta deliciosa.",
        adjetivos: ["verdes", "silvestres", "deliciosa"],
        pronombres: ["el","los", "por", "una"],
        sustantivos: [
            "río",
            "montes",
            "naturaleza",
            "pájaros",
            "animales",
            "bosque",
            "niños",
            "frutos",
            "tarta",
        ],
    },
    {
        texto: "En el fondo del mar había una ciudad submarina habitada por peces de colores y sirenas. Las algas verdes y las conchas brillantes adornaban las casas. Los niños buceaban y descubrían tesoros escondidos.",
        adjetivos: ["submarina", "colores", "brillantes", "escondidos"],
        pronombres: ["la", "las", "los"],
        sustantivos: [
            "mar",
            "ciudad",
            "peces",
            "sirenas",
            "algas",
            "conchas",
            "casas",
            "niños",
            "tesoros",
        ],
    },
    {
        texto: "La abuela tejía una manta de lana suave y cálida mientras contaba historias a los niños. Afuera, la nieve caía lentamente y cubría el jardín de blanco. Los niños se acurrucaban junto a la chimenea y disfrutaban del calor del fuego.",
        adjetivos: ["suave", "cálida", "blanco"],
        pronombres: ["una", "los", "del"],
        sustantivos: [
            "abuela",
            "manta",
            "lana",
            "historias",
            "nieve",
            "jardín",
            "niños",
            "chimenea",
            "calor",
            "fuego",
        ],
    },
    {
        texto: "El león rugía fuerte en la selva mientras los monos saltaban de árbol en árbol. El sol brillaba en el cielo azul y la vegetación era exuberante. Los niños observaban con asombro la naturaleza salvaje.",
        adjetivos: ["fuerte", "exuberante", "salvaje"],
        pronombres: ["el", "en", "la"],
        sustantivos: [
            "león",
            "selva",
            "monos",
            "árbol",
            "sol",
            "cielo",
            "vegetación",
            "niños",
            "naturaleza",
        ],
    },
    {
        texto: "La princesa  vivía en un castillo rodeado de jardines floridos. Los pájaros cantaban y las mariposas revoloteaban en el aire. Los niños soñaban con ser príncipes y princesas.",
        adjetivos: ["floridos", "revoloteaban"],
        pronombres: ["la", "un", "ser"],
        sustantivos: [
            "princesa",
            "castillo",
            "jardines",
            "pájaros",
            "mariposas",
            "aire",
            "niños",
            "príncipes",
            "princesas",
        ],
    },
    {
        texto: "El astronauta flotaba en el espacio mientras observaba la Tierra desde lejos. Las estrellas brillaban intensamente y el universo parecía infinito. Los niños imaginaban viajar por el espacio y descubrir nuevos planetas.",
        adjetivos: ["infinito", "nuevos"],
        pronombres: ["el", "la", "por"],
        sustantivos: [
            "astronauta",
            "espacio",
            "Tierra",
            "estrellas",
            "universo",
            "niños",
            "viajar",
            "planetas",
        ],
    },
    {
        texto: "El circo llegó a la ciudad y los payasos hacían reír a todos con sus ocurrencias. Los elefantes y los leones eran los protagonistas del espectáculo. Los niños disfrutaban de los malabares y las acrobacias.",
        adjetivos: ["ocurrencias", "protagonistas"],
        pronombres: ["a", "los", "de"],
        sustantivos: [
            "circo",
            "ciudad",
            "payasos",
            "elefantes",
            "leones",
            "espectáculo",
            "niños",
            "malabares",
            "acrobacias",
        ],
    },
    {
        texto: "La lluvia caía torrencialmente y los truenos retumbaban en el cielo. Los relámpagos iluminaban el paisaje nocturno. Los niños se abrazaban asustados mientras la tormenta pasaba.",
        adjetivos: ["torrencialmente", "nocturno", "asustados"],
        pronombres: ["la", "el", "se"],
        sustantivos: [
            "lluvia",
            "truenos",
            "cielo",
            "relámpagos",
            "paisaje",
            "niños",
            "tormenta",
        ],
    },
    {
        texto: "La granja estaba llena de animales: vacas, ovejas, gallinas y cerdos. El perro pastoreaba las ovejas y el gato cazaba ratones. Los niños se divertían alimentando a los animales y jugando en la pradera.",
        adjetivos: ["llena", "pastoreaba", "divertían"],
        pronombres: ["la", "las", "y"],
        sustantivos: [
            "granja",
            "animales",
            "vacas",
            "ovejas",
            "gallinas",
            "cerdos",
            "perro",
            "gato",
            "ratones",
            "niños",
            "pradera",
        ],
    },
    {
        texto: "El barco navegaba por el mar en busca de tesoros escondidos. El viento soplaba fuerte y las olas golpeaban la proa. Los niños imaginaban ser piratas y explorar nuevas tierras.",
        adjetivos: ["escondidos", "fuerte", "nuevas"],
        pronombres: ["el", "por", "y"],
        sustantivos: [
            "barco",
            "mar",
            "tesoros",
            "viento",
            "olas",
            "proa",
            "niños",
            "piratas",
            "tierras",
        ],
    },
    {
        texto: "El bosque era mágico y lleno de vida. Los árboles gigantes parecían tocar el cielo y los animales salvajes se escondían entre los arbustos. Los niños jugaban a ser exploradores y descubrir nuevos secretos.",
        adjetivos: ["mágico", "gigantes", "salvajes"],
        pronombres: ["el", "los", "entre"],
        sustantivos: [
            "bosque",
            "vida",
            "árboles",
            "cielo",
            "animales",
            "arbustos",
            "niños",
            "exploradores",
            "secretos",
        ],
    },
    {
        texto: "El tren avanzaba a toda velocidad por las vías del ferrocarril. Los paisajes cambiaban rápidamente y los pueblos se sucedían uno tras otro. Los niños miraban por la ventana fascinados por el viaje en tren.",
        adjetivos: ["toda", "rápidamente", "sucesión"],
        pronombres: ["el", "los", "uno"],
        sustantivos: [
            "tren",
            "velocidad",
            "vías",
            "ferrocarril",
            "paisajes",
            "pueblos",
            "ventana",
            "niños",
            "viaje",
        ],
    },
    {
        texto: "La casa en el árbol era el refugio secreto de los niños. Tenía una escalera de cuerda para subir y una ventana con vista al bosque. Los niños pasaban horas jugando y contando historias en su casa en el árbol.",
        adjetivos: ["secreto", "cuerda", "vista"],
        pronombres: ["la", "su", "en"],
        sustantivos: [
            "casa",
            "árbol",
            "refugio",
            "niños",
            "escalera",
            "ventana",
            "bosque",
            "horas",
            "juegos",
            "historias",
        ],
    },
    {
        texto: "El parque acuático era el lugar perfecto para refrescarse en verano. Las piscinas tenían toboganes y olas artificiales. Los niños reían y disfrutaban del sol mientras se deslizaban por los toboganes del parque acuático.",
        adjetivos: ["perfecto", "artificiales"],
        pronombres: ["el", "los", "del"],
        sustantivos: [
            "parque",
            "acuático",
            "lugar",
            "piscinas",
            "toboganes",
            "olas",
            "niños",
            "sol",
        ],
    },
    {
        texto: "El circo llegó a la ciudad con sus payasos, malabaristas y acróbatas. Los niños se maravillaban con el espectáculo y aplaudían emocionados. Los artistas hacían trucos imposibles y divertían a la audiencia.",
        adjetivos: ["emocionados", "imposibles", "divertían"],
        pronombres: ["el", "con", "a"],
        sustantivos: [
            "circo",
            "ciudad",
            "payasos",
            "malabaristas",
            "acróbatas",
            "niños",
            "espectáculo",
            "artistas",
            "trucos",
            "audiencia",
        ],
    },
    {
        texto: "La playa era un paraíso de arena y mar. Las olas eran suaves y el sol brillaba en el cielo. Los niños jugaban a construir castillos de arena y nadar en el mar cristalino.",
        adjetivos: ["paraíso", "suaves", "cristalino"],
        pronombres: ["la", "y", "en"],
        sustantivos: [
            "playa",
            "arena",
            "mar",
            "olas",
            "sol",
            "niños",
            "castillos",
            "nadadores",
        ],
    },
    {
        texto: "La biblioteca era un lugar tranquilo y lleno de libros. Los niños se sentían como exploradores en busca de aventuras. Descubrían historias de mundos lejanos y personajes fascinantes en los libros de la biblioteca.",
        adjetivos: ["tranquilo", "lleno", "fascinantes", "lejanos"],
        pronombres: ["la", "de", "en"],
        sustantivos: [
            "biblioteca",
            "libros",
            "niños",
            "exploradores",
            "aventuras",
            "historias",
            "mundos",
            "personajes",
        ],
    },
    {
        texto: "El zoológico era el hogar de muchos animales exóticos. Los niños se maravillaban con los tigres, elefantes y jirafas. Observaban sus comportamientos y aprendían sobre sus hábitats y costumbres.",
        adjetivos: [
            "exóticos",
            "maravillaban",
            "comportamientos",
            "hábitats",
            "costumbres",
        ],
        pronombres: ["el", "con", "sus"],
        sustantivos: [
            "zoológico",
            "animales",
            "tigres",
            "elefantes",
            "jirafas",
            "niños",
            "observaciones",
        ],
    },
    {
        texto: "La montaña rusa era una atracción emocionante en el parque de diversiones. Los niños gritaban y reían mientras subían y bajaban a toda velocidad. La montaña rusa era un desafío que los niños estaban felices de aceptar.",
        adjetivos: ["emocionante", "felices"],
        pronombres: ["la", "en", "que"],
        sustantivos: [
            "montaña",
            "rusa",
            "atracción",
            "parque",
            "diversiones",
            "niños",
            "velocidad",
            "desafío",
        ],
    },
    {
        texto: "El laboratorio de ciencias era un lugar lleno de experimentos y descubrimientos. Los niños vestían batas blancas y utilizaban microscopios para observar células y bacterias. El laboratorio de ciencias era un lugar donde la curiosidad y la imaginación se encontraban.",
        adjetivos: ["lleno", "blancas", "curiosidad", "imaginación"],
        pronombres: ["el", "de", "donde"],
        sustantivos: [
            "laboratorio",
            "ciencias",
            "experimentos",
            "descubrimientos",
            "niños",
            "batas",
            "microscopios",
            "células",
            "bacterias",
        ],
    },
];

const tipo = [
    {
        parte: "adjetivos",
    },
    {
        parte: "pronombres",
    },
    {
        parte: "sustantivos",
    },
];

function iniciar() {
    let textAleatorio = Math.floor(Math.random() * textosJson.length);
    const texto = textosJson[textAleatorio].texto;
    const adjetivos = textosJson[textAleatorio].adjetivos;
    const pronombres = textosJson[textAleatorio].pronombres;
    const sustantivos = textosJson[textAleatorio].sustantivos;

    const palabras = texto.split(" ");
    const textoDiv = document.getElementById("parrafos");
    let nIntentos = 0;
    let tipomost;
    let palaEncontr = 0;
    let mensajeResul = "";

    let indice = Math.floor(Math.random() * tipo.length);

    let arrayParte = tipo[indice];

    document.getElementById("mensaje-clic").innerHTML = arrayParte.parte;
    tipomost = arrayParte.parte;
    let pronombresContados = {};
    let abjetivosContados = {};
    let sustantivosContados = {};

    palabras.forEach((palabra) => {
        let tipo = "";
        if (adjetivos.includes(palabra.toLowerCase().replace(".", ""))) {
            tipo = "adjetivos";
            if (abjetivosContados[palabra]) {
                abjetivosContados[palabra] += 1;
            } else {
                abjetivosContados[palabra] = 1;
            }
        } else if (
            pronombres.includes(palabra.toLowerCase().replace(".", ""))
        ) {
            tipo = "pronombres";
            if (pronombresContados[palabra]) {
                pronombresContados[palabra] += 1;
            } else {
                pronombresContados[palabra] = 1;
            }
        } else if (
            sustantivos.includes(palabra.toLowerCase().replace(".", ""))
        ) {
            tipo = "sustantivos";
            if (sustantivosContados[palabra]) {
                sustantivosContados[palabra] += 1;
            } else {
                sustantivosContados[palabra] = 1;
            }
        }
        console.log(sustantivosContados);

        if (tipo) {
            const elemento = document.createElement("span");
            elemento.innerText = palabra + " ";

            elemento.addEventListener("click", () => {
                nIntentos++;

                console.log(tipo);

                if (tipo === "pronombres") {
                    pronombresContados[palabra] += 1;
                }
                if (tipo === "adjetivos") {
                    abjetivosContados[palabra] += 1;
                }
                if (tipo === "sustantivos") {
                    sustantivosContados[palabra] += 1;
                }

                if (tipomost == tipo) {
                    elemento.classList.add("bien");
                    palaEncontr++;
                    document.getElementById("sumAcierto").innerHTML =
                        palaEncontr;
                } else {
                    elemento.classList.add("error");
                }

                if (nIntentos == cantnombre) {
                    $("#principal").fadeToggle(1000);
                    $("#final").fadeToggle(1000);
                    if (palaEncontr < cantnombre) {
                        var audio = new Audio("../../sounds/game_over.mp3");
                        audio.play();
                        document.getElementById("final").style.backgroundImage =
                            "url(../../images/derrota.gif)";
                        mensajeResul =
                            "Solo has coseguido identificar " +
                            palaEncontr +
                            " " +
                            tipomost +
                            " de " +
                            cantnombre;
                    } else {
                        document.getElementById("final").style.backgroundImage =
                            "url(../../images/victoria.gif)";
                        var audio = new Audio("../../sounds/victory.mp3");
                        audio.play();
                        mensajeResul =
                            "Felicitaciones has logrado indentidicar todos los " +
                            tipomost;
                    }

                    document.getElementById("texto_final").innerText =
                        mensajeResul;
                }
            });
            textoDiv.appendChild(elemento);
        } else {
            textoDiv.appendChild(document.createTextNode(palabra + " "));
        }
    });

    let cantnombre = 0;

    if (tipomost === "pronombres") {
        for (let clave in pronombresContados) {
            cantnombre += pronombresContados[clave];
        }
    } else if (tipomost === "adjetivos") {
        for (let clave in abjetivosContados) {
            cantnombre += abjetivosContados[clave];
        }
    } else {
        for (let clave in sustantivosContados) {
            cantnombre += sustantivosContados[clave];
        }
    }
    document.getElementById("totPalabra").innerHTML =
        cantnombre + " " + tipomost;

    // debugger;
}

//iniciar();

$(document).ready(function () {
    iniciar();

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
                        "Hola, soy Genio. <br> En este juego  debes identificar los Pronombres, Abjetivos y Sustantivos que se encuentran en el parrafo presentado.",
                        100,
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
        let audio2 = new Audio("../../sounds/fondo.mp3");
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
            }, 2000)
        }, 2000);
    }
}
