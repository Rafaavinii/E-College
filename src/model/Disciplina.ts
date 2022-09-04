class Disciplina{
    private _codigo: number
    private _descricao: string
    private _carga_horaria: number
    private _ementa: string
    private _bibliografia: string

    constructor(cod: number, descricao: string, carga_horaria:number, ementa: string, bibliografia: string){
        this._codigo = cod,
        this._descricao = descricao,
        this._carga_horaria = carga_horaria,
        this._ementa = ementa,
        this._bibliografia = bibliografia
    }

    public get codigo() : number {
        return this._codigo
    }

    public get descricao() : string {
        return this._descricao
    }

    public get carga_horaria() : number {
        return this._carga_horaria
    }

    public get ementa() : string {
        return this._ementa
    }

    public get bibliografia() : string {
        return this._bibliografia
    }

    public set codigo(codigo : number) {
        this._codigo = codigo;
    }

    public set carga_horaria(carga_horaria : number) {
        this._carga_horaria = carga_horaria;
    }

    public set descricao(descricao : string) {
        this._descricao = descricao;
    }

    public set ementa(ementa : string) {
        this._ementa = ementa;
    }

    public set bibliografia(bibliografia : string) {
        this._bibliografia = bibliografia;
    }

}