// El paquete yargs me permite hacer muchas cosas, ver 
const argv = require ('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Crear tabla de multiplicar del numero pasado a (base)'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        describe:'Muestra o lista en consola la tabla creada, por defecto no se muestra'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe:'Hasta que numero quiero que se cree la tabla.'
    })
    .check( (argv, options) => {
        if (isNaN (argv.b)) {
            throw ('La base tiene que ser un numero');
        }
        return true;
    })
    .argv;

module.exports = argv;