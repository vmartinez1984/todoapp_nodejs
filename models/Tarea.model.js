class TareaModel{
    titulo
    descripcion
    usuarioId

    /**
     * 
     * @param {string} titulo 
     * @param {string} descripcion 
     * @param {int} usuarioId 
     */
    constructor(titulo, descripcion, usuarioId){
        this.titulo = titulo
        this.descripcion = descripcion
        this.usuarioId = usuarioId
    }
}

module.exports = TareaModel