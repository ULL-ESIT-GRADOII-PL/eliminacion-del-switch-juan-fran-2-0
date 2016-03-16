describe("Temperatura", function() {
  describe("Constructor", function() {
    it("Llama al constructor de Medida", function() {
      var temp = new Temperatura();
      expect(temp).to.be.an.instanceof(Medida);
    });
  });
});

describe("Celsius", function() {
  describe("Constructor", function() {
    it("Llama al constructor de Celsius", function() {
      var c = new Celsius();
      expect(c).to.be.an.instanceof(Celsius);
      expect(c.name).to.equals("Celsius");
    });

    it("Llama al constructor de Temperatura", function() {
      var c = new Celsius();
      expect(c).to.be.an.instanceof(Temperatura);
    });

    it("Llama al constructor de Medida", function() {
      var c = new Celsius();
      expect(c).to.be.an.instanceof(Medida);
    });
  });

  describe("#toFahrenheit", function(){
    it("Devuelve nombre y tipo Fahrenheit", function(){
      var far = new Celsius("0").toFahrenheit();
      expect(far.name).to.equals("Fahrenheit");
      expect(far.tipo).to.equals("f");
    });
    it("Devuelve resultado correcto", function(){
      var far = new Celsius("0").toFahrenheit();
      expect(far.valor).to.equals(32);
    });
    it("Devuelve objeto instanceof Fahrenheit", function(){
      var far = new Celsius("0").toFahrenheit();
      expect(far).to.be.instanceof(Fahrenheit);
    });
  });

  describe("#toKelvin", function(){
    it("Devuelve nombre y tipo Kelvin", function(){
      var far = new Celsius("0").toKelvin();
      expect(far.name).to.equals("Kelvin");
      expect(far.tipo).to.equals("k");
    });
    it("Devuelve resultado correcto", function(){
      var far = new Celsius("0").toKelvin();
      expect(far.valor).to.equals(273.15);
    });
    it("Devuelve objeto instanceof Kelvin", function(){
      var far = new Celsius("0").toKelvin();
      expect(far).to.be.instanceof(Kelvin);
    });
  });
});

//Test de Fahrenheit
describe("Fahrenheit", function() {
  describe("Constructor", function() {
    it("Llama al constructor de Fahrenheit", function() {
      var c = new Fahrenheit();
      expect(c).to.be.an.instanceof(Fahrenheit);
      expect(c.name).to.equals("Fahrenheit");
    });
    it("Llama al constructor de Temperatura", function() {
      var c = new Fahrenheit();
      expect(c).to.be.an.instanceof(Temperatura);
    });
    it("Llama al constructor de Medida", function() {
      var c = new Fahrenheit();
      expect(c).to.be.an.instanceof(Medida);
    });
  });

  describe("#toCelsius", function(){
    it("Devuelve nombre y tipo Celsius", function(){
      var far = new Fahrenheit("0").toCelsius();
      expect(far.name).to.equals("Celsius");
      expect(far.tipo).to.equals("c");
    });
    it("Devuelve resultado correcto", function(){
      var far = new Fahrenheit("0").toCelsius();
      expect(parseFloat(far.valor.toFixed(2))).to.equals(-17.78);
    });
    it("Devuelve objeto instanceof Celsius", function(){
      var far = new Fahrenheit("0").toCelsius();
      expect(far).to.be.instanceof(Celsius);
    });
  });

  describe("#toKelvin", function(){
    it("Devuelve nombre y tipo Kelvin", function(){
      var far = new Fahrenheit("0").toKelvin();
      expect(far.name).to.equals("Kelvin");
      expect(far.tipo).to.equals("k");
    });
    it("Devuelve resultado correcto", function(){
      var far = new Fahrenheit("0").toKelvin();
      expect(parseFloat(far.valor.toFixed(2))).to.equals(255.37);
    });
    it("Devuelve objeto instanceof Kelvin", function(){
      var far = new Fahrenheit("0").toKelvin();
      expect(far).to.be.instanceof(Kelvin);
    });
  });
});

/////Tests de Kelvin
describe("Kelvin", function() {
  describe("Constructor", function() {
    it("Llama al constructor de Kelvin", function() {
      var c = new Kelvin();
      expect(c).to.be.an.instanceof(Kelvin);
      expect(c.name).to.equals("Kelvin");
    });
    it("Llama al constructor de Temperatura", function() {
      var c = new Kelvin();
      expect(c).to.be.an.instanceof(Temperatura);
    });
    it("Llama al constructor de Medida", function() {
      var c = new Kelvin();
      expect(c).to.be.an.instanceof(Medida);
    });
  });

  describe("#toCelsius", function(){
    it("Devuelve nombre y tipo Celsius", function(){
      var far = new Kelvin("0").toCelsius();
      expect(far.name).to.equals("Celsius");
      expect(far.tipo).to.equals("c");
    });
    it("Devuelve resultado correcto", function(){
      var far = new Kelvin("0").toCelsius();
      expect(parseFloat(far.valor.toFixed(2))).to.equals(-273.15);
    });
    it("Devuelve objeto instanceof Celsius", function(){
      var far = new Kelvin("0").toCelsius();
      expect(far).to.be.instanceof(Celsius);
    });
  });

  describe("#toFahrenheit", function(){
    it("Devuelve nombre y tipo Fahrenheit", function(){
      var far = new Kelvin("0").toFahrenheit();
      expect(far.name).to.equals("Fahrenheit");
      expect(far.tipo).to.equals("f");
    });
    it("Devuelve resultado correcto", function(){
      var far = new Kelvin("0").toFahrenheit();
      expect(parseFloat(far.valor.toFixed(2))).to.equals(-459.67);
    });
    it("Devuelve objeto instanceof Fahrenheit", function(){
      var far = new Kelvin("0").toFahrenheit();
      expect(far).to.be.instanceof(Fahrenheit);
    });
  });
});
