const express = require('express')
const cors = require('cors')
const server = express()
require('dotenv').config()
// fix-fix

server.use(cors())
server.use(express.json())

const PORT = process.env.PORT

const escola = require('./routes/referenteEscola/escolaRoutes')
const ei = require('./routes/referenteEscola/eiRoutes')
const eja = require('./routes/referenteEscola/ejaRoutes')
const aee = require('./routes/referenteEscola/aeeRoutes')
const aluno = require('./routes/referenteEscola/alunoRoutes')
const professor = require('./routes/referenteEscola/professorRoutes')
const pre = require('./routes/referenteEscola/preRoutes')
const creche = require('./routes/referenteEscola/crecheRoutes')

const servidor = require('./routes/servidores/servidorRoutes')

const setores = require('./routes/setores/setoresRoute')
const convenio = require('./routes/setores/convenioRoute')

const user = require('./routes/UserRoutes')

server.use(escola)
server.use(ei)
server.use(eja)
server.use(aee)
server.use(aluno)
server.use(professor)
server.use(pre)
server.use(creche)

server.use(servidor)

server.use(setores)
server.use(convenio)

server.use(user)

server.listen(PORT, () => {
    console.log('SERVIDOR FUNCIONANDO!')
})
