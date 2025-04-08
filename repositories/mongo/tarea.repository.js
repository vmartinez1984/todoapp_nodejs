const { MongoClient } = require("mongodb");
const coleccion = "Tareas";
const uri = "mongodb://root:123456@localhost:27017/?authMechanism=DEFAULT";
const client = new MongoClient(uri);

class TareaRepository {
  /**
   * Insertar registro en mongodb
   * @param {TareaModel} tarea
   * @returns {int} id
   */
  static async agregarAsync(tarea) {
    try {
      await client.connect();
      const db = client.db("todo3");
      const dbCollection = db.collection(coleccion);
      const totalDocumentos = await dbCollection.countDocuments();
      let id = totalDocumentos + 1;

      let resultado = await dbCollection.insertOne(tarea);
      console.log(resultado);

      return id;
    } catch (error) {
      console.log("Ocurrio un error para agregar un nuevo usuario: ", error);
    }
  }
}

module.exports = TareaRepository;
