'use strict'

const express = require('express')
const app = express()
const port = 3000

const router = require("./routers/")

router(app, express)

const Database = require("./database/database")

Database.init()

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
