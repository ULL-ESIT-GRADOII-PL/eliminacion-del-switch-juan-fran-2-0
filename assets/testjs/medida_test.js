var expect = chai.expect;

describe("Medida", function() {
  describe("Constructor", function() {

    it("Crear medida con un argumeto", function() {
      var medida = new Medida("33F");
      expect(medida.valor).to.equal(33);
      expect(medida.tipo).to.equal("f");
    });

    it("Crear medida con dos argumentos", function() {
      var medida = new Medida("33","F");
      expect(medida.valor).to.equal(33);
      expect(medida.tipo).to.equal("f");
    });
  });

  describe("#match", function() {
    it("Devuelve valor, unidad a convertir y unidad convertida", function() {
      var arr = (new Medida.match("3.41e3 c to k"));
      expect(arr[0]).to.equal(3410);
      expect(arr[1]).to.equal("c");
      expect(arr[2]).to.equal("k");
    });
  });

  describe("#convertir", function() {
    it("Convierte la temperatura a la unidad indicada", function() {
      var medida = (Medida.convertir("32 f to c"));
      expect(medida).to.equal("0.00 Celsius");
    });
  });
});
