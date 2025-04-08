const errorMiddleware = (error, req, res, next) => {
  console.error("Ocurrio un error", error);
  res.status(500).json({
    mensaje:"Valio pepino carnal"
  })
};

module.exports = errorMiddleware;
