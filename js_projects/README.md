# Roteiro


- instalação do node JS.
-  Conhecendo [NPM](https://www.npmjs.com/)

## Inicialize o package.json  usando terminal
```
 > npm init -y
```

## Inicialize o jason-server (dependência no package.jason)

```
> npm install jason-server
```

## Inicialize o servidor local de testes
```
> npx json-server api.json --watch --port 3000
```

## Criação de uma api (api.json)
- criar um aquivo com extensão .json (exemplo: api.json)

### Estrutura base
```
> 
{
    "tarefa": [
        "id": 1,
        "nome": "Antonio A da Silva"
    ]
} 
```






### Menção! 
Verbos http Get, post, put, patch e Delete