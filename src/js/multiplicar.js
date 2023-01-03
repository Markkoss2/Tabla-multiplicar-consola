const fs = require ('fs');
const colors = require ('colors');

const crearTabla = async (base = 0, l = false, hasta = 11) => {
    try {
        let salida = '';
        let consola = '';

        console.log('*******************************'.green);
        console.log('         Tabla del ',colors.blue(base));
        console.log('*******************************'.green);

        for (let i = 1; i <= hasta; i++){
            salida += (`${base} x ${i} = ${base * i} \n`);
            consola += (`${base} x ${i} ${'='.green} ${base * i} \n`);
        }

        // Si se manda la bandera l muestra la salida en consola
        (l) ? console.log(consola) : console.log({l});
        
        // Escribe el archivo en un txt
        fs.writeFileSync (`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`.white.bgBlack;

    } catch (error) {
        throw (error);
    }

}

// Esta linea se usa para EXPORTAR la funcion crearTabla
module.exports = {
    crearTabla,
}