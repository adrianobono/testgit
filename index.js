const express = require('express');
const app = express();

app.get('/', (req, res) => {

    res.status(200).send({ mensagem: 'ta funcionando' })

})


app.listen(4001, () => {


})