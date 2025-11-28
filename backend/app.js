import express from 'express'
import { rotas } from './rotas.js';
import cors from 'cors'

const api = express()
api.use(cors())
api.use(express.json())

rotas(api)

api.listen(5007,()=>console.log('Servidor rodando na porta 5007'))