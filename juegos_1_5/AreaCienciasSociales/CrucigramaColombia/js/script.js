// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function ($) {
    $(function () {
        // provide crossword entries in an array of objects like the following example
        // Position refers to the numerical order of an entry. Each position can have
        // two entries: an across entry and a down entry

        var crucigrama1 = [
            {
                clue: "Nombre del precursor de la independencia de Colombia",
                answer: "simonbolivar",
                position: 1,
                orientation: "across",
                startx: 2,
                starty: 6,
            },
            {
                clue: "Lugar donde se llevo acabo la Batalla del 8 de Agosto",
                answer: "boyaca",
                position: 3,
                orientation: "across",
                startx: 5,
                starty: 3,
            },
            {
                clue: "Objeto que desato el grito de independencia",
                answer: "florero",
                position: 5,
                orientation: "down",
                startx: 9,
                starty: 5,
            },
            {
                clue: "Que imperio tenia colonizado los territorio de la nueva granada",
                answer: "español",
                position: 2,
                orientation: "down",
                startx: 2,
                starty: 5,
            },
            {
                clue: "nombre del grupo de rebelión que mostró su descontento con los españoles",
                answer: "comuneros",
                position: 4,
                orientation: "down",
                startx: 6,
                starty: 2,
            },
            {
                clue: "Mes en que se dio la batalla de boyacá",
                answer: "agosto",
                position: 6,
                orientation: "down",
                startx: 12,
                starty: 6,
            },
            {
                clue: "Es el nombre que tenia antes nuestra patria",
                answer: "granada",
                position: 7,
                orientation: "down",
                startx: 13,
                starty: 5,
            },
        ];

        var puzzleData2 = [
            {
                clue: "País con la que Colombia tiene su frontera más larga",
                answer: "venezuela",
                position: 1,
                orientation: "across",
                startx: 3,
                starty: 2,
            },
            {
                clue: "Línea divisora en dos o más regiones",
                answer: "frontera",
                position: 2,
                orientation: "across",
                startx: 5,
                starty: 7,
            },

            {
                clue: "Punto exacto hasta donde llega el territorio soberaro de una nación",
                answer: "limites",
                position: 2,
                orientation: "down",
                startx: 10,
                starty: 2,
            },
            {
                clue: "Son los acuerdos en los que se establece los limites en las fronteras de los países",
                answer: "tratados",
                position: 3,
                orientation: "down",
                startx: 12,
                starty: 5,
            },
            {
                clue: "El departamento colombiano del choco limita con este país ",
                answer: "panama",
                position: 5,
                orientation: "down",
                startx: 8,
                starty: 5,
            },
        ];

        var puzzleData3 = [
            {
                clue: "Son formas de relieve con mayor elevación y pendientes pronunciadas ",
                answer: "montañas",
                position: 3,
                orientation: "across",
                startx: 4,
                starty: 6,
            },
            {
                clue: "Suelen encontrarse en la superficie o en el fondo de los océanos y pueden expulsar lava y gases del interior de la tierra ",
                answer: "volcanes",
                position: 5,
                orientation: "across",
                startx: 3,
                starty: 11,
            },
            {
                clue: "Son formaciones elevadas y relativamente planas",
                answer: "mesetas",
                position: 7,
                orientation: "across",
                startx: 3,
                starty: 15,
            },
            {
                clue: "Son zonas bajas de la superficie de la tierra, se encuentran entre montañas",
                answer: "valles",
                position: 2,
                orientation: "across",
                startx: 8,
                starty: 5
            },
            {
                clue: "Alteraciones que presenta la corteza terrestre",
                answer: "relieve",
                position: 6,
                orientation: "across",
                startx: 5,
                starty: 13,
            },

            {
                clue: "Conjunto de montañas alineadas ",
                answer: "cordilleras",
                position: 1,
                orientation: "down",
                startx: 5,
                starty: 5,
            },
            {
                clue: "Son territorios planos con poca ondulación ",
                answer: "llanuras",
                position: 4,
                orientation: "down",
                startx: 10,
                starty: 4,
            },
            {
                clue: "Son de gran altura y en la cima están ocupado por un glacial ",
                answer: "nevados",
                position: 8,
                orientation: "down",
                startx: 8,
                starty: 3,
            },
        ];

       // let num = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
        let num = 3;
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
        }
        console.log(preguntas);

        $("#puzzle-wrapper").crossword(preguntas);
    });
})(jQuery);
