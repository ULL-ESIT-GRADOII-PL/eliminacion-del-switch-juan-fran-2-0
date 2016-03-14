(function(exports){
"use strict";

  function Temperatura(valor, tipo){
    Medida.call(this,valor,tipo);
  };

  //Herencia
  Temperatura.prototype = Object.create(Medida.prototype);
  Temperatura.prototype.constructor = Temperatura;

  //////////////////// Celsuis
  function Celsius(valor){
    Temperatura.call(this, valor, "c");
    this.name = "Celsius";
  }

  Celsius.prototype = Object.create(Temperatura.prototype);
  Celsius.prototype.constructor = Celsius;

  Celsius.prototype.toCelsius = function (){
    console.log(this.valor);
    return this.valor;
  }

  Celsius.prototype.toKelvin = function (){
    return (this.valor + 273.15);
  }

  Celsius.prototype.toFahrenheit = function (){
    return ((this.valor * (9/5)) + 32);
  }

  //////////////////// Kelvin
  function Kelvin(valor){
    Temperatura.call(this, valor, "k");
  }

  Kelvin.prototype = Object.create(Temperatura.prototype);
  Kelvin.prototype.constructor = Kelvin;

  Kelvin.prototype.toCelsius = function (){
    return (this.valor - 273);
  }

  Kelvin.prototype.toKelvin = function (){
    return this.valor;
  }

  Kelvin.prototype.toFahrenheit = function (){
    return (this.valor - 459.67);
  }

  //////////////////// Fahrenheit
  function Fahrenheit(valor){
    Temperatura.call(this, valor, "f");
  }

  Fahrenheit.prototype = Object.create(Temperatura.prototype);
  Fahrenheit.prototype.constructor = Fahrenheit;

  Fahrenheit.prototype.toCelsius = function (){
        return ((this.valor - 32) * (9/5));
  }

  Fahrenheit.prototype.toKelvin = function (){
    return ((this.valor + 459.67) * (5/9));
  }

  Fahrenheit.prototype.toFahrenheit = function (){
    return this.valor;
  }

  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Kelvin = Kelvin;
  exports.Fahrenheit = Fahrenheit;

})(this);
