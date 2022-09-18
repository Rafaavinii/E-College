export class Aula {

    private _id_aula: number
    private _horario: number
    private _cod_disc: string

    constructor(id_aula: number, horario: number, cod_disc: string) {
        this._id_aula = id_aula
        this._horario = horario
        this._cod_disc = cod_disc
    }

    public get id_aula(): number {
        return this._id_aula
    }

    public get cod_disc(): string {
        return this._cod_disc
    }

    public get horario(): number {
        return this._horario
    }

    public set horario(horario: number) {
        this._horario = horario
    }

    public set id_aula(id_aula: number) {
        this._id_aula = id_aula
    }

    public set cod_disc(cod_disc: string) {
        this._cod_disc = cod_disc
    }

}