const express = require("express");
const config = require("./config");

const personas = require("./modulos/personas/rutas");
const partidosPoliticos = require("./modulos/partidos-politicos/rutas");

const app = express();

//Configuracion:
app.set("port", config.app.port);

//Motor De Plantillas:
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//Utilizar Servicio De Archivos Estaticos:
app.use(express.static("assets"));

//Rutas De Los Endpoints:
app.use("/api/personas", personas);
app.use("/api/partidos-politicos", partidosPoliticos);

//Rutas De Las Vistas:

//Ruta Para Acceder Al Login:
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/dashboard", function (req, res) {
  res.render("pages/dashboard/dashboard");
});

app.get("/personas", function (req, res) {
  res.render("pages/personas/personas");
});

module.exports = app;
