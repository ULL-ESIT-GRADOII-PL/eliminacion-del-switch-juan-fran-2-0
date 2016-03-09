(function(exports) {
  "use strict";

  function Medida(valor,tipo)
  {
    var value = valor;
    var tipo = tipo;

    this.getValue = function() {
      return value;
    };
    this.getTipo = function() {
      return tipo;
    }
  }

  exports.convertir = function() {
   var valor = document.getElementById('convert').value,
     elemento = document.getElementById('converted'),
     tipos_aceptados = ["c", "f", "k"],
     regexp = XRegExp(
       '(?<numero>    [+-]?\\d+(\\.\\d+)?([e][+-]?\\d+)?[ ]*)\
        (?<tipo>      [a-z]+)[ ]+(?:to[ ]+)?\
        (?<tipo2> [a-z]+)[ ]*$', 'xi'),
     valor = XRegExp.exec(valor, regexp);

   if (valor) {
     var numero = valor.numero.replace(/\s+/g, ''),
       tipo = valor.tipo.toLowerCase(),
       tipo2 = valor.tipo2.toLowerCase();

     if (tipos_aceptados.indexOf(tipo) > -1 && tipos_aceptados.indexOf(tipo2) > -1) {
       elemento.style.color = "rgb(17, 5, 169)";
       console.log("Valor: " + numero + ", Tipo: " + tipo + ", Nuevo: " + tipo2);
       numero = parseFloat(numero);
       var inicial;
       switch (tipo) {
         case 'c':
           inicial = new Celsius(numero);
           break;
         case 'f':
           inicial = new Fahrenheit(numero);
           break;
         case 'k':
           inicial = new Kelvin(numero);
           break;
         default:
           console.log("No hay asignado un case para este valor");
           break;
       }

       switch (tipo2) {
         case 'c':
           elemento.innerHTML = inicial.toCelsius().toFixed(2) + " Celsius";
           break;
         case 'f':
           elemento.innerHTML = inicial.toFahrenheit().toFixed(2) + " Fahrenheit";
           break;
         case 'k':
           elemento.innerHTML = inicial.toKelvin().toFixed(2) + " Kelvin";
           break;
         default:
           console.log("No hay asignado un case para este valor");
           break;
       }
     } else {
       elemento.style.color = "rgb(138, 0, 0)";
       elemento.innerHTML = "ERROR. Introduzca por ejemplo -32.5e10f to K";
     }
   } else {
     elemento.style.color = "rgb(138, 0, 0)";
     elemento.innerHTML = "ERROR. Introduzca por ejemplo -32.5e10f to K";
   }
 }
})(this);
