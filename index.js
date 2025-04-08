const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const errorMiddleware = require("./middlewares/error.middleware");
const { tareaRoute } = require("./routes");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({ mensaje: "Hola mundo" });
});

app.use("/api/v1", tareaRoute);
app.get("/api/v1/errores", (req, res) => {
  throw "Valio papi";
});
app.use((req, res) => {
  res.status(404).json({ mensaje: "Esta perdido, pero dios es el camino" });
});
app.use(errorMiddleware);

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
