const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')
const colors = require('colors')

console.log(argv.base)
console.log(argv.listar)
console.log(argv.alcance)

crearArchivo(argv.base,argv.listar,argv.alcance)
    .then(nombreArchivo => console.log(nombreArchivo, 'creada'.yellow))
    .catch(err => console.log(err))

//Sin yargs
// const [ , ,baseArg = 'base=5'] = process.argv;
// const [,base] = baseArg.split('=');
