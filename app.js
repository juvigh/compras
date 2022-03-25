const { principal } = require('./src/index')

principal()

const express = require('express')
const app = express()
const port = 3500

app.get('/gaiaorganicos', (req, res) => {
    res.send('lojinha de rua hey')
  })

app.listen(port, function (){
    console.log('Servidor funcionando na porta' + port)
})