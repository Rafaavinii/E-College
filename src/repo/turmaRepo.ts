import { Turma } from '../model/Turma'
import { Repositorio } from './repositorio'
import db from '../db'
import { conditions, insertion } from './query-parser'

export = new class implements Repositorio<Turma> {
    private _tabela = 'escola.turma'
    private _turma = new Turma('')

    async get(modelo: object): Promise<Turma[]> {
        const { query, params } = conditions(modelo, this._turma, this._tabela)

        const { rows } = await db.query(query, params)

        return rows.map(row => row as Turma)
    }

    async post(entidade: Turma): Promise<boolean> {
        try {
            const { query, params } = insertion(entidade, this._tabela)
            await db.query(query, params)
            return true
        } catch {
            return false
        }
    }
}