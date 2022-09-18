interface QueryConfig {
    query: string
    params: any[]
}

function conditions(options: object, model: object, table: string): QueryConfig {
    const entries = Object.entries(options)
        .filter(entry => Reflect.has(model, entry[0]))

    if (entries.length == 0) {
        return {
            query: `SELECT * FROM ${table}`,
            params: []
        }
    }

    const conditions = entries.map((entry, i) => `${entry[0]} = $${i + 1}`).join(' AND ')
    const params = entries.map(entry => entry[1])

    return {
        query: `SELECT * FROM ${table} WHERE ${conditions}`,
        params: params
    }
}

function insertion(entity: object, table: string): QueryConfig {
    const entries = Object.entries(entity)
    const colunas = entries.map(entry => entry[0].substring(1)).join(', ')
    const placeholders = entries.map((_, i) => `$${i + 1}`).join(', ')
    const params = entries.map(entry => entry[1])

    return {
        query: `INSERT INTO ${table}(${colunas}) VALUES (${placeholders})`,
        params: params
    }
}

export {
    conditions,
    insertion
}