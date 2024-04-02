/**
* Jesse Weisbeck's Crossword Puzzle (for all 3 people left who want to play them)
*
*/
(function ($) {
    $.fn.crossword = function (entryData) {
        /*
			NOTAS DEL DESARROLLADOR:
- activePosition y activeClueIndex son las variables principales que configuran la interfaz de usuario cada vez que hay una interacción
- 'Entrada' es un término de rompecabezas que se usa para describir el grupo de entradas de letras que representan una solución de palabras
- Este rompecabezas no está diseñado para ocultar de forma segura a los que responden. Un usuario puede ver los respondedores en la fuente js
- Se puede agregar una disposición xhr más adelante para alcanzar un punto final en la activación de la tecla para verificar el contestador
- No importa el orden de la matriz de problemas. Las propiedades de posición y orientación son suficiente información
- Los autores de rompecabezas deben proporcionar coordenadas iniciales x, y para cada entrada
- La orientación de la entrada debe proporcionarse en lugar de las coordenadas x, y finales proporcionadas (el guión se puede ajustar para usar las coordenadas x, y finales)
- Las respuestas se proporcionan mejor en minúsculas y NO pueden tener espacios; se agregará soporte para eso más adelante
			*/

        var puzz = {}; // coloque la matriz de datos en el objeto literal para ponerlo en un espacio de nombres seguro
        puzz.data = entryData;

        // agregar marcas de pistas después del div del envoltorio del rompecabezas
        // Esto debe moverse a un objeto de configuración
        this.after('<div id="puzzle-clues"><h2 class="borde">Horizontales</h2><ul id="across"></ul><h2 class="borde">Verticales</h2><ul id="down"></ul></div>');

        // inicializar algunas variables
        var tbl = ['<table id="puzzle">'],
            puzzEl = this,
            clues = $('#puzzle-clues'),
            clueLiEls,
            coords,
            entryCount = puzz.data.length,
            entries = [],
            rows = [],
            cols = [],
            solved = [],
            tabindex,
            $actives,
            activePosition = 0,
            activeClueIndex = 0,
            currOri,
            targetInput,
            mode = 'interacting',
            solvedToggle = false,
            z = 0;
            var encontradas = 0;
            var palEncontradas = [];

        var puzInit = {

            init: function () {
                currOri = 'across';
                // la orientación inicial de la aplicación podría moverse al objeto de configuración

                // Reordenar la matriz de problemas ascendente por POSICIÓN
                puzz.data.sort(function (a, b) {
                    return a.position - b.position;
                });

                // Establezca controladores de teclado para las entradas de 'entrada' que se agregarán actualmente
                puzzEl.delegate('input', 'keyup', function (e) {
                    mode = 'interacting';


                    // necesitamos averiguar la orientación por adelantado, antes de intentar resaltar una entrada
                    switch (e.which) {
                        case 39:
                        case 37: currOri = 'across';
                            break;
                        case 38:
                        case 40: currOri = 'down';
                            break;
                        default:
                            break;
                    }

                    if (e.keyCode === 9) {
                        return false;
                    } else if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40 || e.keyCode === 8 || e.keyCode === 46) {


                        if (e.keyCode === 8 || e.keyCode === 46) {
                            currOri === 'across' ? nav.nextPrevNav(e, 37) : nav.nextPrevNav(e, 38);
                        } else {
                            nav.nextPrevNav(e);
                        } e.preventDefault();
                        return false;
                    } else {

                        puzInit.checkAnswer(e);

                    } e.preventDefault();
                    return false;
                });

                // configuración del controlador de navegación de pestañas
                puzzEl.delegate('input', 'keydown', function (e) {

                    if (e.keyCode === 9) {

                        mode = "setting ui";
                        if (solvedToggle) 
                            solvedToggle = false;
                        

                        // puzInit.checkAnswer(e)
                        nav.updateByEntry(e);

                    } else {
                        return true;
                    } e.preventDefault();

                });

                // tab navigation handler setup
                puzzEl.delegate('input', 'click', function (e) {
                    mode = "setting ui";
                    if (solvedToggle) 
                        solvedToggle = false;
                    


                    nav.updateByEntry(e);
                    e.preventDefault();

                });


                // click/tab clues 'navigation' handler setup
                clues.delegate('li', 'click', function (e) {
                    mode = 'setting ui';

                    if (! e.keyCode) {
                        nav.updateByNav(e);
                    }
                    e.preventDefault();
                });


                // highlight the letter in selected 'light' - better ux than making user highlight letter with second action
                puzzEl.delegate('#puzzle', 'click', function (e) {
                    $(e.target).focus();
                    $(e.target).select();
                });

                // DELETE FOR BG
                puzInit.calcCoords();

                // Puzzle clues added to DOM in calcCoords(), so now immediately put mouse focus on first clue
                clueLiEls = $('#puzzle-clues li');
                $('#' + currOri + ' li').eq(0).addClass('clues-active').focus();

                // DELETE FOR BG
                puzInit.buildTable();
                puzInit.buildEntries();

            },

            /*
					- Given beginning coordinates, calculate all coordinates for entries, puts them into entries array
					- Builds clue markup and puts screen focus on the first one
				*/
            calcCoords: function () {
                /*
						Calculate all puzzle entry coordinates, put into entries array
					*/
                for (var i = 0, p = entryCount; i < p; ++ i) {
                    // set up array of coordinates for each problem
                    entries.push(i);
                    entries[i] = [];

                    for (var x = 0, j = puzz.data[i].answer.length; x < j; ++ x) {
                        entries[i].push(x);
                        coords = puzz.data[i].orientation === 'across' ? "" + puzz.data[i].startx ++ + "," + puzz.data[i].starty + "" : "" + puzz.data[i].startx + "," + puzz.data[i].starty ++ + "";
                        entries[i][x] = coords;
                    }

                    // while we're in here, add clues to DOM!

                    $('#' + puzz.data[i].orientation).append('<li style="cursor:pointer" tabindex="1" data-position="' + i + '">(' + puzz.data[i].position + ') ' + puzz.data[i].clue);


                }

                // Calculate rows/cols by finding max coords of each entry, then picking the highest
                for (var i = 0, p = entryCount; i < p; ++ i) {
                    for (var x = 0; x < entries[i].length; x++) {
                        cols.push(entries[i][x].split(',')[0]);
                        rows.push(entries[i][x].split(',')[1]);
                    };
                }

                rows = Math.max.apply(Math, rows) + "";
                cols = Math.max.apply(Math, cols) + "";

            },

            /*
					Build the table markup
					- adds [data-coords] to each <td> cell
				*/
            buildTable: function () {
                for (var i = 1; i <= rows; ++ i) {
                    tbl.push("<tr>");
                    for (var x = 1; x <= cols; ++ x) {
                        tbl.push('<td data-coords="' + x + ',' + i + '"></td>');
                    };
                    tbl.push("</tr>");
                };

                tbl.push("</table>");
                puzzEl.append(tbl.join(''));
            },

            /*
					Builds entries into table
					- Adds entry class(es) to <td> cells
					- Adds tabindexes to <inputs> 
				*/
            buildEntries: function () {
                var puzzCells = $('#puzzle td'),
                    light,
                    $groupedLights,
                    hasOffset = false,
                    positionOffset = entryCount - puzz.data[puzz.data.length - 1].position; // diff. between total ENTRIES and highest POSITIONS

                for (var x = 1, p = entryCount; x <= p; ++ x) {
                    var letters = puzz.data[x - 1].answer.split('');

                    for (var i = 0; i < entries[x - 1].length; ++ i) {
                        light = $(puzzCells + '[data-coords="' + entries[x - 1][i] + '"]');

                        // check if POSITION property of the entry on current go-round is same as previous.
                        // If so, it means there's an across & down entry for the position.
                        // Therefore you need to subtract the offset when applying the entry class.
                        if (x > 1) {
                            if (puzz.data[x - 1].position === puzz.data[x - 2].position) {
                                hasOffset = true;
                            };
                        }

                        if ($(light).empty()) {
                            $(light).addClass('entry-' + (
                            hasOffset ? x - positionOffset : x
                        ) + ' position-' + (
                                x - 1
                            )).append('<input maxlength="1" val="" type="text" tabindex="-1" />');
                        }
                    };

                };

                // Put entry number in first 'light' of each entry, skipping it if already present
                for (var i = 1, p = entryCount; i <= p; ++ i) {
                    $groupedLights = $('.entry-' + i);
                    if (! $('.entry-' + i + ':eq(0) span').length) {
                        $groupedLights.eq(0).append('<span>' + puzz.data[i - 1].position + '</span>');
                    }
                }

                util.highlightEntry();
                util.highlightClue();
                $('.active').eq(0).focus();
                $('.active').eq(0).select();

            },


            /*
					- Checks current entry input group value against answer
					- If not complete, auto-selects next input for user
				*/
            checkAnswer: function (e) {

                var valToCheck,
                    currVal;

                util.getActivePositionFromClassGroup($(e.target));

                valToCheck = puzz.data[activePosition].answer.toLowerCase();

                currVal = $('.position-' + activePosition + ' input').map(function () {
                    return $(this).val().toLowerCase();
                }).get().join('');

               
                if (valToCheck === currVal) {
					console.log(currVal + " " + valToCheck);
					$('.active').addClass('done').removeClass('active');

                    $('.clues-active').addClass('clue-done');

                    if (!palEncontradas.includes(valToCheck)) {
                        encontradas++;
                        palEncontradas.push(valToCheck); 
                      } 
						if(encontradas == entryData.length){
							$('#principal').fadeToggle(500);
							setTimeout(()=>{
							  $('#final').fadeToggle(1000);
							}, 500)
						  
							document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
						  
							document.getElementById("texto_final").innerText = "Felicitaciones, has resuelto el crucigrama correctamente"
			
							var audio = new Audio('../../sounds/victory.mp3');
							audio.play();
						 
						}

                    solved.push(valToCheck);
                    solvedToggle = true;
                    return;
                } else {
                    $('.active').addClass('active').removeClass('done');
                } currOri === 'across' ? nav.nextPrevNav(e, 39) : nav.nextPrevNav(e, 40);

                // z++;
                // console.log(z);
                // console.log('checkAnswer() solvedToggle: '+solvedToggle);

            }


        }; // end puzInit object


        var nav = {

            nextPrevNav: function (e, override) {

                var len = $actives.length,
                    struck = override ? override : e.which,
                    el = $(e.target),
                    p = el.parent(),
                    ps = el.parents(),
                    selector;

                util.getActivePositionFromClassGroup(el);
                util.highlightEntry();
                util.highlightClue();

                $('.current').removeClass('current');

                selector = '.position-' + activePosition + ' input';

                // console.log('nextPrevNav activePosition & struck: '+ activePosition + ' '+struck);

                // move input focus/select to 'next' input
                switch (struck) {
                    case 39: p.next().find('input').addClass('current').select();

                        break;

                    case 37: p.prev().find('input').addClass('current').select();

                        break;

                    case 40: ps.next('tr').find(selector).addClass('current').select();

                        break;

                    case 38: ps.prev('tr').find(selector).addClass('current').select();

                        break;

                    default:
                        break;
                }

            },

            updateByNav: function (e) {
                var target;

                $('.clues-active').removeClass('clues-active');
                $('.active').removeClass('active');
                $('.current').removeClass('current');
                currIndex = 0;

                target = e.target;
                activePosition = $(e.target).data('position');

                util.highlightEntry();
                util.highlightClue();

                $('.active').eq(0).focus();
                $('.active').eq(0).select();
                $('.active').eq(0).addClass('current');

                // store orientation for 'smart' auto-selecting next input
                currOri = $('.clues-active').parent('ol').prop('id');

                activeClueIndex = $(clueLiEls).index(e.target);
                // console.log('updateByNav() activeClueIndex: '+activeClueIndex);

            },

            // Sets activePosition var and adds active class to current entry
            updateByEntry: function (e, next) {
                var classes,
                    next,
                    clue,
                    e1Ori,
                    e2Ori,
                    e1Cell,
                    e2Cell;

                if (e.keyCode === 9 || next) {
                    // handle tabbing through problems, which keys off clues and requires different handling
                    activeClueIndex = activeClueIndex === clueLiEls.length - 1 ? 0 : ++ activeClueIndex;

                    $('.clues-active').removeClass('.clues-active');

                    next = $(clueLiEls[activeClueIndex]);
                    currOri = next.parent().prop('id');
                    activePosition = $(next).data('position');

                    // skips over already-solved problems
                    util.getSkips(activeClueIndex);
                    activePosition = $(clueLiEls[activeClueIndex]).data('position');


                } else {
                    activeClueIndex = activeClueIndex === clueLiEls.length - 1 ? 0 : ++ activeClueIndex;

                    util.getActivePositionFromClassGroup(e.target);

                    clue = $(clueLiEls + '[data-position=' + activePosition + ']');
                    activeClueIndex = $(clueLiEls).index(clue);

                    currOri = clue.parent().prop('id');

                } util.highlightEntry();
                util.highlightClue();

                // $actives.eq(0).addClass('current');
                // console.log('nav.updateByEntry() reports activePosition as: '+activePosition);
            }

        }; // end nav object


        var util = {
            highlightEntry: function () {
                // this routine needs to be smarter because it doesn't need to fire every time, only
                // when activePosition changes
                $actives = $('.active');
                $actives.removeClass('active');
                $actives = $('.position-' + activePosition + ' input').addClass('active');
                $actives.eq(0).focus();
                $actives.eq(0).select();
            },

            highlightClue: function () {
                var clue;
                $('.clues-active').removeClass('clues-active');
                $(clueLiEls + '[data-position=' + activePosition + ']').addClass('clues-active');

                if (mode === 'interacting') {
                    clue = $(clueLiEls + '[data-position=' + activePosition + ']');
                    activeClueIndex = $(clueLiEls).index(clue);
                };
            },

            getClasses: function (light, type) {
                if (! light.length) 
                    return false;
                

                var classes = $(light).prop('class').split(' '),
                    classLen = classes.length,
                    positions = [];

                // pluck out just the position classes
                for (var i = 0; i < classLen; ++ i) {
                    if (! classes[i].indexOf(type)) {
                        positions.push(classes[i]);
                    }
                }

                return positions;
            },

            getActivePositionFromClassGroup: function (el) {

                classes = util.getClasses($(el).parent(), 'position');

                if (classes.length > 1) {
                    // get orientation for each reported position
                    e1Ori = $(clueLiEls + '[data-position=' + classes[0].split('-')[1] + ']').parent().prop('id');
                    e2Ori = $(clueLiEls + '[data-position=' + classes[1].split('-')[1] + ']').parent().prop('id');

                    // test if clicked input is first in series. If so, and it intersects with
                    // entry of opposite orientation, switch to select this one instead
                    e1Cell = $('.position-' + classes[0].split('-')[1] + ' input').index(el);
                    e2Cell = $('.position-' + classes[1].split('-')[1] + ' input').index(el);

                    if (mode === "setting ui") {
                        currOri = e1Cell === 0 ? e1Ori : e2Ori; // change orientation if cell clicked was first in a entry of opposite direction
                    }

                    if (e1Ori === currOri) {
                        activePosition = classes[0].split('-')[1];
                    } else if (e2Ori === currOri) {
                        activePosition = classes[1].split('-')[1];
                    }
                } else {
                    activePosition = classes[0].split('-')[1];
                }


            },

            checkSolved: function (valToCheck) {
                for (var i = 0, s = solved.length; i < s; i++) {
                    if (valToCheck === solved[i]) {
                        return true;
                    }

                }
            },

            getSkips: function (position) {
                if ($(clueLiEls[position]).hasClass('clue-done')) {
                    activeClueIndex = position === clueLiEls.length - 1 ? 0 : ++ activeClueIndex;
                    util.getSkips(activeClueIndex);
                } else {
                    return false;
                }
            }

        }; // end util object


        puzInit.init();


    }

})(jQuery);
