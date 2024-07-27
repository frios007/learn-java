'use strict';
// Ctrl + } = comentarios
// modo estricto nos salavara de dejar bugs no deseados empezando desde 
// olvidar una letra hasta palabras reservadas

/*
let tieneLicenciaDeConducir = false;
const aproboExamen = true;

if(aproboExamen) tieneLicenciaDeConducir = true;
if(tieneLicenciaDeConducir) console.log("a manejar");
*/


// const interface ='audio';
// const private = 'lsad2';
// const if = 'if';


// *****************************************************************************************

// funciones: son fragmentos de codigo que podemos reutilizar
 
/*
function logger(){
    console.log("Me llamo Fabio");
}

// invocando o corriendo o llamando la funcion:
logger();
logger();
logger();
*/

function procesaFruta(manzanas, naranjas){
    const jugo = `Hicimos jugo con ${manzanas} manzanas y ${naranjas} naranjas`;
    return jugo;
}

let resultado= procesaFruta(2,3);
console.log(resultado);

const jugoNaranjaManzana = procesaFruta(7,5);
console.log(jugoNaranjaManzana);