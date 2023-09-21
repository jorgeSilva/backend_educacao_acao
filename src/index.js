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

server.use(escola)
server.use(ei)
server.use(eja)

server.listen(PORT, () => {
    console.log('SERVIDOR FUNCIONANDO!')
})
