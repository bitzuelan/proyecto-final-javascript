var calculadora = {
init: function() {
this.activarEfecto();
},
presionar: function(tecla) {
tecla.target.style.transform = "scale(0.9)";
},
soltar: function(tecla) {
tecla.target.style.transform = "scale(1,1)";
},

activarEfecto: function() {
var teclas = document.getElementsByTagName('img');
for (i = 0; i < teclas.length; i++) {
teclas[i].addEventListener("mousedown", this.presionar);
teclas[i].addEventListener("mouseup", this.soltar);
}
}
}
calculadora.init();

  var operandoa;
  var operandob;
  var operacion;
  var resultado;

  function init() {
    resultado = document.getElementById('display');
 var reset = document.getElementById('on').addEventListener("click", function(){resultado.textContent = "0"});
 var suma = document.getElementById('mas');
 var resta = document.getElementById('menos');
 var multiplicacion = document.getElementById('por');
 var division = document.getElementById('dividido');
 var igual = document.getElementById('igual');
 var punto = document.getElementById('punto');
 var signoMenos = document.getElementById("sign");
 var uno = document.getElementById('1');
 var dos = document.getElementById('2');
 var tres = document.getElementById('3');
 var cuatro = document.getElementById('4');
 var cinco = document.getElementById('5');
 var seis = document.getElementById('6');
 var siete = document.getElementById('7');
 var ocho = document.getElementById('8');
 var nueve = document.getElementById('9');
 var cero = document.getElementById('0');

 punto.addEventListener("click",function(){
if (resultado.textContent.indexOf(".") == -1)
  if( resultado.textContent.length <= 8)
    if( resultado.textContent =="0")
      resultado.textContent = "0.";
    else
     resultado.textContent += ".";

})

  signoMenos.addEventListener("click", function(){
    resultado.textContent = resultado.textContent *-1;
  })
 cero.addEventListener("click", function(){
   if (resultado.textContent != "0") {
     if (resultado.textContent <= 7){
       resultado.textContent += "0";
     }
   }
 })

uno.addEventListener("click", function(){
  if (resultado.textContent.length <= 7)
    if ( resultado.textContent == "0"){
      resultado.textContent = "1"
    }else {
      resultado.textContent += "1"
    }
})

dos.addEventListener("click", function(){
  if (resultado.textContent.length <= 7)
    if ( resultado.textContent == "0"){
      resultado.textContent = "2"
    }else {
      resultado.textContent += "2"
    }
})

tres.addEventListener("click", function(){
  if (resultado.textContent.length <= 7)
    if ( resultado.textContent == "0"){
      resultado.textContent = "3"
    }else {
      resultado.textContent += "3"
    }
})

cuatro.addEventListener("click", function(){
  if (resultado.textContent.length <= 7)
    if ( resultado.textContent == "0"){
      resultado.textContent = "4"
    }else {
      resultado.textContent += "4"
    }
})

cinco.addEventListener("click", function(){
  if (resultado.textContent.length <= 7)
    if ( resultado.textContent == "0"){
      resultado.textContent = "5"
    }else {
      resultado.textContent += "5"
    }
})
seis.addEventListener("click", function(){
  if (resultado.textContent.length <= 7)
    if ( resultado.textContent == "0"){
      resultado.textContent = "6"
    }else {
      resultado.textContent += "6"
    }
})

siete.addEventListener("click", function(){
  if (resultado.textContent.length <= 7)
    if ( resultado.textContent == "0"){
      resultado.textContent = "7"
    }else {
      resultado.textContent += "7"
    }
})

ocho.addEventListener("click", function(){
  if (resultado.textContent.length <= 7)
    if ( resultado.textContent == "0"){
      resultado.textContent = "8"
    }else {
      resultado.textContent += "8"
    }
})

nueve.addEventListener("click", function(){
  if (resultado.textContent.length <= 7)
    if ( resultado.textContent == "0"){
      resultado.textContent = "9"
    }else {
      resultado.textContent += "9"
    }
})
  punto.onclick = function(e){

  }
   reset.onclick = function(e){
       resetear();
   }
   suma.onclick = function(e){
       operandoa = resultado.textContent;
       operacion = "+";
       limpiar();
   }
   resta.onclick = function(e){
       operandoa = resultado.textContent;
       operacion = "-";
       limpiar();
   }
   multiplicacion.onclick = function(e){
       operandoa = resultado.textContent;
       operacion = "*";
       limpiar();
   }
   division.onclick = function(e){
       operandoa = resultado.textContent;
       operacion = "/";
       limpiar();
   }
   igual.onclick = function(e){
       operandob = resultado.textContent;
       resolver();
   }
  }

  function limpiar(){
  resultado.textContent = "";
  }
  function resetear(){
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  resultado.textContent = res;
}

//cero.addEventListener("mousedown",function(){ cero.setAttribute("style", "transform:scale(0.95,0.95")})
