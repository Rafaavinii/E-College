export class Presente {

    private _mat_aluno: string
    private _id_aula: number

    constructor(mat_aluno: string, id_aula: number) {
        this._mat_aluno = mat_aluno
        this._id_aula = id_aula
    }

    public get mat_aluno(): string {
        return this._mat_aluno
    }

    public get id_aula(): number {
        return this._id_aula
    }

    public set mat_aluno(mat_aluno: string) {
        this._mat_aluno = mat_aluno
    }

    public set id_aula(id_aula: number) {
        this._id_aula = id_aula
    }

}