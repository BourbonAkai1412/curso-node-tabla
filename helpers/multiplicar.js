
const fs = require('fs');
const colors = require('colors');


const crearArchivoTabla = async ( valor = 5, listar = false, hasta = 20 ) => {


    try {
       
        
        let salida = '';
        let consola = '';

        for(let i = 1; i <= hasta; i++){

            salida += `${valor} x ${i} = ${valor * i}\n`;
            consola += `${valor} ${ 'x'.red } ${i} ${ '='.red } ${valor * i}\n`;
        }

        if (listar){
            console.log("=============".green);
            console.log('Tabla del:'.green, colors.blue( valor));
            console.log("=============".green);

            console.log(consola);
        }


        fs.writeFileSync(  `./salida/tabla-${ valor }.txt`, salida);

        return `tabla-${valor}.txt`;
        
    } catch (err) {
        throw err;
    }

    

}

module.exports = {
    crearArchivo: crearArchivoTabla
}