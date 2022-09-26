import db from "../db";
import { Professor } from "../model/Professor";
import { conditions, insertion } from "./query-parser";
import { Repositorio } from "./repositorio";

export = new class implements Repositorio<Professor> {
    private _tabela = 'escola.professor'
    private _professor = new Professor('', '', '', '', 0, '')

    async get(modelo: object): Promise<Professor[]> {
        const { query, params } = conditions(modelo, this._professor, this._tabela)
        const { rows } = await db.query(query, params)

        return rows.map(row => row as Professor)
    }

    async post(entidade: Professor): Promise<boolean> {
        try {
            const { query, params } = insertion(entidade, this._tabela)
            await db.query(query, params)
            return true
        } catch {
            return false
        }
    }

}