const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.json({
        message: 'Привет, мир!'
    })
})

app.listen(3000, function () {  
    console.log('Сервер запущен!');
})