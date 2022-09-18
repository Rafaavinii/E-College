import { Express } from 'express'
import turma from './turma'
import disciplina from './disciplina'
import aluno from './aluno'

export = (app: Express) => {
    app.use('/turma', turma)
    app.use('/disciplina', disciplina)
    app.use('/aluno', aluno)
}