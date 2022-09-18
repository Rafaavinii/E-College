export class Professor {

    private _nome: string
    private _titulacao: string
    private _telefone: string
    private _email: string
    private _id_endereco: number
    private _cod_disc: string

    constructor(nome: string, titulacao: string, telefone: string, email: string, id_endereco: number, cod_disc: string) {
        this._nome = nome
        this._titulacao = titulacao
        this._telefone = telefone
        this._email = email
        this._id_endereco = id_endereco
        this._cod_disc = cod_disc
    }

    public get titulacao(): string {
        return this._titulacao
    }

    public get id_endereco(): number {
        return this._id_endereco
    }

    public get cod_disc(): string {
        return this._cod_disc
    }

    public get nome(): string {
        return this._nome
    }

    public get telefone(): string {
        return this._telefone
    }

    public get email(): string {
        return this._email
    }

    public set titulacao(titulacao: string) {
        this._titulacao = titulacao
    }

    public set id_endereco(id_endereco: number) {
        this._id_endereco = id_endereco
    }

    public set cod_disc(cod_disc: string) {
        this._cod_disc = cod_disc
    }

    public set nome(nome: string) {
        this._nome = nome
    }

    public set telefone(telefone: string) {
        this._telefone = telefone
    }

    public set email(email: string) {
        this._email = email
    }

}