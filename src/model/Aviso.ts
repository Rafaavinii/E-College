export class Aviso {

    private _prof_email: string
    private _aviso: string

    constructor(prof_email: string, aviso: string) {
        this._prof_email = prof_email
        this._aviso = aviso
    }

    public get prof_email(): string {
        return this._prof_email
    }

    public get aviso(): string {
        return this._aviso
    }

    public set aviso(aviso: string) {
        this._aviso = aviso
    }

    public set prof_email(prof_email: string) {
        this._prof_email = prof_email
    }

}