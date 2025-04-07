class TareaRepositorio {
  /**
   *
   * @param {TareaModel} tarea
   * @returns {int} id
   */
  static async agregarTarea(tarea) {
    ahorro.id = await obtenerIdAsync();
    const db = await mongoDbConfig.conectarAMongoDb();
    let respuesta = await db.collection(coleccion).insertOne(ahorro);
    console.log(respuesta);

    return ahorro.id;
  }
}
