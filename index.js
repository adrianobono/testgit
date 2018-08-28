const express = require('express');
const app = express();

app.get('/', (req, res) => {

    res.status(200).send({ mensagem: 'ta funcionando' })

})

app.get('/ola', (req, res) => {

    res.status(200).send({ mensagem: 'ola' })

})


app.listen(4001, () => {


})
