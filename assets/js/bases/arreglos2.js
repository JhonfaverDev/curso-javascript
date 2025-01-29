let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[2 - 2]; // Hacer referencia a un elemento del arreglo
let ultimo = juegos[juegos.length - 1]; // Hacer referencia al último elemento del arreglo

console.log({primero, ultimo}); // Imprimir en consola

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
}); // Recorrer un arreglo

let nuevaLongitud = juegos.push('F-Zero'); // Agregar un elemento al final del arreglo

console.log(nuevaLongitud, juegos); // Imprimir en consola

juegos.unshift('Fire Emblem'); // Agregar un elemento al inicio del arreglo

let juegoBorrado = juegos.pop(); // Eliminar el último elemento del arreglo
console.log({juegoBorrado, juegos}); // Imprimir en consola


let pos = 1;

let juegosBorrados = juegos.splice(pos, 2); // Eliminar elementos de un arreglo
console.log(juegosBorrados, juegos); // Imprimir en consola


let metroidIndex = juegos.indexOf('Metroid'); // Encontrar el índice de un elemento en un arreglo
console.log({metroidIndex}); // Imprimir en consola, si este devuelve -1, significa que no se encontró el elemento
