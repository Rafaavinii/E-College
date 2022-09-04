class Aluno{
    private _nome: string
    private _telefone: string
    private _matricula: string
    private _email: string

    constructor(nome: string, telefone: string, email: string, matricula: string){
        this._nome = nome,
        this._telefone = telefone,
        this._email = email,
        this._matricula = matricula
    }

    
    public get nome() : string {
        return this._nome
    }

    public get telefone() : string {
        return this._telefone
    }

    public get email() : string {
        return this._email
    }

    public get matricula() : string {
        return this._matricula
    }
    
    public set nome(nome : string) {
        this._nome = nome;
    }

    public set telefone(telefone : string) {
        this._telefone = telefone;
    }

    public set email(email : string) {
        this._email = email;
    }

    public set matricula(matricula : string) {
        this._matricula = matricula;
    }
    
}