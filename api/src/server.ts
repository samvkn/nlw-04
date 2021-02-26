// Importando o micro-framework Express
import express from 'express'

// Guardando o Express dentro de uma const app
const app = express()

// Fazendo o Express "escutar" a porta 3333 e exibindo uma mensagem no console 
// é o equivalente a express().listen() já que antes guardamos o express dentro da const app

app.listen(3333, () => console.log('Server is running'))