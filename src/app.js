const express = require("express");
const config = require("./config");
const path = require("path");

const personas = require("./modulos/personas/rutas");

const app = express();

//Configuracion:
app.set("port", config.app.port);

//Rutas De Los Endpoints:
app.use("/api/personas", personas);

//Rutas De Las Vistas:

//Ruta Para Acceder Al Login:
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

module.exports = app;
