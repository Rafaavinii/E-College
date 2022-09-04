class Titulacao{
    private _titulo: string

    constructor(titulo: string){
        this._titulo = titulo
    }
    
    public get titulo() : string {
        return this._titulo
    }
    
    public set titulo(titulo : string) {
        this._titulo = titulo;
    }
    
    
}