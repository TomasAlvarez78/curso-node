const argv = require('yargs')
    .options({
        'b':{
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Base para multiplicar'
        },
        'l':{
            alias: 'listar',
            type: 'boolean',
            describe: 'Muestra la tabla en consola'
        },
        'a':{
            alias: 'alcance',
            type: 'number',
            default: 10,
            describe: 'Alcance de la operacion'
        }
    }).check( (argv,options) => {
        if (isNaN(argv.b)){
            throw "La base tiene que ser numero"
        }
        if (isNaN(argv.a)){
            throw "El alcance tiene que ser numero"
        }
        if (!argv.l){
            argv.listar = false
        }
        return true
    }).argv;


module.exports = argv;