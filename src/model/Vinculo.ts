class Vinculo {

    private _data_contratacao: Date
    private _salario: number

    constructor(data_contratacao: Date, salario: number) {
        this._data_contratacao = data_contratacao,
        this._salario = salario
    }

    public get data_contratacao() : Date {
        return this._data_contratacao
    }
    
    public get salario() : number {
        return this._salario
    }

    public set data_contratacao(data : Date) {
        this._data_contratacao = data;
    }

    public set salario(salario : number) {
        this._salario = salario;
    }
    
    
}