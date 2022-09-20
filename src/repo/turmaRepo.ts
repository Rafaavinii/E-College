import { Turma } from '../model/Turma'
import { Repositorio } from './repositorio'
import db from '../db'
import { conditions } from './query-parser'

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
            const { identificador } = entidade
            await db.query(`INSERT INTO ${this._tabela} VALUES ($1)`, [identificador])
            return true
        } catch {
            return false
        }
    }
}