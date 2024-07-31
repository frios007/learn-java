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


========= SINTAXIS CORRECTA DE ARROW FUNCTIONS: ============
const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = Math.round(calcAverage(44,23,71));
const scoreKoalas = Math.round(calcAverage(65, 54, 49));

function checkWinner(avgDolphins, avgKoalas){
    if  (avgDolphins >= avgKoalas * 2){
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`)
        } else if(avgKoalas >= avgDolphins * 2){
        console.log(`Koalas win ${avgDolphins} vs ${avgKoalas}`)
        } else{
        console.log('no team wins...')
    }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(600, 300);
console.log(scoreDolphins, scoreKoalas);

*/


/* 
================ INTRODUCCION A ARRAYS =============


// Forma 1
const amigos = ['Fabio', 'Jose', 'Pablo'];
console.log(amigos);

//Forma 2: muy grafica e intuitiva
const fechas = new Array(1999, 2000, 2001, 2003);
console.log(fechas);

console.log(amigos[0]);
console.log(amigos[2]);

console.log(amigos.length);
console.log(fechas[fechas.length - 1]);

amigos[2] = 'Pedri';
console.log(amigos);

const yo = ['Fabio', 'Rios', 2024 - 2000, 'ingeniero', amigos];
console.log(yo);


const calcEdad = bd => 2024 - bd;

const edad = console.log(calcEdad(fechas[0]));
const edad2 = console.log(calcEdad(fechas[1]));
const edad3 = console.log(calcEdad(fechas[fechas.length -1]));

const edades= [calcEdad(fechas[0]), calcEdad(fechas[1]), calcEdad(fechas[fechas.length-1])];
console.log(edades);
*/

// =============== METODOS DE ARRAY ========================

const amigos = ['Fabio', 'Jose', 'Pablo'];
//Añadir Elementos
const newLenght = amigos.push('Victor'); // Metodo push agrega un valor al incio, tambien devuelve el nuevo valor del tamaño del array
console.log(amigos);
console.log(newLenght);

amigos.unshift('Juan'); // Metodo unshift agrega un valor al inicio del array, tambien devuelve el nuevo tamaño
console.log(amigos); 

//Remover Elementos
amigos.pop(); // descarta el ultimo elemento que se encuentra en el array
amigos.pop(); // tambien retorna el valor del elemento que descarto
console.log(amigos);

amigos.shift(); // descarta el primer valor del array, tambien puede devolver el valor de lo que descarto
console.log(amigos);

//Saber la posicion de un elemento en el arrayy
console.log(amigos.indexOf('Fabio')); // devuelve el indice numerico 
console.log(amigos.indexOf('Bob')); // si no lo encuentra devuelve -1

//Saber si el array contiene un elemento: Devolver un boolean
console.log(amigos.includes('Fabio')); // Sensitivo a las mayusculas!
console.log(amigos.includes('carmen'));

//Uso practico con condicionales
if(amigos.includes('Juan')){
    console.log("Fabio es tu amigo");
}else{
    console.log('No conoces a Fabio');
}
