const clienteModel = require("../models/cliente")

class ClienteController {

    getAll = (req, reply) => {

        const response = clienteModel.getAll()

        response.then((novoCliente) => {
            return reply.status(200).json(novoCliente)
        })
            .catch((error) => {
                return reply.status(400).json(error)
            })
    }

}

module.exports = new ClienteController()