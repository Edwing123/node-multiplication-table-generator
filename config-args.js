require('colors/safe')

module.exports = require('yargs')
    .scriptName('table-generator')
    .option('base', {
        alias: 'b',
        describe: 'The base number to be used in the multiplication table',
        type: 'number',
        demandOption: true
    })
    .option('limit', {
        alias: 'l',
        default: 12,
        describe: 'The limit number to be used in the multiplication table',
        type: 'number'
    })
    .option('list', {
        alias: 'ls',
        default: false,
        describe: 'List the multiplication table results',
        type: 'boolean'
    })
    .wrap(process.stdout.columns ? Math.min(process.stdout.columns, 100) : 100)
    .check((argv, options) => {
        if (argv.base !== argv.base) {
            throw `The argument base must be a number.`.red.bold
        }

        return true
    })
    .argv