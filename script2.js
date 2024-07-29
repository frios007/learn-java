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

// function procesaFruta(manzanas, naranjas){
//     const jugo = `Hicimos jugo con ${manzanas} manzanas y ${naranjas} naranjas`;
//     return jugo;
// }

// let resultado= procesaFruta(2,3);
// console.log(resultado);

// const jugoNaranjaManzana = procesaFruta(7,5);
// console.log(jugoNaranjaManzana);


/*

======================== FUNCTION DECLARATION ====================== 
declaramos funcion y la podemos llamar incluso antes de definirla


function calcEdad(nacimiento){
    return 2024 - nacimiento;
}

const edad = calcEdad(2000);
console.log(edad);

======================== FUNCTION EXPRESSION ========================= 
almacenamos funciones dentro de variables, solo puede ser llamada luego de definirla

const calcEdad2 = function(nacimiento){
    return 2024 - nacimiento;
}

const edad2 = calcEdad2(2000);
console.log(edad, edad2);

*/


/*
======================== ARROW FUNCTION ========================= 

Nos facilita la sintaxis, ya que se escribe menos codigo, una variable tomara el nombre de la
funcion y puede retornar uno o mas resultados dependiendo de las instrucciones que se le brinden
si solo se trata de realizar una tarea, no sera necesario usar el enunciado return, pero si
necesitamos que devuelva más valores, si es requerido.


const edad = fecha_nacimiento => 2024 -  fecha_nacimiento;
const calcularEdad = edad(2000);
console.log(calcularEdad);

const anos_jubilacion = (fecha_nacimiento, nombre) => {
    const edad = 2024 - fecha_nacimiento;
    const jubilacion = 55 - edad;
    return `${nombre} se jubilara en ${jubilacion} años`; 
}

console.log(anos_jubilacion(2000, 'Fabio'));
console.log(anos_jubilacion(1972, 'Modesto'));

*/


/* 
======================== FUNCION DENTRO DE OTRA FUNCION ========================= 
de forma autoexplicativa como sugiere el titulo, esta forma de invocar funciones, es simplemente
para crear mas eficienca dentro de bloques de codigo y permite reutilizacion eficaz.

function cortarfrutas(cantidadDefruta){
    return cantidadDefruta * 4;
}

function procesaFruta(manzanas, naranjas){
    const trozosDeManzana = cortarfrutas(manzanas);
    const trozosDeNaranjas = cortarfrutas(naranjas);

    const jugo = `Para hacer jugo de manzana y naranja usamos ${trozosDeManzana} y ${trozosDeNaranjas} trozos respectivamente`;
    return jugo;
}

console.log(procesaFruta(4,6));

*/



/* 
================== REVISION DE FUNCIONES ===============

const calcEdad = function (year){
    return 2024 - year;
}

const tiempoParaJubilar = function (nacimiento, nombre){

    const edad = calcEdad(nacimiento);
    const jubilacion = 55 - edad;

    if(jubilacion < 0){
        console.log(`${nombre} ya se jubiló`);
        return 'aqui ocurrio algo malo';
    }else{
        console.log(`a ${nombre} le faltan ${jubilacion} años para jubilarse`);
        return jubilacion;
    }
}

console.log(tiempoParaJubilar(1968,'Pepe'));
console.log(tiempoParaJubilar(2000,'Fabio'));

*/




const calcAverage = (score1, score2, score3) => {
   return (score1 + score2 + score3) / 3;
}

const scoreDolphins = Math.round(calcAverage(44,23,71));
const scoreKoalas = Math.round(calcAverage(65, 54, 49));

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins>= avgKoalas*2){
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`)
    }else if(avgKoalas >= avgDolphins*2){
        console.log(`Koalas win ${avgDolphins} vs ${avgKoalas}`)
    }else{
        console.log('no team wins...')
    }
}

checkWinner(scoreDolphins, scoreKoalas);