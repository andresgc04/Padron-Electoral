const express = require("express");

const respuesta = require("../../red/respuestas");
const controlador = require("./controlador");

const router = express.Router();

async function todos(req, res) {
  try {
    const items = await controlador.todos();
    respuesta.success(req, res, items, 200);
  } catch (error) {
    respuesta.error(req, res, error, 500);
  }
}

async function uno(req, res) {
  try {
    const items = await controlador.uno(req.params.id);
    respuesta.success(req, res, items, 200);
  } catch (error) {
    respuesta.error(req, res, error, 500);
  }
}

async function eliminar(req, res) {
  try {
    const items = await controlador.eliminar(req.body);
    respuesta.success(req, res, 'Item eliminado satisfactoriamente', 200);
  } catch (error) {
    respuesta.error(req, res, error, 500);
  }
}

router.get("/", todos);
router.get("/:id", uno);

router.put("/", eliminar);

module.exports = router;
