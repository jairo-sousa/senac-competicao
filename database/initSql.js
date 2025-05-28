const initSql =`
    CREATE DATABASE IF NOT EXISTS salao;

    CREATE TABLE IF NOT EXISTS cliente(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(100) NOT NULL, 
        telefone VARCHAR(30),
        observacao VARCHAR(100)
    );
` 

module.exports = initSql