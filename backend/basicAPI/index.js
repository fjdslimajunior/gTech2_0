//declaração do express
const app = require('express')();
const host = '127.0.0.1';
const port = 3000;

//ouvindo a porta
app.listen(port, () => console.log(`running: http://${host}:${port}`));

//Method
app.get('/', (req, res) => { 
    const data = {
        nome: 'n/a', idade: '10',
        frase: 'n/a', idade: '10',
        infor: 'n/a', idade: '10',
        context: 'n/a', idade: '10',
        calculator: 'n/a', idade: '10',
        interrogation: 'n/a', idade: '10'
    }
    console.log(data);
    res.send(data);
})


