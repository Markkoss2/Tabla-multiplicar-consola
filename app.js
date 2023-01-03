const fs = require ('fs');

let salida = '';
let base = 4;

console.clear();
console.log(`
*******************************
         Tabla del ${base}
*******************************`);

for (let i = 1; i < 11; i++){
    salida += (`${base} x ${i} = ${base * i} \n`);
}

console.log(salida);

fs.writeFile ( `tabla-${base}.txt`, salida, (error) => {
    if (error) throw ('Error al crear el archivo.');
    console.log(`El archivo tabla-${base}.txt se creo con exito.`);
});

/** writeFileSync
 * Es mas simple de implementar pero no captura que sucede con el error, por ello necesitamos usarlo dentro de un tray catch.

try {
    fs.writeFileSync (`tabla-${base}.txt`, salida);
    console.log(`El archivo tabla-${base}.txt se creo con exito.`);
} catch (error) {
    console.log(error);
}
 */