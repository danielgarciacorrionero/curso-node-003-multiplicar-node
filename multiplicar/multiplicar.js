// requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido paraa la base ('${base}') no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido para el limite ('${limite}') no es un número`);
            return;
        }

        console.log(' ');
        console.log('  ==============='.green);
        console.log(`  = TABLA DEL ${base} =`.green);
        console.log('  ==============='.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`    ${base} * ${i} = ${base*i}`);
        }
        console.log(' ');
        return;
    });
};

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido para el limite ('${limite}') no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}-del-1-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}-del-1-al-${limite}.txt`);
        });


    });

};

module.exports = {
    crearArchivo,
    listarTabla
}