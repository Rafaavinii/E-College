class Boletim{
    private _nota: number
    private _num_falta: number
    private _situacao: boolean
    private _media: number

    constructor(nota: number, num_falta: number, situacao: boolean, media: number){
        this._nota = nota,
        this._num_falta = num_falta,
        this._situacao = situacao,
        this._media = media
    }

    public get nota() : number {
        return this._nota
    }

    public get num_falta() : number {
        return this._num_falta
    }

    public get situacao() : boolean {
        return this._situacao
    }

    public get media() : number {
        return this._media
    }

    
    public set nota(nota : number) {
        this._nota = nota;
    }

    public set num_falta(num_falta : number) {
        this._num_falta = num_falta;
    }

    public set situacao(situacao : boolean) {
        this._situacao = situacao;
    }

    public set media(media : number) {
        this._media = media;
    }

}