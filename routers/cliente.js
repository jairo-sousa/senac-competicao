const express = require("express");
const clienteController = require("../controllers/cliente")
const clienteRouter = express.Router();


clienteRouter.get("/cliente", clienteController.getAll);

clienteRouter.post("/cliente", clienteController.post);

clienteRouter.put("/cliente:id", clienteController.update);

clienteRouter.delete("/cliente:id", clienteController.delete);

module.exports = clienteRouter;