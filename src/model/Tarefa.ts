class Tarefa{
    private _nota: number
    private _data_entrega: Date

    constructor(nota: number, data_entrega: Date) {
        this._nota = nota,
        this._data_entrega = data_entrega
    }

    public get nota() : number {
        return this._nota
    }
    
    public get data_entrega() : Date {
        return this._data_entrega
    }

    public set nota(nota : number) {
        this._nota = nota;
    }
    
    public set data_entrega(data : Date) {
        this.data_entrega = data;
    }
}