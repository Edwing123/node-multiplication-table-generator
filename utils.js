const fs = require('fs/promises')

const createNumberTable = async (base, limit) => ({
    title: `Multiplication table for ${base}`,
    base,
    values: (() => {
        let count = 0
        let values = []

        while (count < limit) {
            count++
            values.push(`${base} x ${count} = ${base * count}`)
        }

        return values
    })()
})

const writeNumberTable = async (table) => {
    const slugTitle = table.title
        .toLowerCase()
        .replaceAll(' ', '-')

    const path = `./data/${slugTitle}.json`
    const output = JSON.stringify(table, null, 2)
    
    try {
        await fs.writeFile(path, output, 'utf-8')
        return path
    } catch (e) {
        throw Error('Could not write file.')
    }
}

const parseTableArgs = (args) => {
    const defaultOptions = {
        base: 12,
        limit: 12
    }

    const baseRE = /^(--base|-b)=(\d+)/
    const limitRE = /^(--limit|-lim)=(\d+)/
    const options = {}
    
    args.forEach((option) => {
        const base = option.match(baseRE)
        const limit = option.match(limitRE)

        base
            ? options.base = Number.parseInt(base[2])
            : void 0

        limit
            ? options.limit = Number.parseInt(limit[2])
            : void 0
    })

    return {
        ...defaultOptions,
        ...options
    }
}

module.exports = {
    createNumberTable,
    writeNumberTable,
    parseTableArgs
}