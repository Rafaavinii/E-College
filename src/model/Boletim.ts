export class Boletim {

    private _id_boletim: number
    private _nota: number
    private _numFalta: number
    private _situacao: boolean
    private _media: number
    private _mat_aluno: string

    constructor(id_boletim: number, nota: number, num_falta: number, situacao: boolean, media: number, mat_aluno: string) {
        this._id_boletim = id_boletim
        this._nota = nota
        this._numFalta = num_falta
        this._situacao = situacao
        this._media = media
        this._mat_aluno = mat_aluno
    }

    public get id_boletim(): number {
        return this._id_boletim
    }

    public get mat_aluno(): string {
        return this._mat_aluno
    }

    public get nota(): number {
        return this._nota
    }

    public get num_falta(): number {
        return this._numFalta
    }

    public get situacao(): boolean {
        return this._situacao
    }

    public get media(): number {
        return this._media
    }

    public set mat_aluno(mat_aluno: string) {
        this._mat_aluno = mat_aluno
    }

    public set id_boletim(id_boletim: number) {
        this._id_boletim = id_boletim
    }

    public set nota(nota: number) {
        this._nota = nota
    }

    public set num_falta(num_falta: number) {
        this._numFalta = num_falta
    }

    public set situacao(situacao: boolean) {
        this._situacao = situacao
    }

    public set media(media: number) {
        this._media = media
    }

}