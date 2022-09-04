class Aula{
    private _horario: number

    constructor(horario: number){
        this._horario = horario
    }

    public get horario() : number {
        return this._horario
    }
    
    public set horario(horario : number) {
        this._horario = horario;
    }
    
}