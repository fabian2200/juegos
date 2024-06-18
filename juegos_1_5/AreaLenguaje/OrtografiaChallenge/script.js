var colores = [{ op1: '#662482', op2: '#39134a' }, { op1: '#4494d0', op2: '#3372a1' }, { op1: '#f08218', op2: '#c86b12' }, { op1: '#e83967', op2: '#be3156' }, { op1: "#FF0032", op2: "#CD0404" }, { op1: "#2146C7", op2: "#0008C1" }];

var frases = [
    "Caperucita Roja caminaba por el bosque cuando se encontró con el lobo feroz. - ¿A dónde vas, Caperucita? - preguntó el lobo con una sonrisa malvada. - Voy a casa de mi abuela - respondió Caperucita con inocencia.",
    "Había una vez un reino lejano en el que vivía un príncipe muy valiente. Él estaba enamorado de la princesa del reino vecino, pero ella estaba cautiva por un malvado dragón. El príncipe decidió ir en su búsqueda y rescatarla.",
    "Alicia cayó por la madriguera del conejo y se encontró en un mundo extraño y maravilloso. Conoció a un gato sonriente, una oruga fumadora y una reina cruel. Pero lo más sorprendente de todo fue cuando se encogió y creció varias veces.",
    "El patito feo se sentía triste porque no se parecía a sus hermanos y era rechazado por los demás animales. Pero un día descubrió que en realidad era un cisne, el más hermoso de todos. Desde entonces, vivió feliz en su nuevo hogar. ",
    "Hansel y Gretel se perdieron en el bosque y encontraron una casa de dulces. Pero lo que no sabían es que la casa pertenecía a una bruja malvada que quería comérselos. Por suerte, los niños fueron más astutos que la bruja y lograron escapar.",
    "Blancanieves se refugió en la cabaña de los siete enanitos para escapar de la malvada reina que quería matarla. Allí, encontró una nueva familia que la acogió con amor y le enseñó muchas cosas. Pero la reina descubrió su paradero y le dio una manzana envenenada.",
    "Peter Pan es un niño que nunca crece y vive en el país de Nunca Jamás con los Niños Perdidos. Él y sus amigos, los hermanos Darling, luchan contra el Capitán Garfio y sus piratas. Peter también tiene un hada llamada Campanilla que lo ayuda en sus aventuras.",
    "El león se enamoró de la oveja, pero ella tenía miedo de él porque era un depredador. Entonces, el león decidió demostrarle que no era peligroso y la protegió de otros animales. La oveja se dio cuenta de que el león era un amigo y se enamoró de él también.",
    "La sirenita quería ser humana y casarse con el príncipe que había salvado de un naufragio. Para lograrlo, hizo un pacto con la bruja del mar y le dio su voz a cambio de piernas. Pero el príncipe se enamoró de otra mujer y la sirenita se convirtió en espuma de mar.",
    "El ratón Pérez recolectaba los dientes de los niños que se les caían y les dejaba monedas a cambio. Un día, una niña que había perdido su diente accidentalmente lo atrapó. Pero en lugar de asustarse, se hizo amiga del ratón y le enseñó muchas cosas nuevas.",
    "El Grúfalo era un monstruo imaginario que asustaba a los animales del bosque. Pero un día, el ratón se encontró con él y no tuvo miedo. Al contrario, le dijo que estaba invitado a cenar con él. ¿Cómo iba a reaccionar el Grúfalo?.",
    "El Gato con Botas era un astuto felino que ayudaba a su amo a conquistar el corazón de la princesa. Pero ¿cómo lo iba a lograr? El gato se disfrazó de marqués y le ofreció un regalo a la princesa en nombre de su dueño. ¿Funcionaría su plan?.",
    "El Principito viajó por diferentes planetas y conoció a personajes muy peculiares. Uno de ellos era un rey que quería ser obedecido en todo. Pero ¿cómo podía ser un rey sin súbditos? El Principito se lo preguntó, y el rey le respondió que se auto-proclamaba súbdito de sí mismo.",
    "El Lobo y las Ovejas tenían un conflicto porque el lobo quería comérselas. Pero un día, se encontraron en una situación inesperada. ¿Qué pasó? Una oveja quedó atrapada en un precipicio, y el lobo la ayudó a salir. ¿Podrían ser amigos después de eso?.",
    "El Conejo de Pascua tenía que entregar huevos de chocolate a todos los niños del mundo, pero se dio cuenta de que no tenía suficientes huevos. ¿Qué podía hacer? El Conejo pidió ayuda a sus amigos, la gallina y el pollito, y juntos pudieron completar la tarea a tiempo.",
    "Cenicienta era una joven que vivía con su madrastra y sus hermanastras. Un día, el príncipe organizó un baile y Cenicienta fue invitada. Allí conoció al príncipe, pero tuvo que huir antes de que el reloj marcara las doce, dejando sólo su zapatilla de cristal.",
    "La Sirenita era una princesa del mar que estaba enamorada de un príncipe humano. Para estar con él, hizo un trato con una bruja y perdió su voz a cambio de piernas. Pero el príncipe no la reconoció y se casó con otra princesa.",
    "Los Tres Cerditos construyeron casas de paja, madera y ladrillos para protegerse del Lobo Feroz. Pero sólo la casa de ladrillos resistió el soplido del lobo.",
    "La Bella Durmiente era una princesa que fue hechizada por una malvada bruja y se durmió por cien años. Un día, un príncipe la despertó con un beso de amor verdadero y vivieron felices para siempre.",
    "Hansel y Gretel eran dos hermanos que se perdieron en el bosque y encontraron una casa hecha de dulces. Pero la casa era de una bruja que quería comérselos, así que los niños tuvieron que ingeniar un plan para escapar.",
    "Blancanieves era una princesa que huyó del castillo de su madrastra, una malvada reina que quería matarla. Se refugió en una cabaña en el bosque, donde vivían siete enanitos. Pero la reina descubrió su paradero y la envenenó con una manzana envenenada.",
    "El Patito Feo era un pequeño pato que no se parecía a sus hermanos y era rechazado por los demás animales. Pero un día, descubrió que en realidad era un cisne y encontró su lugar en el mundo.",
    "Peter Pan era un niño que nunca quería crecer y vivía en el País de Nunca Jamás junto a Campanilla y los Niños Perdidos. Un día, conoció a Wendy y sus hermanos y los llevó a volar por el cielo.",
    "Pinocho era un muñeco de madera que cobró vida y quería ser un niño de verdad. Pero su nariz crecía cada vez que mentía, lo que le causó muchos problemas. Al final, demostró su valentía y honradez y se convirtió en un niño de verdad.",
    "El Mago de Oz era un hombre misterioso que vivía en una ciudad esmeralda y concedía deseos. Dorothy, una niña de Kansas, llegó a Oz después de ser llevada por un tornado. Junto a sus amigos el Espantapájaros.",
    '"Érase una vez", dijo la abuela, "una niña llamada Caperucita Roja".',
    'La reina malvada preguntó a su espejo mágico: "Espejito, espejito, ¿quién es la más hermosa de todo el reino?',
    "El Gato con Botas le dijo al molinero: No te preocupes, amigo mío. Yo te ayudaré a conseguir la riqueza que mereces.",
    '"¿Por qué estás tan triste?" preguntó el hada madrina a Cenicienta.',
    'El conejo blanco le dijo a Alicia: ¡Date prisa, date prisa, no tengo todo el día!.',
    'El gato llevó a la niña a un jardín lleno de flores; allí le dijo: ¿Quieres que te cante una canción?',
    "Juan y sus amigos estaban en el parque jugando a la pelota; de repente, una ardilla saltó del árbol y les robó la pelota.",
    'La reina le preguntó al espejo: "Espejito, espejito, ¿quién es la más hermosa de todo el reino?" El espejo respondió: "Mi reina, tú eres la más hermosa".',
    "La oruga comió una hoja; después otra; después otra más; y así continuó comiendo hasta que se sintió muy cansada.",
    '¿Por qué estás triste? preguntó la abuela a Caperucita Roja. "Es que me han dicho que los lobos son malos y me da miedo encontrarme con uno", respondió la niña.',
    'El caballero preparó su espada; la tomó con fuerza y miró al dragón a los ojos. ¡Prepárate para luchar!, exclamó.',
    'La noche estaba oscura y silenciosa; de repente, un búho empezó a ulular; eso asustó a Pedro y empezó a correr muy rápido.',
    'La madre le dijo al niño: "Tienes que ser amable con los demás; no es justo tratar mal a alguien sólo porque es diferente a ti".'
]


$(document).ready(function () {
    colores = randomValueGenerator(colores);
    frases = randomValueGenerator(frases);
    generarFrase();
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
                    maquina2("bienvenida", 'Hola, soy Genio. <br> En este juego deberás ubicar en cada espacio en blanco, el signo que creas correcto, debes acertar mas del 60% para ganar. <br> ¡Tu Puedes!', 50, 1);
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
    if (!cerrardo){
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
            }, 2000)
        }, 2000);
    }
}

var numeroSignos = 0;
var respuesta_actual = 1;
var correctas = 0;
var frase = "";

var signosTotal = 0;
var correctasTotal = 0;

function generarFrase() {
    numeroSignos = 0;
    if (respuesta_actual <= 5) {
        document.getElementById("pregunta_ac").innerText = "Pregunta " + respuesta_actual + " de 5";
        var contenedor = document.getElementById("frase");

        // Define la frase
        var frase = frases[respuesta_actual];

        // Define la expresión regular para buscar los signos de puntuación
        var expresion = /[,'":;.!?¿¡()]/;

        // Recorre la frase para encontrar los signos de puntuación y reemplazarlos con un elemento de entrada
        var frase_ok = "";
        for (var i = 0; i < frase.length; i++) {
            var caracter = frase[i];
            if (expresion.test(caracter)) {
                var input = "<input readonly class='signo_puntuacion' id='signo_" + numeroSignos + "' onclick='seleccionar_signo(\"signo_" + numeroSignos + "\")' type='text' data-id='" + caracter + "' placeholder='?'>";
                frase_ok += input;
                numeroSignos++;
            } else {
                frase_ok += caracter;
            }
        }

        signosTotal += numeroSignos;

        contenedor.innerHTML = frase_ok;

        respuesta_actual++;
    } else {

        $('#principal').fadeToggle(500);
        setTimeout(() => {
            $('#final').fadeToggle(1000);
        }, 500)
        if ((correctasTotal / signosTotal) * 100 < 60) {
            document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
        } else {
            document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
        }

        document.getElementById("texto_final").innerText = "Has contestado correctamente el " + ((correctasTotal / signosTotal) * 100).toFixed(2) + "% de los signos.";

        if ((correctasTotal / signosTotal) * 100 >= 60) {
            var audio = new Audio('../../sounds/victory.mp3');
            audio.play();
        } else {
            var audio = new Audio('../../sounds/game_over.mp3');
            audio.play();
        }

    }
}

function randomValueGenerator(vector) {
    return vector.sort(function () { return Math.random() - 0.5 });
};

var respondidas = 0;
function seleccionar_signo(elemento) {
    Swal.fire({
        title: 'Selecciona un signo de puntuación',
        icon: 'info',
        html: '<div style="padding-top: 20px"  class="row">' +
            '<div class="col-3"><button onclick="seleccionar_ele(\'' + elemento + '\',\',\')" class="btnw btn btn-danger btn-lg"> , </button></div>' +
            '<div class="col-3"><button onclick="seleccionar_ele(\'' + elemento + '\',\'.\')" class="btnw btn btn-danger btn-lg"> . </button></div>' +
            '<div class="col-3"><button onclick="seleccionar_ele(\'' + elemento + '\',\'¿\')" class="btnw btn btn-warning btn-lg"> ¿ </button></div>' +
            '<div class="col-3"><button onclick="seleccionar_ele(\'' + elemento + '\',\'?\')" class="btnw btn btn-warning btn-lg"> ? </button></div>' +
            '</div>' +
            '<div style="padding-top: 20px"  class="row">' +
            '<div class="col-3"><button onclick="seleccionar_ele(\'' + elemento + '\',\'&quot;\')" class="btnw btn btn-info btn-lg"> " </button></div>' +
            '<div class="col-3"><button onclick="seleccionar_ele(\'' + elemento + '\',\':\')" class="btnw btn btn-info btn-lg"> : </button></div>' +
            '<div class="col-3"><button onclick="seleccionar_ele(\'' + elemento + '\',\'¡\')" class="btnw btn btn-success btn-lg"> ¡ </button></div>' +
            '<div class="col-3"><button onclick="seleccionar_ele(\'' + elemento + '\',\'!\')" class="btnw btn btn-success btn-lg"> ! </button></div>' +
            '</div>' +
            '<div style="padding-top: 20px"  class="row">' +
            '<div class="col-4"><button onclick="seleccionar_ele(\'' + elemento + '\',\';\')" class="btnw btn btn-secondary btn-lg"> ; </button></div>' +
            '<div class="col-4"><button onclick="seleccionar_ele(\'' + elemento + '\',\'(\')" class="btnw btn btn-primary btn-lg"> ( </button></div>' +
            '<div class="col-4"><button onclick="seleccionar_ele(\'' + elemento + '\',\')\')" class="btnw btn btn-primary btn-lg"> ) </button></div>' +
            '</div>',
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        focusConfirm: false,
    });
}

function seleccionar_ele(elemento, signo) {
    Swal.close();
    document.getElementById(elemento).value = signo;
    document.getElementById(elemento).style.backgroundColor = "#f18313";
    document.getElementById(elemento).style.color = "#fff";
    document.getElementById(elemento).setAttribute("onclick", "");
    respondidas++;

    setTimeout(() => {
        if (respondidas == numeroSignos) {
            calificar(0, numeroSignos - 1);
        }
    }, 500)
}

var signos_correctos = 0;

function calificar(i, n) {
    if (i <= n) {
        let signo = document.getElementById("signo_" + i);

        if (signo.getAttribute("data-id") == signo.value) {
            signo.style.backgroundColor = "#238d23";
            signo.style.borderColor = "#238d23";
            signos_correctos++;
            correctasTotal++;
        } else {
            signo.style.backgroundColor = "#f5153e";
            signo.style.borderColor = "#f5153e";
        }

        setTimeout(function () {
            calificar(i + 1, n);
        }, 800);
    } else {

        document.getElementById("pregunta_corr").innerText = correctasTotal + "/" + signosTotal + " Signos correctos";

        if ((signos_correctos / numeroSignos) * 100 >= 60) {
            Swal.fire({
                position: "center",
                imageUrl: "../../images/correcto.gif",
                imageWidth: 250,
                imageHeight: 250,
                title: "Vamos bien!",
                showConfirmButton: false,
                timer: 2500,
            });
        } else {
            Swal.fire({
                position: "center",
                imageUrl: "../../images/incorrecto.gif",
                imageWidth: 250,
                imageHeight: 250,
                title: "Aún puedes, ánimo!",
                showConfirmButton: false,
                timer: 2500,
            });
        }

        signos_correctos = 0;
        respondidas = 0;

        setTimeout(() => {
            generarFrase();
        }, 2600)
    }
}