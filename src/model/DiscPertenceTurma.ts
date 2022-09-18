export class DiscPretenceTurma {

    private _cod_disc: string
    private _id_turma: string

    constructor(cod_disc: string, id_turma: string) {
        this._id_turma = id_turma
        this._cod_disc = cod_disc
    }

    public get cod_disc(): string {
        return this._cod_disc
    }

    public get id_turma(): string {
        return this._id_turma
    }

    public set cod_disc(cod_disc: string) {
        this._cod_disc = cod_disc
    }

    public set id_turma(id_turma: string) {
        this._id_turma = id_turma
    }

}