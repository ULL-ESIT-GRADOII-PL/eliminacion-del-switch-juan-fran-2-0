(function(exports) {
  "use strict";

    function Temperatura(valor,tipo) {
      Medida.call(this, valor, tipo);
    }

    //Herencia
    Temperatura.prototype = Object.create(Medida.prototype);
    Temperatura.prototype.constructor = Temperatura;

    /// Celsius
    Celsius.prototype = Object.create(Temperatura.prototype);
    Celsius.prototype.constructor = Celsius;

    function Celsius(valor) {
      Temperatura.call(this, valor, "c");
      this.name = "Celsius";
    }

    Celsius.prototype.toCelsius = function(){
      return this.valor;
    }

    Celsius.prototype.toFahrenheit = function () {
      return (this.valor * 9/5) + 32;
    }

    Celsius.prototype.toKelvin = function () {
      return (this.valor + 273.15);
    }

    ///// Fahrenheit
    Fahrenheit.prototype = Object.create(Temperatura.prototype);
    Fahrenheit.prototype.constructor = Fahrenheit;

    function Fahrenheit(valor) {
      Temperatura.call(this, valor, "f");
      this.name = "Fahrenheit";
    }

    Fahrenheit.prototype.toFahrenheit = function(){
      return this.valor;
    }

    Fahrenheit.prototype.toCelsius = function () {

      return ((this.valor - 32) * 5/9);
    }

    Fahrenheit.prototype.toKelvin = function () {
      return ((this.valor - 32) / (9/5)) + 273.15;
    }


    ///////// Kelvin
    Kelvin.prototype = Object.create(Temperatura.prototype);
    Kelvin.prototype.constructor = Kelvin;

    function Kelvin(valor) {
      Temperatura.call(this, valor, "k");
      this.name = "Kelvin";
    }

    Kelvin.prototype.toKelvin = function(){
      return this.valor;
    }

    Kelvin.prototype.toCelsius = function () {
      return (this.valor - 273.15);
    }

    Kelvin.prototype.toFahrenheit = function () {
      return (((this.valor - 273.15) * 9/5) + 32);
    }


  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Fahrenheit = Fahrenheit;
  exports.Kelvin = Kelvin;

})(this);
