import db from '../db'
import { Disciplina } from '../model/Disciplina'
import { conditions, insertion } from './query-parser'
import { Repositorio } from './repositorio'

export = new class implements Repositorio<Disciplina> {
    private _tabela = 'escola.disciplina'
    private _disciplina = new Disciplina('', '', 0, [])

    async get(modelo: object): Promise<Disciplina[]> {
        const { query, params } = conditions(modelo, this._disciplina, this._tabela)

        const { rows } = await db.query(query, params)

        return rows.map(row => row as Disciplina)
    }

    async post(entidade: Disciplina): Promise<boolean> {
        try {
            const { query, params } = insertion(entidade, this._tabela)
            await db.query(query, params)
            return true
        } catch (error) {
            return false
        }
    }
    
}