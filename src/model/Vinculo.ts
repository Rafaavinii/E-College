export class Vinculo {

    private _id_vinculo: number
    private _data_contratacao: Date
    private _salario: number
    private _email_prof: string

    constructor(id_vinculo: number, data_contratacao: Date, salario: number, email_prof: string) {
        this._id_vinculo = id_vinculo
        this._data_contratacao = data_contratacao
        this._salario = salario
        this._email_prof = email_prof
    }

    public get id_vinculo(): number {
        return this._id_vinculo
    }

    public get email_prof(): string {
        return this._email_prof
    }

    public get data_contratacao(): Date {
        return this._data_contratacao
    }

    public get salario(): number {
        return this._salario
    }

    public set id_vinculo(id_vinculo: number) {
        this._id_vinculo = id_vinculo
    }

    public set email_prof(email_prof: string) {
        this._email_prof = email_prof
    }

    public set data_contratacao(data: Date) {
        this._data_contratacao = data
    }

    public set salario(salario: number) {
        this._salario = salario
    }

}