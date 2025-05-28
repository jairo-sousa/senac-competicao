'use strict'

const express = require('express')
const app = express()
const port = 3000

const clienteRotas = require("./routers/cliente")

const Database = require("./database/database")

Database.init()

app.use(clienteRotas)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
