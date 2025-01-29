
/**                    Maneras de asignar strings        */

// String 
let nombre = 'Peter Parker';
console.log(nombre);

nombre = 'Ben Parker';
console.log(nombre);

nombre = "Tía May";
nombre = `Tía May`;

// Manera de imprimir que tipo de dato es la variable que se especifica.
console.log( typeof nombre );


/**                    Maneras de asignar booleanos        */

// Booleanos 
let esMarvel = true; // true o false en minusculas, si no se pone asi javascript lo toma como una variable



/**                    Maneras de asignar numeros        */
// Number
let edad = 33;
console.log( typeof edad );

edad = 33.001;
console.log( typeof edad );



// Los simbol permiten crear identificadores unicos en javascript
let simbol1 = Symbol('a');
let simbol2 = Symbol('a');

console.log(  simbol1 === simbol2 );