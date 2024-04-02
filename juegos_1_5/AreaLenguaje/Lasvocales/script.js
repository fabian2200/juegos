//Initial References
let draggableObjects;
let dropPoints;
const array_a = ["aguacate", "arandano", "avion", "agua", "almendra", "ardilla", "avestruz", "aji", "anillo", "aguila", "aguila", "arana", "avispa", "arcoiris", "arbol"]
const array_e = ["escoba", "escalera", "espejo", "estuche", "estufa", "esponja", "estrella", "escritorio", "elefante", "enano", "extintor", "empanada", "escuadra", "erizo", "escorpion"]
const array_i = ["iguana", "iman", "iglesia", "indio", "isla", "impresora", "insecto", "idea", "iglu", "incendio", "inodoro", "inyeccion", "ingeniero", "inflable", "inflable"]
const array_o = ["oso", "ojo", "olla", "oro", "oveja", "ocho", "oido", "oceano", "ogro", "ovni", "oruga", "ola", "ostra", "orca", "orquidea"]
const array_u = ["uniforme", "uva", "una", "unicornio", "uno", "universo", "utiles"]

let deviceType = "";
let initialX = 0,initialY = 0;
let currentElement = "";
let moveElement = false;

//Detect touch device
const isTouchDevice = () => {
  try {
    //We try to create Touch Event (It would fail for desktops and throw error)
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};


//Random value from Array
const randomValueGenerator = (vector) => {
  return vector.sort(function(a,b) {return (Math.random()-0.5)});
};


//Drag & Drop Functions
function dragStart(e) {
  if (isTouchDevice()) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
    //Start movement for touch
    moveElement = true;
    currentElement = e.target;
  } else {
    //For non touch devices set data to be transfered
    e.dataTransfer.setData("text", e.target.id);
  }
}

//Events fired on the drop target
function dragOver(e) {
  e.preventDefault();
}

//For touchscreen movement
var top_o = 0;
var left_o = 0;
var id_sel = ""
const touchMove = (e) => {
  if (moveElement) {
    e.preventDefault();

    let newX = e.touches[0].clientX;
    let newY = e.touches[0].clientY;
    let currentSelectedElement = document.getElementById(e.target.id);  
    
    if(top_o == 0 && left_o == 0){
      id_sel = currentElement.id;
      var offsets = document.getElementById(currentElement.id).parentElement;
      top_o = offsets.style.top;
      left_o = offsets.style.left;
    }
    
    currentSelectedElement.parentElement.style.top =
      currentSelectedElement.parentElement.offsetTop - (initialY - newY) + "px";
    currentSelectedElement.parentElement.style.left =
      currentSelectedElement.parentElement.offsetLeft -
      (initialX - newX) +
      "px";
    initialX = newX;
    initialY = newY;
  }
};

let cont = 0;
let correctas = 0;
const drop = (e) => {
  e.preventDefault();
  //For touch screen
  if (isTouchDevice()) {
    moveElement = false;
    const pos = currentElement.getBoundingClientRect();
    const currentDrop = document.elementsFromPoint(pos.left, pos.top);
    var dataid_1 = currentElement.getAttribute("data-id");
    var dataid_2 = currentDrop[2].getAttribute("data-id");
    if (dataid_1 == dataid_2) {
      currentDrop[2].classList.add("dropped");
      //hide actual image
      currentElement.classList.add("hide");
      currentDrop[2].innerHTML = ``;
      //Insert new img element
      currentDrop[2].insertAdjacentHTML(
        "afterbegin",
        `<img class='img_drag' style='height: 150pt; width: auto' src="img/${currentElement.id}.png">`
      ); 
      cont ++;
      correctas++;
      top_o = 0;
      left_o = 0;

    } else {
      var off = document.getElementById(id_sel).parentElement;
      off.style.position = "absolute",
      off.style.top = top_o;
      off.style.left = left_o;
    }
  } else {
    //Access data
    const draggedElementData = e.dataTransfer.getData("text");
    //Get custom attribute value
    const droppableElementData = e.target.getAttribute("data-id");
    var letra = droppableElementData.toLowerCase();

    const draggedElement = document.getElementById(draggedElementData);

    let letra_sel = draggedElementData.split("")[0];
    if (letra_sel === letra) {
      
      draggedElement.classList.add("hide");

      e.target.innerHTML = "";

      e.target.classList.add("dropped");
      e.target.insertAdjacentHTML(
        "afterbegin",
        `<img class='img_drag' style='height: 200px' src="img/${draggedElementData}.png">`
      );

      var audio = new Audio('../../sounds/ok.mp3');
      audio.play(); 

      correctas ++;
    }else{
      
      e.target.innerHTML = "";

      draggedElement.classList.add("hide");

      var audio = new Audio('../../sounds/over.mp3');
      audio.play(); 

      e.target.classList.add("error");
      e.target.insertAdjacentHTML(
        "afterbegin",
        `<img class='img_drag' style='height: 200px' src="img/${draggedElementData}.png">`
      );
    }

    cont ++;
  }

  

  if(cont == elementos_Seleccionados.length){
    $('#principal').fadeToggle(500);
      setTimeout(()=>{
        $('#final').fadeToggle(1000);
      }, 500)
    if(correctas < elementos_Seleccionados.length / 2 ){
      document.getElementById("final").style.backgroundImage = "url(../../images/derrota.gif)";
    }else{
      document.getElementById("final").style.backgroundImage = "url(../../images/victoria.gif)";
    }

    document.getElementById("texto_final").innerText = "Has ubicado correctamente "+correctas+" imagenes de "+elementos_Seleccionados.length;

    if(correctas >= elementos_Seleccionados.length / 2){
      var audio = new Audio('../../sounds/victory.mp3');
      audio.play();
    }else{
      var audio = new Audio('../../sounds/game_over.mp3');
      audio.play();
    }
  }
};

//Creates number and request
const creator = () => {
  correctas = 0;
  cont = 0;

  let div = "";
  let clase = "";

  switch (elementos_Seleccionados.length) {
    case 2:
      clase = "col-6"
    break;
    case 3:
      clase = "col-4"
    break;
    case 4:
      clase = "col-3"
    break;
    case 5:
      clase = "col-2"
    break;
    default:
    break;
  }

  if(elementos_Seleccionados.length == 5){
    div += "<div class='col-1'></div>"
  }
  for (let index = 0; index < elementos_Seleccionados.length; index++) {  
    div += "<div class='"+clase+" text-center letra'><div data-id="+elementos_Seleccionados[index]+" class='signo'>"+elementos_Seleccionados[index]+"</div></div>";
  }
  if(elementos_Seleccionados.length == 5){
    div += "<div class='col-1'></div>"
  }

  document.getElementById("palabras").innerHTML = "";
  document.getElementById("palabras").innerHTML = div;

  let numero_ramdom = Math.floor((Math.random() * (14 - 0 + 1)) + 0);
  let randomData = [];
  for (let i = 0; i < elementos_Seleccionados.length; i++) {
    switch (elementos_Seleccionados[i]) {
      case "A":
        randomData.push([array_a[numero_ramdom], "A"]);
      break;
      case "E":
        randomData.push([array_e[numero_ramdom], "E"]);
      break;
      case "I":
        randomData.push([array_i[numero_ramdom], "I"]);
      break;
      case "O":
        randomData.push([array_o[numero_ramdom], "O"]);
      break;
      case "U":
        randomData.push([array_u[Math.floor((Math.random() * ((array_u.length-1) - 0 + 1)) + 0)], "U"]);
      break;
      default:
      break;
    }
  }

  randomData = randomValueGenerator(randomData);

  let div2 = "";
  let div_movil = document.getElementById("res_movil");
  let div_m = "";
  var left = 200;
  var left2 = 0;

  switch (elementos_Seleccionados.length) {
    case 2:
      left2 = 700;
      break;
    case 3:
      left = 150;
      left2 = 400;
      break;
    case 4:
      left = 100;
      left2 = 320;
      break;
    case 5:
      left = 100;
      left2 = 215;
        break;
  }
  
  for (let index = 0; index < randomData.length; index++) {
    div_m+= '<div class="signo_2 draggable-image" style="z-index: 1000; position: absolute; left: '+left+'px; top: 200px;" draggable="true">'+
      '<img class="img_drag" data-id="'+randomData[index][1]+'" style="height: 150px" id='+randomData[index][0]+' src="img/'+randomData[index][0]+'.png" alt="prueba.png">'+
    '</div>';
    left += left2;
  }

  div_movil.innerHTML = div_m;
};

  //Start Game
startGame = async () => {
    currentElement = "";
    //This will wait for creator to create the images and then move forward
    await creator();

    dropPoints = document.querySelectorAll(".signo");
    draggableObjects = document.querySelectorAll(".draggable-image");

    //Events
    draggableObjects.forEach((element) => {
      element.addEventListener("dragstart", dragStart);
      //for touch screen
      element.addEventListener("touchstart", dragStart);
      element.addEventListener("touchend", drop);
      element.addEventListener("touchmove", touchMove);
    });


    dropPoints.forEach((element) => {
      element.addEventListener("dragover", dragOver);
      element.addEventListener("drop", drop);
    });
}


$(document).ready(function() {
  setTimeout(()=>{
    $('#principal').fadeToggle(1000);
    $('#fondo_blanco').fadeToggle(3000);
    setTimeout(()=>{
      const divAnimado = document.querySelector('.overlay');
      divAnimado.style.animationName = 'moverDerecha';
      divAnimado.style.animationDirection = 'normal';
      divAnimado.style.display = 'block';
      setTimeout(()=>{
        const divAnimado2 = document.querySelector('.nube');
        divAnimado2.style.animationName = 'moverArriba';
        divAnimado2.style.animationDirection = 'normal';
        divAnimado2.style.display = 'block';
        setTimeout(()=>{
          divAnimado.style.backgroundImage = "url(../../images/normal2.gif)"
          maquina2("bienvenida",'Hola, soy Genio. <br> Selecciona una de las siguientes categorias para jugar, y luego arrastra cada imagen a su respectivo lugar. <br> ¡Tu puedes!',50,1);
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
  if(!cerrardo){
    let audio = new Audio('../../sounds/fondo.mp3');
    audio.play(); 
    audio.volume = 0.2;
    
    let audio2 = new Audio('../../sounds/enunciado_vocales_1.mp3');
    audio2.play(); 
    
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
          seleccionar_item();
        }, 2000)
    }, 2000);
  }
}

function seleccionar_item(){
  Swal.fire({
    title: 'Seleccione minimo 2 vocales',
    icon: 'info',
    html: '<div class="row">'+
            '<div class="col-1"></div>'+
            '<div class="col-2"><div><img onclick="seleccionar(this,\'A\')" class="imagen_Vocal" src="img/a.png" alt=""></div></div>'+
            '<div class="col-2"><div><img onclick="seleccionar(this,\'E\')"" class="imagen_Vocal" src="img/e.png" alt=""></div></div>'+
            '<div class="col-2"><div><img onclick="seleccionar(this,\'I\')"" class="imagen_Vocal" src="img/i.png" alt=""></div></div>'+
            '<div class="col-2"><div><img onclick="seleccionar(this,\'O\')"" class="imagen_Vocal" src="img/o.png" alt=""></div></div>'+
            '<div class="col-2"><div><img onclick="seleccionar(this,\'U\')"" class="imagen_Vocal" src="img/u.png" alt=""></div></div>'+
            '<div class="col-1"></div>'+
        '</div>',
    showCloseButton: false,
    showCancelButton: false,
    focusConfirm: false,
    allowOutsideClick: false,
    confirmButtonText:'Jugar',
  }).then((result) => {
    if (result.isConfirmed) {
      if(elementos_Seleccionados.length < 2){
        location.reload();
      }else{      
        setTimeout(function() {
          let audio2 = new Audio('../../sounds/enunciado_vocales.mp3');
          audio2.play(); 
        },1200);

        startGame();
      }
    }
  })
}

var elementos_Seleccionados = [];
function seleccionar(element, letra){
  var encontrado = false;
  let index_e = 0;
  for (let index = 0; index < elementos_Seleccionados.length; index++) {
    const element = elementos_Seleccionados[index];
    if(element == letra){
      encontrado = true;
      index_e = index;
      break;
    }
  }

  if(encontrado){
    element.classList.remove("seleccionado");
    elementos_Seleccionados.splice(index_e, 1);
  }else{
    elementos_Seleccionados.push(letra);
    element.classList.add("seleccionado");
  }
}