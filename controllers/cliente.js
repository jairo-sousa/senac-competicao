const clienteModel = require("../models/cliente")

class ClienteController {
    getAll(req, reply) {
        const response = clienteModel.getAll()

        response.then((Clientes) => {
            return reply.status(200).json(Clientes)
        })
            .catch((error) => {
                return reply.status(400).json(error)
            })
    }

    post(req, reply) {
        const clienteSent = req.body

        const response = clienteModel.post(clienteSent)

        response.then((novoCliente) => {
            return reply.status(200).json(novoCliente)
        })
            .catch((error) => {
                return reply.status(400).json(error)
            })
    }

    update(req, reply) {
        const { id } = req.params;
        const clienteSent = req.body
        
        const response = clienteModel.update(id, clienteSent)
        
        response.then((atualCliente) => {
            return reply.status(200).json(atualCliente)
        })
        .catch((error) => {
            return reply.status(400).json(error)
        })
    }
    
    delete(req, reply) {
        const { id } = req.params;

        const response = clienteModel.delete(id)

        response.then((deletedCliente) => {
            return reply.status(200).json(deletedCliente)
        })
            .catch((error) => {
                return reply.status(400).json(error)
            })
    }

}

module.exports = new ClienteController()