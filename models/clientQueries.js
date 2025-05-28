const getAll = `
    SELECT * FROM cliente;
`

const getId = `
    SELECT * FROM cliente WHERE ?;
`

const post = `
    INSERT INTO cliente SET ?;
`

const update = `
    UPDATE cliente SET ? WHERE id = ?;
`

const remove = `
    DELETE FROM cliente WHERE id = ?
`

module.exports = { 
    getAll,
    getId,
    post,
    update,
    remove
 }