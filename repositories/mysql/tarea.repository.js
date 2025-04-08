const mysql = require("mysql");
const TareaModel = require("../../models/Tarea.model");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo",
});
class TareaRepository {
  /**
   *Insertar tarea en mysql
   * @param {TareaModel} tarea
   * @returns {int} id
   */
  static async agregarAsync(tarea) {
    return new Promise((resolve, reject) => {
      con.connect(function (err) {
        if (err) {
          reject(err);
          return;
        }
        const sql = `
        INSERT INTO tarea (titulo, descripcion, usuarioId)
        VALUES (?, ?, ?);
      `;

        con.query(
          sql,
          [tarea.titulo, tarea.descripcion, tarea.usuarioId],
          function (err, result) {
            if (err) {
              reject(err);
              return;
            }

            console.log(result);
            resolve(result.insertId); // puedes regresar el ID insertado
          }
        );

        // No cerrar la conexión aquí si la vas a seguir usando
        // con.end(); // opcional, si no necesitas más queries
      });
    });
  }

  /**
   * Actualiza el registro
   * @param {TareaModel} tarea
   */
  static async actualizarAsync(tarea) {
    let sql = "insert...";
  }

  /**
   * Borra una tarea
   * @param {int} tareaId
   */
  static async borrarAsync(tareaId) {}

  /**
   *
   * @returns array[TareaModel]
   */
  static async obtenerAsync() {
    let sql = "select * from table";

    return arrayDeObjetos;
  }

  /**
   * Obtiene tarea por id
   * @param {int} tareaId 
   * @returns {TareaModel} tareaModel
   */
  static async obtenerPorIdAsync(tareaId) {
    let sql = "select * from table limit 1";

    return tareaModel;
  }
}

module.exports = TareaRepository;
