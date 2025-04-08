const Joi = require("joi");

const tareaDtoIn = Joi.object({
  titulo: Joi.string()
    .min(3)
    .max(25)
    .required()
    .messages({ "any.required": "El titulo es obligatorio" }),
  descripcion: Joi.string()
    .min(3)
    .max(255)
    .required()
    .messages({ "any.required": "La descripcion es obligatoria" }),
});

module.exports = { tareaDtoIn }