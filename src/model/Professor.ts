class Professor{

    private _nome: string
    private _telefone: string
    private _email: string

    constructor(nome: string, telefone: string, email: string){
        this._nome = nome,
        this._telefone = telefone,
        this._email = email
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
    
    public set nome(nome : string) {
        this._nome = nome;
    }

    public set telefone(telefone : string) {
        this._telefone = telefone;
    }

    public set email(email : string) {
        this._email = email;
    }
    
    
}