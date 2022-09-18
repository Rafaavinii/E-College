import { Router } from 'express'
import { Turma } from '../model/Turma'
import repositorio from '../repo/turmaRepo'

const router = Router()

router.get('/', async (req, res) => {
    console.log('[GET] Obtendo turmas')

    const modelo = req.body
    const result = await repositorio.get(modelo)

    if (result.length === 0) {
        res.status(404)
    } else {
        res.status(200)
        res.send(result)
    }
    res.end()
})

router.post('/', async (req, res) => {
    console.log('[POST] Criando turma')

    const { identificador } = req.body

    const turma = new Turma(identificador)
    const result = await repositorio.post(turma)

    res.status(result ? 201 : 409)
    res.end()
})

export = router