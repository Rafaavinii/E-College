import { Router } from 'express'
import { Disciplina } from '../model/Disciplina'
import disciplinaRepo from '../repo/disciplinaRepo'

const router = Router()

router.get('/', async (req, res) => {
    console.log('[GET] Obtendo disciplinas')

    const modelo = req.body
    const result = await disciplinaRepo.get(modelo)

    if (result.length === 0) {
        res.status(404)
    } else {
        res.status(200)
        res.send(result)
    }
    res.end()
})

router.post('/', async (req, res) => {
    console.log('[POST] Criando disciplina')

    const { codigo, descricao, ementa, carga_horaria } = req.body

    const entidade = new Disciplina(codigo, descricao, carga_horaria, ementa)
    const result = await disciplinaRepo.post(entidade)

    res.status(result ? 201 : 409)
    res.end()
})

export = router