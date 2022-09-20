export interface Repositorio<T> {
    /**
     * Retorna todas as entidades que correspondem com o modelo dado.
     * 
     * Somente serão comparadas as propriedades que estão tanto no modelo como
     * nas instâncias das classes.
     * 
     * ### Exemplo
     * 
     * ```ts
     * class Pessoa {
     *  private _nome: string
     *  private _idade: number
     * 
     * constructor(nome: string, idade: number) {...}
     * 
     *  public get nome(): string {...}
     *  public get idade(): number {...}
     * }
     * 
     * ...
     * 
     * const pessoaRepositorio = new class implements Repositorio<Pessoa> {...}
     * 
     * ...
     * 
     * // Supondo que que as pessoas são
     * // [ Pessoa('Maria', 10), Pessoa('Silva', 43), Pessoa('Pedro', 34), Pessoa('João', 23), Pessoa('Pedro', 56) ]
     * 
     * const modelo = { nome: 'Pedro', sobrenome: 'Silva' }
     * const pessoas = await pessoaRepositorio.get(modelo)  // Retorna apenas [ Pessoa('Pedro', 34), Pessoa('Pedro', 56) ]
     * ```
     * 
     * @param modelo o que será comparado com as entidades
     * @returns Todas as entidades que correspondem com o modelo de dado
     */
    get(modelo: object): Promise<T[]>

    /**
     * 
     * 
     * @param entidade o que será adicionado no banco de dados
     * @returns se foi possível inserir a entidade
     */
    post(entidade: T): Promise<boolean>
}