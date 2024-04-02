// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function ($) {
    $(function () {
        // provide crossword entries in an array of objects like the following example
        // Position refers to the numerical order of an entry. Each position can have
        // two entries: an across entry and a down entry
        var crucigrama4 = [
            {
                clue: "Es un organismo perteneciente al reino Protista",
                answer: "amebas",
                position: 2,
                orientation: "across",
                startx: 4,
                starty: 4,
            },
            {
                clue: "Es el reino al que petenecen los Hongos",
                answer: "fungi",
                position: 5,
                orientation: "across",
                startx: 2,
                starty: 10,
            },
            {
                clue: "En este reino estan los organismos multicelulares mas complejos como los perros, leones, humanos",
                answer: "animal",
                position: 6,
                orientation: "across",
                startx: 8,
                starty: 7,
            },
      
            {
                clue: "ES un organismo perteneciente al reino Fungi",
                answer: "champiñon",
                position: 1,
                orientation: "down",
                startx: 4,
                starty: 2,
            },
            {
                clue: "Las flores y los arboles pertenecen a ese reino ",
                answer: "planta",
                position: 4,
                orientation: "down",
                startx: 8,
                starty: 2,
            },
            {
                clue: "Las bacterias pertenecen a ese reino",
                answer: "monera",
                position: 3,
                orientation: "down",
                startx: 11,
                starty: 7,
            }
        ];

        var crucigrama1 = [
          
            {
                clue: "Aumenta en el número de celulas",
                answer: "crecer",
                position: 7,
                orientation: "across",
                startx: 12,
                starty: 6,
            },
            {
                clue: "Nivel en el que estan las celulas, tejidos y organos ",
                answer: "biologico",
                position: 3,
                orientation: "across",
                startx: 6,
                starty: 8,
            },
            {
                clue: "Capacidad de ingerir sustancias nutritivas",
                answer: "nutricion",
                position: 5,
                orientation: "across",
                startx: 2,
                starty: 4,
            },
			{
                clue: "Los necesitan los seres vivos para sobrevivir",
                answer: "agua",
                position: 1,
                orientation: "down",
                startx: 3,
                starty: 2,
            },
            {
                clue: "Nivel en el que se encuentran los átomos y moléculas",
                answer: "quimico",
                position: 2,
                orientation: "down",
                startx: 8,
                starty: 2,
            },
            {
                clue: "Nivel en que se encuentran las poblaciones, comunidades formadas por individuos",
                answer: "ecologico",
                position: 4,
                orientation: "down",
                startx: 14,
                starty: 6,
            },
			{
                clue: "Capacidad para cambiar de posición o desplazarse",
                answer: "movimiento",
                position: 6,
                orientation: "down",
                startx: 10,
                starty: 7,
            },
			
        ];

        var puzzleData3 = [
            {
                clue: "Nació por la necesidad de querer nombrar las plantas y animales",
                answer: "taxonomia",
                position: 1,
                orientation: "across",
                startx: 9,
                starty: 6,
            },
            {
                clue: "Organismos unicelulares que hacen parte del reino Monera",
                answer: "bacterias",
                position: 3,
                orientation: "across",
                startx: 8,
                starty: 9,
            },
            {
                clue: "Este reino está compuesto por organismos unicelulares como los parasitos, amebas",
                answer: "protista",
                position: 4,
                orientation: "across",
                startx: 2,
                starty: 4,
            },
       
            {
                clue: "Grandes grupos en los que han sido clasificados los seres vivos",
                answer: "reinos",
                position: 2,
                orientation: "down",
                startx: 16,
                starty: 4,
            },
            {
                clue: "Estos organismos pretenecen al reino Fungi",
                answer: "hongos",
                position: 5,
                orientation: "down",
                startx: 4,
                starty: 3,
            },
			{
                clue: "Poseen la capacidad de transformar la energia del son en alimento",
                answer: "plantas",
                position: 6,
                orientation: "down",
                startx: 9,
                starty: 2,
            },
        ];

        var puzzleData2= [
            {
                clue: "Caracteristicas que permite reaccionar a estimulos como frio o calor",
                answer: "irritabilidad",
                position: 2,
                orientation: "across",
                startx: 1,  
                starty: 4,
            },
            {
                clue: "Permite a los organismo hacerce poco visible",
                answer: "camuflaje",
                position: 4,
                orientation: "across",
                startx: 6,
                starty: 9,
            },
          
            {
                clue: "Caracteristica que permite multiplicarse",
                answer: "reproduccion",
                position: 1,
                orientation: "down",
                startx: 3,
                starty: 1,
            },
            {
                clue: "Son cambios del organismo que permite a los seres vivos confundirse con el entorno",
                answer: "adaptacion",
                position: 3,
                orientation: "down",
                startx: 12,
                starty: 4,
            },
			{
                clue: "Unidad básica de vida",
                answer: "celula",
                position: 5,
                orientation: "down",
                startx: 9,
                starty: 6,
            },
        ];

        var puzzleData5 = [
            {
                clue: "A cuál reino pertenece",
                answer: "protista",
                position: 6,
                orientation: "across",
                startx: 2,              
                starty: 5,
				imagen: "si",
            },
            {
                clue: "A cuál reino pertenece",
                answer: "fungi",
                position: 2,
                orientation: "across",
                startx: 7,
                starty: 2,
				imagen: "si",
            },
            {
                clue: "A cuál reino pertenece",
                answer: "animal",
                position: 3,
                orientation: "across",
                startx: 4,
                starty: 9,
				imagen: "si",
            },
            {
                clue: "A cuál reino pertenece",
                answer: "vegetal",
                position: 5,
                orientation: "across",
                startx: 3,
                starty: 7,
				imagen: "si",
            },
            {
                clue: "A cuál reino pertenece",
                answer: "animal",
                position: 1,
                orientation: "down",
                startx: 9,
                starty: 1,
				imagen: "si",
            },
            {
                clue: "A cuál reino pertenece",
                answer: "monera",
                position: 4,
                orientation: "down",
                startx: 4,
                starty: 4,
				imagen: "si",
            },
        ];

        let num = Math.floor((Math.random() * (5 - 1 + 1)) + 1);
       // let num = 5;
		//console.log(num);
        switch (num) {
            case 1:
                preguntas = crucigrama1;
                break;
            case 2:
                preguntas = puzzleData2;
                break;
            case 3:
                preguntas = puzzleData3;
                break;
            case 4:
                preguntas = crucigrama4;
                break;
            case 5:
                preguntas = puzzleData5;
                break;
            default:
                preguntas = puzzleData5;
                break;
        }
		console.log(preguntas);

        $("#puzzle-wrapper").crossword(preguntas);
    });
})(jQuery);
