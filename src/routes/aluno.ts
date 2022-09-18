import { Router } from 'express'
import { Aluno } from '../model/Aluno'
import alunoRepo from '../repo/alunoRepo'

const router = Router()

router.get('/', async (req, res) => {
    console.log('[GET] Obtendo alunos')

    const modelo = req.body
    const result = await alunoRepo.get(modelo)

    if (result.length === 0) {
        res.status(404)
    } else {
        res.status(200)
        res.send(result)
    }

    res.end()
})

router.post('/', async (req, res) => {
    console.log('[POST] Criando aluno')

    const { nome, telefone, email, matricula, id_endereco, id_turma } = req.body
    const aluno = new Aluno(nome, telefone, email, matricula, id_endereco, id_turma)
    const result = await alunoRepo.post(aluno)

    res.status(result ? 201 : 409)
    res.end()
})

export = router