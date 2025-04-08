const { IdDto } = require("../dtos/id.dto");
const repositorio = require("../repositories/mysql");
const TareaModel = require("../models/Tarea.model");

const agregarAsync = async (req, res, next) => {
    const tarea = new TareaModel(req.body.titulo, req.body.descripcion, 1);
    //console.log(tarea)
    const id = await repositorio.tarea.agregarAsync(tarea);
    const idDto = new IdDto(id);
    res.status(201).json(idDto);
};

module.exports = {
  agregarAsync,
};
