##Criação de Api Báic

##Instalação
npm init -y

##framework facilitador da criação da api.
```npm install express --save```


##Criação do arquivo de configuração
index.js
```
//inicialização do express
const app = require('express')();

//qual porta está rodando a api
app.listen(3000, () => console.log('Server running...'));

//Method
app.get('/', (req, res) => { 
    // resposta da rota "/"
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
    });
})


```