(function (exports){
"use strict"

  function Medida(valor, tipo) {

    if(tipo == undefined){
      var expr = XRegExp(""
                        + "(?<valor> \\s* [+-]? \\d+ ([,\\.]\\d+)?)"
                        + "(?<exponente> (e [+-]? \\d+)? )"
                        + "(?<unidad> \\s* [a-z]+ \\s*)"
                        , "xi");

      var p = XRegExp.exec(valor, expr);

      var exp;
      if (p.exponente.length == 1){
        exp = 1;
      }
      else{
        exp = Math.pow(10, parseFloat(p.exponente.substring(1,p.exponente.length).trim()));
      }

      this.valor = parseFloat(p.valor.trim()) * exp;
      this.tipo  = p.unidad.trim().toLowerCase();
    }
    else{
      this.valor = valor;
      this.tipo = tipo;
    }
  }

  Medida.match = function (valor) {
        var unidades = "[a-z]+";
        var expr = XRegExp(""
                          + "(?<valor> \\s* [+-]? \\d+ ([,\\.]\\d+)?)"
                          + "(?<exponente> (e [+-]? \\d+)? )"
                          + "(?<unidad> \\s* " + unidades + " \\s*)"
                          + "(?<to> (to)? \\s*)"
                          + "(?<destino> " + unidades + ")"
                          + "(\\s*)$"
                          , "xi");

        var res = XRegExp.exec(valor, expr)

        var exp;
        if (res.exponente.length <= 1){
          exp = 1;
        }
        else{
          exp = Math.pow(10, parseFloat(res.exponente.substring(1,res.exponente.length).trim()));
        }

        var n = parseFloat(res.valor.trim()) * exp;



        var arr = [n, res.unidad.toLowerCase().trim(), res.destino.toLowerCase().trim()];

        return arr;
  };

  Medida.medidas = {};

  Medida.convertir = function(valor) {

      var measures = Medida.medidas;

      measures.c = Celsius;
      measures.f = Fahrenheit;
      measures.k = Kelvin;

      var match = Medida.match(valor);

      var n = match[0],
          t = match[1],
          d = match[2];

      console.log("n: " + n);
      console.log("t: " + t);
      console.log("d: " + d);

      try {
        var source = new measures[t](n); //new Celsius new Kelvin
        var target = "to" + measures[d].name; // "toCelsius"
        console.log("src: " + source);
        console.log("Target" + target);
        return source[target]().toFixed(2) + " " + target; // "0 Celsius"
      }
      catch(err) {
        return "Error";
      }

  };

  exports.Medida = Medida;

})(this);
