class Aviso{
    private _aviso: string

    constructor(aviso: string){
        this._aviso = aviso
    }
    
    public get aviso() : string {
        return this._aviso
    }

    
    public set aviso(aviso : string) {
        this._aviso = aviso;
    }
    
    
}