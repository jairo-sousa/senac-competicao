const con = require("./connection")
const initSql = require("./initSql")

class Database {
    init(){
        this.con = con
        this.createAll()
    }

    createAll(){
        con.query(initSql, (err, result) => {
        if (err) throw new Error(`erro ao criar banco: ${err.message}`);
        console.log("Banco criado");
    });
    }
}

module.exports = new Database()