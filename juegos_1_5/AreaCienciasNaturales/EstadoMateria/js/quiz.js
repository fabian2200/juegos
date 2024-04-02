var quiz = {
    // (A) PROPERTIES
    // (A1) QUESTIONS & ANSWERS
    // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
    data: [
        {
            q: "¿Cuáles son los tres estados fundamentales de la materia?",
            o: [
                "Sólido, líquido y gaseoso",
                "Líquido, sólido y cristalino",
                "Gaseoso, líquido y sólido",
                "Cristalino, gaseoso y líquido",
            ],
            a: 0,
        },

        {
            q: "¿Qué objeto sólido no reduce su volumen al comprimirlo?",
            o: [
                "Una piedra",
                "Un trozo de madera",
                "Un bloque de metal",
                "Un globo",
            ],
            a: 0,
        },

        {
            q: "¿Qué sucede con la forma de los líquidos?",
            o: [
                "Tienen forma propia",
                "Adoptan la forma del recipiente que los contiene",
                "No tienen forma",
                "Tienen forma pero la pueden cambiar",
            ],
            a: 1,
        },

        {
            q: "¿Qué sucede con el volumen de los líquidos?",
            o: [
                "No tienen volumen",
                "Tienen volumen propio y adoptan la forma del recipiente que los contiene",
                "No tienen volumen propio",
                "Tienen volumen propio pero no lo pueden cambiar",
            ],
            a: 1,
        },

        {
            q: "¿Por qué los gases son considerados compresibles?",
            o: [
                "Porque tienen forma y volumen propios",
                "Porque tienen volumen propio pero no forma",
                "Porque no tienen forma ni volumen propios",
                "Porque su volumen se reduce cuando se los comprime",
            ],
            a: 3,
        },
        {
            q: "¿Qué sucede con el volumen de los gases cuando se los comprime?",
            o: ["Aumenta", "Se mantiene igual", "Disminuye", "Depende del gas"],
            a: 2,
        },

        {
            q: "¿Qué sucede con el aire al pinchar un globo lleno de aire?",
            o: [
                "El aire desaparece",
                "El aire se queda dentro del globo",
                "El aire se escapa y se reparte por toda la habitación",
                "El aire se convierte en líquido",
            ],
            a: 2,
        },

        {
            q: "¿Cuál de las siguientes opciones no es una propiedad física de la materia?",
            o: ["Punto de fusión", "Solubilidad", "Densidad", "Reactividad"],
            a: 1,
        },

        {
            q: "¿Cuál de los siguientes objetos no es un cuerpo en estado sólido?",
            o: ["Hielo", "Aire encerrado en un globo", "Roca", "Madera"],
            a: 1,
        },

        {
            q: "¿Qué sucede con el volumen de los sólidos al intentar comprimirlos?",
            o: [
                "Aumenta",
                "Disminuye",
                "Se mantiene igual",
                "Depende del objeto",
            ],
            a: 2,
        },
        {
            q: "¿Cuál es el estado físico del aceite?",
            o: ["Sólido", "Líquido", "Gaseoso", "Depende de la temperatura"],
            a: 1,
        },

        {
            q: "¿Qué estado de la materia tiene forma y volumen propio?",
            o: ["Sólido", "Líquido", "Gaseoso", "Todos"],
            a: 0,
        },

        {
            q: "¿Qué sucede con el volumen de los líquidos al intentar comprimirlos?",
            o: [
                "Aumenta",
                "Disminuye",
                "Se mantiene igual",
                "Depende del líquido",
            ],
            a: 2,
        },

        {
            q: "¿Cuál es la propiedad física de la materia que se define como la cantidad de masa por unidad de volumen?",
            o: ["Densidad", "Punto de fusión", "Solubilidad", "Viscosidad"],
            a: 0,
        },

        {
            q: "¿Cuál de los siguientes elementos es un gas?",
            o: ["Hierro", "Oxígeno", "Mercurio", "Sodio"],
            a: 1,
        },
        {
            q: "¿Cuál de las siguientes no es una propiedad de los gases?",
            o: [
                "Densidad",
                "Volumen propio",
                "Compresibilidad",
                "Expansibilidad",
            ],
            a: 1,
        },

        {
            q: "¿Cuál es el proceso mediante el cual un sólido pasa directamente a estado gaseoso?",
            o: ["Fusión", "Vaporización", "Sublimación", "Solidificación"],
            a: 2,
        },

        {
            q: "¿Qué es la evaporación?",
            o: [
                "El proceso de pasar de líquido a sólido",
                "El proceso de pasar de líquido a gaseoso",
                "El proceso de pasar de sólido a gaseoso",
                "El proceso de pasar de gaseoso a sólido",
            ],
            a: 1,
        },

        {
            q: "¿Cuál de las siguientes sustancias es un conductor de electricidad?",
            o: ["Agua destilada", "Sal de mesa", "Azúcar", "Aceite"],
            a: 1,
        },

        {
            q: "¿Cuál de las siguientes es una propiedad química de la materia?",
            o: [
                "Densidad",
                "Punto de ebullición",
                "Solubilidad",
                "Reactividad",
            ],
            a: 3,
        },
    ],

    // (A2) HTML ELEMENTS
    hWrap: null, // HTML quiz container
    hQn: null, // HTML question wrapper
    hAns: null, // HTML answers wrapper

    // (A3) GAME FLAGS
    now: 0, // current question
    score: 0, // current score
    npreg: 0,
    PregMostrada: [], //
    // (B) INIT QUIZ HTML
    init: () => {
        // (B1) WRAPPER
        quiz.hWrap = document.getElementById("quizWrap");

        // (B2) QUESTIONS SECTION
        quiz.hQn = document.createElement("div");
        quiz.hQn.id = "quizQn";
        quiz.hWrap.appendChild(quiz.hQn);

        // (B3) ANSWERS SECTION
        quiz.hAns = document.createElement("div");
        quiz.hAns.id = "quizAns";
        quiz.hWrap.appendChild(quiz.hAns);

        // (B4) GO!
        quiz.draw();
    },

    obtenerIndiceAleatorio: () => {

        let indice = Math.floor(Math.random() * quiz.data.length);
        while (quiz.PregMostrada.includes(indice)) {
            indice = Math.floor(Math.random() * quiz.data.length);
        }
        console.log(quiz.PregMostrada);

        quiz.PregMostrada.push(indice);
    
        return indice;
    },

    // (C) DRAW QUESTION
    draw: () => {
        // (C1) QUESTION
        quiz.hAns.innerHTML = "";
        quiz.now = Math.floor(Math.random() * 10);

        quiz.now= quiz.obtenerIndiceAleatorio();

        quiz.hQn.innerHTML = quiz.data[quiz.now].q;

        // (C2) OPTIONS

        for (let i in quiz.data[quiz.now].o) {
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "quiz";
            radio.id = "quizo" + i;
            quiz.hAns.appendChild(radio);
            let label = document.createElement("label");
            label.innerHTML = quiz.data[quiz.now].o[i];
            label.setAttribute("for", "quizo" + i);
            label.dataset.idx = i;
            label.addEventListener("click", () => {
                quiz.select(label);
            });
            quiz.hAns.appendChild(label);
        }
    },

    // (D) OPTION SELECTED
    select: (option) => {
        quiz.npreg++;
        // (D1) DETACH ALL ONCLICK
        let all = quiz.hAns.getElementsByTagName("label");
        for (let label of all) {
            label.removeEventListener("click", quiz.select);
        }

        // (D2) CHECK IF CORRECT
        let correct = option.dataset.idx == quiz.data[quiz.now].a;
        let divSel = "div" + document.getElementById("divAct").value;
        var div = document.getElementById(divSel);
        
        if (correct) {
            quiz.score++;
            console.log(quiz.score);
            div.style.backgroundColor = "#007C00";
            div.firstElementChild.style.opacity = "0.5";
            option.classList.add("correct");
        } else {
            div.style.backgroundColor = "#F70000";
            div.firstElementChild.style.opacity = "0.5";
            option.classList.add("wrong");
        }

        // (D3) NEXT QUESTION OR END GAME
        setTimeout(() => {
            if (quiz.npreg < 5) {
                closeModal();
                quiz.draw();
            } else {
                $("#principal").fadeToggle(500);
                setTimeout(() => {
                    $("#final").fadeToggle(1000);
                }, 500)
                if (quiz.score < 3) {
                    var audio = new Audio("../../sounds/game_over.mp3");
                    audio.play();
                    document.getElementById("final").style.backgroundImage =
                        "url(../../images/ciencia/derrota.gif)";
                } else {
                    document.getElementById("final").style.backgroundImage =
                        "url(../../images/ciencia/victoria.gif)";
                    var audio = new Audio("../../sounds/victory.mp3");
                    audio.play();
                }
                document.getElementById("texto_final").innerText =
                    "Has contestado correctamente " + quiz.score + " puntos de 5 posibles";

                quiz.hAns.innerHTML = "";
            }
        }, 1000);
    },
};

window.addEventListener("load", quiz.init);
