import express from 'express'
import { Router } from 'express'
import dotenv from 'dotenv'
import mountRoutes from "./routes"

dotenv.config()

const PORT = parseInt(process.env.PORT ?? '3333')

const app = express()
const route = Router()

app.use(express.json())

route.get('/', (_req, res) => {
  res.sendFile('./view/index.html', { root: __dirname })
})

app.use(route)
mountRoutes(app)

app.listen(PORT, () => console.log(`[START] Servidor rodando na porta ${PORT}`))