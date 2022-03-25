const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const crearArchivo = async(base,limitar,hasta) =>{
    try{
        let salida = '';
        
        for(let i=1;i<=hasta;i++){
            salida += `${base} x ${i} = ${i*base}\n`;
        }
        if (limitar){
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

        return `tabla-${base}.txt`;
    }
    catch(err){
        throw err;
    }
    
}

module.exports = {
    crearArchivo
}

// const crearArchivo = (base) =>{
//     const promesa = new Promise((resolve,reject)=>{
//         let salida = '';

//         for(let i=1;i<=10;i++){
//             salida += `${base} x ${i} = ${i*base}\n`;
//         }

//         console.log(salida);

//         fs.writeFileSync(`tabla-${base}.txt`,salida);

//         resolve(`tabla-${base}.txt`);
//     })
//     return promesa;
// }

