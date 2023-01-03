// Esta linea se usa para importar la funcion que necesito del archivo multiplicar.
const { number, boolean } = require('yargs');
const {crearTabla} = require('./src/js/multiplicar');
const argv = require('./config/yargs');


console.clear();

// CODIGO POCO EFICIENTE
/* console.log (process.argv); // Regresa un array de strings
const [, , dato = 0] = process.argv; // Recupero el tercer string del array
const [,,,,,,, base = 0] = dato; */

console.log (argv);


crearTabla(argv.b, argv.l, argv.h)
    .then (res => console.log (`El archivo '${res}' se creo correctamente.`))
    .catch (err => console.log(err));
