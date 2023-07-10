const { MongoClient } = require("mongodb");

// Variável singleton para armazenar a conexão com o banco de dados
let singleton;

// Função assíncrona para estabelecer a conexão com o banco de dados
async function connect() {
  // Se já existir uma conexão, retorna a instância existente
  if (singleton) return singleton;

  // Cria uma nova instância do MongoClient com a URL de conexão
  const client = new MongoClient(
    "mongodb+srv://wesley5358474:Wvaz2308@cluster0.zkecva1.mongodb.net/?retryWrites=true&w=majority"
  );

  // Aguarda a conexão ser estabelecida
  await client.connect();

  // Armazena a conexão no singleton e retorna a instância do banco de dados
  singleton = client.db("data");
  return singleton;
}

// Função assíncrona para buscar todos os documentos em uma coleção
async function findAll(collection) {
  // Estabelece a conexão com o banco de dados
  const db = await connect();

  // Utiliza o método "find().toArray()" para obter todos os documentos da coleção
  return db.collection(collection).find().toArray();
}

// Função assíncrona para inserir um documento em uma coleção
async function insertOne(collection, object) {
  // Estabelece a conexão com o banco de dados
  const db = await connect();

  // Utiliza o método "insertOne" para inserir o objeto na coleção
  return db.collection(collection).insertOne(object);
}

// Exporta as funções "findAll" e "insertOne" para serem utilizadas em outros arquivos
module.exports = { findAll, insertOne };

