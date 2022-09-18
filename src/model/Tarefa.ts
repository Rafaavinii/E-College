export class Tarefa {

    private _id_rarefa: number
    private _nota: number
    private _data_entrega: Date
    private _prof_email: string

    constructor(id_rarefa: number, nota: number, data_entrega: Date, prof_email: string) {
        this._id_rarefa = id_rarefa
        this._nota = nota
        this._data_entrega = data_entrega
        this._prof_email = prof_email
    }

    public get id_rarefa(): number {
        return this._id_rarefa
    }

    public get prof_email(): string {
        return this._prof_email
    }

    public get nota(): number {
        return this._nota
    }

    public get data_entrega(): Date {
        return this._data_entrega
    }

    public set id_rarefa(id_rarefa: number) {
        this._id_rarefa = id_rarefa
    }

    public set prof_email(prof_email: string) {
        this._prof_email = prof_email
    }

    public set nota(nota: number) {
        this._nota = nota
    }

    public set data_entrega(data: Date) {
        this.data_entrega = data
    }

}