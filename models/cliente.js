const con = require("../database/connection")
const sqlCliente = require("./clientQueries")

class ClienteModel {

    runQuery(sql, params = []) {
        return new Promise((resolve, reject) => {
            con.query(sql, params, (error, response) => {
                if (error) reject(error);
            
                resolve(response);
            });
        });
    }

    getAll() {
        return this.runQuery(sqlCliente.getAll)
    }

    getId(id) {
        return this.runQuery(sqlCliente.getId, id)
    }

    post(clienteSent){
        return this.runQuery(sqlCliente.post, clienteSent)
    }

    update(id, clienteSent){
        return this.runQuery(sqlCliente.update, [ clienteSent, id])
    }

    delete(id){
        return this.runQuery(sqlCliente.remove, id)
    }

}

module.exports = new ClienteModel()