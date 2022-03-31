const { principal } = require('./src/index')

principal()

const express = require('express')
const path = require("path")
const { dirname } = require('path/posix')
const app = express()
const port = 3500

app.use('/', express.static(path.join(__dirname, 'public/')))

app.get('/gaiaorganicos', (req, res) => {
    res.send('lojinha de rua hey')
  });

app.listen(port, function (){
    console.log('Servidor funcionando na porta' + port)
});