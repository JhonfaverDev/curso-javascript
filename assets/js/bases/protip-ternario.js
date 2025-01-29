
// Ternario es una forma de simplificar un if else
const elMayor = (a, b) => (a > b) ? a : b; // Si a es mayor que b, devuelve a, sino devuelve b

const tieneMembresia = ( miembro ) => (miembro) ? '2 Dólares' : '10 Dólares'; // Si miembro es true, devuelve 2 Dólares, sino devuelve 10 Dólares

console.log(elMayor(20, 15)); // 20
console.log(tieneMembresia(false)); // 10 Dólares