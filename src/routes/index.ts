import { Express } from 'express'
import turma from './turma'
import disciplina from './disciplina'
import aluno from './aluno'
import professor from './professor'

export = (app: Express) => {
    app.use('/turma', turma)
    app.use('/disciplina', disciplina)
    app.use('/aluno', aluno)
    app.use('/professor', professor)
}