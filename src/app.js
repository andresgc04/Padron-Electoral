const express = require("express");
const morgan = require("morgan");
const config = require("./config");

const personas = require("./modulos/personas/rutas");
const partidosPoliticos = require("./modulos/partidos-politicos/rutas");
const posicionesPoliticas = require("./modulos/posiciones-politicas/rutas");

const app = express();

//Middleware:
//Middleware Morgan:
app.use(morgan("dev"));

//Middleware Para Interpretar JSON:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
app.use("/api/posiciones-politicas", posicionesPoliticas);

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

app.get("/paises", function (req, res) {
  res.render("pages/paises/paises");
});

app.get("/partidos-politicos", function (req, res) {
  res.render("pages/partidos-politicos/partidos-politicos");
});

app.get("/posiciones-politicas", function (req, res) {
  res.render("pages/posiciones-politicas/posiciones-politicas");
});

module.exports = app;
