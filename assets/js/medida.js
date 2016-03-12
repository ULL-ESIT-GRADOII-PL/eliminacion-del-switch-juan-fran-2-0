(function (exports){
"use strict"
  function Medida(valor, tipo) {
    console.log("V: " + valor);
    console.log("t: " + tipo);
    //En caso de que solo se llame con 1 parametro, asignar un valor a tipo;
    if(!tipo){
      console.log("not tipo");
    var expr = XRegExp(""
                          + "(<val>  [+-]? \\s* \\d+ )" //Numero
                          + "(<exp> ([\\., \\d+]? [e[+-]? \\d+]?)? \\s*)"  //Exponente
                          + "(<tipo> [a-zA-Z]+)" //tipo a convertir
                          );
      var p = XRegExp.exec(valor, expr);

      this.valor = parseFloat(p.val) * Math.pow(10, parseInt(p.exp));
      this.tipo  = p.tipo;
    }
    else{
      console.log("Valor: " + valor);
      console.log("tipo: " + tipo);
      this.valor = valor;
      this.tipo = tipo;
    }


  }

  //Exprreg constante
  Medida.match = function (input) {
        var medidas = "[a-z]+";
        var in_expr = XRegExp(""
                              + "(<val> \\s* [+-]? \\s* \\d+ )" //Numero
                              + "(<decimales> ()[\\.,] \\d+ \\s*)? )"
                              + "(<exp> ([e[+-]? \\d+]?)? \\s*)"
                              + "(<de>" + medidas + ")" //Tipo de medida recibida
                              + "(<to> (to)? \\s* )"
                              + "(<dest>" + medidas + ")" //tipo de medida de destino
                              + "(\\s*)$"
                              , "xi");
        return XRegExp.exec(input, in_expr);
  };

  //Inicializar array vacio
  Medida.medida = {};

  Medida.convertir = function(valor) {
    console.log("Convertir: " + valor)
      var measures = Medida.medidas;

      measures.c = Celsius(valor);
      measures.f = Fahrenheit(valor);
      measures.k = Kelvin(valor);

      var match = Medida.match(valor);

      if (match) {
          var numero = match.value,
              tipo   =  match.tipo,
              destino = match.destino;
          try {
              var source = new measures[tipo[0].toLowerCase()](numero);
              var target = "to" + measures[destino[0].toLowerCase()].name; // "toCelsius"

              return source[target]().toFixed(2) + " " + target; // "0 Celsius"
          }
          catch(err) {
              return 'Desconozco como convertir desde "' + tipo + '" hasta "' + destino + '"';
          }
      }
      else
          return "Introduzca una temperatura valida: 34.58e-4 F to K";
  };

  exports.Medida = Medida;

})(this);
