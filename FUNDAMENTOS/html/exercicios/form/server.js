//aqui iremos configurar a parte do backend do nosso formulário e incluir os dados dos usuários no servidor

//linha 1 > estamos importando o express e o bodyParser(função de análisar o corpo do request(Nome: ... ), pegando os dados e colocando dentro do servidor, coletando os dados)
//urlencoded > utilziado como padrão 
//app.post('/usuarios') colocaria os dados dentro da URL denominada de usuarios

//app.listen ele vai rodar na porta 3003


const bodyParser = require('body-parser')
const express = require('express')
const app = express() 

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) =>{
    console.log(req.body)
    resp.send('Parabéns. Usuário Incluido!')
})

app.post('/usuarios/:id', (req, resp) =>{
    console.log(req.params.id)
    console.log(req.body)
    resp.send('Parabéns. Usuário Alterado!!!')
})

app.listen(3003)