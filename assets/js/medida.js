//Class
(function(exports){

  function Medida(valor, tipo){
    if(tipo == undefined){
      var expr = XRegExp("(?<numero> \\s* [+-]? (\\d+ [\\.,])? \\d+)"
                        + "(?<exponente> \\s* (e[+-]?)? \\d+)"
                        + "(?<unidad> \\s* [a-z]+ \\s*)"
                        , "xi");

      var str = XRegExp.exec(valor, expr);
      var exp = str.exponente.trim().substring(1, str.exponente.trim().length);
      this.valor = parseFloat(str.numero) * Math.pow(10,parseInt(exp));
      this.tipo = str.unidad;
    }
    else{
      this.valor = valor;
      this.tipo = tipo;
    }
  };

  Medida.measures = {};

  Medida.match = function(valor){
    var unidad = "[a-z]+";
    var regexp = XRegExp(
                 '^(\\s*)                                                '
                     + '(?<valor>       [-+]?\\d+ (?:[\\.,]\\d*)?\\s*)   '
                     + '((e(?<exponente> [-+]?\\d+)\\s*)?)                '
                     + '(?<tipo>       ' + unidad + ')                   '
                     + '((?:\\s+to)?\\s+ (?<destino>' + unidad + '))?    '
                     + '(\\s*)$                                          '
                 , 'xi');

    var p = XRegExp.exec(valor,regexp);

    var exp;
    if(p.exponente == undefined){
        exp = 1;
    }
    else{
      exp = Math.pow(10, parseInt(p.exponente));
    }
    var num = parseFloat(p.valor) * exp;
    var unidad_from = p.tipo;
    var unidad_to = p.destino;
    var arr = [num, unidad_from, unidad_to];

    return arr;
  }


  Medida.convertir = function(valor){
    var medidas = Medida.measures;

    medidas.c = Celsius;
    medidas.k = Kelvin;
    medidas.f = Fahrenheit;

    var match = Medida.match(valor);
    var v = match[0];
    var t = match[1];
    var d = match[2];

    try{
      var src = new medidas[t.toLowerCase()](v); //, new Celsius(23.038)
      var target = 'to' + medidas[d.toLowerCase()].name; //toCelsius toKelvin
      return src[target]().toFixed(2); + " " + target.substring(2,target.length);
    }
    catch(err){
      return "Error, Introduzca algo como 33.03F to K"
    }
  };

  exports.Medida = Medida;

})(this);
