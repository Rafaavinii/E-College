class Endereco{
    private _logradouro: string
    private _cidade: string
    private _cep: string
    private _numero: number

    constructor(logradouro: string, cidade: string, cep: string, numero: number) {
        this._logradouro = logradouro,
        this._cidade = cidade,
        this._cep = cep,
        this._numero = numero
    }

    public get logradouro() : string {
        return this._logradouro
    }

    public get cidade() : string {
        return this._cidade
    }

    public get cep() : string {
        return this._cep
    }

    public get numero() : number {
        return this._numero
    }

    
    public set logradouro(logradouro : string) {
        this._logradouro = logradouro;
    }

    public set cidade(cidade : string) {
        this._cidade = cidade;
    }

    public set cep(cep : string) {
        this._cep = cep;
    }

    public set numero(numero : number) {
        this._numero = numero;
    }
}