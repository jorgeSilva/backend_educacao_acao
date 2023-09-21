require('dotenv').config()
const express = require('express')
const cors = require('cors')
const server = express()

server.use(express.json())
server.use(cors())

const PORT = process.env.PORT

const escola = require('./routes/referenteEscola/escolaRoutes')
const ei = require('./routes/referenteEscola/eiRoutes')

server.use(escola)
server.use(ei)

server.listen(PORT, () => {
    console.log('SERVIDOR FUNCIONANDO!')
})
