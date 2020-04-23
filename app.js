const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then()
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}


//let base = baseParam.split('=')[1];
//
//crearArchivo(base)
//    .then(archivo => console.log(`Archivo creado: ${archivo}`))
//    .catch(err => console.log(err));