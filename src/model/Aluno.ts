export class Aluno {

    private _nome: string
    private _telefone: string
    private _matricula: string
    private _email: string
    private _id_endereco: number
    private _id_turma: string

    constructor(nome: string, telefone: string, email: string, matricula: string, idEdereco: number, id_turma: string) {
        this._nome = nome
        this._telefone = telefone
        this._email = email
        this._matricula = matricula
        this._id_endereco = idEdereco
        this._id_turma = id_turma
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

    public get matricula(): string {
        return this._matricula
    }

    public get id_endereco(): number {
        return this._id_endereco
    }

    public get id_turma(): string {
        return this._id_turma
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

    public set matricula(matricula: string) {
        this._matricula = matricula
    }

    public set id_endereco(id_endereco: number) {
        this._id_endereco = id_endereco
    }

    public set id_turma(id_turma: string) {
        this._id_turma = id_turma
    }

}