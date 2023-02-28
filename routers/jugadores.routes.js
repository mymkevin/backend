const { Router } = require("express");
const {
  getPlayers,
  createPlayer,
} = require("../controllers/jugadores.controllers");

const router = Router();

//Vamos a utirlizar la constante y le asignamos su controlador
router.get("/messi", getPlayers);
router.post("/messi", createPlayer);

module.exports = router;