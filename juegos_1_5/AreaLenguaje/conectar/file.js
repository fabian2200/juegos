var point1 = null;
var point2 = null;

$(document).ready(function() {
    agregar_preguntas();
});

let preguntas_desordenadas = [];
function agregar_preguntas(){
    var base_preguntas = readText("preguntas.json");
    interprete_bp = JSON.parse(base_preguntas);
    preguntas_desordenadas = interprete_bp.sort(function() {return Math.random() - 0.5});
    
    let array_preguntas = [];
    let array_respuestas = [];
    for (let index = 0; index < 5; index++) {
        const element = preguntas_desordenadas[index];
        array_preguntas.push(element.pregunta);
        array_respuestas.push(element.respuesta);
    }

    array_respuestas = array_respuestas.sort(function() {return Math.random() - 0.5});
   
    var columna1 = document.getElementById("columna1");
    var i = 0;
    array_preguntas.forEach(element => {
        let div = "<div onclick='crear_linea(this, 1)' id='"+i+"' class='point'>"+element+"</div><br>";
        columna1.insertAdjacentHTML('beforeend', div);
        i++
    });

    var columna2 = document.getElementById("columna2");
    array_respuestas.forEach(element => {
        let div = "<div onclick='crear_linea(this, 2)' class='point2'>"+element+"</div><br>";
        columna2.insertAdjacentHTML('beforeend', div);
    });
}

function readText(ruta_local) {
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", ruta_local, false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
      texto = xmlhttp.responseText;
    }
    return texto;
}
  

var respuesta_actual = 0;
var respuestas_reci = [];
function crear_linea(elemento, tipo){

    if(tipo == 1){
        point1 = elemento;
    }else{
        point2 = elemento;
    }

    if(point1 != null && point2 != null){

        //save respuestas
        respuestas_reci.push({
            pregunta: point1.innerHTML,
            respuesta: point2.innerHTML 
        });


        var line = document.createElement("div");
        line.classList.add("line");
        line.setAttribute("id", "line_"+point1.id)

        // Find the points based off the elements left and top
        var p1 = {x: point1.offsetLeft, y: point1.offsetTop};
        var p2 = {x: point2.offsetLeft, y: point2.offsetTop};
        
        // Get distance between the points for length of line
        var a = p1.x - p2.x;
        var b = p1.y - p2.y;
        var length = Math.sqrt( a*a + b*b );
        
        // Get angle between points
        var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
        
        // Get distance from edge of point to center
        var pointWidth = point1.clientWidth / 2 + 20;
        var pointHeight = point1.clientHeight / 2 + 20;
        
        // Set line distance and position
        // Add width/height from above so the line starts in the middle instead of the top-left corner
        line.style.width = length + 'px';
        line.style.left = (p1.x + pointWidth)+ 'px';
        line.style.top = (p1.y + pointHeight) + 'px';
        
        // Rotate line to match angle between points
        line.style.transform = "rotate(" + angleDeg + "deg)";
        
        document.body.appendChild(line);

        point1.style.backgroundColor  = "#f08218";
        point2.style.backgroundColor  = "#f08218";
        point2.style.color  = "#ffff";

        setTimeout(()=>{
            point1.setAttribute("onclick", "#");
            point2.setAttribute("onclick", "#");
            point1 = null;
            point2 = null;
        }, 500);

    }

    respuesta_actual += 1;

    if(respuesta_actual >= 10){
        setTimeout(()=>{
           calificar();
        }, 1000)
    }
}

function calificar(){
    i = 0;
    respuestas_reci.forEach(element => {
        var linea = document.getElementById("line_"+i);
        for (let index = 0; index < 5; index++) {
            const element2 = preguntas_desordenadas[index];
            if(element.pregunta == element2.pregunta){
                if(element.respuesta == element2.respuesta){
                    linea.style.backgroundColor  = "#1a7412";
                }else{
                    linea.style.backgroundColor  = "#aa1b1b";
                }
            }
        }
        i++;
    });

    setTimeout(()=>{
        location.reload();
    }, 4000)
    
}

