export class Disciplina {

    private _codigo: string
    private _descricao: string
    private _carga_horaria: number
    private _ementa: string[]

    constructor(cod: string, descricao: string, carga_horaria: number, ementa: string[]) {
        this._codigo = cod
        this._descricao = descricao
        this._carga_horaria = carga_horaria
        this._ementa = ementa
    }

    public get codigo(): string {
        return this._codigo
    }

    public get descricao(): string {
        return this._descricao
    }

    public get carga_horaria(): number {
        return this._carga_horaria
    }

    public get ementa(): string[] {
        return this._ementa
    }

    public set codigo(codigo: string) {
        this._codigo = codigo
    }

    public set carga_horaria(carga_horaria: number) {
        this._carga_horaria = carga_horaria
    }

    public set descricao(descricao: string) {
        this._descricao = descricao
    }

    public set ementa(ementa: string[]) {
        this._ementa = ementa
    }

}