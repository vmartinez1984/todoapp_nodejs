const express = require("express");
const router = express.Router();
const { tareasController } = require("../controllers");
const { tareaDtoIn } = require("../dtos/tarea.dto");
const { validacionDto } = require("../middlewares/validacionDto.middleware");

router.post(
  "/tareas",
  validacionDto(tareaDtoIn),
  tareasController.agregarAsync
);

module.exports = router;
