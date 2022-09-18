export class Turma {

    private _identificador: string

    constructor(identificador: string) {
        this._identificador = identificador
    }

    public get identificador(): string {
        return this._identificador
    }

    public set identificador(id: string) {
        this.identificador = id
    }

}