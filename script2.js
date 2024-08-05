"use strict";
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

/* 
const amigos = ['Fabio', 'Jose', 'Pablo'];
//Añadir Elementos
const newLenght = amigos.push('Victor'); // Metodo push agrega un valor al final, tambien devuelve el nuevo valor del tamaño del array
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

*/

/*
=================== EJERCICIO CON ARRAY Y FUNCIONES ================
function calcPropina(cuenta) {
    // Alternativa era usar
    // return cuenta<= 300 && cuenta>=50 ? cuenta * 0.15 : cuenta * 0.20;
    //Lo que se entiende como que si la cuenta esta entre 300 y 50, se retorna el 15%
    // de lo contrario, expresado con dos puntos en la sintaxis, se retorna el 20%
 if(cuenta >=50 && cuenta <= 300){
    return cuenta * 0.15;
 }else{
    return cuenta * 0.2;
 }
}


let bills = [125, 555, 44];
let tips = [calcPropina(bills[0]), calcPropina(bills[1]), calcPropina([2])];
let totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(`estos son los resultados:
    Cuentas: ${bills}
    Propinas: ${tips}
    Totales: ${totals}`);

*/

/*
=================== INTRODUCCION A OBJETOS =================
        DOT y BRACKET notation para acceder a objetos


let fabio = {
    primerNombre: 'Fabio',
    apellido: 'Rios',
    edad: 2000,
    trabajo: 'ingeniero',
    amigos: ['Juan', 'Mateo', 'Lucas']
}

//DOT
console.log(fabio.primerNombre);
//BRACKET
console.log(fabio['primerNombre']);

const nameKey = 'Nombre';
const lastKey = 'apellido';
console.log(fabio['primer' + nameKey], fabio[lastKey]);

// let busqueda = prompt('elige que deseas ver: primerNombre, apellido, edad, trabajo o amigos');

// if(fabio[busqueda]){
//     console.log(fabio[busqueda]);
// }else{
//     console.log('Malos datos');
// }

fabio.pais = 'Nicaragua';
fabio['X'] = 'alrios77';
console.log(fabio);

console.log(fabio.primerNombre + ' tiene '+ fabio.amigos.length + ' amigos, y su mejor amigo se llama '+ fabio.amigos[0]);

*/

/*
=================== AVANCES EN OBJETOS =================

// Resulta que los objetos incluso pueden albergar funciones!! dentro de ellos, y podran ser invocadas primero llamando al objeto y luego corriendo la funcion segun los parametros y configuracion que tenga.

let fabio = {
    primerNombre: 'Fabio',
    apellido: 'Rios',
    nacimiento: 2000,
    trabajo: 'ingeniero',
    amigos: ['Juan', 'Mateo', 'Lucas'],
    licencia: false,

    // Forma 1
    // calcAge: function(){
    //     return 2024 - this.edad;
    // }

    //forma 2
    calcAge: function(){
        this.edad = 2024 - this.nacimiento;
        return this.edad;
    },
    
    resumen: function(){
        return `${this.primerNombre} es un ${this.trabajo} de ${this.calcAge()} años y ${this.licencia ? 'tiene licencia de conducir' : 'no tiene licencia de conducir'}`;
    }
}

// console.log(fabio.calcAge());
// console.log(fabio.edad);
console.log(fabio['resumen']());


let mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function(){
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }

    }

let john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function(){
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }

    }

    if(mark['calcBMI']() > john.calcBMI()) {
        console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
    } else{
        console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
    }

*/

/*
====================== INTRODUCCION A CICLOS ====================
for contiene 3 partes:
1. Contador: Cifra numerica donde inciaria el ciclo
2. Condicion Logica: donde le indicamos la condicion donde seguira corriendo mientras sea TRUE
cuando alcance un valor FALSE, el ciclo para.
3. Incremento/Decremento: apoya a la logica de la condicion para que se cumpla.

Ciclo para levantar pesas:
for(let rep = 1; rep <= 10; rep++){
    console.log(`Haciendo repeticion ${rep}`);
    }


const fabioArray = [
  "Fabio",
  "Rios",
  2024 - 2000,
  "Ingeniero",
  ["Juan", "Mateo", "Lucas"],
  true,
];

const tipos = [];

for (let i = 0; i < fabioArray.length; i++) {
  console.log(fabioArray[i], typeof fabioArray[i]);
  //tipos[i] = typeof fabioArray[i];
  tipos.push(typeof fabioArray[i]);
}

console.log(tipos);
console.log("--------------------------------------------------------");

const fechas = [2000, 1972, 1977, 2002, 2007];
const cumples = [];

for (let i = 0; i < fechas.length; i++) {
  cumples.push(2024 - fechas[i]);
}
console.log(cumples);
console.log(
  "================= USO DE CONTINUE Y BREAK EN CICLO FOR ======================"
);

// ================= USO DE CONTINUE Y BREAK EN CICLO FOR ======================

//CONTINUE
console.log("CONTINUE:");
for (let i = 0; i < fabioArray.length; i++) {
  if (typeof fabioArray[i] !== "string") continue;

  console.log(fabioArray[i]);
}

//BREAK
console.log("BREAK:");
for (let i = 0; i < fabioArray.length; i++) {
  if (typeof fabioArray[i] === "number") break;
  console.log(fabioArray[i]);
}

*/

/* 
======================= FINALIZACION CICLOS FOR =================
Ciclar de atras hacia adelante



const fabio = [
  "Fabio",
  "Rios",
  2024 - 2000,
  "Ingeniero",
  ["Juan", "Mateo", "Lucas"],
  true,
];

for (let x = fabio.length - 1; x >= 0; x--) {
  console.log(fabio[x]);
}

for (let i = 1; i < 4; i++) {
  console.log(`\n \n \n-----Set ${i} de push-------`);

  for (let j = 1; j < 6; j++) {
    console.log(`  *Rep ${j} de set ${i}`);

    for (let k = 1; k < 2; k++) {
      console.log(`     ${k} Descanso 30s set ${i} de ejercicio ${j}`);
    }
  }
}

*/

/* ================== INTRODUCCION A WHILE LOOP ================ 
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Haciendo repeticion ${rep}`);
  rep++;
}
console.log("\n");

let dado = Math.trunc(Math.random() * 6 + 1);
console.log(dado);

while (dado !== 6) {
  console.log(`rodó numero ${dado}`);
  dado = Math.trunc(Math.random() * 6 + 1);
  if (dado === 6) {
    console.log("rodó 6, el ciclo terminó...");
  }
}

*/

const cuentas = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const propinas = [];
const totales = [];

const calcPropina = function (cuenta) {
  return cuenta >= 50 && cuenta <= 300 ? cuenta * 0.15 : cuenta * 0.2;
};

for (let i = 0; i < cuentas.length; i++) {
  propinas.push(calcPropina(cuentas[i]));
}

for (let j = 0; j < propinas.length; j++) {
  totales.push(cuentas[j] + propinas[j]);
}

console.log(
  `cuentas: ${cuentas}  \n \npropinas: ${propinas}  \n \ntotales: ${totales}`
);

const calcAvrg = function (arr) {
  let sum = 0;
  for (let i = 0; i < totales.length; i++) {
    sum = sum + totales[i];
  }
  return sum / totales.length;
};

console.log(`\nEl promedio de las cuentas totales es: ${calcAvrg(totales)}`);
