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

    getAll(result) {
        return this.runQuery(sqlCliente.getAll)
    }

}

module.exports = new ClienteModel()