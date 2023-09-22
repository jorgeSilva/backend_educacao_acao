require('dotenv').config()
const express = require('express')
const cors = require('cors')
const server = express()

server.use(express.json())
server.use(cors())

const PORT = process.env.PORT

const escola = require('./routes/referenteEscola/escolaRoutes')
const ei = require('./routes/referenteEscola/eiRoutes')
const eja = require('./routes/referenteEscola/ejaRoutes')
const aee = require('./routes/referenteEscola/aeeRoutes')
const aluno = require('./routes/referenteEscola/alunoRoutes')
const professor = require('./routes/referenteEscola/professorRoutes')

const servidor = require('./routes/servidores/servidorRoutes')

const setores = require('./routes/setores/setoresRoute')
const convenio = require('./routes/setores/convenioRoute')

server.use(escola)
server.use(ei)
server.use(eja)
server.use(aee)
server.use(aluno)
server.use(professor)

server.use(servidor)

server.use(setores)
server.use(convenio)

server.listen(PORT, () => {
    console.log('SERVIDOR FUNCIONANDO!')
})
