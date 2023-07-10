// Importando o módulo "Veiculo" do arquivo "../models/veiculos.Model.js"
const Veiculo = require("../models/veiculos.Model.js");

// Importando o módulo "DB" do arquivo "../models/dbModel.js"
const DB = require("../models/dbModel.js");

// Função assíncrona para obter os veículos
async function getVeiculos(req, res) {
  // Chamando o método "findAll" do objeto "DB" para buscar todos os veículos no banco de dados
  const veiculos = await DB.findAll("veiculos");

  // Renderizando a view "veiculoView" e passando os veículos como dados a serem exibidos
  res.render("index", { veiculos });
}

// Função assíncrona para adicionar um veículo
async function addVeiculo(req, res) {
  // Obtendo os dados do veículo do corpo da requisição
  const { fabricante, modelo, ano, placa } = req.body;

  // Criando um novo objeto "Veiculo" com os dados fornecidos
  const veiculo = new Veiculo(fabricante, modelo, ano, placa);

  // Chamando o método "insertOne" do objeto "DB" para inserir o veículo no banco de dados
  await DB.insertOne("veiculos", veiculo);

  // Redirecionando o usuário para a rota "/"
  res.redirect("/");
}
// Exportando as funções "getVeiculos" e "addVeiculo" para serem utilizadas em outros arquivos
module.exports = { getVeiculos, addVeiculo };


