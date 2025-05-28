const express = require("express");
const clienteController = require("../controllers/cliente")

const router = express.Router();

router.get("/cliente", clienteController.getAll );

module.exports = router;
