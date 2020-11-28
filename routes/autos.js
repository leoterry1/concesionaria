const express = require("express");
const router = express.Router()
const controlador = require("../controllers/autosController")

router.get("/", controlador.autos)
/* router.get("/:marca", controlador.marca) */

module.exports = router