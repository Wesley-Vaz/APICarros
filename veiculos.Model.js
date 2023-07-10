// Definindo a classe Veiculo
class Veiculo {
    // Construtor da classe Veiculo
    constructor(fabricante, modelo, ano, placa) {
      // Atributos do Veiculo
      this.fabricante = fabricante; // Atributo "fabricante" recebe o valor passado como parâmetro
      this.modelo = modelo; // Atributo "modelo" recebe o valor passado como parâmetro
      this.ano = ano; // Atributo "ano" recebe o valor passado como parâmetro
      this.placa = placa; // Atributo "placa" recebe o valor passado como parâmetro
    }
  }
  
  // Exportando a classe Veiculo para uso em outros arquivos JavaScript
  module.exports = Veiculo;
  