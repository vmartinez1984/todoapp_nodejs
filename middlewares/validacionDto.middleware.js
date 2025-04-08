function validacionDto(schema) {
  return function (req, res, next) {
    //console.log(schema)
    const { error, value } = schema.validate(req.body);
    if (value == undefined) {
      return res.status(400).json({ error: "No se enviaron valores" });
    }
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
}

module.exports = {
    validacionDto
}