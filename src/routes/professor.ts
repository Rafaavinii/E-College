import { Router } from "express";
import { Professor } from "../model/Professor";
import repositorio from "../repo/professorRepo";

const router = Router()

router.get('/', async (req, res) => {
    console.log('[GET] Obtendo professores')

    const model = req.body
    const result = await repositorio.get(model)

    if (result.length === 0) {
        res.status(404)
    } else {
        res.status(200)
        res.send(result)
    }
    res.end()
})

router.post('/', async (req, res) => {
    console.log('[POST] Criando professor')

    const entity = req.body as Professor
    const result = await repositorio.post(entity)

    res.status(result ? 201 : 409)
})

export = router