const argv = require('yargs')
                    .option('b',{
                        alias : 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('l',{
                        alias: 'limitar',
                        type: 'boolean',
                        describe: 'Muestra la tabla por consola',
                        default: false
                    })
                    .option('h',{
                        alias: 'hasta',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es hasta donde irá la tabla de multiplicar'
                    })
                    .check((argv,options)=>{
                        if(isNaN(argv.b)){
                            throw 'La base tiene que ser un número'
                        }
                        return true;
                    })
                    .argv;


module.exports = argv;