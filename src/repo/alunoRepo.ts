import db from '../db'
import { Aluno } from '../model/Aluno'
import { conditions, insertion } from './query-parser'
import { Repositorio } from './repositorio'

export = new class implements Repositorio<Aluno> {
    private _tabela = 'escola.aluno'
    private _aluno = new Aluno('', '', '', '', 0, '')

    async get(modelo: object): Promise<Aluno[]> {
        const { query, params } = conditions(modelo, this._aluno, this._tabela)

        const { rows } = await db.query(query, params)

        return rows.map(linha => {
            const { nome, telefone, email, id_endereco, id_turma, matricula } = linha
            return new Aluno(nome, telefone, email, matricula, id_endereco, id_turma)
        })
    }

    async post(entidade: Aluno): Promise<boolean> {
        try {
            const { query, params } = insertion(entidade, this._tabela)
            await db.query(query, params)
            return true
        } catch {
            return false
        }
    }

}