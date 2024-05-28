const argv = require('yargs')
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
        })
    .options('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
        })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'la base tiene que se un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;