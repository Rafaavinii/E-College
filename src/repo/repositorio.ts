export interface Repositorio<T> {
    get(modelo: object): Promise<T[]>
    post(entidade: T): Promise<boolean>
}