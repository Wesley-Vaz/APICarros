const express = require("express");
const veiculoController = require("./controllers/veiculoController.js");
const { engine } = require("express/lib/application");

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta em que o servidor será executado
const port = 3000;

// Configura o mecanismo de visualização como "ejs"
app.set("view engine", "ejs");

// Middleware para analisar os dados enviados nos formulários
app.use(express.urlencoded({ extended: true }));

// Rota raiz ("/") associada à função getVeiculos no veiculoController
app.get("/", veiculoController.getVeiculos);

// Rota raiz ("/") associada à função addVeiculo no veiculoController
app.post("/", veiculoController.addVeiculo);

// Inicia o servidor Express e o faz escutar na porta especificada
app.listen(port, () => {
  console.log("Servidor rodando na porta: " + port);
});




