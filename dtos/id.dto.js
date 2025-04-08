class IdDto {
  id;
  fecha;

  /**
   *
   * @param {int} id
   */
  constructor(id) {
    this.id = id;
    this.fecha = new Date();
  }
}

module.exports = { IdDto };
