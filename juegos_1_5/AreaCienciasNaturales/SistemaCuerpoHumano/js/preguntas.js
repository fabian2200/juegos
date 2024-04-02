// creating an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question:
            "¿Cuál es el proceso por el cual los seres vivos toman oxígeno del aire y lo combinan con los alimentos para obtener energía?",
        answer: "La respiración",
        options: [
            "La digestión",
            "La circulación",
            "La respiración",
            "La excreción",
        ],
    },
    {
        numb: 2,
        question: "¿Cuál es el órgano principal del sistema respiratorio?",
        answer: "Los pulmones",
        options: ["El corazón", "Los riñones", "Los pulmones", "El hígado"],
    },
    {
        numb: 3,
        question:
            "¿Qué órgano tiene como función calentar y filtrar el aire que entra al cuerpo?",
        answer: "Las fosas nasales",
        options: [
            "Las fosas nasales",
            "La laringe",
            "Los bronquios",
            "Los alvéolos",
        ],
    },
    {
        numb: 4,
        question:
            "¿Qué músculo se encuentra en la base del tórax y es el responsable de los movimientos respiratorios?",
        answer: "El diafragma",
        options: ["El corazón", "El diafragma", "Los pulmones", "El hígado"],
    },
    {
        numb: 5,
        question:
            "¿Qué órgano se encuentra en la laringe y qué función cumple?",
        answer: "Cuerdas vocales, que producen sonidos",
        options: [
            "Cuerdas vocales, que producen sonidos",
            "Tráquea, que conduce el aire a los pulmones",
            "Bronquios, que penetran en el pulmón",
            "Alvéolos, donde se realiza el intercambio gaseoso",
        ],
    },
    {
        numb: 6,
        question:
            "¿Qué órganos se encargan de eliminar dióxido de carbono de nuestro cuerpo?",
        answer: "Los pulmones",
        options: ["El hígado", "Los riñones", "Los pulmones", "El estómago"],
    },
    {
        numb: 7,
        question:
            "¿Qué estructura del sistema respiratorio está formada por sacos esponjosos donde se realiza el intercambio gaseoso con la sangre?",
        answer: "Los alvéolos",
        options: [
            "Las fosas nasales",
            "La tráquea",
            "Los bronquios",
            "Los alvéolos",
        ],
    },
    {
        numb: 8,
        question: "¿Cuál es el órgano principal del sistema respiratorio?",
        answer: "Los pulmones",
        options: ["El corazón", "Los pulmones", "Los riñones", "El hígado"],
    },
    {
        numb: 9,
        question: "¿Qué son las fosas nasales y para qué se utilizan?",
        answer: "Son orificios en la nariz por donde entra el aire al sistema respiratorio y están cubiertas de mucosa y pelitos para filtrar y calentar el aire",
        options: [
            "Son la parte posterior de la garganta y ayudan a digerir los alimentos",
            "Son orificios en la nariz por donde entra el aire al sistema respiratorio y están cubiertas de mucosa y pelitos para filtrar y calentar el aire",
            "Son los órganos principales de la respiración",
            "Son sacos esponjosos donde se realiza el intercambio gaseoso con la sangre",
        ],
    },
    {
        numb: 10,
        question:
            "¿Qué es el diafragma y cuál es su función en el proceso respiratorio?",
        answer: "Un músculo situado en la base del tórax que controla la respiración",
        options: [
            "Un órgano que ayuda a digerir los alimentos",
            "Un músculo situado en la base del tórax que controla la respiración",
            "Un órgano del sistema circulatorio que bombea la sangre",
            "Un saco esponjoso donde se realiza el intercambio gaseoso con la sangre",
        ],
    },
    {
        numb: 11,
        question: "¿Qué es la faringe?",
        answer: "Una zona común con el sistema digestivo donde se encuentran las amígdalas, que son uno de los órganos de defensa contra organismos causantes de enfermedades",
        options: [
            "Un saco esponjoso que forma el pulmón",
            "Un conducto donde se encuentran las cuerdas vocales",
            "Un tubo formado por una serie de anillos que conduce el aire a los pulmones",
            "Una zona común con el sistema digestivo donde se encuentran las amígdalas, que son uno de los órganos de defensa contra organismos causantes de enfermedades",
        ],
    },
    {
        numb: 12,
        question: "¿Qué son los bronquiolos?",
        answer: "Ramificaciones más pequeñas de los bronquios que penetran a los alvéolos pulmonares",
        options: [
            "Ramificaciones de la tráquea que penetran en el pulmón",
            "Ramificaciones más pequeñas de los bronquios que penetran a los alvéolos pulmonares",
            "Sacos esponjosos que forman el pulmón donde se realiza el intercambio gaseoso con la sangre",
            "Lámina muscular que se encuentra a través de la parte inferior de la caja torácica",
        ],
    },
    {
        numb: 13,
        question: "¿Qué son los alvéolos?",
        answer: "Sacos esponjosos que forman el pulmón, donde se realiza el intercambio gaseoso con la sangre",
        options: [
            "Ramificaciones de la tráquea que penetran en el pulmón",
            "Ramificaciones más pequeñas de los bronquios que penetran a los alvéolos pulmonares",
            "Sacos esponjosos que forman el pulmón, donde se realiza el intercambio gaseoso con la sangre",
            "Lámina muscular que se encuentra a través de la parte inferior de la caja torácica",
        ],
    },
    {
        numb: 14,
        question: "¿Qué es el pulmón?",
        answer: "El órgano principal de la respiración que se encuentra en la caja torácica a lado y lado del corazón",
        options: [
            "El órgano principal de la respiración que se encuentra en la caja torácica a lado y lado del corazón",
            "Un conducto donde se encuentran las cuerdas vocales",
            "Una zona común con el sistema digestivo donde se encuentran las amígdalas, que son uno de los órganos de defensa contra organismos causantes de enfermedades",
            "Un saco esponjoso que forma el pulmón",
        ],
    },
    {
        numb: 15,
        question:
            "¿Cuál es la función del diafragma en el sistema respiratorio?",
        answer: "Aumentar el tamaño de la cavidad torácica.",
        options: [
            "Controlar el flujo de aire hacia y desde los pulmones.",
            "Facilitar el intercambio de gases en los alvéolos.",
            "Regular el pH de la sangre en los pulmones.",
            "Aumentar el tamaño de la cavidad torácica.",
        ],
    },
    {
        numb: 16,
        question: "¿Qué es la traquea?",
        answer: "Un tubo que conecta la laringe con los bronquios",
        options: [
            "Un órgano del sistema respiratorio",
            "Un músculo que ayuda a la respiración",
            "Un tubo que conecta los pulmones con el corazón",
            "Un tubo que conecta la laringe con los bronquios",
        ],
    },
    {
        numb: 17,
        question: "¿Qué es la epiglotis?",
        answer: "Una solapa que cubre la entrada a la laringe durante la deglución",
        options: [
            "Un músculo que ayuda a la respiración",
            "Un tejido que produce el moco en los pulmones",
            "Una solapa que cubre la entrada a la laringe durante la deglución",
            "Un tubo que conecta los pulmones con el corazón",
        ],
    },
    {
        numb: 18,
        question: "¿Qué son los alvéolos pulmonares?",
        answer: "Pequeñas bolsas de aire en los pulmones donde se realiza el intercambio de gases",
        options: [
            "Un músculo que ayuda a la respiración",
            "Pequeñas bolsas de aire en los pulmones donde se realiza el intercambio de gases",
            "Un tejido que produce el moco en los pulmones",
            "Un tubo que conecta los pulmones con el corazón",
        ],
    },
    {
        numb: 19,
        question:
            "¿Cuál es el músculo principal involucrado en la respiración?",
        answer: "El diafragma",
        options: ["El diafragma", "Los pulmones", "El estómago", "El hígado"],
    },
    {
        numb: 20,
        question:
            "¿Cuál es el proceso de intercambio de gases en los pulmones?",
        answer: "La difusión",
        options: [
            "La difusión",
            "La filtración",
            "La excreción",
            "La secreción",
        ],
    },
];
