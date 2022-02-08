const fs = require('fs')
const colors = require('colors')

const folder = './tablas'

const crearArchivo = async(base = 5,listar = false,alcance = 10) => {
    try{
        let salida,salidaPura = `===========================
        Tabla del ${base}
===========================\n`;
        
        for(let x = 1; x <= alcance; x++){
            if (x < alcance){
                salida += `${base} ${'x'.green} ${x} ${'='.green} ${base*x}\n`;
                salidaPura += `${base} x ${x} = ${base*x}\n`;
            }else{
                salida += `${base} ${'x'.green} ${x} ${'='.green} ${base*x}`;
                salidaPura += `${base} x ${x} = ${base*x}`;

            }
        }
        if (listar) console.log(salida)
        if(!fs.existsSync(folder)){
            fs.mkdirSync(folder)
        }
        fs.writeFileSync(`tablas/tabla-${base}.txt`,salidaPura);
        if (salida) {
            return (`tabla-${base}.txt`.green);
        }else{
            return (`No se puedo crear la tabla del ${base}`.red);
        }
    
    }catch (err){
        throw err
    }

        
}


// const crearArchivo = (base = 5) => {
//     return new Promise((resolve,reject) => {
//         let salida = `===========================
//         Tabla del ${base}
// ===========================\n`;
    
//         for(let x = 1; x <= 10; x++){
//             x < 10 
//             ? salida += `${base} x ${x} = ${base*x}\n` 
//             : salida += `${base} x ${x} = ${base*x}`;
//         }
//         console.log(salida)
//         fs.writeFileSync(`tabla-${base}.txt`,salida);
//         (salida) 
//         ? resolve(`tabla-${base}.txt`)
//         : reject (`No se puedo crear la tabla del ${base}`)

        
//     })
// }

module.exports = {crearArchivo};